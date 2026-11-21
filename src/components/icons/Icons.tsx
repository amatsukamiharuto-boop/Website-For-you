import type { SVGProps } from "react";
import type { CardIconName } from "@/data/keepsake";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const BatteryIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="8" width="15" height="9" rx="1.5" />
    <path d="M21 11v3M6.5 11.5v2" />
  </Base>
);

export const CloudIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 18a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.5a4.25 4.25 0 0 1 0 8.5H7z" />
  </Base>
);

export const MirrorIcon = (p: IconProps) => (
  <Base {...p}>
    <ellipse cx="12" cy="9.5" rx="5" ry="6.5" />
    <path d="M12 16v5M9 21h6" />
  </Base>
);

export const PinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21v-6M8 4h8l-1 6 3 3H6l3-3-1-6z" />
  </Base>
);

export const PlusIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 6v12M6 12h12" />
  </Base>
);

export const ArrowDownIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Base>
);

export const KeyIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="8" cy="12" r="3.5" />
    <path d="M11.5 12H21M17 12v3M20 12v2" />
  </Base>
);

export const SprigIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21V8M12 14c-3.5 0-5-2-5-5 3.5 0 5 2 5 5zM12 11c3.5 0 5-2 5-5-3.5 0-5 2-5 5z" />
  </Base>
);

export const DropIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3.5c3.5 4.5 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 2.5-6.5 6-11z" />
  </Base>
);

export const MoonIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z" />
  </Base>
);

export const PathIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 21c0-5 12-4 12-9S9 9 9 5c0-1 .5-1.8 1.5-2" />
    <path d="M14 21h5" />
  </Base>
);

export const SunIcon = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
  </Base>
);

/** Toples kaca dengan beberapa lipatan kertas di dalam. */
export function JarIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 200"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M48 22h64v14H48z" />
      <path d="M54 36c-18 8-26 22-26 42v86c0 12 8 20 20 20h64c12 0 20-8 20-20V78c0-20-8-34-26-42" />
      <path d="M44 62c0 0 8-4 14-4M40 150v-30" opacity="0.5" />
      <g stroke="#C86D51">
        <path d="M60 164l16-8 8 14-16 8z" />
        <path d="M88 168l14-12 10 12-14 10z" />
        <path d="M70 140l12-12 12 8-10 12z" />
      </g>
      <g stroke="#6B7F72">
        <path d="M96 140l10-10 12 6-8 12z" />
        <path d="M50 142l12-4 4 12-12 4z" />
      </g>
    </svg>
  );
}

const CARD_ICONS = {
  battery: BatteryIcon,
  cloud: CloudIcon,
  mirror: MirrorIcon,
  pin: PinIcon,
  drop: DropIcon,
  moon: MoonIcon,
  path: PathIcon,
  sun: SunIcon,
} as const;

export function CardIcon({ name, ...rest }: { name: CardIconName } & IconProps) {
  const Icon = CARD_ICONS[name];
  return <Icon {...rest} />;
}
