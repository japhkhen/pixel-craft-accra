import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/PageHero";
import { ProjectBrowser } from "@/components/ProjectBrowser";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software by Pixel Craft: inventory for Makola, a mobile-money checkout, a Legon shuttle map, and a Tema freight desk.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        script="Selected work"
        title="Products built for real counters"
        text="Each project started with someone who was already busy. The software had to fit the counter, the phone, or the desk they already had."
      />
      <Suspense fallback={<p className="px-4 py-12 text-center text-sm text-muted">Loading projects…</p>}>
        <ProjectBrowser />
      </Suspense>
    </>
  );
}
