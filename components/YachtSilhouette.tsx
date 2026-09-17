interface YachtSilhouetteProps {
  className?: string;
  /** Rendered width in px. Defaults to 780 (≈ desktop hero-friendly). */
  width?: number;
}

/**
 * Side-view luxury motor yacht illustration. Draws on transparent
 * background so it sits well over any section colour.
 */
export default function YachtSilhouette({ className, width = 780 }: YachtSilhouetteProps) {
  const height = Math.round((width * 260) / 1000);
  return (
    <svg
      viewBox="0 0 1000 260"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dfe3ea" />
        </linearGradient>
        <linearGradient id="deck1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e6eaf0" />
        </linearGradient>
        <linearGradient id="deck2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#eef1f6" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e1a26" />
          <stop offset="100%" stopColor="#1b2b3d" />
        </linearGradient>
      </defs>

      {/* soft reflection under the hull */}
      <ellipse cx="500" cy="235" rx="470" ry="10" fill="#0a1520" opacity="0.18" />

      {/* Hull — sharp bow (left), curved stern (right) */}
      <path
        d="M18,170
           L120,132
           L860,132
           C930,132 970,155 985,180
           C992,195 985,210 965,210
           L70,210
           C40,210 22,200 14,188 Z"
        fill="url(#hull)"
      />
      {/* hull hairline shading */}
      <path
        d="M18,170 L120,132 L860,132 C930,132 970,155 985,180"
        fill="none"
        stroke="#c8ced8"
        strokeWidth="1"
      />

      {/* waterline stripe */}
      <path d="M22,192 L980,192" stroke="#0a1520" strokeWidth="1.2" opacity="0.55" />
      <path d="M22,196 L980,196" stroke="#0a1520" strokeWidth="0.6" opacity="0.3" />

      {/* Portholes along hull */}
      {Array.from({ length: 11 }).map((_, i) => (
        <circle
          key={i}
          cx={230 + i * 42}
          cy={168}
          r={3.6}
          fill="url(#glass)"
          stroke="#c8ced8"
          strokeWidth="0.6"
        />
      ))}

      {/* Main deck / superstructure */}
      <path
        d="M175,132
           L770,132
           L755,80
           L205,80 Z"
        fill="url(#deck1)"
        stroke="#c8ced8"
        strokeWidth="1"
      />
      {/* Main deck windows band */}
      <rect x="220" y="92" width="520" height="24" fill="url(#glass)" />
      {/* window mullions */}
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x={220 + i * 43}
          y={92}
          width={1}
          height={24}
          fill="#dfe3ea"
          opacity="0.55"
        />
      ))}

      {/* Upper deck / bridge */}
      <path
        d="M330,80
           L640,80
           L625,40
           L350,40 Z"
        fill="url(#deck2)"
        stroke="#c8ced8"
        strokeWidth="1"
      />
      <rect x="365" y="50" width="245" height="18" fill="url(#glass)" />

      {/* Radar mast */}
      <rect x="482" y="0" width="3" height="40" fill="#e6eaf0" />
      <line x1="460" y1="22" x2="506" y2="22" stroke="#e6eaf0" strokeWidth="1.4" />
      <circle cx="483.5" cy="8" r="5" fill="#e6eaf0" />
      <circle cx="483.5" cy="8" r="2" fill="#0a1520" opacity="0.4" />

      {/* Bow railing hint */}
      <path
        d="M30,168 L118,133"
        stroke="#c8ced8"
        strokeWidth="1"
        strokeDasharray="1 3"
      />

      {/* Stern railing */}
      <path
        d="M870,132 L978,175"
        stroke="#c8ced8"
        strokeWidth="1"
        strokeDasharray="1 3"
      />

      {/* Small tender detail on aft deck */}
      <rect x="790" y="125" width="55" height="6" rx="2" fill="#e6eaf0" stroke="#c8ced8" strokeWidth="0.5" />

      {/* Subtle wake ripples */}
      <g stroke="#0a1520" strokeWidth="0.6" opacity="0.22" fill="none">
        <path d="M40,220 C120,215 220,225 320,220 S540,215 640,220 S860,225 960,220" />
        <path d="M60,232 C140,227 240,237 340,232 S560,227 660,232 S880,237 970,232" />
      </g>
    </svg>
  );
}
