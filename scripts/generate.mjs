#!/usr/bin/env node
/**
 * Realistic profile-picture generator.
 *
 * Builds randomised, believability-tuned prompts with the RealPFP prompt engine
 * (engine.mjs) and generates images via fal.ai's nano-banana-2 model.
 *
 * Auth: bring your own fal.ai key via the FAL_KEY (or FAL_API_KEY) env var.
 * Get one at https://fal.ai/dashboard/keys.
 *
 * Usage:
 *   FAL_KEY=xxx node generate.mjs --count 6 --mode profile --out ./faces
 *   node generate.mjs --count 3 --mode aspirational --dry-run   # just print prompts, no API calls
 *
 * Flags:
 *   --count N        how many to generate (default 4)
 *   --mode MODE      aspirational | profile | candid  (default profile)
 *   --out DIR        output directory (default ./pfp-out)
 *   --aspect RATIO   image aspect ratio (default 1:1)
 *   --resolution R   1K | 2K (default 1K)
 *   --dry-run        print the generated prompts and exit (no API calls, no cost)
 */
import { mkdir, writeFile } from "node:fs/promises";
import { generateRandomPrompt } from "./engine.mjs";

const FAL_URL = "https://fal.run/fal-ai/nano-banana-2";
const MODES = ["aspirational", "profile", "candid"];

function parseArgs(argv) {
  const a = { count: 4, mode: "profile", out: "./pfp-out", aspect: "1:1", resolution: "1K", dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const v = argv[i];
    if (v === "--dry-run") a.dryRun = true;
    else if (v === "--count") a.count = Math.max(1, Math.min(50, parseInt(argv[++i], 10) || 4));
    else if (v === "--mode") a.mode = argv[++i];
    else if (v === "--out") a.out = argv[++i];
    else if (v === "--aspect") a.aspect = argv[++i];
    else if (v === "--resolution") a.resolution = argv[++i];
  }
  if (!MODES.includes(a.mode)) {
    console.error(`Invalid --mode "${a.mode}". Use one of: ${MODES.join(", ")}`);
    process.exit(1);
  }
  return a;
}

async function generateOne(prompt, key, opts, index) {
  const res = await fetch(FAL_URL, {
    method: "POST",
    headers: { Authorization: `Key ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt,
      num_images: 1,
      aspect_ratio: opts.aspect,
      output_format: "png",
      safety_tolerance: "4",
      resolution: opts.resolution,
      limit_generations: true,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`fal.ai ${res.status}: ${text.slice(0, 300)}`);
  }
  const data = await res.json();
  const url = data.images?.[0]?.url;
  if (!url) throw new Error("no image URL in response");
  const img = await fetch(url);
  const buf = Buffer.from(await img.arrayBuffer());
  const file = `${opts.out}/pfp-${String(index + 1).padStart(2, "0")}.png`;
  await writeFile(file, buf);
  return file;
}

// Simple capped-concurrency pool (fal.ai rate-limit friendly, mirrors the app).
async function pool(items, limit, worker) {
  const results = [];
  let i = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      try {
        results[idx] = { ok: true, value: await worker(items[idx], idx) };
      } catch (e) {
        results[idx] = { ok: false, error: e.message };
      }
    }
  });
  await Promise.all(runners);
  return results;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const prompts = Array.from({ length: opts.count }, () => generateRandomPrompt({ mode: opts.mode }));

  if (opts.dryRun) {
    console.log(`# ${opts.count} ${opts.mode}-mode prompt(s) (dry run — no API calls):\n`);
    prompts.forEach((p, i) => console.log(`--- ${i + 1} ---\n${p}\n`));
    return;
  }

  const key = process.env.FAL_KEY || process.env.FAL_API_KEY;
  if (!key) {
    console.error("Missing fal.ai key. Set FAL_KEY (get one at https://fal.ai/dashboard/keys), or use --dry-run to preview prompts.");
    process.exit(1);
  }

  await mkdir(opts.out, { recursive: true });
  console.log(`Generating ${opts.count} ${opts.mode}-mode image(s) → ${opts.out} (4 at a time)…`);
  const results = await pool(prompts, 4, (p, i) => generateOne(p, key, opts, i));

  let ok = 0;
  results.forEach((r, i) => {
    if (r.ok) { ok++; console.log(`✓ ${r.value}`); }
    else console.error(`✗ #${i + 1}: ${r.error}`);
  });
  console.log(`\nDone: ${ok}/${opts.count} saved to ${opts.out}`);
  if (ok < opts.count) process.exit(1);
}

main().catch((e) => { console.error(e); process.exit(1); });
