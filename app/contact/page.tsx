import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon, XIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Pixel Craft in East Legon, Accra. Call 025 620 6383 or 055 314 0985, or leave a note. Download the CV.",
};

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  X: XIcon,
} as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        script="Contact"
        title="Tell me what you want to ship"
        text="A short brief is enough. If you would rather talk, both Accra numbers are answered on weekdays."
      />
      <section className="py-12">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="rounded-[28px] bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-sm font-extrabold tracking-[0.18em] text-sky uppercase">Studio</h2>
              <p className="mt-3 flex items-start gap-2 text-sm leading-6">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                {site.address}
              </p>
              <ul className="mt-4 space-y-2">
                {site.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a href={`tel:${phone.tel}`} className="inline-flex items-center gap-2 text-base font-extrabold text-ink hover:text-sky">
                      <PhoneIcon className="h-4 w-4 text-sky" />
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
              <a href={`mailto:${site.email}`} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-sky">
                <MailIcon className="h-4 w-4" />
                {site.email}
              </a>
              <a
                href={site.cv}
                download
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-forest transition hover:bg-lime-deep"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
              <ul className="mt-6 flex gap-2">
                {site.socials.map((social) => {
                  const Icon = socialIcons[social.label];
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Pixel Craft on ${social.label}`}
                        className="grid h-11 w-11 place-items-center rounded-full bg-mist text-forest transition hover:bg-lime"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </aside>
            <Suspense fallback={<p className="text-sm text-muted">Loading the form…</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
