interface YachtSilhouetteProps {
  className?: string;
  /** Rendered width in px. Defaults to 880 (≈ desktop hero-friendly). */
  width?: number;
}

/**
 * Side-view luxury motor yacht illustration. Dark navy hull, stacked
 * white superstructure with tinted glass strips, tall detailed mast,
 * Italian-tricolor pennant. Drawn on a transparent background.
 */
export default function YachtSilhouette({ className, width = 880 }: YachtSilhouetteProps) {
  const height = Math.round((width * 300) / 1200);
  return (
    <svg
      viewBox="0 0 1200 300"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a3050" />
          <stop offset="55%" stopColor="#0a1a2e" />
          <stop offset="100%" stopColor="#040a15" />
        </linearGradient>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dfe4ec" />
        </linearGradient>
        <linearGradient id="body2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e6ebf2" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1728" />
          <stop offset="100%" stopColor="#1e3352" />
        </linearGradient>
        <linearGradient id="glass-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="shadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Reflection / shadow beneath the yacht */}
      <ellipse cx="600" cy="245" rx="560" ry="9" fill="url(#shadow)" />

      {/* Hull — long, low profile with sharp pointed bow and vertical stern */}
      <path
        d="M 18 182
           L 108 152
           L 1128 152
           L 1160 190
           L 1156 214
           L 32 214 Z"
        fill="url(#hull)"
      />

      {/* Thin accent stripe just below deck line */}
      <line
        x1="36"
        y1="162"
        x2="1148"
        y2="162"
        stroke="#5f7896"
        strokeWidth="0.7"
        opacity="0.6"
      />

      {/* Small square windows in a row along the hull */}
      <g fill="#dde4ee" opacity="0.9">
        {Array.from({ length: 22 }).map((_, i) => (
          <rect key={`hw${i}`} x={190 + i * 42} y={176} width={5.5} height={4} rx={0.5} />
        ))}
      </g>

      {/* Bow rail hint */}
      <path
        d="M 108 152 L 40 180"
        stroke="#c8d0dc"
        strokeWidth="0.6"
        opacity="0.35"
        strokeDasharray="1 2"
      />

      {/* Stern rail hint */}
      <path
        d="M 1128 152 L 1156 190"
        stroke="#c8d0dc"
        strokeWidth="0.6"
        opacity="0.35"
        strokeDasharray="1 2"
      />

      {/* ---- Main deck (largest superstructure level) ---- */}
      <path
        d="M 195 152
           L 1020 152
           L 1005 100
           L 210 100 Z"
        fill="url(#body)"
        stroke="#c8d0dc"
        strokeWidth="0.6"
      />
      {/* Sweep line accent on the top of the main deck */}
      <path
        d="M 210 100 Q 615 92, 1005 100"
        fill="none"
        stroke="#c1cad6"
        strokeWidth="0.8"
        opacity="0.7"
      />
      {/* Long dark tinted glass strip */}
      <rect x="230" y="108" width="765" height="36" fill="url(#glass)" />
      <rect x="230" y="108" width="765" height="36" fill="url(#glass-sheen)" />
      {/* Vertical mullions dividing the glass into panels */}
      <g fill="#dde4ee" opacity="0.35">
        {Array.from({ length: 15 }).map((_, i) => (
          <rect key={`gm${i}`} x={230 + (i + 1) * 47.8} y={108} width={0.6} height={36} />
        ))}
      </g>

      {/* ---- Upper deck ---- */}
      <path
        d="M 310 100
           L 900 100
           L 878 60
           L 328 60 Z"
        fill="url(#body2)"
        stroke="#c8d0dc"
        strokeWidth="0.6"
      />
      {/* Sweeping curve accent connecting bridge to sundeck */}
      <path
        d="M 328 60 Q 604 44, 878 60"
        fill="none"
        stroke="#b5bfcd"
        strokeWidth="1"
        opacity="0.65"
      />
      <rect x="350" y="68" width="510" height="24" fill="url(#glass)" />
      <rect x="350" y="68" width="510" height="24" fill="url(#glass-sheen)" />
      <g fill="#dde4ee" opacity="0.3">
        {Array.from({ length: 11 }).map((_, i) => (
          <rect key={`um${i}`} x={350 + (i + 1) * 42.5} y={68} width={0.6} height={24} />
        ))}
      </g>

      {/* ---- Sundeck / bridge cap ---- */}
      <path
        d="M 445 60
           L 760 60
           L 748 40
           L 456 40 Z"
        fill="url(#body2)"
        stroke="#c8d0dc"
        strokeWidth="0.5"
      />
      <rect x="475" y="45" width="255" height="12" fill="url(#glass)" />

      {/* Radar arch curving over the sundeck */}
      <path
        d="M 470 40 Q 602 12, 736 40"
        fill="none"
        stroke="#dde4ee"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M 470 40 Q 602 12, 736 40"
        fill="none"
        stroke="#8f9db3"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* ---- Mast / radar tower ---- */}
      {/* Vertical mast */}
      <rect x="599" y="4" width="3" height="42" fill="#dde4ee" />
      {/* Top radar dome */}
      <circle cx="600.5" cy="6" r="4.5" fill="#dde4ee" />
      <circle cx="600.5" cy="6" r="1.5" fill="#0a1a2e" opacity="0.5" />
      {/* Upper cross-bar with satellite domes */}
      <line
        x1="574"
        y1="20"
        x2="627"
        y2="20"
        stroke="#dde4ee"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="578" cy="18" r="3.4" fill="#dde4ee" />
      <circle cx="623" cy="18" r="3.4" fill="#dde4ee" />
      {/* Lower cross-bar */}
      <line
        x1="582"
        y1="32"
        x2="618"
        y2="32"
        stroke="#dde4ee"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <rect x="584" y="30" width="4" height="4" fill="#dde4ee" />
      <rect x="612" y="30" width="4" height="4" fill="#dde4ee" />

      {/* Tricolor pennant on a halyard */}
      <line
        x1="600.5"
        y1="24"
        x2="625"
        y2="34"
        stroke="#c8d0dc"
        strokeWidth="0.4"
        opacity="0.6"
      />
      <g>
        <rect x="601" y="24" width="7" height="10" fill="#2a9d8f" />
        <rect x="608" y="24" width="7" height="10" fill="#f5f5f5" />
        <rect x="615" y="24" width="8" height="10" fill="#c8102e" />
      </g>

      {/* Small forward flag on bow */}
      <line x1="112" y1="130" x2="112" y2="152" stroke="#dde4ee" strokeWidth="0.5" />
      <rect x="112" y="130" width="10" height="5" fill="#dde4ee" />

      {/* Waterline stripe just above hull bottom */}
      <line x1="0" y1="215" x2="1200" y2="215" stroke="#000000" strokeWidth="1" opacity="0.55" />
      <line x1="0" y1="219" x2="1200" y2="219" stroke="#000000" strokeWidth="0.6" opacity="0.25" />

      {/* Subtle wake ripples */}
      <g stroke="#5f7896" strokeWidth="0.6" fill="none" opacity="0.28">
        <path d="M 10 244 C 120 240, 260 250, 380 244" />
        <path d="M 100 258 C 220 254, 340 264, 460 258" />
        <path d="M 30 272 C 150 268, 270 278, 390 272" />
        <path d="M 820 250 C 940 246, 1060 256, 1190 250" />
      </g>
    </svg>
  );
}
