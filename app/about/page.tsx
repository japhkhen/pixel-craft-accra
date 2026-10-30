import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { DownloadIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { SkillBars } from "@/components/SkillBars";
import { Timeline } from "@/components/Timeline";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Pixel Craft is a software engineer in East Legon, Accra. Read about his practice, skills, work history, and studies at the University of Ghana.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        script="About me"
        title="A software engineer who stays after launch"
        text="I build products for people who are busy while they use them. Market stalls, clinic desks, freight counters, and small product teams."
      />
      <section className="py-12">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] shadow-lift">
                <Image
                  src="/images/pixel-craft.jpg"
                  alt="Pixel Craft, a Ghanaian software engineer, in a navy suit"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-[center_18%]"
                />
              </div>
              <p className="absolute bottom-4 left-4 rounded-2xl bg-white px-4 py-3 text-sm font-extrabold shadow-card">
                East Legon, Accra
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">The practice</h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-muted">
                <p>
                  Pixel Craft is my studio in Accra. I design the screen and I write the software behind it, mostly in TypeScript. The work is React and Next.js on the front, Node when a service is needed, and the unglamorous parts that keep a product standing: backups, permissions, and the words on the button.
                </p>
                <p>
                  I studied computer science at the University of Ghana, then spent four years inside product teams before opening this practice in 2023. I work in English and Twi, and I would rather explain a technical choice in plain language than hide it in a diagram.
                </p>
                <p>
                  I am in East Legon, I visit clients across Accra, and I keep hours that overlap a late UK afternoon and a morning on the US East Coast. Call {site.phones[0].display} or {site.phones[1].display}.
                </p>
              </div>
              <a
                href={site.cv}
                download
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-forest transition hover:-translate-y-0.5 hover:bg-lime-deep"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-6 shadow-card sm:p-8">
              <SkillBars />
            </div>
            <div className="rounded-[28px] bg-white p-6 shadow-card sm:p-8">
              <Timeline />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
