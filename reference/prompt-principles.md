# Prompt principles, making AI faces not look AI

The knowledge baked into the engine (`scripts/engine.mjs`), so you can extend it
or apply the ideas elsewhere. Model target: **nano-banana-2** (Google's Nano Banana
family, a Gemini multimodal model, **not** a diffusion model).

## The model changes the strategy

- **No `negativePrompt` field.** Everything, including what to avoid, goes in one
  natural-language prompt.
- **It rewards descriptive prose, not tag soup.** Write a coherent photographer's
  brief; "4k, masterpiece, trending on artstation" is counterproductive.
- **Positive framing beats negation.** Describe what a real photo *has* rather than
  what to avoid. "matte skin with visible pores" works; "no plastic skin" can
  paradoxically *summon* plastic skin because the concept is named. Keep negation to
  a short tail after the positives.

## The highest-leverage descriptors (grouped)

- **Skin & texture** (the #1 tell): `visible pores, fine vellus hairs, subtle surface
  shine`; `unretouched, faint blemishes, uneven skin tone`; `fine lines and natural
  under-eye shadow`.
- **Optics:** name a real body + lens, `shot on a Canon 5D Mark IV, 85mm f/1.8`;
  `shallow depth of field, focus on the eyes, gentle falloff` (state an aperture like
  f/2 to avoid cut-out fake bokeh).
- **Lighting:** `soft directional window light from camera-left, gentle fill, natural
  shadow on the far cheek`; **a single realistic catchlight** (not multiple).
- **Colour:** `muted, true-to-life, slightly desaturated, neutral white balance` +
  a named film stock (`Kodak Portra 400`), grain reads as photographic.
- **Authenticity:** `candid, slightly asymmetric expression, relaxed mouth`;
  `documentary / street-casting aesthetic, minimal retouching`.
- **Composition:** `eye-level, off-centre, environment softly out of focus`.

## Poison words, scrub these

`flawless`, `perfect`, `radiant`, `glow`, `stunning`, `beautiful`, `8k`, `masterpiece`,
`ultra-realistic`. They trigger the beauty-filter / aesthetic-maximiser bias and undo
the texture work, one `flawless` can override everything.

## The five things that read as fake (dial them back)

1. **Over-smooth skin / glow** → visible pores, blemishes, vellus hair.
2. **Over-sharpening + contrast** → subtle film grain, soft micro-contrast.
3. **Saturation / HDR** → muted, slightly desaturated, neutral white balance.
4. **Symmetry & even lighting** → asymmetric expression, single directional light,
   one catchlight.
5. **Creamy cut-out bokeh** → stated aperture, gradual falloff, a real described
   background.

## Anatomy (the other big tell)

Distorted hands/limbs are the strongest giveaway after skin. Phrase it positive-first
, "five normally-shaped fingers, limbs bending at real joints, true-to-life
proportions", with a **fallback**: if a hand can't render cleanly, let it fall out of
frame or rest partly hidden rather than showing warped/extra/fused fingers. (Same
"hide it rather than mangle it" trick used for text/logos.)

## How the engine assembles a prompt

`generateRandomPrompt({ mode })` combines independent trait pools, age, ethnicity &
gender (weighted, Western/English-internet default skew), hair, expression, clothing,
lighting, setting/location, shot distance, body angle, pose, camera, depth of field,
candidness, skin detail, photo imperfection, film stock, and an optional pet
(decomposed into type/colour/coat/size/pose), each firing at its own realistic
frequency. Then a mode-specific quality suffix + a no-border + a text/logo-fidelity +
an anatomy suffix are appended. Three modes tune content appropriateness:

- **aspirational**, polished, beautified-but-real; flattering light, quality glass,
  no pets/phones.
- **profile**, flattering but natural, phone-snapshot energy.
- **candid**, gritty documentary, dramatic weather allowed (and joy suppressed in a
  storm).

Sources for the believability guidance: Google DeepMind's Nano Banana prompt guide,
Google's prompting tips, and photographer/prompt-engineer write-ups on defeating the
"AI look".
