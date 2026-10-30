import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { skills } from "@/lib/data";

export function WhoWeAre() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="grid gap-4">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[28px]">
            <Image
              src="/images/pixel-craft.jpg"
              alt="Pixel Craft, a Ghanaian software engineer, in a navy suit"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover object-[center_18%]"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-[0.72fr_1.28fr]">
            <div className="flex flex-col justify-between rounded-[28px] bg-lime p-5 text-forest">
              <CheckIcon className="h-6 w-6" />
              <div>
                <p className="text-4xl font-extrabold tracking-tight">28</p>
                <p className="mt-1 text-sm font-bold leading-5">Products shipped from Accra</p>
              </div>
            </div>
            <div className="relative min-h-40 overflow-hidden rounded-[28px]">
              <Image
                src="/images/project-checkout.jpg"
                alt="A Ghanaian shop attendant holding a phone with a checkout screen"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-bold text-forest">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden="true" />
            Who I am
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            A software engineer who stays after launch
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Pixel Craft is my studio in East Legon. I design the screen and write the software behind it, mostly in TypeScript, for market stalls, clinic desks, freight counters, and small product teams.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-forest transition hover:-translate-y-0.5 hover:bg-lime-deep"
            >
              More about me
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image src="/images/pixel-craft.jpg" alt="" fill sizes="44px" className="object-cover object-[center_18%]" />
              </span>
              <span>
                <span className="block text-sm font-extrabold">Pixel Craft</span>
                <span className="block text-xs text-muted">Software engineer, Accra</span>
              </span>
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] bg-mist p-5">
              <p className="text-3xl font-extrabold tracking-tight">6+</p>
              <p className="mt-1 text-sm font-semibold text-muted">Years building software</p>
            </div>
            <div className="rounded-[24px] bg-mist p-5">
              <p className="text-sm font-extrabold">Premium skills</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.slice(0, 6).map((skill) => (
                  <li key={skill.name} className="rounded-full border border-line bg-white px-2.5 py-1 text-[10px] font-bold tracking-wide text-forest uppercase">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
