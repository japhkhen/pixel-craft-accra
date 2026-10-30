"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowIcon, ChatIcon, LayersIcon, MonitorIcon, NodesIcon } from "@/components/icons";
import { focuses } from "@/lib/data";

const icons = {
  web: MonitorIcon,
  platforms: LayersIcon,
  apis: NodesIcon,
  advisory: ChatIcon,
} as const;

export function FocusCard() {
  const [activeId, setActiveId] = useState<(typeof focuses)[number]["id"]>(focuses[0].id);
  const active = focuses.find((item) => item.id === activeId) ?? focuses[0];

  return (
    <div className="overflow-hidden rounded-[28px] bg-white text-ink shadow-lift">
      <div className="grid lg:grid-cols-[240px_1fr]">
        <div className="relative h-64 sm:h-72 lg:h-auto">
          <Image
            src="/images/pixel-craft.jpg"
            alt="Pixel Craft, a Ghanaian software engineer, in a navy suit"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 240px"
            className="object-cover object-[center_18%]"
          />
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex gap-1 overflow-x-auto border-b border-line pb-3" role="tablist" aria-label="Kinds of work">
            {focuses.map((item) => {
              const Icon = icons[item.id];
              const selected = item.id === active.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`focus-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls="focus-panel"
                  onClick={() => setActiveId(item.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-sm font-bold transition ${
                    selected ? "bg-sky text-white" : "text-muted hover:bg-mist hover:text-ink"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
          <div
            id="focus-panel"
            role="tabpanel"
            aria-labelledby={`focus-tab-${active.id}`}
            className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <Fact label="Based in" value="Accra, Ghana" />
            <Fact label="Practice" value="Software engineer" />
            <Fact label="Focus" value={active.focus} />
            <Fact label="Status" value="Open for new work" />
          </div>
          <div className="mt-5 flex flex-col gap-4 border-t border-line pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-muted">{active.detail}</p>
            <Link
              href={`/projects?kind=${active.kind}`}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-sky transition hover:gap-3"
            >
              See this kind of work
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-mist px-3 py-3">
      <p className="text-[11px] font-bold tracking-[0.14em] text-muted uppercase">{label}</p>
      <p className="mt-1 text-sm font-extrabold text-ink">{value}</p>
    </div>
  );
}
