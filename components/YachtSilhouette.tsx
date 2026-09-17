interface YachtSilhouetteProps {
  className?: string;
  /** Rendered width in px. Defaults to 1100 for a long low elevation. */
  width?: number;
}

/**
 * Side-view superyacht illustration, monochrome silver elevation
 * style. Original artwork — long low profile, four stacked deck
 * strips with tonal shading, tall centred radar mast, tender garage
 * cutout at the stern, and small window rows. Transparent
 * background.
 */
export default function YachtSilhouette({ className, width = 1100 }: YachtSilhouetteProps) {
  const VB_W = 1600;
  const VB_H = 380;
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
        {/* Monochrome greys — a full tonal set from near-white to charcoal */}
        <linearGradient id="gDeckA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4f6f9" />
          <stop offset="100%" stopColor="#cfd4dc" />
        </linearGradient>
        <linearGradient id="gDeckB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dee2e8" />
          <stop offset="100%" stopColor="#a7aeb8" />
        </linearGradient>
        <linearGradient id="gDeckC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef1f5" />
          <stop offset="100%" stopColor="#b6bcc6" />
        </linearGradient>
        <linearGradient id="gShadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a919d" />
          <stop offset="100%" stopColor="#3f4550" />
        </linearGradient>
        <linearGradient id="gGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2b323d" />
          <stop offset="100%" stopColor="#525a68" />
        </linearGradient>
        <linearGradient id="gHull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8ced7" />
          <stop offset="100%" stopColor="#7d848f" />
        </linearGradient>
        <linearGradient id="gSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="gGround" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft ground shadow */}
      <ellipse cx="800" cy="322" rx="740" ry="10" fill="url(#gGround)" />

      {/* ---------- HULL ---------- long low silhouette, sharp bow, vertical stern */}
      <path
        d="M 20 248
           C 60 244, 110 232, 160 220
           L 1520 220
           C 1548 220, 1568 228, 1574 244
           L 1574 288
           C 1574 296, 1566 302, 1556 302
           L 40 302
           C 26 302, 18 294, 18 282
           L 20 248 Z"
        fill="url(#gHull)"
      />

      {/* Hull tonal shading: darker at bottom */}
      <path
        d="M 30 268
           L 1572 268
           L 1574 288
           C 1574 296, 1566 302, 1556 302
           L 40 302
           C 26 302, 18 294, 18 282
           L 30 268 Z"
        fill="url(#gShadow)"
        opacity="0.5"
      />

      {/* Hull top-edge accent */}
      <path
        d="M 40 230
           C 90 224, 140 222, 175 222
           L 1520 222"
        stroke="#7c8290"
        strokeWidth="0.9"
        fill="none"
        opacity="0.7"
      />

      {/* Hull sheen band */}
      <path
        d="M 20 248
           C 60 244, 110 232, 160 220
           L 1520 220
           C 1548 220, 1568 228, 1574 244
           L 1574 288
           C 1574 296, 1566 302, 1556 302
           L 40 302
           C 26 302, 18 294, 18 282
           L 20 248 Z"
        fill="url(#gSheen)"
        opacity="0.35"
      />

      {/* Row of small square windows in the hull */}
      <g fill="#39404b" opacity="0.85">
        {Array.from({ length: 26 }).map((_, i) => (
          <rect key={`hw${i}`} x={280 + i * 42} y={252} width={6} height={5} rx={0.5} />
        ))}
      </g>

      {/* Aft tender-garage cutout */}
      <rect x="1420" y="260" width="140" height="30" rx="3" fill="#2f353f" opacity="0.9" />
      <rect x="1420" y="260" width="140" height="6" fill="url(#gSheen)" opacity="0.55" />

      {/* Waterline stripes */}
      <line x1="0" y1="304" x2="1600" y2="304" stroke="#000" strokeWidth="1.2" opacity="0.4" />
      <line x1="0" y1="308" x2="1600" y2="308" stroke="#000" strokeWidth="0.6" opacity="0.2" />

      {/* Anchor recess */}
      <rect x="170" y="234" width="8" height="6" rx="1" fill="#39404b" opacity="0.6" />

      {/* Bow bulwark accent line */}
      <path
        d="M 22 248 C 60 244, 110 232, 160 220"
        stroke="#5a606c"
        strokeWidth="1.1"
        fill="none"
        opacity="0.65"
      />

      {/* ---------- DECK 1: MAIN DECK ---------- widest superstructure */}
      <path
        d="M 250 220
           C 280 206, 320 196, 370 194
           L 1400 194
           C 1440 196, 1470 206, 1490 220
           Z"
        fill="url(#gDeckA)"
        stroke="#8f96a2"
        strokeWidth="0.6"
      />
      {/* Main-deck long tinted window strip */}
      <path
        d="M 300 208
           C 330 202, 370 200, 400 200
           L 1370 200
           C 1400 200, 1430 204, 1452 214
           L 300 214 Z"
        fill="url(#gGlass)"
      />
      <path
        d="M 300 208
           C 330 202, 370 200, 400 200
           L 1370 200
           C 1400 200, 1430 204, 1452 214
           L 300 214 Z"
        fill="url(#gSheen)"
        opacity="0.75"
      />
      {/* Mullions */}
      <g fill="#eaeef4" opacity="0.4">
        {Array.from({ length: 26 }).map((_, i) => (
          <rect key={`m1${i}`} x={340 + i * 42} y={200} width={0.8} height={14} />
        ))}
      </g>
      {/* Deck shadow line under main deck */}
      <line
        x1="255"
        y1="220"
        x2="1490"
        y2="220"
        stroke="#5c6270"
        strokeWidth="0.9"
        opacity="0.4"
      />

      {/* ---------- DECK 2: UPPER DECK ---------- inset with swept sides */}
      <path
        d="M 340 194
           C 380 168, 460 154, 620 150
           L 1160 150
           C 1290 154, 1360 168, 1400 194
           Z"
        fill="url(#gDeckC)"
        stroke="#8f96a2"
        strokeWidth="0.6"
      />
      {/* Sweeping tone break under the upper deck */}
      <path
        d="M 360 184
           C 460 168, 640 158, 880 158
           C 1120 158, 1300 168, 1390 184"
        stroke="#5c6270"
        strokeWidth="0.9"
        fill="none"
        opacity="0.4"
      />
      {/* Upper-deck window strip */}
      <path
        d="M 390 176
           C 460 158, 600 152, 760 152
           L 1030 152
           C 1220 154, 1310 164, 1360 180
           L 1350 190
           L 400 190 Z"
        fill="url(#gGlass)"
      />
      <path
        d="M 390 176
           C 460 158, 600 152, 760 152
           L 1030 152
           C 1220 154, 1310 164, 1360 180
           L 1350 190
           L 400 190 Z"
        fill="url(#gSheen)"
        opacity="0.7"
      />

      {/* ---------- DECK 3: BRIDGE DECK ---------- */}
      <path
        d="M 500 150
           C 550 128, 660 118, 820 116
           L 1010 116
           C 1170 118, 1240 128, 1270 150
           Z"
        fill="url(#gDeckA)"
        stroke="#8f96a2"
        strokeWidth="0.6"
      />
      {/* Bridge windshield */}
      <path
        d="M 540 140
           C 590 122, 700 116, 820 118
           L 980 118
           C 1120 122, 1200 130, 1230 144
           L 550 144 Z"
        fill="url(#gGlass)"
      />
      <path
        d="M 540 140
           C 590 122, 700 116, 820 118
           L 980 118
           C 1120 122, 1200 130, 1230 144
           L 550 144 Z"
        fill="url(#gSheen)"
        opacity="0.75"
      />

      {/* ---------- DECK 4: SUN DECK ---------- narrowest */}
      <path
        d="M 640 116
           C 700 92, 800 84, 900 86
           C 1000 88, 1080 96, 1120 116
           Z"
        fill="url(#gDeckB)"
        stroke="#8f96a2"
        strokeWidth="0.5"
      />
      {/* Sun-deck side stripe */}
      <rect x="660" y="106" width="440" height="4" fill="#5c6270" opacity="0.35" />

      {/* Small side railings on foredeck */}
      <g stroke="#8f96a2" strokeWidth="0.6" opacity="0.6">
        <line x1="235" y1="216" x2="360" y2="196" />
        <line x1="1400" y1="196" x2="1500" y2="218" />
      </g>

      {/* ---------- MAST TOWER ---------- tall central structure */}
      {/* base plinth on sun deck */}
      <path
        d="M 856 86 L 852 60 L 908 60 L 904 86 Z"
        fill="url(#gDeckA)"
        stroke="#8f96a2"
        strokeWidth="0.5"
      />

      {/* structural upright */}
      <rect x="878" y="4" width="4" height="58" fill="#c8ced7" />
      <rect x="878" y="4" width="4" height="58" fill="url(#gSheen)" opacity="0.5" />

      {/* Top radar dome */}
      <circle cx="880" cy="8" r="5" fill="#c8ced7" />
      <circle cx="880" cy="8" r="1.6" fill="#2b323d" opacity="0.6" />

      {/* Upper cross-bar with two large satellite domes */}
      <line
        x1="840"
        y1="22"
        x2="920"
        y2="22"
        stroke="#c8ced7"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="844" cy="19" r="5" fill="#c8ced7" stroke="#39404b" strokeWidth="0.4" />
      <circle cx="916" cy="19" r="5" fill="#c8ced7" stroke="#39404b" strokeWidth="0.4" />

      {/* Middle cross-bar */}
      <line
        x1="852"
        y1="36"
        x2="908"
        y2="36"
        stroke="#c8ced7"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <rect x="854" y="34" width="4" height="4" fill="#c8ced7" />
      <rect x="902" y="34" width="4" height="4" fill="#c8ced7" />

      {/* Lower cross-bar with small dishes */}
      <line
        x1="862"
        y1="50"
        x2="898"
        y2="50"
        stroke="#c8ced7"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="864" cy="48" r="2.4" fill="#c8ced7" />
      <circle cx="896" cy="48" r="2.4" fill="#c8ced7" />

      {/* Halyards fanning down */}
      <line x1="880" y1="14" x2="844" y2="82" stroke="#8f96a2" strokeWidth="0.5" opacity="0.7" />
      <line x1="880" y1="14" x2="916" y2="82" stroke="#8f96a2" strokeWidth="0.5" opacity="0.7" />

      {/* Bow flagstaff */}
      <line x1="170" y1="200" x2="170" y2="220" stroke="#c8ced7" strokeWidth="0.7" />
      <rect x="170" y="200" width="12" height="6" fill="#c8ced7" />

      {/* Aft flag */}
      <line x1="1520" y1="204" x2="1520" y2="220" stroke="#c8ced7" strokeWidth="0.7" />
      <rect x="1520" y="204" width="10" height="5" fill="#c8ced7" />

      {/* ---------- Water surface ripples fore & aft ---------- */}
      <g stroke="#8f96a2" strokeWidth="0.7" fill="none" opacity="0.32">
        <path d="M 10 320 C 160 314, 300 328, 460 320" />
        <path d="M 70 336 C 210 330, 350 344, 500 336" />
        <path d="M 20 350 C 170 344, 310 358, 470 350" />
        <path d="M 1100 320 C 1240 314, 1380 328, 1590 320" />
        <path d="M 1150 336 C 1290 330, 1420 344, 1590 336" />
      </g>
    </svg>
  );
}
