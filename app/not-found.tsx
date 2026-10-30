import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="bg-forest px-4 py-24 text-center text-white">
      <p className="text-sm font-bold tracking-[0.16em] text-lime uppercase">Wrong turn</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">That page is not on this site</h1>
      <p className="mt-3 text-white/80">The link may be old. The work is still on the projects page.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-lime px-5 py-3 text-sm font-bold text-forest transition hover:-translate-y-0.5 hover:bg-lime-deep"
      >
        Back to home
      </Link>
    </section>
  );
}
