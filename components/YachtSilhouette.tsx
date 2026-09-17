interface YachtSilhouetteProps {
  className?: string;
  /** Rendered width in px. Defaults to 1000 for a proper long-profile look. */
  width?: number;
}

/**
 * Side-view luxury motor yacht illustration. Long low profile, dark
 * navy hull, sweeping curved white superstructure with tinted glass,
 * tall multi-tier radar mast, and a tricolor pennant. Transparent
 * background. Original artwork inspired by modern superyacht styling.
 */
export default function YachtSilhouette({ className, width = 1000 }: YachtSilhouetteProps) {
  const VB_W = 1400;
  const VB_H = 340;
  const height = Math.round((width * VB_H) / VB_W);
  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#233b5c" />
          <stop offset="35%" stopColor="#0e1e35" />
          <stop offset="100%" stopColor="#02060d" />
        </linearGradient>
        <linearGradient id="hullSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="20%" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#eef2f8" />
          <stop offset="100%" stopColor="#d5dce6" />
        </linearGradient>
        <linearGradient id="body2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dde4ee" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#040b18" />
          <stop offset="50%" stopColor="#0e1e35" />
          <stop offset="100%" stopColor="#1b3253" />
        </linearGradient>
        <linearGradient id="glassSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="shadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft shadow beneath */}
      <ellipse cx="700" cy="278" rx="640" ry="10" fill="url(#shadow)" />

      {/* ------ HULL ------ long, low, sharp pointed bow, vertical stern */}
      <path
        d="M 20 218
           C 48 214, 90 202, 132 190
           L 1340 190
           C 1362 190, 1378 198, 1382 214
           L 1382 240
           C 1382 250, 1372 256, 1360 256
           L 40 256
           C 26 256, 16 246, 20 218 Z"
        fill="url(#hull)"
      />
      {/* Long hull sheen */}
      <path
        d="M 20 218
           C 48 214, 90 202, 132 190
           L 1340 190
           C 1362 190, 1378 198, 1382 214
           L 1382 240
           C 1382 250, 1372 256, 1360 256
           L 40 256
           C 26 256, 16 246, 20 218 Z"
        fill="url(#hullSheen)"
      />
      {/* Thin light accent stripe along top of hull */}
      <path
        d="M 40 202 C 90 194, 132 192, 160 192 L 1340 192"
        stroke="#7a8ea8"
        strokeWidth="0.9"
        fill="none"
        opacity="0.55"
      />
      {/* Row of small square windows in the hull */}
      <g fill="#e5ebf3" opacity="0.9">
        {Array.from({ length: 28 }).map((_, i) => (
          <rect key={`hw${i}`} x={200 + i * 40} y={218} width={5} height={4} rx={0.5} />
        ))}
      </g>
      {/* Aft porthole cluster */}
      <g fill="#e5ebf3" opacity="0.9">
        <rect x={1320} y={218} width={5} height={4} rx={0.5} />
        <rect x={1330} y={218} width={5} height={4} rx={0.5} />
        <rect x={1340} y={218} width={5} height={4} rx={0.5} />
        <rect x={1350} y={218} width={5} height={4} rx={0.5} />
      </g>

      {/* Water surface line just above hull bottom */}
      <line
        x1="0"
        y1="257"
        x2="1400"
        y2="257"
        stroke="#000"
        strokeWidth="1.2"
        opacity="0.55"
      />
      <line
        x1="0"
        y1="261"
        x2="1400"
        y2="261"
        stroke="#000"
        strokeWidth="0.6"
        opacity="0.25"
      />

      {/* Anchor detail at bow */}
      <rect x="150" y="204" width="8" height="6" fill="#7a8ea8" opacity="0.6" />

      {/* ------ MAIN DECK ------ sweeping profile, not a trapezoid */}
      <path
        d="M 230 190
           C 250 180, 280 172, 320 168
           L 1220 168
           C 1256 168, 1284 176, 1300 190
           Z"
        fill="url(#body)"
        stroke="#c6cfdc"
        strokeWidth="0.7"
      />
      {/* Long tinted glass strip on main deck */}
      <path
        d="M 260 178
           C 280 174, 310 172, 340 172
           L 1240 172
           C 1268 172, 1286 178, 1296 188
           L 260 188 Z"
        fill="url(#glass)"
      />
      <path
        d="M 260 178
           C 280 174, 310 172, 340 172
           L 1240 172
           C 1268 172, 1286 178, 1296 188
           L 260 188 Z"
        fill="url(#glassSheen)"
      />
      {/* Glass mullions */}
      <g fill="#dde4ee" opacity="0.35">
        {Array.from({ length: 22 }).map((_, i) => (
          <rect key={`gm${i}`} x={310 + i * 42} y={172} width={0.7} height={16} />
        ))}
      </g>

      {/* ------ UPPER DECK ------ flowing curves */}
      <path
        d="M 360 168
           C 400 148, 480 132, 620 128
           L 1080 128
           C 1170 132, 1220 148, 1240 168
           Z"
        fill="url(#body2)"
        stroke="#c6cfdc"
        strokeWidth="0.7"
      />
      {/* Sweeping accent line under upper-deck edge */}
      <path
        d="M 380 158
           C 460 142, 620 134, 850 134
           C 1040 134, 1160 144, 1220 158"
        fill="none"
        stroke="#b1bccb"
        strokeWidth="0.9"
        opacity="0.75"
      />
      {/* Upper-deck glass */}
      <path
        d="M 420 148
           C 470 138, 560 134, 700 134
           L 1000 134
           C 1140 134, 1190 140, 1220 152
           L 1210 164
           L 430 164 Z"
        fill="url(#glass)"
      />
      <path
        d="M 420 148
           C 470 138, 560 134, 700 134
           L 1000 134
           C 1140 134, 1190 140, 1220 152
           L 1210 164
           L 430 164 Z"
        fill="url(#glassSheen)"
      />

      {/* ------ BRIDGE / SUN DECK cap ------ */}
      <path
        d="M 550 128
           C 600 100, 720 90, 880 92
           C 980 94, 1040 108, 1060 128
           Z"
        fill="url(#body2)"
        stroke="#c6cfdc"
        strokeWidth="0.6"
      />
      {/* Bridge windshield */}
      <path
        d="M 590 118
           C 640 102, 740 96, 860 98
           C 950 100, 1000 110, 1020 122
           L 590 122 Z"
        fill="url(#glass)"
      />
      <path
        d="M 590 118
           C 640 102, 740 96, 860 98
           C 950 100, 1000 110, 1020 122
           L 590 122 Z"
        fill="url(#glassSheen)"
      />

      {/* Radar arch over sun deck */}
      <path
        d="M 620 92 C 720 42, 900 42, 990 92"
        fill="none"
        stroke="#dde4ee"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M 620 92 C 720 42, 900 42, 990 92"
        fill="none"
        stroke="#7a8ea8"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* Small side railings on foredeck */}
      <g stroke="#c6cfdc" strokeWidth="0.6" opacity="0.55">
        <line x1="230" y1="185" x2="360" y2="168" />
        <line x1="1240" y1="168" x2="1310" y2="188" />
      </g>

      {/* ------ MAST TOWER ------ tall multi-tier structure */}
      {/* Base of mast rising from sun deck */}
      <path
        d="M 780 92 L 776 62 L 822 62 L 818 92 Z"
        fill="url(#body2)"
        stroke="#c6cfdc"
        strokeWidth="0.5"
      />
      {/* Central vertical column */}
      <rect x="796" y="6" width="6" height="60" fill="#e2e8f0" />
      <rect x="796" y="6" width="6" height="60" fill="url(#glassSheen)" opacity="0.5" />

      {/* Top radar dome */}
      <circle cx="799" cy="8" r="6" fill="#e6ebf2" />
      <circle cx="799" cy="8" r="2.2" fill="#0e1e35" opacity="0.4" />

      {/* Upper cross-bar with two satellite domes */}
      <line
        x1="758"
        y1="22"
        x2="840"
        y2="22"
        stroke="#e2e8f0"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="762" cy="19" r="5" fill="#e6ebf2" stroke="#0e1e35" strokeWidth="0.4" />
      <circle cx="836" cy="19" r="5" fill="#e6ebf2" stroke="#0e1e35" strokeWidth="0.4" />

      {/* Middle cross-bar */}
      <line
        x1="770"
        y1="36"
        x2="828"
        y2="36"
        stroke="#e2e8f0"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <rect x="772" y="34" width="4" height="4" fill="#e6ebf2" />
      <rect x="822" y="34" width="4" height="4" fill="#e6ebf2" />

      {/* Lower cross-bar with small satellite dishes */}
      <line
        x1="780"
        y1="50"
        x2="818"
        y2="50"
        stroke="#e2e8f0"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="784" cy="48" r="2.5" fill="#e6ebf2" />
      <circle cx="814" cy="48" r="2.5" fill="#e6ebf2" />

      {/* Halyards */}
      <line x1="799" y1="14" x2="764" y2="88" stroke="#c6cfdc" strokeWidth="0.5" opacity="0.7" />
      <line x1="799" y1="14" x2="834" y2="88" stroke="#c6cfdc" strokeWidth="0.5" opacity="0.7" />

      {/* Italian tricolor pennant on port halyard */}
      <g transform="translate(770, 40)">
        <rect x="0" y="0" width="6" height="13" fill="#2a9d8f" />
        <rect x="6" y="0" width="6" height="13" fill="#f5f5f5" />
        <rect x="12" y="0" width="7" height="13" fill="#c8102e" />
      </g>

      {/* Small owner pennant on starboard halyard */}
      <g transform="translate(816, 44)">
        <path d="M 0 0 L 18 4 L 0 8 Z" fill="#dde4ee" />
      </g>

      {/* Bow flagstaff */}
      <line x1="140" y1="170" x2="140" y2="190" stroke="#e2e8f0" strokeWidth="0.7" />
      <rect x="140" y="170" width="12" height="6" fill="#e6ebf2" />

      {/* ------ Wake ripples fore and aft ------ */}
      <g stroke="#7a8ea8" strokeWidth="0.7" fill="none" opacity="0.32">
        <path d="M 10 274 C 140 268, 260 282, 400 274" />
        <path d="M 60 288 C 190 282, 310 296, 450 288" />
        <path d="M 20 302 C 150 296, 270 310, 410 302" />
        <path d="M 950 274 C 1080 268, 1200 282, 1390 274" />
        <path d="M 990 288 C 1120 282, 1240 296, 1390 288" />
      </g>
    </svg>
  );
}
