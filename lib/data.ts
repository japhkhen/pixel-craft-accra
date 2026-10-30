export const site = {
  name: "Pixel Craft",
  role: "Software engineer",
  city: "Accra, Ghana",
  address: "East Legon, Accra, Ghana",
  email: "hello@pixelcraft.studio",
  cv: "/cv/pixel-craft-cv.pdf",
  phones: [
    { display: "025 620 6383", tel: "+233256206383" },
    { display: "055 314 0985", tel: "+233553140985" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/pixelcraft-gh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pixelcraft-accra" },
    { label: "X", href: "https://x.com/pixelcraftgh" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const focuses = [
  {
    id: "web",
    label: "Web apps",
    focus: "Interfaces people open every day",
    detail: "Shops, desks, and dashboards where the next step has to be obvious.",
    kind: "web",
  },
  {
    id: "platforms",
    label: "Platforms",
    focus: "Systems more than one team shares",
    detail: "Accounts, permissions, and the quiet structure under a product.",
    kind: "platforms",
  },
  {
    id: "apis",
    label: "APIs and data",
    focus: "Services other software can trust",
    detail: "Clear contracts, careful errors, and records that still make sense next year.",
    kind: "web",
  },
  {
    id: "advisory",
    label: "Advisory",
    focus: "A second opinion before you build",
    detail: "Architecture, hiring, and release plans written so a team can act on them.",
    kind: "platforms",
  },
] as const;

export const principles = [
  {
    title: "Clear interfaces",
    text: "Screens a busy person can use on the first try, including on a mid-range Android.",
    icon: "plane" as const,
  },
  {
    title: "Steady engineering",
    text: "Typed, tested, and written down, so the next developer is not guessing.",
    icon: "shield" as const,
  },
  {
    title: "Plain answers",
    text: "You hear what is possible, how long it takes, and what I will not pretend to know.",
    icon: "headset" as const,
  },
  {
    title: "Shaped to the brief",
    text: "The work follows the counter, the phone, and the team you already have.",
    icon: "case" as const,
  },
];

export type ProjectCategory = "Web" | "Mobile" | "Platforms";

export type Project = {
  title: string;
  summary: string;
  story: string;
  image: string;
  alt: string;
  place: string;
  year: string;
  stack: string[];
  category: ProjectCategory;
  kind: "web" | "mobile" | "platforms";
  outcome: string;
};

export const projects: Project[] = [
  {
    title: "Makola Stockroom",
    summary: "A tablet stock book for a wholesale cloth and provisions shop in Makola.",
    story:
      "Staff used to write bolts of cloth in a paper book that lived under the counter. The new screen is large, the colours match the stock they already know, and a count can be saved between two customers. It works when the network drops and syncs when the shop wifi returns.",
    image: "/images/project-makola.jpg",
    alt: "A tablet on a Makola market stall, surrounded by folded colourful cloth",
    place: "Makola, Accra",
    year: "2025",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    category: "Web",
    kind: "web",
    outcome: "End-of-day counts moved off paper, and the owner can see what is low before the next delivery.",
  },
  {
    title: "Cedis Checkout",
    summary: "A shop-counter checkout for MTN MoMo and Telecel Cash that finishes in under a minute.",
    story:
      "Attendants were switching between three apps to take a payment. Cedis Checkout keeps the amount, the network, and the customer number on one screen, then shows a clear paid or failed state. The handoff notes are written for someone who has never opened a code editor.",
    image: "/images/project-checkout.jpg",
    alt: "A hand holding a phone showing a checkout screen in a small Accra shop",
    place: "Osu, Accra",
    year: "2024",
    stack: ["React Native", "TypeScript", "Node.js"],
    category: "Mobile",
    kind: "mobile",
    outcome: "Attendants stopped leaving the counter to confirm a payment on a second phone.",
  },
  {
    title: "CampusRoute",
    summary: "Evening shuttle positions for University of Ghana, built for patchy student data.",
    story:
      "Students were guessing which bus had already left Legon. CampusRoute shows the active evening routes, the last known bus, and a short note when a vehicle is delayed. The map stays light so it can load on a modest connection.",
    image: "/images/project-campus.jpg",
    alt: "A laptop on a desk showing a city transit map with blue route lines",
    place: "Legon, Accra",
    year: "2024",
    stack: ["Next.js", "Node.js", "Maps"],
    category: "Platforms",
    kind: "platforms",
    outcome: "The evening desk answers fewer 'where is the bus?' calls after 6pm.",
  },
  {
    title: "Harbour Desk",
    summary: "Shipment status for a freight desk at Tema Port, in place of a shared spreadsheet.",
    story:
      "Clerks were updating one spreadsheet that locked whenever two people opened it. Harbour Desk gives each shipment a status, a contact, and a next action. The list is built for a counter, not a presentation.",
    image: "/images/project-harbour.jpg",
    alt: "Tema harbour containers with a tablet showing a shipment list in the foreground",
    place: "Tema",
    year: "2023",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    category: "Web",
    kind: "web",
    outcome: "Two clerks can update the same morning list without overwriting each other.",
  },
];

export const engagements = [
  {
    id: "sprint",
    title: "Focused build",
    text: "One product surface, from the first screen to a handover you can keep.",
    points: ["A workshop in Accra or on a call", "Interface and implementation", "Notes the next developer can follow"],
    featured: false,
  },
  {
    id: "partnership",
    title: "Product partnership",
    text: "Ongoing engineering beside your team, with a build you can click each week.",
    points: ["A weekly build you can try", "Roadmap and code review", "Room for work you have not named yet"],
    featured: true,
  },
  {
    id: "advisory",
    title: "Technical advisory",
    text: "A clear second opinion, without signing up for a long retainer.",
    points: ["Architecture or release review", "Written notes, not a slide dump", "Useful before a hire or a rewrite"],
    featured: false,
  },
] as const;

export const steps = [
  {
    title: "Share the brief",
    text: "What the product is for, who uses it, and what done means.",
  },
  {
    title: "Shape the plan",
    text: "Scope, sequence, and the risks I can already see.",
  },
  {
    title: "Build and ship",
    text: "Small releases you can try, then a clean handover.",
  },
];

export const stats = [
  { value: "6+", label: "Years building software" },
  { value: "28", label: "Products shipped" },
  { value: "19", label: "Teams supported" },
  { value: "Accra", label: "Studio base" },
];

export const skills = [
  { name: "TypeScript", level: 94 },
  { name: "React and Next.js", level: 92 },
  { name: "Interface design", level: 88 },
  { name: "Node.js", level: 86 },
  { name: "PostgreSQL", level: 80 },
  { name: "Testing", level: 78 },
  { name: "Cloud and deployment", level: 76 },
  { name: "React Native", level: 74 },
];

export const timeline = [
  {
    period: "2023 — present",
    title: "Independent software engineer",
    place: "Pixel Craft, Accra",
    text: "I design and build web and mobile products for Ghanaian businesses and for remote teams who want a careful builder rather than a large agency.",
  },
  {
    period: "2021 — 2023",
    title: "Product engineer",
    place: "Gold Coast Digital, Airport City",
    text: "Led the web checkout used by three retail clients, and sat with shop staff while they tried it.",
  },
  {
    period: "2019 — 2021",
    title: "Junior developer",
    place: "Volta Systems, Accra",
    text: "Internal tools and a customer portal. Learned to write the note that explains a change before the change itself.",
  },
  {
    period: "2015 — 2019",
    title: "BSc Computer Science",
    place: "University of Ghana, Legon",
    text: "A degree built around systems, databases, and the habit of showing working software instead of only a report.",
  },
];

export const needs = [
  "New product",
  "Improve an existing product",
  "Focused build",
  "Product partnership",
  "Technical advisory",
  "Something else",
] as const;
