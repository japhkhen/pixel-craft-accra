import Image from "next/image";
import { ArrowIcon, PhoneIcon } from "@/components/icons";
import { site } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-lime/10 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold">
            <span className="tracking-widest text-lime" aria-hidden="true">
              ★★★★★
            </span>
            Open for new work in Accra
          </p>
          <h1 className="mt-6 text-[2.6rem] leading-[0.92] font-extrabold tracking-tight uppercase sm:text-6xl lg:text-7xl">
            Next-gen
            <br />
            software for
            <br />
            <span className="text-lime">real work</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-white/80 sm:text-lg">
            I design and build web products, mobile tools, and the services behind them for teams who want the work to stay clear after launch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.cv}
              download
              className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-forest transition hover:-translate-y-0.5 hover:bg-lime-deep"
            >
              Download CV
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={`tel:${site.phones[1].tel}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-3 text-sm font-bold transition hover:bg-white/10"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phones[1].display}
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -right-3 -bottom-3 h-28 w-28 rounded-full bg-lime sm:h-36 sm:w-36" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-lift sm:aspect-[5/4]">
            <Image
              src="/images/pixel-craft.jpg"
              alt="Pixel Craft, a Ghanaian software engineer, in a navy suit"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover object-[center_18%]"
            />
          </div>
          <p className="absolute bottom-4 left-4 rounded-full bg-lime px-4 py-2 text-sm font-extrabold text-forest shadow-card">
            East Legon, Accra
          </p>
        </div>
      </div>
    </section>
  );
}
