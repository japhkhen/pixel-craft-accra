"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { ArrowIcon, CloseIcon, GithubIcon, LinkedinIcon, MailIcon, MenuIcon, XIcon } from "@/components/icons";
import { nav, site } from "@/lib/data";

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  X: XIcon,
} as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-lime text-forest">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs font-bold sm:px-6">
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" aria-hidden="true" />
            <span className="hidden sm:inline">Software engineer based in Accra, Ghana</span>
            <span className="sm:hidden">Accra, Ghana</span>
          </p>
          <a href={`mailto:${site.email}`} className="hidden items-center gap-1.5 md:inline-flex">
            <MailIcon className="h-3.5 w-3.5" />
            {site.email}
          </a>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Follow</span>
            {site.socials.map((social) => {
              const Icon = socialIcons[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Pixel Craft on ${social.label}`}
                  className="grid h-6 w-6 place-items-center rounded-full transition hover:bg-forest hover:text-lime"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-forest text-white shadow-lg">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-semibold transition hover:text-lime ${active ? "text-lime" : "text-white/90"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={site.cv}
              download
              className="hidden items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-bold text-forest transition hover:-translate-y-0.5 hover:bg-lime-deep lg:inline-flex"
            >
              Download CV
              <ArrowIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav id="mobile-nav" className="border-t border-white/10 bg-forest px-4 py-4 lg:hidden" aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-2xl px-4 py-3 text-base font-semibold ${active ? "bg-lime text-forest" : "text-white/90"}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <a
              href={site.cv}
              download
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lime px-4 py-3 text-sm font-bold text-forest"
            >
              Download CV
              <ArrowIcon className="h-4 w-4" />
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
