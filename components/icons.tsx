import type { ReactNode } from "react";

type IconProps = { className?: string };

function Svg({ className = "h-5 w-5", children }: IconProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      {children}
    </svg>
  );
}

export function PlaneIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        fill="currentColor"
        d="M2.4 11.1 21.2 3.8c.6-.2 1.1.4.8 1L16.4 20.8c-.2.6-1 .7-1.4.2l-3.7-4.7-4.8 2.2c-.6.3-1.3-.2-1.2-.9l.7-4.4-3.9-1.3c-.7-.2-.6-1.2.3-1.3Z"
      />
    </Svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        fill="currentColor"
        d="M12 2.5 19.5 5.4v6.2c0 4.6-3.1 8.2-7.5 9.9-4.4-1.7-7.5-5.3-7.5-9.9V5.4L12 2.5Z"
      />
      <path d="M8.2 12.1 10.8 14.6 15.8 9.4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function CaseIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 12.5h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function HeadsetIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M4.5 13.5v-1a7.5 7.5 0 0 1 15 0v1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="3" y="13" width="4" height="6.5" rx="1.4" fill="currentColor" />
      <rect x="17" y="13" width="4" height="6.5" rx="1.4" fill="currentColor" />
      <path d="M19 19.5v.5a2.5 2.5 0 0 1-2.5 2.5H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function MonitorIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3.5 21 8 12 12.5 3 8 12 3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 12.2 12 16.7 21 12.2M3 16.2 12 20.7 21 16.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </Svg>
  );
}

export function NodesIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="6" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="17" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8.2 15.4 7.2M7.4 8.8 10.6 15.2M15.6 8.4 13.2 15" stroke="currentColor" strokeWidth="1.8" />
    </Svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M5 6.5h14a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 19 16.5H10l-4.2 3v-3H5A1.5 1.5 0 0 1 3.5 15V8A1.5 1.5 0 0 1 5 6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="11" r="2" fill="currentColor" />
    </Svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v4.5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12.5 9.2 16.5 19 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 4v10M8 10l4 4 4-4M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </Svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        d="M8 3.8h2.2l1.2 3.1-1.6 1a12 12 0 0 0 5.3 5.3l1-1.6 3.1 1.2V15a2 2 0 0 1-2.2 2A14.2 14.2 0 0 1 6 6a2 2 0 0 1 2-2.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function GithubIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        fill="currentColor"
        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.48.08.65-.2.65-.46v-1.6c-2.66.58-3.22-1.14-3.22-1.14-.44-1.1-1.07-1.4-1.07-1.4-.87-.6.07-.58.07-.58.96.07 1.47.99 1.47.99.86 1.47 2.25 1.05 2.8.8.09-.62.34-1.05.61-1.29-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.9 1-2.56-.1-.24-.43-1.22.1-2.54 0 0 .8-.26 2.64 1a9.2 9.2 0 0 1 4.8 0c1.84-1.26 2.64-1 2.64-1 .53 1.32.2 2.3.1 2.54.63.66 1 1.52 1 2.56 0 3.67-2.24 4.47-4.37 4.71.35.3.66.9.66 1.82v2.7c0 .26.17.55.66.46A9.5 9.5 0 0 0 12 2.5Z"
      />
    </Svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        fill="currentColor"
        d="M6.5 9.5H3.8V20h2.7V9.5ZM5.15 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2ZM20.2 20h-2.7v-5.6c0-1.55-.55-2.4-1.7-2.4-1.05 0-1.63.7-1.9 1.38-.1.24-.08.58-.08.92V20h-2.7s.04-9.15 0-10.5h2.7v1.72c.36-.55 1.25-1.9 3.15-1.9 2.22 0 3.23 1.45 3.23 4.2V20Z"
      />
    </Svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path fill="currentColor" d="M4 4.5h3.2l4.1 5.6 4.7-5.6H19l-6.2 7.3L19.4 19.5h-3.2l-4.5-6.1-5.1 6.1H4.2l6.7-7.9L4 4.5Z" />
    </Svg>
  );
}

export function QuoteIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        fill="currentColor"
        d="M10 7.5H6.2C5 9.2 4.5 11 4.5 13.2V17H10V7.5Zm9.5 0H15.7c-1.2 1.7-1.7 3.5-1.7 5.7V17h5.5V7.5Z"
      />
    </Svg>
  );
}
