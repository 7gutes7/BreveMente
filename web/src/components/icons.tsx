import type { SVGProps } from "react";

type IconName =
  | "mic"
  | "sparkles"
  | "brain"
  | "book"
  | "certificate"
  | "clipboard"
  | "chart"
  | "calendar"
  | "whatsapp"
  | "heart"
  | "target"
  | "shield"
  | "clock"
  | "arrow-right"
  | "arrow-left"
  | "check"
  | "menu"
  | "x"
  | "play"
  | "quote"
  | "users";

const paths: Record<IconName, React.ReactNode> = {
  mic: (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
    </>
  ),
  brain: (
    <path d="M12 4a4 4 0 0 0-3.5 6A3.5 3.5 0 0 0 6 13a3.5 3.5 0 0 0 2 6.5V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.5A3.5 3.5 0 0 0 18 13a3.5 3.5 0 0 0-2.5-3A4 4 0 0 0 12 4zM12 5v16" />
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </>
  ),
  certificate: (
    <>
      <rect x="4" y="4" width="16" height="12" rx="2" />
      <path d="M8 22l1.2-2H14.8L16 22M9 12h6" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h-6V4z" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="15" y2="14" />
    </>
  ),
  chart: (
    <>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </>
  ),
  whatsapp: (
    <path d="M20.5 3.5A11.7 11.7 0 0 0 12 0C5.9 0 1 4.9 1 11c0 1.9.5 3.8 1.5 5.5L1 23l6.7-1.8A11.6 11.6 0 0 0 12 22c6.1 0 11-4.9 11-11 0-2.9-1.2-5.7-3.5-7.5zM12 20.3c-1.7 0-3.3-.5-4.8-1.3l-.3-.2-4 1.1 1.1-3.9-.3-.4A9.1 9.1 0 0 1 2.9 11C2.9 6 7 1.9 12 1.9c2.5 0 4.8 1 6.6 2.7a9.2 9.2 0 0 1 2.6 6.5c0 5-4.1 9.2-9.2 9.2z" />
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  shield: (
    <path d="M12 2l8 3.5V10c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5.5L12 2z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-left": <path d="M19 12H5M11 6l-6 6 6 6" />,
  check: <path d="M4 12l5 5L20 6" />,
  menu: (
    <>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
  x: (
    <>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </>
  ),
  play: <polygon points="7 4 20 12 7 20" />,
  quote: (
    <path d="M7.2 6C4.9 7.6 3.5 9.9 3.5 12.9V18h5.4v-5.7H5.6c.2-1.7 1.1-3 2.8-4L7.2 6zm9.3 0c-2.3 1.6-3.7 3.9-3.7 6.9V18h5.4v-5.7h-3.3c.2-1.7 1.1-3 2.8-4L16.5 6z" />
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
};

export type { IconName };

export function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
