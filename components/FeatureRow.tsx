import Link from "next/link";
import { ArrowIcon, CaseIcon, HeadsetIcon, MonitorIcon, ShieldIcon } from "@/components/icons";
import { principles } from "@/lib/data";

const icons = {
  plane: MonitorIcon,
  shield: ShieldIcon,
  headset: HeadsetIcon,
  case: CaseIcon,
} as const;

const tones = [
  "bg-white text-ink",
  "bg-lime text-forest",
  "bg-forest text-white",
] as const;

export function FeatureRow() {
  const cards = principles.slice(0, 3);

  return (
    <section className="bg-mist py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-bold text-forest">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
            Our approach
          </p>
          <h2 className="mt-3 max-w-md text-3xl font-extrabold tracking-tight sm:text-4xl">
            Essential features for software that people finish using
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-muted lg:justify-self-end">
          The work is typed, tested, and written so the next person is not guessing. Screens stay obvious on a mid-range Android, and the plan is said in plain language.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl gap-5 px-4 sm:px-6 lg:grid-cols-3">
        {cards.map((item, index) => {
          const Icon = icons[item.icon];
          const tone = tones[index];
          const light = index !== 2;
          return (
            <article key={item.title} className={`flex flex-col rounded-[28px] p-6 shadow-card ${tone}`}>
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${light ? "bg-mist text-forest" : "bg-white/10 text-lime"}`}>
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-extrabold tracking-tight">{item.title}</h3>
              <p className={`mt-2 flex-1 text-sm leading-6 ${index === 2 ? "text-white/75" : index === 1 ? "text-forest/80" : "text-muted"}`}>{item.text}</p>
              <Link
                href="/projects"
                className={`mt-6 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${
                  index === 1 ? "bg-forest text-lime" : index === 2 ? "bg-lime text-forest" : "bg-mist text-forest"
                }`}
              >
                Explore more
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
