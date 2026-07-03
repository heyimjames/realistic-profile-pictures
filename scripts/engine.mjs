const RANDOM_TRAITS = {
  ages: [20, 22, 24, 25, 27, 28, 30, 32, 34, 35, 37, 39, 40, 42, 45, 48, 50, 55, 60, 63],
  ethnicities: [
    "East Asian",
    "South Asian",
    "Black",
    "White",
    "Hispanic",
    "Latino",
    "Latina",
    "Middle Eastern",
    "Southeast Asian",
    "Korean",
    "Japanese",
    "Chinese",
    "Ethiopian",
    "Filipino",
    "Indigenous American",
    "Biracial",
    "Pacific Islander",
    "North African",
    "Central Asian",
    "Caribbean"
  ],
  genders: ["woman", "man"],
  hairStyles: [
    "short hair",
    "shoulder-length hair",
    "long hair",
    "curly hair",
    "wavy hair",
    "straight hair",
    "a pixie cut",
    "a bob",
    "braids",
    "a fade haircut",
    "natural TWA hair",
    "a high top fade",
    "a bald head",
    "hair in a loose bun",
    "hair in a low ponytail",
    "hair pulled back",
    "a messy side part",
    "hair tucked behind one ear with loose strands falling out",
    "air-dried wavy hair",
    "a slightly grown-out buzz cut",
    "a half-up half-down style coming undone"
  ],
  hairColors: [
    "black",
    "dark brown",
    "light brown",
    "auburn",
    "blonde",
    "dirty blonde",
    "red",
    "ginger",
    "silver-streaked",
    "grey",
    "salt-and-pepper",
    "dark roots growing into bleached ends",
    "sun-lightened brown"
  ],
  expressions: [
    "warm smile showing teeth",
    "slight closed-mouth smile",
    "confident smirk",
    "relaxed half-smile",
    "big genuine laugh with eyes squeezed shut",
    "gentle warm smile",
    "easygoing grin",
    "soft shy smile",
    "thoughtful expression with slightly furrowed brow",
    "neutral resting face",
    "squinting slightly against the light",
    "caught mid-sentence with mouth slightly open",
    "subtle smirk like they just heard something funny",
    "looking slightly past the camera, distracted",
    "eyes crinkled from laughing a moment ago",
    "resting face with a hint of tiredness around the eyes",
    "one eyebrow slightly raised, skeptical look",
    "concentrating expression, lips pressed together"
  ],
  // Everyday/casual clothing, the base pool. Formal wear, big hoodies, etc.
  // live in their own frequency-gated pools (see FORMAL_CLOTHING / HOODIES).
  clothing: [
    "a navy crewneck sweater",
    "a vintage denim jacket with a fraying collar",
    "a light blue Oxford shirt",
    "a white linen blouse",
    "a dark green flannel shirt with the top button undone",
    "a mustard yellow turtleneck",
    "a fitted black turtleneck",
    "a white button-down shirt with sleeves rolled to the elbows",
    "a cream cable-knit sweater",
    "a dark olive henley shirt",
    "a slightly wrinkled linen shirt",
    "a faded band t-shirt under an open flannel",
    "a well-worn leather jacket",
    "a rain jacket half-zipped",
    "a simple grey v-neck t-shirt",
    "a puffer vest over a long-sleeve thermal",
    "a plaid shirt with one side untucked",
    "a zip-up fleece",
    "a denim jacket layered over a hoodie",
    "lightly baggy brown smart trousers and a tucked plain white tee",
    "a boxy short-sleeve cream t-shirt",
    "an oversized beige linen shirt, slightly creased",
    "wide-leg charcoal trousers with a soft grey crewneck tucked in",
    "a chunky cable-knit roll-neck jumper",
    "a crisp white shirt under a fine-gauge merino sweater"
  ],
  lighting: [
    "soft overcast light, no hard shadows",
    "golden hour sunlight from the side casting a long shadow",
    "natural window light from the left, one side of face darker",
    "bright midday sun creating hard shadows under the nose and chin",
    "soft diffused indoor lighting",
    "dappled light filtering through tree canopy, uneven across the face",
    "warm lamp light mixed with cool daylight from a window",
    "late afternoon light going orange",
    "harsh fluorescent overhead lighting",
    "backlit with sun creating a rim of light around the hair",
    "mixed color temperature, warm tungsten indoors and cool daylight from outside",
    "flat cloudy day light with no visible shadows",
    "single overhead kitchen light, unflattering angle",
    "porch light at dusk, yellowish",
    "bright open shade, even and cool",
    "phone camera flatness, slightly overexposed and washed out",
    "tungsten interior with no white balance correction, warm-yellow cast",
    "cool blue twilight, slightly underexposed",
    "uneven exposure with a bright window blown out behind them",
    "slightly muted indoor light, shadows a touch deeper than ideal",
    "iPhone HDR look, slightly crunchy with shadows lifted unnaturally",
    "overcast daylight with cool flat tones, slightly low contrast",
    "soft directional light from one side, a single realistic catchlight in the eyes",
    "window light from camera-left, gentle fill, natural soft shadow on the far cheek"
  ],
  settings: [
    "outdoors with blurred greenery behind",
    "busy sidewalk with pedestrians blurred behind",
    "outdoor park with a bench and trash can slightly visible",
    "office with a monitor glow and sticky notes on the wall behind",
    "hiking trail with dirt and rocks visible",
    "sitting near a window with condensation on the glass",
    "autumn leaves on the ground, some stuck to their shoe",
    "rocky beach with overcast sky",
    "university hallway with lockers",
    "plain apartment wall with a light switch visible",
    "busy coffee shop with other people blurred in the background",
    "parking lot with cars behind them",
    "kitchen with clutter slightly visible on the counter",
    "concrete stairwell in an apartment building",
    "standing in a doorway, half-inside half-outside",
    "backyard patio with string lights out of focus behind",
    "subway platform, tiled wall behind",
    "luxury hotel lobby with warm wood paneling and soft amber lamp light behind them",
    "gym entrance, glass door reflecting behind them",
    "framed through a car window, soft reflections on the glass",
    "in the passenger seat of a car, window light on the face",
    "in an airport terminal, departure boards softly blurred behind",
    "at an airport gate, large windows and a plane out of focus behind",
    "at a conference, lanyards and banners blurred in the background",
    "on a conference stage edge, stage lighting spill behind them",
    "at a caf\xE9 table, a flat white and a folded newspaper in front",
    "sitting on a low brick garden wall, hedge behind",
    "perched on a stone harbour wall, water out of focus behind"
  ],
  // Geographic settings. Kept deliberately time- and weather-neutral so the
  // Atmosphere axis stays in charge of light and sky, a location never says
  // "sunlit" or "at dusk" itself. When the Location control is on, one of these
  // replaces the generic setting above.
  locations: [
    "on a quiet street in Lisbon, pastel tiled buildings behind",
    "in a Tokyo backstreet, neon signs blurred behind",
    "on a New York City sidewalk, a yellow cab blurred behind",
    "in a Paris caf\xE9, a zinc bar behind",
    "on a London street, a red double-decker bus blurred behind",
    "in a Barcelona plaza, Gothic stonework behind",
    "on an Amsterdam canal bridge, bikes blurred behind",
    "in a Marrakech medina, warm ochre walls behind",
    "on a Mexico City rooftop, the skyline behind",
    "in a Seoul side street, hangul signage behind",
    "on a Sydney coastal path, the harbour behind",
    "in an Istanbul market, hanging lamps blurred behind",
    "on a cobbled Rome street, a stone fountain behind",
    "in a Berlin courtyard, soft graffiti out of focus behind",
    "on a Rio beach boardwalk, palms behind",
    "in a Mumbai street scene, colour and motion blurred behind",
    "on a Scottish Highlands hillside, heather and stone behind",
    "in a Copenhagen square, cyclists blurred behind"
  ],
  // How far the subject sits from the camera. Becomes the framing prefix and
  // applies in both modes, so faces aren't all locked at the same crop.
  shotDistances: [
    "Extreme close-up, face fills the frame, cropped just above the brow and below the chin",
    "Close-up portrait, head and the top of the shoulders",
    "Head-and-shoulders portrait",
    "Chest-up medium close-up",
    "Waist-up medium shot, a little room around the subject",
    "Three-quarter shot from the knees up, environment visible",
    "Wider environmental shot, full upper body with space around them"
  ],
  // Pets: see the decomposed COMPANION model below, type / colour / coat /
  // size / action are now independent axes assembled at generation time.
  filmStyles: [
    "natural film grain, Kodak Portra 400 tones",
    "warm color grading, medium format feel",
    "clean digital, minimal post-processing",
    "analog warmth, visible grain",
    "Fuji Pro 400H color rendering",
    "earthy muted palette with gentle grain",
    "rich deep shadows, medium format quality",
    "soft matte color grading",
    "slightly desaturated, understated color",
    "straight out of camera JPEG with auto white balance",
    "slightly overexposed with blown-out highlights on one side",
    "crunchy high-contrast black levels"
  ],
  bodyAngles: [
    "slight three-quarter turn away from camera",
    "angled slightly to the left",
    "turned at a gentle angle to the right",
    "over-the-shoulder glance back at camera",
    "body turned sideways, head looking toward camera",
    "leaning slightly to one side",
    "body angled away, looking back over shoulder",
    "subtle diagonal angle, not straight-on"
  ],
  poses: [
    "sitting on a chair leaning slightly forward",
    "standing with arms loosely crossed",
    "leaning against a wall casually",
    "walking and caught mid-stride",
    "chin resting on hand",
    "hands in jacket pockets",
    "sitting on steps with elbows on knees",
    "perched on a stool, one foot on the rung",
    "mid-gesture while talking",
    "standing with one hand brushing hair back",
    "looking down at something in their hands",
    "standing relaxed with weight on one leg",
    "holding a coffee cup in one hand",
    "adjusting their glasses with one hand",
    "arms at their sides, slightly awkward",
    "leaning on a railing",
    "one hand running through their hair",
    "looking off to the side with a slight smile",
    "head tilted slightly, considering something",
    "hands clasped loosely in front, fingers interlaced",
    "one hand resting on the opposite forearm, arms folded casually",
    "leaning forward slightly with elbows on knees, hands clasped",
    "hand lifted to chin, lightly thoughtful",
    "leaning casually against a doorframe",
    "looking back over one shoulder, soft eye contact",
    "one hand tucked into a back pocket, the other relaxed",
    "lifting a coffee cup partway toward the mouth",
    "sleeves pushed up, hands clasped at the wrist",
    "sitting on a wall with one knee drawn up, relaxed",
    "perched on a wall, leaning back on both hands"
  ],
  depthsOfField: [
    "everything sharp like an iPhone photo, deep focus",
    "slight background softness, shot on 50mm f/2.8",
    "moderate bokeh, 85mm f/2 lens",
    "heavy creamy bokeh, 85mm f/1.4 wide open",
    "phone-camera sharp with no blur, everything in focus",
    "medium format shallow focus with smooth background separation",
    "point-and-shoot compact camera look, mostly sharp",
    "35mm f/1.8 with gentle background blur"
  ],
  candidnessLevels: [
    "polished professional headshot, subject aware of camera",
    "caught mid-laugh, natural documentary moment",
    "looking away from camera, lost in thought",
    "mid-conversation with someone off-frame",
    "glancing over shoulder as if just noticed the camera",
    "reacting to something off-camera with genuine surprise",
    "candid street photography style, unaware of photographer",
    "semi-posed but natural, like a friend took the photo"
  ],
  cameraTypes: [
    "shot on iPhone, natural phone photography look",
    "compact point-and-shoot camera",
    "DSLR with 50mm kit lens",
    "professional 85mm f/1.4 portrait lens",
    "medium format Hasselblad",
    "35mm film camera, Kodak Portra 400",
    "disposable camera with on-camera flash",
    "vintage film camera with slight light leak"
  ],
  skinDetails: [
    "visible forehead creases",
    "light freckles across the nose and cheeks",
    "faint acne scarring on one cheek",
    "visible smile lines around the mouth",
    "dark circles under the eyes",
    "a small mole near the jawline",
    "sun spots on the temples",
    "slightly chapped lips",
    "crow's feet visible when smiling",
    "light stubble shadow on the jaw",
    "slightly flushed cheeks from the cold",
    "a faint scar through one eyebrow",
    "dry skin patch on the forehead",
    "uneven skin tone, slightly redder around the nose",
    "visible pores on the nose and cheeks",
    "a few grey eyebrow hairs",
    "peeling skin on the nose from sunburn",
    "sweat visible on the forehead",
    "fine vellus hairs catching the light along the jaw and cheek",
    "natural under-eye shadow, slightly puffy",
    "subtle shine on the nose and forehead, matte elsewhere"
  ],
  photoImperfections: [
    "slightly off-center framing",
    "small lens flare in the corner",
    "faint sensor dust spot in the upper area",
    "slight vignetting at the edges",
    "horizon tilted a couple degrees",
    "background slightly more in focus than intended",
    "a stray hair across the forehead",
    "shirt collar popped up on one side",
    "shadow of the photographer barely visible at the bottom edge",
    "slight red-eye from the flash",
    "one hand slightly motion-blurred",
    "a flyaway hair catching the backlight",
    "fingerprint smudge on the lens causing slight haze on one side"
  ]
};
const COMPANION = {
  types: [
    { noun: "tabby cat", species: "cat", patterned: true },
    { noun: "calico cat", species: "cat", patterned: true },
    { noun: "tortoiseshell cat", species: "cat", patterned: true },
    { noun: "tuxedo cat", species: "cat", patterned: true },
    { noun: "shorthair cat", species: "cat" },
    { noun: "Persian cat", species: "cat" },
    { noun: "Siamese cat", species: "cat" },
    { noun: "Maine Coon cat", species: "cat" },
    { noun: "Bengal cat", species: "cat" },
    { noun: "Ragdoll cat", species: "cat" },
    { noun: "golden retriever", species: "dog" },
    { noun: "Labrador", species: "dog" },
    { noun: "dachshund", species: "dog" },
    { noun: "corgi", species: "dog" },
    { noun: "French bulldog", species: "dog" },
    { noun: "border collie", species: "dog" },
    { noun: "Samoyed", species: "dog" },
    { noun: "Weimaraner", species: "dog" },
    { noun: "beagle", species: "dog" },
    { noun: "cocker spaniel", species: "dog" },
    { noun: "Shiba Inu", species: "dog" },
    { noun: "Jack Russell terrier", species: "dog" }
  ],
  colours: [
    "ginger",
    "grey",
    "black",
    "white",
    "cream",
    "brown",
    "tan",
    "golden",
    "sandy",
    "chocolate-brown",
    "silver-grey",
    "black-and-white"
  ],
  // "" = no coat-texture word that time (keeps phrasing from getting samey).
  coats: ["", "fluffy", "sleek", "long-haired", "short-haired", "fuzzy", "scruffy"],
  sizes: ["", "tiny", "small", "large"],
  // Hold / interaction. `build` receives the assembled animal noun phrase.
  actions: [
    { label: "Held against the chest", build: (np) => `holding ${np} against their chest` },
    { label: "Cradled in both hands", build: (np) => `cradling ${np} in both hands` },
    { label: "Draped over one shoulder", build: (np) => `${np} draped over one shoulder` },
    { label: "Curled in the crook of the arm", build: (np) => `${np} curled in the crook of their arm` },
    { label: "Playing on their lap", build: (np) => `playing with ${np} on their lap` },
    { label: "Kneeling beside it", build: (np) => `kneeling beside ${np}, a hand resting on its back` },
    { label: "Held up near the face", build: (np) => `holding ${np} up near their face` },
    { label: "Sitting in their lap", build: (np) => `${np} sitting in their lap, looking up` },
    { label: "Scratching its ears", build: (np) => `scratching the ears of ${np} beside them` },
    { label: "Tucked under one arm", build: (np) => `holding ${np} tucked under one arm` },
    { label: "Leaning into them", build: (np) => `${np} leaning into them` },
    { label: "Held close", build: (np) => `holding ${np} close` }
  ]
};
function buildCompanion(pick) {
  const noun = pick("petType", COMPANION.types.map((t) => t.noun));
  if (!noun) return null;
  const type = COMPANION.types.find((t) => t.noun === noun);
  if (!type) return null;
  const colour = type.patterned ? null : pick("petColour", COMPANION.colours);
  const coat = randomPick([...COMPANION.coats]);
  const size = randomPick([...COMPANION.sizes]);
  let animalNoun = type.noun;
  if (Math.random() < 0.3) {
    animalNoun = type.species === "cat" ? animalNoun.replace(/\bcat\b/, "kitten") : `${animalNoun} puppy`;
  }
  const descriptors = [size, coat, colour, animalNoun].filter(Boolean);
  const np = `a ${descriptors.join(" ")}`.replace(/^a (?=[aeiou])/i, "an ");
  const actLabel = pick("petAction", COMPANION.actions.map((a) => a.label));
  const action = COMPANION.actions.find((a) => a.label === actLabel) ?? randomPick([...COMPANION.actions]);
  return action.build(np);
}
const JOYFUL_EXPRESSIONS = /* @__PURE__ */ new Set([
  "warm smile showing teeth",
  "slight closed-mouth smile",
  "relaxed half-smile",
  "big genuine laugh with eyes squeezed shut",
  "gentle warm smile",
  "easygoing grin",
  "soft shy smile",
  "eyes crinkled from laughing a moment ago"
]);
const ATMOSPHERES = [
  // Pleasant: available everywhere
  { label: "Golden hour", phrase: "golden hour, clear sky", lighting: "warm golden-hour sunlight from the side, soft and low", profileSafe: true, allowJoy: true, outdoor: true, aspFavored: true },
  { label: "Bright clear midday", phrase: "clear blue sky, midday", lighting: "bright midday sun, clear sky, crisp natural shadows", profileSafe: true, allowJoy: true, outdoor: true },
  { label: "Soft overcast", phrase: "soft overcast, mild", lighting: "soft overcast daylight, no hard shadows", profileSafe: true, allowJoy: true, outdoor: true, aspFavored: true },
  { label: "Fresh sunny morning", phrase: "clear sky, early morning", lighting: "bright clear morning light, fresh and cool", profileSafe: true, allowJoy: true, outdoor: true },
  { label: "Hazy late afternoon", phrase: "light haze, late afternoon", lighting: "warm late-afternoon sun going orange, faint haze", profileSafe: true, allowJoy: true, outdoor: true, aspFavored: true },
  { label: "Blue-hour dusk", phrase: "clear, just after sunset", lighting: "cool blue twilight just after sunset, soft and even", profileSafe: true, allowJoy: true, outdoor: true, aspFavored: true },
  { label: "Light snowfall", phrase: "gentle snowfall, calm", lighting: "soft flat light through gently falling snow", profileSafe: true, allowJoy: true, outdoor: true },
  { label: "Dappled tree shade", phrase: "sunny, under tree canopy", lighting: "dappled light filtering through tree canopy, uneven across the face", profileSafe: true, allowJoy: true, outdoor: true },
  { label: "Backlit sun", phrase: "clear, sun behind them", lighting: "backlit by the sun, a soft rim of light around the hair, face a touch underexposed", profileSafe: true, allowJoy: true, outdoor: true, aspFavored: true },
  { label: "Window light indoors", phrase: "daytime, by a window", lighting: "natural window light from the side, one side of the face softly darker", profileSafe: true, allowJoy: true, outdoor: false, aspFavored: true },
  { label: "Sunlit indoors", phrase: "daytime, indoors", lighting: "soft daylight through a window, warm indoor tones, slightly uneven exposure", profileSafe: true, allowJoy: true, outdoor: false },
  { label: "Warm lamplit evening", phrase: "evening, indoors", lighting: "warm lamp light indoors in the evening", profileSafe: true, allowJoy: true, outdoor: false, aspFavored: true },
  // Dramatic: Candid mode only, joy suppressed, sheltered backdrop
  { label: "Overcast drizzle, candid only", phrase: "grey, light drizzle", lighting: "flat grey light from a drizzly overcast sky", profileSafe: false, allowJoy: false, outdoor: true, settingOverride: "sheltering under an awning, light rain falling behind them" },
  { label: "Heavy rain, candid only", phrase: "wet, heavy rain", lighting: "dim flat light, heavy rain streaking past", profileSafe: false, allowJoy: false, outdoor: true, settingOverride: "standing in a doorway out of the rain, wet street behind" },
  { label: "Thunderstorm, candid only", phrase: "dark storm outside", lighting: "dark stormy light, heavy clouds, low and moody", profileSafe: false, allowJoy: false, outdoor: false, settingOverride: "indoors at a window, rain lashing the glass, storm outside" },
  { label: "Thick fog, candid only", phrase: "thick fog, low visibility", lighting: "diffuse grey light in thick fog, very low contrast", profileSafe: false, allowJoy: false, outdoor: true, settingOverride: "on a foggy street, shapes dissolving into grey behind them" },
  { label: "Cold winter dusk, candid only", phrase: "overcast, cold dusk", lighting: "cold dim blue-grey winter dusk light", profileSafe: false, allowJoy: false, outdoor: true }
];
const FORMAL_CLOTHING = [
  "a well-cut navy suit with a slim tie",
  "a charcoal three-piece suit, top button done up",
  "a black tuxedo with a satin bow tie",
  "formal wedding attire, a fresh boutonni\xE8re on the lapel",
  "a tailored beige linen suit, no tie, collar open",
  "a charcoal suit jacket and a white open-collar shirt"
];
const HOODIE_CLOTHING = [
  "a big thick oversized knit hoodie, drawstrings hanging loose",
  "a heather grey hoodie with uneven strings",
  "a heavyweight charcoal hoodie under a wool overcoat"
];
const BW_FILM = [
  "black and white film, Kodak Tri-X 400 grain",
  "classic monochrome, deep blacks and soft greys",
  "high-contrast black and white, strong shadows"
];
const PHONE_POSES = [
  "holding a phone to the ear, mid-call, half-smiling",
  "glancing down at their phone, a faint smile"
];
const GLASSES = [
  "wire-frame glasses sitting slightly crooked",
  "thick-rimmed glasses",
  "reading glasses pushed up on top of the head",
  "round wire-frame glasses",
  "bold acetate-frame glasses",
  "thin rimless glasses"
];
const SUNGLASSES = [
  "sunglasses pushed up on the forehead",
  "dark sunglasses on, lenses reflecting the surroundings",
  "round tortoiseshell sunglasses worn",
  "aviator sunglasses pushed up into the hair"
];
const JEWELLERY = [
  "small gold hoop earrings",
  "a silver chain necklace tucked under the collar",
  "a thin gold wedding band",
  "stud earrings",
  "a single delicate chain bracelet",
  "a bold statement necklace catching the light",
  "layered fine gold necklaces",
  "a chunky signet ring on one finger",
  "small diamond stud earrings"
];
const HATS = [
  "a baseball cap worn slightly back",
  "a beanie pulled down to the eyebrows",
  "a felt fedora worn at a slight angle",
  "a smart charcoal flat cap",
  "a wide-brim wool hat",
  "a structured wool beret"
];
const MISC_ACCESSORIES = [
  "a beat-up digital watch",
  "a slim leather watch with a worn-in band",
  "AirPods in, one ear only",
  "over-ear headphones resting loose around the neck",
  "wired earphones in, the cord trailing into a pocket",
  "a lanyard with an ID badge clipped to the shirt",
  "a hoodie tied loosely around the neck by the sleeves",
  "a canvas tote bag strap visible over one shoulder",
  "a leather crossbody bag strap across the chest",
  "a knit scarf loose around the neck",
  "a vintage film camera slung around the neck on a leather strap",
  "a 35mm camera held casually at chest level"
];
const FREQUENCY_DEFS = [
  { key: "namedLocation", label: "Named location / country", desc: "A real place (Lisbon, Tokyo\u2026) instead of a generic backdrop" },
  { key: "glasses", label: "Glasses", desc: "Prescription eyewear" },
  { key: "jewellery", label: "Jewellery", desc: "Necklaces, earrings, rings, bracelets" },
  { key: "miscAccessory", label: "Other accessories", desc: "Watches, headphones, bags, scarves" },
  { key: "formalWear", label: "Formal wear", desc: "Suits, tuxedos, wedding attire" },
  { key: "hats", label: "Hats", desc: "Caps, fedoras, beanies, berets" },
  { key: "bigHoodie", label: "Big hoodies", desc: "Thick oversized hoodies" },
  { key: "sunglasses", label: "Sunglasses", desc: "Worn or pushed up" },
  { key: "blackAndWhite", label: "Black & white", desc: "Monochrome film look" },
  { key: "pets", label: "Pets", desc: "Cats & dogs of varied breeds" },
  { key: "onPhone", label: "On the phone", desc: "Mid-call or glancing at their phone" }
];
const FREQUENCY_DEFAULTS = {
  namedLocation: 30,
  glasses: 22,
  jewellery: 30,
  miscAccessory: 18,
  formalWear: 8,
  hats: 8,
  bigHoodie: 6,
  sunglasses: 5,
  blackAndWhite: 6,
  pets: 4,
  onPhone: 4
};
const ETHNICITY_DEFAULT_WEIGHTS = {
  White: 55,
  Black: 13,
  Hispanic: 5,
  Latino: 4,
  Latina: 3,
  "East Asian": 3,
  "Southeast Asian": 2,
  Korean: 1,
  Japanese: 2,
  Chinese: 2,
  Filipino: 1,
  "South Asian": 6,
  "Middle Eastern": 2,
  Ethiopian: 1,
  "Indigenous American": 1,
  Biracial: 2,
  "Pacific Islander": 1,
  "North African": 1,
  "Central Asian": 1,
  Caribbean: 1
};
const DEFAULT_ETHNICITY_WEIGHTS_STATE = Object.fromEntries(
  RANDOM_TRAITS.ethnicities.map((e) => [e, ETHNICITY_DEFAULT_WEIGHTS[e] ?? 1])
);
const AI_PARAM_DEFS = [
  {
    key: "location",
    label: "Location / country",
    desc: "Swap the generic backdrop for a real place, Lisbon, Tokyo, NYC\u2026",
    options: RANDOM_TRAITS.locations
  },
  {
    key: "atmosphere",
    label: "Time of day & weather",
    desc: "Coherent light + sky. Storms etc. are candid-only and never joyful.",
    options: ATMOSPHERES.map((a) => a.label)
  },
  {
    key: "shotDistance",
    label: "Shot distance",
    desc: "Extreme close-up through to a wider environmental shot",
    options: RANDOM_TRAITS.shotDistances
  },
  {
    key: "petType",
    label: "Pet type & breed",
    desc: "Which cats & dogs are eligible (how often is set under Appearance frequency).",
    options: COMPANION.types.map((t) => t.noun)
  },
  {
    key: "petColour",
    label: "Pet colour",
    desc: "Coat colours drawn for non-patterned pets (tabby, calico etc. keep their own).",
    options: COMPANION.colours
  },
  {
    key: "petAction",
    label: "Pet pose",
    desc: "How the pet is held or interacting, cradled, on the lap, leaning in\u2026",
    options: COMPANION.actions.map((a) => a.label)
  },
  {
    key: "bodyAngle",
    label: "Body Angle",
    desc: "Three-quarter turns, over-shoulder, never straight-on",
    options: RANDOM_TRAITS.bodyAngles
  },
  {
    key: "pose",
    label: "Pose",
    desc: "Sitting, leaning, walking, chin on hand, etc.",
    options: RANDOM_TRAITS.poses
  },
  {
    key: "depthOfField",
    label: "Depth of Field",
    desc: "Phone-sharp to heavy 85mm f/1.4 bokeh",
    options: RANDOM_TRAITS.depthsOfField
  },
  {
    key: "candidness",
    label: "Candidness",
    desc: "Pro headshot to caught-mid-moment documentary",
    options: RANDOM_TRAITS.candidnessLevels
  },
  {
    key: "cameraType",
    label: "Camera Type",
    desc: "iPhone, DSLR, medium format, film, disposable",
    options: RANDOM_TRAITS.cameraTypes
  }
];
function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function hairPhrase(color, style) {
  if (/\b(bald|shaved)\b/i.test(style)) return style;
  const m = style.match(/^(an?|the)\s+(.*)$/i);
  if (m) return `${m[1]} ${color} ${m[2]}`;
  return `${color} ${style}`;
}
function weightedPick(weights) {
  const entries = Object.entries(weights).filter(([, w]) => w > 0);
  const total = entries.reduce((sum, [, w]) => sum + w, 0);
  if (total <= 0) return null;
  let r = Math.random() * total;
  for (const [key, w] of entries) {
    r -= w;
    if (r < 0) return key;
  }
  return entries[entries.length - 1][0];
}
const PROFILE_MODE_EXCLUDES = {
  expressions: [
    "looking slightly past the camera, distracted",
    "resting face with a hint of tiredness around the eyes",
    "one eyebrow slightly raised, skeptical look"
  ],
  lighting: [
    "bright midday sun creating hard shadows under the nose and chin",
    "harsh fluorescent overhead lighting",
    "single overhead kitchen light, unflattering angle"
  ],
  settings: [
    "parking lot with cars behind them",
    "plain apartment wall with a light switch visible",
    "concrete stairwell in an apartment building",
    "subway platform, tiled wall behind",
    "university hallway with lockers"
  ],
  depthsOfField: [
    "heavy creamy bokeh, 85mm f/1.4 wide open",
    "medium format shallow focus with smooth background separation",
    "moderate bokeh, 85mm f/2 lens",
    "slight background softness, shot on 50mm f/2.8"
  ],
  // Profile pics live close to the face, drop the loosest crops so a PFP never
  // ends up as a distant full-body shot. Candid keeps the full range.
  shotDistances: [
    "Three-quarter shot from the knees up, environment visible",
    "Wider environmental shot, full upper body with space around them"
  ]
};
const ASPIRATIONAL_EXTRA_EXCLUDES = {
  lighting: [
    "phone camera flatness, slightly overexposed and washed out",
    "iPhone HDR look, slightly crunchy with shadows lifted unnaturally",
    "uneven exposure with a bright window blown out behind them",
    "flat cloudy day light with no visible shadows",
    "porch light at dusk, yellowish",
    "slightly muted indoor light, shadows a touch deeper than ideal",
    "tungsten interior with no white balance correction, warm-yellow cast"
  ],
  settings: [
    "kitchen with clutter slightly visible on the counter",
    "gym entrance, glass door reflecting behind them",
    "office with a monitor glow and sticky notes on the wall behind",
    "busy sidewalk with pedestrians blurred behind",
    "standing in a doorway, half-inside half-outside"
  ]
};
const ASPIRATIONAL_CAMERAS = [
  "DSLR with 50mm kit lens",
  "professional 85mm f/1.4 portrait lens",
  "medium format Hasselblad",
  "35mm film camera, Kodak Portra 400"
];
const ASPIRATIONAL_DOF = [
  "heavy creamy bokeh, 85mm f/1.4 wide open",
  "medium format shallow focus with smooth background separation",
  "moderate bokeh, 85mm f/2 lens",
  "35mm f/1.8 with gentle background blur"
];
const ASPIRATIONAL_SKIN = [
  "light freckles across the nose and cheeks",
  "healthy, even skin with natural texture and a soft matte finish",
  "soft, faint smile lines",
  "a small beauty mark near the jawline",
  "well-rested skin with visible pores and fine vellus hairs",
  "lightly sun-kissed skin with subtle natural texture"
];
const ASPIRATIONAL_REALISM = [
  "a few natural flyaway hairs catching the light",
  "a single realistic catchlight in the eyes from one light source",
  "slightly off-center, naturally composed framing",
  "a relaxed, candid micro-expression with a slightly asymmetric smile",
  "soft natural shadows on one side of the face, not studio-even",
  "fine natural skin texture, visible pores and vellus hairs in the light"
];
const ASPIRATIONAL_HAIR = [
  "short hair",
  "shoulder-length hair",
  "long hair",
  "wavy hair",
  "straight hair",
  "a pixie cut",
  "a bob",
  "curly hair",
  "braids",
  "a fade haircut",
  "a high top fade",
  "natural TWA hair",
  "a bald head",
  "hair in a neat low bun",
  "hair in a low ponytail",
  "hair pulled back",
  "a fresh, well-groomed cut",
  "a sleek blow-dried style",
  "softly styled glossy waves",
  "a sharp, clean fade"
];
const ASPIRATIONAL_CLOTHING = [
  "a well-cut navy blazer over a plain tee",
  "a tailored charcoal overcoat over a fine roll-neck",
  "a fine-gauge cashmere sweater",
  "a crisp white shirt under a fine-gauge merino sweater",
  "a pressed light blue Oxford shirt",
  "a smart camel coat over a crewneck",
  "a structured blazer with an open-collar shirt",
  "a polished black turtleneck",
  "a cream cable-knit sweater",
  "a navy crewneck sweater",
  "a well-fitted denim jacket over a clean white tee",
  "a wool overcoat over a soft grey crewneck",
  "a tailored knit polo",
  "wide-leg charcoal trousers with a soft grey crewneck tucked in"
];
const ASPIRATIONAL_MISC = [
  "a refined minimalist watch",
  "a slim leather watch with a worn-in band",
  "a leather crossbody bag strap across the chest",
  "a fine knit scarf draped at the neck",
  "over-ear headphones resting loose around the neck"
];
const ASPIRATIONAL_POOL_EXCLUDES = {
  pose: [
    "looking down at something in their hands",
    "arms at their sides, slightly awkward",
    "adjusting their glasses with one hand"
  ],
  candidness: [
    "reacting to something off-camera with genuine surprise",
    "candid street photography style, unaware of photographer",
    "glancing over shoulder as if just noticed the camera"
  ]
};
function applyModeFilter(list, category, mode) {
  if (mode === "candid") return [...list];
  const excludes = new Set(PROFILE_MODE_EXCLUDES[category]);
  if (mode === "aspirational") {
    if (category === "depthsOfField") excludes.clear();
    ASPIRATIONAL_EXTRA_EXCLUDES[category]?.forEach((e) => excludes.add(e));
  }
  return list.filter((item) => !excludes.has(item));
}
function generateRandomPrompt(opts = {}) {
  const { params, ageRange, mode = "profile", ethnicityWeights, genderWeights, frequencies } = opts;
  const [ageMin, ageMax] = ageRange ?? [25, 45];
  const age = Math.floor(Math.random() * (ageMax - ageMin + 1)) + ageMin;
  const freq = (k) => frequencies?.[k] ?? FREQUENCY_DEFAULTS[k];
  const roll = (k) => Math.random() * 100 < freq(k);
  const ethnicity = (ethnicityWeights && weightedPick(ethnicityWeights)) ?? randomPick(RANDOM_TRAITS.ethnicities);
  const gender = (genderWeights && weightedPick(genderWeights)) ?? randomPick(RANDOM_TRAITS.genders);
  const hairStyle = mode === "aspirational" ? randomPick(ASPIRATIONAL_HAIR) : randomPick(RANDOM_TRAITS.hairStyles);
  const hairColor = randomPick(RANDOM_TRAITS.hairColors);
  const hair = hairPhrase(hairColor, hairStyle);
  const baseClothing = mode === "aspirational" ? ASPIRATIONAL_CLOTHING : RANDOM_TRAITS.clothing;
  const clothing = roll("formalWear") ? randomPick(FORMAL_CLOTHING) : roll("bigHoodie") ? randomPick(HOODIE_CLOTHING) : randomPick(baseClothing);
  const isBlackAndWhite = roll("blackAndWhite");
  const filmStyle = isBlackAndWhite ? randomPick(BW_FILM) : randomPick(RANDOM_TRAITS.filmStyles);
  const pickControlled = (key, defaults, modeCategory) => {
    if (params && !params[key]?.enabled) return null;
    let pool = params?.[key]?.selected?.length ? [...params[key].selected] : [...defaults];
    if (modeCategory) pool = applyModeFilter(pool, modeCategory, mode);
    if (mode === "aspirational" && ASPIRATIONAL_POOL_EXCLUDES[key]) {
      const ex = new Set(ASPIRATIONAL_POOL_EXCLUDES[key]);
      const filtered = pool.filter((p) => !ex.has(p));
      if (filtered.length) pool = filtered;
    }
    if (!pool.length) pool = [...defaults];
    return randomPick(pool);
  };
  let atmosphere = null;
  if (!params || params.atmosphere?.enabled) {
    let pool = ATMOSPHERES.filter((a) => mode === "candid" || a.profileSafe);
    const selected = params?.atmosphere?.selected;
    if (selected?.length) {
      const sel = new Set(selected);
      const narrowed = pool.filter((a) => sel.has(a.label));
      if (narrowed.length) pool = narrowed;
    }
    if (mode === "aspirational") {
      const favored = pool.filter((a) => a.aspFavored);
      if (favored.length) pool = favored;
    }
    if (pool.length) atmosphere = randomPick(pool);
  }
  const lighting = atmosphere ? atmosphere.lighting : randomPick(applyModeFilter(RANDOM_TRAITS.lighting, "lighting", mode));
  let expressionPool = applyModeFilter(RANDOM_TRAITS.expressions, "expressions", mode);
  if (atmosphere && !atmosphere.allowJoy) {
    const sober = expressionPool.filter((e) => !JOYFUL_EXPRESSIONS.has(e));
    if (sober.length) expressionPool = sober;
  }
  const expression = randomPick(expressionPool);
  const locationEnabled = !params || params.location?.enabled;
  const locationSel = params?.location?.selected;
  const locationPool = locationSel?.length ? RANDOM_TRAITS.locations.filter((l) => locationSel.includes(l)) : RANDOM_TRAITS.locations;
  let setting;
  if (atmosphere?.settingOverride) {
    setting = atmosphere.settingOverride;
  } else if (locationEnabled && locationPool.length && roll("namedLocation")) {
    setting = randomPick(locationPool);
  } else {
    setting = randomPick(applyModeFilter(RANDOM_TRAITS.settings, "settings", mode));
  }
  const shotDistance = pickControlled("shotDistance", RANDOM_TRAITS.shotDistances, "shotDistances");
  const bodyAngle = pickControlled("bodyAngle", RANDOM_TRAITS.bodyAngles);
  const pose = mode !== "aspirational" && roll("onPhone") ? randomPick(PHONE_POSES) : pickControlled("pose", RANDOM_TRAITS.poses);
  const candidness = pickControlled("candidness", RANDOM_TRAITS.candidnessLevels);
  const aspirationalPick = (key, quality) => {
    if (params && !params[key]?.enabled) return null;
    const sel = params?.[key]?.selected;
    const pool = sel?.length ? quality.filter((q) => sel.includes(q)) : [...quality];
    return randomPick(pool.length ? pool : [...quality]);
  };
  const dof = mode === "aspirational" ? aspirationalPick("depthOfField", ASPIRATIONAL_DOF) : pickControlled("depthOfField", RANDOM_TRAITS.depthsOfField, "depthsOfField");
  const camera = mode === "aspirational" ? aspirationalPick("cameraType", ASPIRATIONAL_CAMERAS) : pickControlled("cameraType", RANDOM_TRAITS.cameraTypes);
  const tooTightForPet = !!shotDistance?.startsWith("Extreme close-up");
  const companion = mode !== "aspirational" && !tooTightForPet && roll("pets") ? buildCompanion(pickControlled) : null;
  const skin = mode === "aspirational" ? randomPick(ASPIRATIONAL_SKIN) : randomPick(RANDOM_TRAITS.skinDetails);
  const accessoryClauses = [];
  if (roll("glasses")) accessoryClauses.push(randomPick(GLASSES));
  else if (roll("sunglasses")) accessoryClauses.push(randomPick(SUNGLASSES));
  if (roll("jewellery")) accessoryClauses.push(randomPick(JEWELLERY));
  if (roll("hats")) accessoryClauses.push(randomPick(HATS));
  if (roll("miscAccessory"))
    accessoryClauses.push(
      randomPick(mode === "aspirational" ? ASPIRATIONAL_MISC : MISC_ACCESSORIES)
    );
  const imperfection = mode === "aspirational" ? randomPick(ASPIRATIONAL_REALISM) : randomPick(RANDOM_TRAITS.photoImperfections);
  const skinThreshold = mode === "aspirational" ? 0.85 : mode === "profile" ? 0.5 : 0.25;
  const imperfectionThreshold = mode === "aspirational" ? 0.65 : mode === "profile" ? 0.75 : 0.45;
  const skinPart = Math.random() > skinThreshold ? `, ${skin}` : "";
  const accessoryPart = accessoryClauses.length ? `, ${accessoryClauses.join(", ")}` : "";
  const imperfectionPart = Math.random() > imperfectionThreshold ? `. ${imperfection}` : "";
  const filmThreshold = mode === "aspirational" ? 0.5 : mode === "profile" ? 0.65 : 0.15;
  const filmPart = isBlackAndWhite || Math.random() > filmThreshold ? `, ${filmStyle}` : "";
  const companionPart = companion ? `. ${companion[0].toUpperCase()}${companion.slice(1)}` : "";
  const framingPrefix = shotDistance ? `${shotDistance}. ` : "";
  const templates = [
    // Scene-first: leads with where, then who
    () => `${setting}, ${lighting}. A ${age}-year-old ${ethnicity} ${gender} with ${hair}${skinPart}${pose ? `, ${pose}` : ""}, wearing ${clothing}${accessoryPart}. ${expression}${bodyAngle ? `, ${bodyAngle}` : ""}. ${[dof, candidness].filter(Boolean).join(", ")}${filmPart}${camera ? `. ${camera}` : ""}${imperfectionPart}`,
    // Action-first: leads with what the person is doing
    () => `A ${age}-year-old ${ethnicity} ${gender}${pose ? ` ${pose}` : ""}${candidness ? `, ${candidness}` : ""}. ${hair}, wearing ${clothing}${accessoryPart}. ${expression}${skinPart}. ${setting}, ${lighting}. ${[bodyAngle, dof].filter(Boolean).join(", ")}${filmPart}${camera ? `. ${camera}` : ""}${imperfectionPart}`,
    // Camera-first: leads with the technical look
    () => `${camera ? `${camera}. ` : ""}${age}-year-old ${ethnicity} ${gender}, ${expression}${bodyAngle ? `, ${bodyAngle}` : ""}. ${hair}${skinPart}, wearing ${clothing}${accessoryPart}. ${[pose, setting].filter(Boolean).join(", ")}. ${lighting}${dof ? `, ${dof}` : ""}. ${candidness ?? ""}${filmPart}${imperfectionPart}`,
    // Descriptive: reads more like a caption
    () => `Photo of a ${age}-year-old ${ethnicity} ${gender} with ${hair}${skinPart}${accessoryPart}${pose ? `, ${pose}` : ""}. Wearing ${clothing}, ${expression}. ${setting}, ${lighting}. ${[bodyAngle, dof, candidness, camera].filter(Boolean).join(", ")}${filmPart}${imperfectionPart}`
  ];
  let qualitySuffix = "";
  if (mode === "profile") {
    qualitySuffix = ". Real matte skin showing visible pores, fine lines, natural blemishes and a slightly asymmetric face. Ordinary uneven lighting and exposure, true-to-life muted color with a neutral white balance. Background mostly in sharp focus, deep depth of field, everything roughly equally sharp. Off-center, casually-framed composition with the subject not perfectly centered. Looks like an ordinary phone snapshot a friend took. Keep skin texture real and unretouched, not airbrushed, not AI-smooth, no creamy background blur";
  } else if (mode === "aspirational") {
    qualitySuffix = ". A real, authentic photograph of a real person, genuinely shot on a real camera in a real place, candid, believable and editorial-quality, the kind of photo you'd be proud to use professionally. Real human skin with a light, tasteful retouch: healthy and even, yet keeping its natural pores, fine vellus hairs, faint texture and tiny real-world irregularities clearly visible up close, with a soft matte finish and subtle shine only on the nose and forehead. Flattering soft directional light that shapes the face, with a single realistic catchlight in the eyes and gentle natural shadow on one side. True-to-life, slightly muted color with a neutral white balance. A relaxed, composed, slightly asymmetric expression. Clean, intentional composition with a natural shallow depth of field at about f/2 that gently separates the subject from the background. Keep it a genuine photograph, real skin texture, not plastic, waxy, over-airbrushed or AI-smooth, and not a glossy stock photo or 3D render";
  }
  const noBorderSuffix = ". Full-bleed photograph, no Polaroid frame, no white border around the image, no decorative edges";
  const textAndLogoSuffix = ". Any text, signage, or branding in the scene must be rendered with extra care: correctly spelled real words, cleanly formed and legible letterforms, no garbled, warped, or nonsensical text. Real brand names and logos are allowed only if reproduced accurately with correct shapes, proportions, and colors; if a logo or piece of text cannot be rendered cleanly and correctly, leave it out or keep it blurred and out of focus rather than showing a malformed version, badly rendered text and logos are a dead giveaway of a fake photo";
  const anatomySuffix = ". Anatomically correct and naturally proportioned: a real human body with believable bone structure, shoulders, arms and hands resting in natural, relaxed positions, every limb connected and bending correctly at real joints, each hand with exactly five normally-shaped fingers, and true-to-life head-to-body and facial proportions. Keep any visible hands, fingers, arms and shoulders clean, correctly formed and correctly counted; if a hand or arm cannot be rendered cleanly, let it fall naturally out of frame or rest relaxed and partly hidden rather than showing warped, extra, missing or fused fingers or limbs, mangled hands and distorted anatomy are a dead giveaway of a fake photo";
  return (framingPrefix + randomPick(templates)() + companionPart + qualitySuffix + noBorderSuffix + textAndLogoSuffix + anatomySuffix).replace(/\s{2,}/g, " ").replace(/\.\s*\./g, ".").replace(/,\s*\./g, ".").replace(/,\s*,/g, ",").replace(/\.\s*$/, "").trim();
}
export {
  ATMOSPHERES,
  COMPANION,
  FREQUENCY_DEFAULTS,
  FREQUENCY_DEFS,
  RANDOM_TRAITS,
  generateRandomPrompt
};
