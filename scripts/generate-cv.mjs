import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const pageWidth = 595;
const pageHeight = 842;
const left = 52;
const right = 543;

function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrap(text, size) {
  const max = Math.floor((right - left) / (size * 0.5));
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > max) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

const blocks = [
  { text: "PIXEL CRAFT", size: 22, font: "F2", gap: 26, color: "0.1 0.45 0.85" },
  { text: "Software engineer", size: 12, font: "F1", gap: 18, color: "0.08 0.19 0.34" },
  { text: "East Legon, Accra, Ghana", size: 11, font: "F1", gap: 15, color: "0.27 0.35 0.48" },
  { text: "025 620 6383  |  055 314 0985  |  hello@pixelcraft.studio", size: 11, font: "F1", gap: 15, color: "0.27 0.35 0.48" },
  { text: "github.com/pixelcraft-gh", size: 11, font: "F1", gap: 22, color: "0.27 0.35 0.48" },
  { text: "PROFILE", size: 12, font: "F2", gap: 18, color: "0.1 0.45 0.85" },
  {
    text: "I design and build web products, mobile tools, and the services behind them for teams in Accra and for remote clients who want the work to stay clear after launch. Most of the work is TypeScript: React, Next.js, and Node.",
    size: 11,
    font: "F1",
    gap: 16,
    color: "0.08 0.19 0.34",
  },
  { text: "EXPERIENCE", size: 12, font: "F2", gap: 18, color: "0.1 0.45 0.85" },
  { text: "Independent software engineer, Pixel Craft, Accra  -  2023 to present", size: 11, font: "F2", gap: 15, color: "0.08 0.19 0.34" },
  {
    text: "Product design and engineering for Ghanaian businesses and remote teams, including retail checkout, inventory, and operational tools.",
    size: 11,
    font: "F1",
    gap: 16,
    color: "0.08 0.19 0.34",
  },
  { text: "Product engineer, Gold Coast Digital, Airport City  -  2021 to 2023", size: 11, font: "F2", gap: 15, color: "0.08 0.19 0.34" },
  {
    text: "Led the web checkout used by three retail clients and sat with shop staff while they tried it.",
    size: 11,
    font: "F1",
    gap: 16,
    color: "0.08 0.19 0.34",
  },
  { text: "Junior developer, Volta Systems, Accra  -  2019 to 2021", size: 11, font: "F2", gap: 15, color: "0.08 0.19 0.34" },
  {
    text: "Internal tools and a customer portal. Learned to write the note that explains a change before the change itself.",
    size: 11,
    font: "F1",
    gap: 18,
    color: "0.08 0.19 0.34",
  },
  { text: "EDUCATION", size: 12, font: "F2", gap: 18, color: "0.1 0.45 0.85" },
  { text: "BSc Computer Science, University of Ghana, Legon  -  2015 to 2019", size: 11, font: "F1", gap: 20, color: "0.08 0.19 0.34" },
  { text: "SELECTED WORK", size: 12, font: "F2", gap: 18, color: "0.1 0.45 0.85" },
  { text: "Makola Stockroom  -  Next.js, TypeScript, PostgreSQL  -  2025", size: 11, font: "F2", gap: 14, color: "0.08 0.19 0.34" },
  { text: "Tablet inventory for a wholesale cloth and provisions shop in Makola.", size: 11, font: "F1", gap: 15, color: "0.08 0.19 0.34" },
  { text: "Cedis Checkout  -  React Native, TypeScript, Node.js  -  2024", size: 11, font: "F2", gap: 14, color: "0.08 0.19 0.34" },
  { text: "Shop-counter checkout for MTN MoMo and Telecel Cash.", size: 11, font: "F1", gap: 15, color: "0.08 0.19 0.34" },
  { text: "CampusRoute  -  Next.js, Node.js  -  2024", size: 11, font: "F2", gap: 14, color: "0.08 0.19 0.34" },
  { text: "Evening shuttle positions for the University of Ghana.", size: 11, font: "F1", gap: 15, color: "0.08 0.19 0.34" },
  { text: "Harbour Desk  -  Next.js, TypeScript, PostgreSQL  -  2023", size: 11, font: "F2", gap: 14, color: "0.08 0.19 0.34" },
  { text: "Shipment status for a freight desk at Tema Port.", size: 11, font: "F1", gap: 18, color: "0.08 0.19 0.34" },
  { text: "SKILLS", size: 12, font: "F2", gap: 18, color: "0.1 0.45 0.85" },
  {
    text: "TypeScript, React, Next.js, Node.js, PostgreSQL, React Native, interface design, testing, and deployment.",
    size: 11,
    font: "F1",
    gap: 16,
    color: "0.08 0.19 0.34",
  },
];

function buildPages() {
  const pages = [];
  let commands = [];
  let y = 790;

  function pushText(line, size, font, color) {
    commands.push(`BT /${font} ${size} Tf ${color} rg ${left} ${y.toFixed(1)} Td (${escapePdf(line)}) Tj ET`);
  }

  for (const block of blocks) {
    const lines = wrap(block.text, block.size);
    const needed = lines.length * (block.size + 4) + 6;
    if (y - needed < 48) {
      pages.push(commands.join("\n"));
      commands = [];
      y = 790;
    }
    for (const line of lines) {
      pushText(line, block.size, block.font, block.color);
      y -= block.size + 4;
    }
    y -= Math.max(0, block.gap - (block.size + 4));
  }
  pages.push(commands.join("\n"));
  return pages;
}

const pages = buildPages();
const objects = [];

function add(body) {
  objects.push(body);
  return objects.length;
}

const fontRegular = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
const fontBold = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
const pageIds = [];

for (const stream of pages) {
  const content = add(`<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`);
  const page = add(
    `<< /Type /Page /Parent PAGES 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents ${content} 0 R /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R >> >> >>`,
  );
  pageIds.push(page);
}

const pagesId = add(`<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] >>`);
const catalogId = add(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);

let pdf = "%PDF-1.4\n";
const offsets = [0];
for (let index = 0; index < objects.length; index += 1) {
  offsets.push(Buffer.byteLength(pdf));
  const body = objects[index].replace("PAGES 0 R", `${pagesId} 0 R`);
  pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
}

const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let index = 1; index < offsets.length; index += 1) {
  pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xref}\n%%EOF`;

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "cv", "pixel-craft-cv.pdf");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, pdf);
console.log(`Wrote ${out}`);
