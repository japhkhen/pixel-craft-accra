"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, type ProjectCategory } from "@/lib/data";

const filters: Array<"All" | ProjectCategory> = ["All", "Web", "Mobile", "Platforms"];

const kindToFilter: Record<string, ProjectCategory> = {
  web: "Web",
  mobile: "Mobile",
  platforms: "Platforms",
};

export function ProjectBrowser() {
  const params = useSearchParams();
  const requested = kindToFilter[params.get("kind") ?? ""] ?? "All";
  const [filter, setFilter] = useState(requested);

  useEffect(() => {
    setFilter(requested);
  }, [requested]);
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <section className="py-12">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-sm font-extrabold tracking-[0.18em] text-sky uppercase">Project cards</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
              Four products from Accra and Tema. Open a card for the story, the outcome, and the stack.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {filters.map((item) => {
              const selected = item === filter;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setFilter(item)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    selected ? "bg-lime text-forest" : "bg-white text-muted shadow-card hover:text-ink"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {visible.length === 0 ? <p className="mt-8 text-sm text-muted">Nothing in that group yet.</p> : null}
      </Container>
    </section>
  );
}
