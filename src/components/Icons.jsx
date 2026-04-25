const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
}

export function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z" />
    </svg>
  )
}

export function LinkedinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function GithubIcon() {
  return (
    <svg {...iconProps}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.4c3.4-.4 7-1.7 7-7.5a5.8 5.8 0 0 0-1.6-4 5.4 5.4 0 0 0-.1-4S18 .6 15 2.4a13.4 13.4 0 0 0-7 0C5 .6 3.7 1 3.7 1a5.4 5.4 0 0 0-.1 4A5.8 5.8 0 0 0 2 9c0 5.8 3.6 7.1 7 7.5a4.8 4.8 0 0 0-1 3.4v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  )
}

export function BrainIcon() {
  return (
    <svg {...iconProps}>
      <path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3.5 3.5 0 0 0 7.5 17H9" />
      <path d="M15 3a3 3 0 0 1 3 3 3 3 0 0 1 2 5.2A3.5 3.5 0 0 1 16.5 17H15" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
      <path d="M9 8H7" />
      <path d="M15 8h2" />
      <path d="M9 13H6" />
      <path d="M15 13h3" />
    </svg>
  )
}

export function PulseIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  )
}

export function TagIcon() {
  return (
    <svg {...iconProps}>
      <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
      <circle cx="7.5" cy="7.5" r=".5" />
    </svg>
  )
}

export function CpuIcon() {
  return (
    <svg {...iconProps}>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M8 2v3" />
      <path d="M12 2v3" />
      <path d="M16 2v3" />
      <path d="M8 19v3" />
      <path d="M12 19v3" />
      <path d="M16 19v3" />
      <path d="M2 8h3" />
      <path d="M2 12h3" />
      <path d="M2 16h3" />
      <path d="M19 8h3" />
      <path d="M19 12h3" />
      <path d="M19 16h3" />
    </svg>
  )
}
