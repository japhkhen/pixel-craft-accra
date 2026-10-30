"use client";

import { useEffect, useState } from "react";
import { skills } from "@/lib/data";

export function SkillBars() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setReady(true);
      return;
    }
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div>
      <h2 className="text-sm font-extrabold tracking-[0.18em] text-sky uppercase">Skills</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        A working confidence guide, not a certificate. The longer bar is where I spend most of my week.
      </p>
      <ul className="mt-6 space-y-4">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div className="flex items-center justify-between text-sm font-bold">
              <span>{skill.name}</span>
              <span className="text-sky">{skill.level}%</span>
            </div>
            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-line" role="img" aria-label={`${skill.name}: ${skill.level} percent`}>
              <div className="skill-bar h-full rounded-full bg-lime" style={{ width: ready ? `${skill.level}%` : "0%" }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
