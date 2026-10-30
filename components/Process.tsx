import { Container } from "@/components/Container";
import { steps } from "@/lib/data";

export function Process() {
  return (
    <section className="py-6">
      <Container>
        <div className="rounded-[32px] bg-white px-5 py-8 shadow-card sm:px-8">
          <h2 className="text-center text-sm font-extrabold tracking-[0.18em] text-forest uppercase">How a project starts</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="relative text-center md:text-left">
                {index < steps.length - 1 ? (
                  <span className="absolute top-6 right-0 hidden h-px w-8 bg-line md:block" aria-hidden="true" />
                ) : null}
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-lime text-lg font-extrabold text-forest md:mx-0">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-extrabold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
