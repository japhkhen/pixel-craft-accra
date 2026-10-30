import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <div>
      <h2 className="text-sm font-extrabold tracking-[0.18em] text-sky uppercase">Experience and education</h2>
      <ol className="relative mt-6 space-y-6 border-l-2 border-line pl-6">
        {timeline.map((item) => (
          <li key={item.period} className="relative">
            <span className="absolute top-1.5 -left-[31px] h-3.5 w-3.5 rounded-full border-2 border-white bg-lime" aria-hidden="true" />
            <p className="text-xs font-bold tracking-wide text-sky uppercase">{item.period}</p>
            <h3 className="mt-1 text-lg font-extrabold">{item.title}</h3>
            <p className="text-sm font-semibold text-muted">{item.place}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
