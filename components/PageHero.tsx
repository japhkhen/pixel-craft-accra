import { Container } from "@/components/Container";

export function PageHero({
  script,
  title,
  text,
}: {
  script: string;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-forest text-white">
      <Container className="py-14 sm:py-20">
        <p className="inline-flex items-center gap-2 text-sm font-bold text-lime">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
          {script}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">{title}</h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-lg">{text}</p>
      </Container>
    </section>
  );
}
