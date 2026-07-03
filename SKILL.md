---
name: realistic-profile-pictures
description: >-
  Generate realistic, natural-looking AI profile pictures and avatars that don't
  look AI-generated, believable fake faces for app mockups, website team/testimonial
  pages, marketing, demos, prototypes, and video. Not headshots of yourself, and not
  the waxy/uncanny AI look or the same recycled stock photos everyone uses. Packages
  the RealPFP prompt engine (three looks, aspirational / profile / candid; diverse,
  coherent scenes, anatomy-correct) and generates via fal.ai's nano-banana-2 model
  (bring your own key). Triggers on: profile picture, avatar, placeholder face, dummy
  or fake user, realistic AI portrait, headshots for a mockup, "generate faces",
  "need believable people for my design/site/video", stock-photo alternative,
  "thispersondoesnotexist but usable".
---

# Realistic Profile Pictures

Generate believable human faces that **don't read as AI**, for filling app mockups,
website avatars/testimonials, marketing, demos, and video with real-looking people
instead of uncanny AI output or the same three Unsplash faces.

Live product this is packaged from: **[realpfp.vercel.app](https://realpfp.vercel.app)** ·
source: **[github.com/heyimjames/RealPFP](https://github.com/heyimjames/RealPFP)**

## What makes it look real

The value isn't the API call, it's the prompt engine. Full detail in
[`reference/prompt-principles.md`](reference/prompt-principles.md); the short version:

- **Positive description beats negation.** nano-banana-2 is a Gemini-family model with
  no negative-prompt field, so the engine describes what a *real* photo has (visible
  pores, one light source, a single catchlight, correct anatomy) rather than listing
  what to avoid, naming "plastic skin" to forbid it can summon it.
- **No "poison words"** (`flawless`, `perfect`, `radiant`, `stunning`, `8k`…), they
  trigger the beauty-filter look.
- **Anatomy clause** with a "hide the hand rather than mangle it" fallback.
- **Three looks:** `aspirational` (polished but real), `profile` (natural, postable),
  `candid` (gritty/documentary).
- **Diversity + coherent scenes** (weather/light/time always agree) baked in.

## Setup

- **Node 18+** (uses built-in `fetch`).
- A **fal.ai key**, get one at https://fal.ai/dashboard/keys, as `FAL_KEY`.

## Usage

Preview prompts first (no API calls, no cost):

```bash
node scripts/generate.mjs --count 3 --mode profile --dry-run
```

Generate images:

```bash
FAL_KEY=your_key node scripts/generate.mjs --count 6 --mode profile --out ./faces
```

Flags: `--count N` (1–50, default 4) · `--mode aspirational|profile|candid`
(default `profile`) · `--out DIR` (default `./pfp-out`) · `--aspect 1:1` ·
`--resolution 1K|2K` · `--dry-run`.

Images save as `pfp-01.png`, `pfp-02.png`, … Generation runs 4-at-a-time to stay
within fal.ai rate limits.

## Notes

- **Curate the output.** Even with the tuned prompts, image models slip occasionally
  (usually complex hand/arm poses), generate a few extra and pick the best, exactly
  how the hero images on realpfp.vercel.app were chosen.
- **Bring your own key.** The key is only read from the environment for the API call;
  it's never stored.
- This generates **fictional people** for design/marketing use, it is not for
  impersonation or headshots of a real person.
