import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-white">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime text-sm font-extrabold tracking-tight text-forest">
        PC
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-extrabold tracking-tight">Pixel Craft</span>
        <span className="block text-[10px] font-semibold tracking-[0.16em] text-white/65">SOFTWARE ENGINEER</span>
      </span>
    </Link>
  );
}
