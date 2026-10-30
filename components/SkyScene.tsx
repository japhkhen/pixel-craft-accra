export function SkyScene({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-8 left-[8%] h-14 w-48 rounded-full bg-white/25 blur-2xl" />
        <div className="absolute top-16 right-[12%] h-12 w-40 rounded-full bg-white/20 blur-2xl" />
        <svg className="absolute top-6 right-[8%] hidden w-40 sm:block" viewBox="0 0 180 120">
          <path
            d="M10 80 C 50 80, 60 30, 95 36 C 120 42, 118 78, 160 52"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="5 7"
            strokeLinecap="round"
          />
          <polygon points="118,18 168,48 132,58" fill="white" />
          <polygon points="118,18 132,58 122,66" fill="#d7ecff" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative mx-auto h-72 w-full max-w-xl sm:h-80 lg:h-[440px]" aria-hidden="true">
      <svg viewBox="0 0 640 520" className="h-full w-full overflow-visible">
        <ellipse cx="90" cy="78" rx="100" ry="30" fill="white" opacity="0.35" />
        <ellipse cx="190" cy="96" rx="70" ry="20" fill="white" opacity="0.28" />
        <ellipse cx="500" cy="60" rx="110" ry="28" fill="white" opacity="0.22" />
        <ellipse cx="360" cy="40" rx="60" ry="16" fill="white" opacity="0.2" />

        <path
          d="M20 250 C 120 250, 150 130, 250 148 C 340 164, 320 250, 430 190"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeDasharray="7 9"
          strokeLinecap="round"
        />
        <path d="M418 178 l18 8 -16 10" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        <g className="plane-float">
          <polygon points="400,48 630,150 455,168" fill="white" />
          <polygon points="400,48 455,168 438,188" fill="#d7ecff" />
          <polygon points="455,168 630,150 500,205" fill="#eef6ff" />
          <polygon points="455,168 500,205 438,188" fill="#c5dff8" />
          <polygon points="455,168 500,205 478,176" fill="white" opacity="0.85" />
        </g>

        <polygon points="20,520 130,300 250,520" fill="white" opacity="0.88" />
        <polygon points="130,300 250,520 175,520" fill="#d7ecff" />
        <polygon points="150,520 230,360 320,520" fill="white" opacity="0.72" />

        <polygon points="250,520 318,150 390,520" fill="white" />
        <polygon points="318,150 390,520 348,520" fill="#e7f3ff" />
        <polygon points="300,210 336,210 330,242 306,242" fill="#1a8aef" opacity="0.28" />
        <polygon points="306,258 330,258 326,286 310,286" fill="#1a8aef" opacity="0.18" />
        <polygon points="308,118 328,118 318,150" fill="white" />

        <polygon points="380,520 510,120 640,520" fill="white" opacity="0.95" />
        <polygon points="510,120 640,520 555,520" fill="#d4eaff" />
        <polygon points="470,520 545,280 620,520" fill="white" opacity="0.55" />
      </svg>
    </div>
  );
}
