"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type MouseEvent } from "react";
import { ArrowIcon, ClockIcon, PinIcon } from "@/components/icons";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function open() {
    dialogRef.current?.showModal();
  }

  function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const inside =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    if (!inside) event.currentTarget.close();
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-[24px] bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 z-10 border-t-[26px] border-l-[26px] border-t-white border-l-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-extrabold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-muted">
          <span className="inline-flex items-center gap-1">
            <PinIcon className="h-3.5 w-3.5" />
            {project.place}
          </span>
          <span className="inline-flex items-center gap-1">
            <ClockIcon className="h-3.5 w-3.5" />
            {project.year}
          </span>
        </div>
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xl font-extrabold text-sky">{project.stack[0]}</p>
            <p className="text-xs font-medium text-muted">{project.stack.slice(1).join(" · ")}</p>
          </div>
          <button
            type="button"
            onClick={open}
            aria-label={`Read the story of ${project.title}`}
            className="grid h-11 w-11 place-items-center rounded-full border border-forest/20 text-forest transition group-hover:bg-lime group-hover:text-forest"
          >
            <ArrowIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        onClick={closeOnBackdrop}
        className="w-[min(100%-1.5rem,40rem)] rounded-[28px] bg-white text-ink shadow-lift"
      >
        <div className="p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold tracking-[0.16em] text-sky uppercase">{project.category}</p>
              <h3 className="mt-1 text-2xl font-extrabold">{project.title}</h3>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="rounded-full px-3 py-2 text-sm font-bold text-muted hover:bg-mist hover:text-ink"
            >
              Close
            </button>
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">{project.story}</p>
          <p className="mt-4 text-sm leading-7 font-semibold text-ink">{project.outcome}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li key={item} className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-sky">
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-forest transition hover:bg-lime-deep"
            onClick={() => dialogRef.current?.close()}
          >
            Discuss a similar project
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </dialog>
    </article>
  );
}
