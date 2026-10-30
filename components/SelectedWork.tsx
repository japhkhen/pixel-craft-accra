import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export function SelectedWork() {
  return (
    <section className="py-4">
      <Container>
        <div className="rounded-[32px] bg-white p-5 shadow-card sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold text-forest">
                <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
                Our services
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight">Work built for real counters</h2>
            </div>
            <Link href="/projects" className="text-sm font-bold text-forest underline decoration-lime decoration-2 underline-offset-4 transition hover:decoration-forest">
              View all projects
            </Link>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
