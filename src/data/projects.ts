// inline svgs / html used as artwork inside each project card
const aliceArt = `
  <div style="position:absolute;inset:0;background:
    radial-gradient(ellipse at 30% 25%, rgba(255,255,255,0.35), transparent 60%),
    radial-gradient(ellipse at 75% 80%, rgba(255,210,170,0.25), transparent 65%),
    linear-gradient(140deg, #1f4d4a 0%, #2f6b62 45%, #5a8f7e 100%);"></div>
  <div style="position:absolute;inset:0;background-image: radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px); background-size: 6px 6px; opacity: 0.12;"></div>
  <div style="position:relative; display:flex; align-items:center; justify-content:center;">
    <svg width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="56" rx="42" ry="48" fill="none" stroke="#fdf6ec" stroke-width="3"/>
      <ellipse cx="60" cy="56" rx="42" ry="48" fill="rgba(253,246,236,0.12)"/>
      <path d="M60 16 C 35 18, 22 38, 26 60" stroke="#fdf6ec" stroke-width="2" stroke-linecap="round" opacity="0.6" fill="none"/>
      <rect x="56" y="100" width="8" height="22" rx="2" fill="#fdf6ec"/>
      <rect x="46" y="120" width="28" height="6" rx="3" fill="#fdf6ec"/>
      <circle cx="60" cy="56" r="6" fill="#fdf6ec"/>
    </svg>
  </div>
`;

const procreateArt = `
  <div style="position:absolute;inset:0;background:
    radial-gradient(ellipse at 25% 30%, rgba(255,255,255,0.55), transparent 55%),
    radial-gradient(ellipse at 75% 75%, rgba(255,255,255,0.25), transparent 60%),
    linear-gradient(135deg, #ffb199 0%, #ff7a8a 45%, #c265ff 100%);"></div>
  <div style="position:relative; display:flex; align-items:center; justify-content:center;">
    <div style="width:140px; height:140px; transform: rotate(-12deg) skewY(-4deg); background:
      linear-gradient(135deg, #ffffff 0%, #ffe4ec 60%, #fbb4c4 100%);
      border-radius:22px; box-shadow: 0 30px 60px -20px rgba(80,30,90,0.45), inset 0 -10px 30px rgba(255,255,255,0.4);
      display:flex; align-items:center; justify-content:center;">
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#7a2d4a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 21c3-3 6-3 9-6s3-6 6-9"></path>
        <path d="M14 4l6 6"></path>
        <path d="M3 21l3-9 9-3"></path>
      </svg>
    </div>
  </div>
`;

const nomadlyArt = `
  <img src="/nomadly-logo.png" alt="Nomadly logo"
    style="display:block; width:70%; max-width:640px; height:auto; max-height:70%; object-fit:contain; filter: drop-shadow(0 12px 24px rgba(60,90,160,0.18));"/>
`;

const mossArt = `
  <div style="position:absolute;inset:0;background:
    radial-gradient(ellipse at 25% 30%, rgba(140,200,255,0.25), transparent 60%),
    radial-gradient(ellipse at 75% 75%, rgba(180,120,255,0.18), transparent 65%),
    linear-gradient(140deg, #0f1a3a 0%, #1f2c5c 50%, #3a2a6b 100%);"></div>
  <div style="position:absolute;inset:0;background-image: radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px); background-size: 5px 5px; opacity: 0.1;"></div>
  <div style="position:relative; display:flex; align-items:center; justify-content:center; width:80%; max-width:520px;">
    <svg width="100%" height="160" viewBox="0 0 520 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 80 Q 20 30, 40 80 T 80 80 Q 100 130, 120 80 T 160 80 Q 180 20, 200 80 T 240 80 Q 260 110, 280 80 T 320 80 Q 340 40, 360 80 T 400 80 Q 420 120, 440 80 T 480 80 Q 500 50, 520 80"
        stroke="#a8d4ff" stroke-width="2" fill="none" opacity="0.85"/>
      <path d="M0 90 Q 20 60, 40 90 T 80 90 Q 100 120, 120 90 T 160 90 Q 180 70, 200 90 T 240 90 Q 260 105, 280 90 T 320 90 Q 340 75, 360 90 T 400 90 Q 420 110, 440 90 T 480 90 Q 500 80, 520 90"
        stroke="#d8b8ff" stroke-width="1.6" fill="none" opacity="0.6"/>
      <path d="M0 70 Q 20 50, 40 70 T 80 70 Q 100 90, 120 70 T 160 70 Q 180 55, 200 70 T 240 70 Q 260 80, 280 70 T 320 70 Q 340 60, 360 70 T 400 70 Q 420 85, 440 70 T 480 70 Q 500 65, 520 70"
        stroke="#ffffff" stroke-width="1.2" fill="none" opacity="0.4"/>
    </svg>
  </div>
`;

export interface Project {
  slug: string;
  company: string;
  year: string;
  bg: string;
  inner: string;
  title: string;
  tagline: string;
  role: string;
  team: string;
  timeline: string;
  skills: string[];
  overview: string[];
  problem: string[];
  reflections: { heading: string; body: string }[];
}

export const projects: Project[] = [
  {
    slug: "procreate-3d",
    company: "Procreate 3D",
    year: "2025 — now",
    bg: "linear-gradient(135deg, #ffb199 0%, #ff7a8a 45%, #c265ff 100%)",
    inner: procreateArt,
    title: "Procreate 3D — sketching in three dimensions",
    tagline:
      "A Pencil-first tool that turns 2D doodles into 3D assets — designed to live inside a designer's existing workflow.",
    role: "Designer & iOS developer (solo project)",
    team: "Solo",
    timeline: "2025 — present",
    skills: [
      "Swift",
      "SwiftUI",
      "RealityKit",
      "iPadOS",
      "Interaction design",
      "3D graphics",
    ],
    overview: [
      "Procreate 3D started as a question: what would Procreate feel like if a sketch could lift off the page? The current direction is a small iPad app that takes a closed 2D drawing and inflates it into a soft, claymation-style 3D form — designed to live inside a designer's existing workflow, not replace it. A doodle drawn with Apple Pencil becomes a 3D asset you can drop into Figma, render flat as a PNG, or (later) preview spatially on Vision Pro.",
      "I'm building it solo in Swift. The engine runs on-device through RealityKit, with a real-time inflation algorithm and live tuning sliders, so the feel of the output can be shaped by hand — closer to choosing a brush than configuring a tool.",
      "Source: https://github.com/Tiya-Verma/procreate3D",
    ],
    problem: [
      "Most 3D modelling tools are built for technical pipelines, not the way people actually sketch — they ask the artist to \"think in three dimensions\" before drawing the first mark.",
      "Translating a 2D brush gesture into a 3D form without losing immediacy is harder than it sounds: depth has to emerge from the drawing, not be specified alongside it.",
      "Onboarding a casual artist into a 3D coordinate system without ever surfacing the coordinate system.",
      "The closest existing tools (Womp, Spline) start from a sculptable primitive in 3D space, not a drawn 2D mark. There's a gap for a Pencil-first tool that turns flat sketches directly into solid forms.",
    ],
    reflections: [
      {
        heading: "Designing for depth without breaking flow",
        body: "The core technical question — how a flat sketch implies depth — turned out to also be the core design question. Early versions inflated each interior point by its distance to the boundary, which is mathematically clean but produced a sharp ridge along the long axis of any elongated shape. The fix wasn't more math; it was a constraint: cap the height at a fraction of the maximum, so the ridge collapses into a flat-topped pillow. The geometry got better, but the deeper win was that the constraint matched how the brain reads \"puffy\" — something that bulges out and then plateaus. The math and the perception aligned, but only after the math was deliberately limited.",
      },
      {
        heading: "Building and designing in the same loop",
        body: "Working solo in Swift collapses design and implementation into a single step. Every parameter — how much the surface smooths, where the height plateaus, how steep the dome — is simultaneously a line of code and a visual decision. To make that tractable I exposed three of them as live sliders inside the running app. Tuning the algorithm felt more like adjusting a brush than rewriting a function. It also surfaced a quieter shift: the design tool I was making for an imagined user was also the design tool I was using to make it.",
      },
      {
        heading: "Constraints as a design tool",
        body: "The most useful design move so far was deciding what the app is not. Early concepts had it living on Apple Vision Pro for children's learning, or for architects sketching buildings. The install base, the precision required, and the time-to-magic killed both. Repositioning it as a tool that drops into Figma — Pencil-drawn doodles as 3D assets — narrowed the scope, made the primary distribution channel obvious, and turned Vision Pro from a market dependency into a future delight. The constraint of \"must fit inside someone's existing workflow\" did more design work than any wireframe.",
      },
    ],
  },
  {
    slug: "alice-in-wellnessland",
    company: "Alice in Wellnessland",
    year: "2026",
    bg: "linear-gradient(140deg, #1f4d4a 0%, #2f6b62 45%, #5a8f7e 100%)",
    inner: aliceArt,
    title: "Alice in Wellnessland — wellness, down the rabbit hole",
    tagline:
      "A hackathon-built wellness app that folds journaling, mood analysis, and goal-setting into one Wonderland-inspired space.",
    role: "Designer & front-end developer",
    team: "Hackathon team (fill in members)",
    timeline: "Hackathon, 2026",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini API",
      "MongoDB Atlas",
    ],
    overview: [
      "Placeholder overview — Alice in Wellnessland is an AI-powered wellness companion built in one hackathon weekend. It consolidates three tools people normally juggle across separate apps — journaling, mood tracking, and goal-setting — into a single, narrative-driven space loosely framed around Alice's Adventures in Wonderland.",
      "Three named surfaces shape the experience. \"Down the Rabbit Hole\" lets you journal by text or voice, with Gemini transcribing and reflecting back. \"The Looking Glass\" analyzes entries in real time for mood, stressors, and patterns. \"The Queen's Quest\" pairs goal-setting with a chatbot that nudges objectives toward SMART criteria.",
      "Source: https://github.com/maraliwayway/alice-in-wellnessland",
    ],
    problem: [
      "Wellness habits live in too many places — a separate journaling app, a separate mood tracker, a separate goal tracker. Switching between them is friction that quietly undermines the habit they're supposed to support.",
      "Most journaling tools don't do anything with what you write — there's no synthesis back to the user, no sense of being read.",
      "Goal-setting apps tend to be either too rigid (templated forms) or too loose (free text with no structure). Neither helps you set a goal you'll actually keep.",
    ],
    reflections: [
      {
        heading: "Building a narrative metaphor under hackathon time pressure",
        body: "Placeholder reflection — what the Wonderland framing did for the product (and what it cost) when every minute counted.",
      },
      {
        heading: "Designing with an LLM as a real-time collaborator",
        body: "Placeholder reflection — wiring Gemini into the journaling and goal-setting flows changed what \"feedback\" meant in the UX. Notes on what worked and where it felt off.",
      },
      {
        heading: "Shipping a coherent product in a weekend",
        body: "Placeholder reflection — what we cut, what we kept, and what \"finished enough\" looked like for a 48-hour build.",
      },
    ],
  },
  {
    slug: "moss",
    company: "MOSS",
    year: "2025 — now",
    bg: "linear-gradient(140deg, #0f1a3a 0%, #1f2c5c 50%, #3a2a6b 100%)",
    inner: mossArt,
    title: "MOSS — brain signals, made legible",
    tagline:
      "A full-stack tool that turns raw EEG from a Muse headset into something a researcher (or curious human) can actually use.",
    role: "Product Front-End Developer",
    team: "UBC MINT (Multidisciplinary Innovation Team)",
    timeline: "2025 — present",
    skills: [
      "TypeScript",
      "React",
      "WebSockets",
      "Real-time visualization",
      "UI design",
    ],
    overview: [
      "Placeholder overview — MOSS is UBC MINT's brain-signal processing app for the Muse EEG headset. It streams data live over WebSockets, stores it in TimescaleDB, and surfaces it through a front-end built for researchers and curious students.",
      "I work on the front-end: turning a fairly technical real-time pipeline into a UI that doesn't feel like a lab readout. The goal is making brain-signal processing feel less like a research instrument and more like a tool built for people.",
      "Source: https://github.com/Tiya-Verma/fullstack-moss-app",
    ],
    problem: [
      "Most EEG tooling is built for clinicians or signal-processing engineers — the interfaces assume you already know what to look for.",
      "Real-time visualization at this kind of sample rate is unforgiving: dropped frames or laggy updates make the signal feel untrustworthy, even when the data is fine.",
      "The team needed a UI that worked for both a real Muse headset and a mock data server, so contributors without hardware could still develop and test.",
    ],
    reflections: [
      {
        heading: "Designing UI for data you can't slow down",
        body: "Placeholder reflection — what changes when the interface has to keep up with a live signal stream, and how that shaped the components I built.",
      },
      {
        heading: "Working across a multi-language stack",
        body: "Placeholder reflection — collaborating with engineers writing the backend in Rust and Python while the front-end stayed in TypeScript. Notes on contracts, debugging, and where ambiguity lived.",
      },
      {
        heading: "Building for two audiences at once",
        body: "Placeholder reflection — researchers want precision, curious users want intuition. What it meant to design surfaces that didn't betray either one.",
      },
    ],
  },
  {
    slug: "nomadly-earth",
    company: "Nomadly",
    year: "2024",
    bg: "linear-gradient(135deg, #f3eef5 0%, #e7d9eb 50%, #d4dcef 100%)",
    inner: nomadlyArt,
    title: "Nomadly — picking a country with your hands",
    tagline:
      "Designing and building an interactive 3D globe for Nomadly, a digital-nomad platform that helps remote workers find where to live next.",
    role: "Front-end developer & designer — 3D globe feature",
    team: "Built solo, in collaboration with the Nomadly team",
    timeline: "2024",
    skills: [
      "React",
      "Vite",
      "Three.js",
      "react-three/fiber",
      "react-globe.gl",
      "Framer Motion",
      "Tailwind CSS",
    ],
    overview: [
      "Nomadly (nomadly.me) is a lifestyle platform for digital nomads — its tagline is \"The world is yours.\" The site helps remote workers pick a country that fits their work, budget, and life through a quiz, a regional country explorer, and a blog/community layer.",
      "I designed and built the 3D interactive globe that sits at the center of the destination-discovery flow. Instead of choosing a region from a flat dropdown, a visitor can drag the globe, hover a country, and let the surface itself become the navigation. The feature reframes \"picking a country\" from a form-filling task into something closer to looking at a map and wondering.",
      "Tech-wise it's a React + Vite component using react-globe.gl on top of three.js / react-three-fiber, with Framer Motion handling smaller transitions and Tailwind for the surrounding UI.",
      "Source: https://github.com/Tiya-Verma/nomadly_earth · Live: https://www.nomadly.me",
    ],
    problem: [
      "Nomadly's existing destination-discovery flow was a regional dropdown — Europe, Asia, Middle East, Americas, Africa, Oceania. It asked the visitor to already know roughly where they wanted to go, which is the opposite of the openness that draws people to nomadism in the first place.",
      "A map could fix the geography problem but creates a new one: most web maps flatten the world into political abstractions. For a nomad weighing a country, the decision is half informational, half emotional — and a flat 2D map doesn't speak to the second half.",
      "3D web globes tend to be demoware: heavy, hard to read, slow on mid-tier devices, ornamental. The challenge was making one feel light enough to actually use as the front door of a real product flow.",
    ],
    reflections: [
      {
        heading: "Designing for the feeling, not just the data",
        body: "Placeholder reflection — what I learned about the globe being as much an emotional surface as an informational one, and how that shifted the visual language (atmosphere, glow, easing) away from a typical data-viz aesthetic.",
      },
      {
        heading: "Performance as a design constraint",
        body: "Placeholder reflection — three.js scenes get expensive fast on slower devices and mobile. Decisions about geometry density, texture resolution, and animation frame budget became design decisions, not just technical ones.",
      },
      {
        heading: "Working as the embedded specialist on a small product team",
        body: "Placeholder reflection — building one feature inside someone else's product means owning the deep end of one thing while staying responsive to a wider roadmap I don't set. Notes on what changed about how I scoped, communicated, and shipped.",
      },
    ],
  },
];
