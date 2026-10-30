import Link from "next/link";
import { Logo } from "@/components/Logo";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon, XIcon } from "@/components/icons";
import { nav, site } from "@/lib/data";

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  X: XIcon,
} as const;

export function Footer() {
  return (
    <footer className="mt-16 bg-forest text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/80">
            Software crafted in Accra for teams who want the product to stay clear after launch.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-extrabold tracking-[0.16em] text-white/70">VISIT</h2>
          <p className="mt-3 flex items-start gap-2 text-sm leading-6">
            <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
            {site.address}
          </p>
          <a href={`mailto:${site.email}`} className="mt-2 inline-flex items-center gap-2 text-sm hover:underline">
            <MailIcon className="h-4 w-4" />
            {site.email}
          </a>
        </div>
        <div>
          <h2 className="text-xs font-extrabold tracking-[0.16em] text-white/70">CALL</h2>
          <ul className="mt-3 space-y-2">
            {site.phones.map((phone) => (
              <li key={phone.tel}>
                <a href={`tel:${phone.tel}`} className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">
                  <PhoneIcon className="h-4 w-4" />
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-extrabold tracking-[0.16em] text-white/70">EXPLORE</h2>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex gap-2">
            {site.socials.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Pixel Craft on ${social.label}`}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-lime hover:text-forest"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/70 sm:px-6">
          © {new Date().getFullYear()} Pixel Craft. Accra, Ghana.
        </p>
      </div>
    </footer>
  );
}
