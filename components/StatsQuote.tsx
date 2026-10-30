import { Container } from "@/components/Container";
import { QuoteIcon } from "@/components/icons";
import { stats } from "@/lib/data";

export function StatsQuote() {
  return (
    <section className="py-8">
      <Container>
        <div className="grid items-stretch gap-4 lg:grid-cols-[1.35fr_0.8fr]">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-white/20 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="sky-wash px-4 py-7 text-center text-white">
                <p className="text-3xl font-extrabold tracking-tight">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold text-white/85">{stat.label}</p>
              </div>
            ))}
          </div>
          <blockquote className="relative overflow-hidden rounded-[28px] bg-white p-6 shadow-card">
            <span aria-hidden="true" className="pointer-events-none absolute top-0 right-0 border-t-[28px] border-l-[28px] border-t-mist border-l-transparent" />
            <QuoteIcon className="h-8 w-8 text-sky" />
            <p className="mt-3 text-base leading-7 font-semibold text-ink">
              I would rather ship a smaller product that staff actually open than a large one that needs a training day.
            </p>
            <footer className="mt-4 text-sm text-muted">Pixel Craft, Accra</footer>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
