import Link from "next/link";
import { Container } from "@/components/Container";
import { CheckIcon } from "@/components/icons";
import { engagements } from "@/lib/data";

export function Engagements() {
  return (
    <section className="py-8">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-forest px-5 py-8 text-white sm:px-8 sm:py-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="relative">
              <h2 className="text-sm font-extrabold tracking-[0.18em] uppercase">Ways to work</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/90">
                Tell me what you need and I will reply with a scope, a sequence, and a fee. Nothing is billed from this page.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3 md:items-stretch">
              {engagements.map((item) => (
                <article
                  key={item.id}
                  className={`relative flex flex-col rounded-[24px] bg-white p-5 text-ink shadow-card ${
                    item.featured ? "md:-translate-y-3 ring-2 ring-white" : ""
                  }`}
                >
                  {item.featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-3 py-1 text-[11px] font-bold tracking-wide text-forest">
                      Most requested
                    </span>
                  ) : null}
                  <h3 className="text-lg font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?offer=${item.id}`}
                    className={`mt-5 inline-flex justify-center rounded-full px-4 py-2.5 text-sm font-bold transition ${
                      item.featured ? "bg-lime text-forest hover:bg-lime-deep" : "border border-line text-ink hover:border-forest hover:text-forest"
                    }`}
                  >
                    Discuss this
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
