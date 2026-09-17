interface YachtSilhouetteProps {
  className?: string;
  /** Rendered width in px. Defaults to 1100 for a long low elevation. */
  width?: number;
}

/**
 * Side-view superyacht illustration, monochrome silver elevation
 * style. Original artwork with sharp architectural edges — long low
 * profile, four stacked deck strips with crisp shadow lines,
 * columned open decks, tall centred radar mast, tender garage
 * cutout, and small window rows.
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
        {/* Monochrome tonal palette */}
        <linearGradient id="deckA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6f7fa" />
          <stop offset="100%" stopColor="#cdd2da" />
        </linearGradient>
        <linearGradient id="deckB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e5e8ee" />
          <stop offset="100%" stopColor="#adb3bd" />
        </linearGradient>
        <linearGradient id="deckC" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eff2f6" />
          <stop offset="100%" stopColor="#bbc0ca" />
        </linearGradient>
        <linearGradient id="hull" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8cdd6" />
          <stop offset="65%" stopColor="#8f95a0" />
          <stop offset="100%" stopColor="#575d68" />
        </linearGradient>
        <linearGradient id="hullDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a808b" />
          <stop offset="100%" stopColor="#3f4550" />
        </linearGradient>
        <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#242a34" />
          <stop offset="100%" stopColor="#4b5361" />
        </linearGradient>
        <linearGradient id="glassSheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="46%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="54%" stopColor="#ffffff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="ground" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft ground shadow */}
      <ellipse cx="800" cy="322" rx="740" ry="10" fill="url(#ground)" />

      {/* =========================================================
                                  HULL
         Long, sharp, angular. Straight deck line, hard corners.
         ========================================================= */}
      <path
        d="M 22 246
           L 96 224
           L 152 216
           L 1520 216
           L 1560 224
           L 1578 246
           L 1578 292
           L 1560 302
           L 44 302
           L 22 288
           Z"
        fill="url(#hull)"
      />
      {/* Hard bow edge accent */}
      <path
        d="M 22 246 L 96 224 L 152 216"
        stroke="#4c525d"
        strokeWidth="1"
        fill="none"
        opacity="0.75"
      />
      {/* Hull deck edge — sharp line where hull meets superstructure */}
      <line
        x1="152"
        y1="216"
        x2="1520"
        y2="216"
        stroke="#3f4550"
        strokeWidth="1"
        opacity="0.7"
      />
      {/* Lower hull dark band — clean split */}
      <path
        d="M 22 268 L 1578 268 L 1578 292 L 1560 302 L 44 302 L 22 288 Z"
        fill="url(#hullDark)"
        opacity="0.85"
      />
      <line
        x1="22"
        y1="268"
        x2="1578"
        y2="268"
        stroke="#2a2f39"
        strokeWidth="0.9"
        opacity="0.7"
      />

      {/* Row of small square windows on hull */}
      <g fill="#1f242c">
        {Array.from({ length: 26 }).map((_, i) => (
          <rect key={`hw${i}`} x={280 + i * 42} y={252} width={6.5} height={5} />
        ))}
      </g>
      {/* Aft porthole trio */}
      <g fill="#1f242c">
        <rect x={1420} y={252} width={6.5} height={5} />
        <rect x={1435} y={252} width={6.5} height={5} />
        <rect x={1450} y={252} width={6.5} height={5} />
      </g>

      {/* Aft tender-garage cutout — sharp rectangle */}
      <rect x="1430" y="264" width="140" height="30" fill="#1f242c" />
      <rect x="1430" y="264" width="140" height="4" fill="url(#glassSheen)" opacity="0.6" />
      <line x1="1430" y1="264" x2="1570" y2="264" stroke="#2a2f39" strokeWidth="0.6" />

      {/* Waterline stripes */}
      <line x1="0" y1="304" x2="1600" y2="304" stroke="#000" strokeWidth="1.2" opacity="0.45" />
      <line x1="0" y1="308" x2="1600" y2="308" stroke="#000" strokeWidth="0.6" opacity="0.22" />

      {/* Anchor slot at bow */}
      <rect x="164" y="232" width="10" height="7" fill="#1f242c" opacity="0.9" />

      {/* Bow rake accent line (sharp diagonal on the bow face) */}
      <line
        x1="30"
        y1="252"
        x2="150"
        y2="218"
        stroke="#2a2f39"
        strokeWidth="0.8"
        opacity="0.6"
      />

      {/* =========================================================
                              MAIN DECK
         Sharp trapezoid, tinted glass strip, clean shadow band.
         ========================================================= */}
      <path
        d="M 240 216
           L 316 194
           L 1408 194
           L 1476 216 Z"
        fill="url(#deckA)"
      />
      {/* Sharp edge highlight on top */}
      <line x1="316" y1="194" x2="1408" y2="194" stroke="#8b919c" strokeWidth="0.6" />
      {/* Dark shadow band beneath main deck (under overhang) */}
      <path
        d="M 240 216 L 316 194 L 316 200 L 250 220 Z"
        fill="#5b616c"
        opacity="0.65"
      />
      <path
        d="M 1476 216 L 1408 194 L 1408 200 L 1466 220 Z"
        fill="#5b616c"
        opacity="0.65"
      />
      {/* Main-deck glass strip */}
      <path
        d="M 328 200 L 1396 200 L 1450 214 L 296 214 Z"
        fill="url(#glass)"
      />
      <path
        d="M 328 200 L 1396 200 L 1450 214 L 296 214 Z"
        fill="url(#glassSheen)"
        opacity="0.85"
      />
      {/* Vertical column supports at each end of main deck */}
      <rect x="316" y="194" width="4" height="26" fill="#7c828e" />
      <rect x="1404" y="194" width="4" height="26" fill="#7c828e" />
      {/* Mullions on glass */}
      <g fill="#c8ced7" opacity="0.35">
        {Array.from({ length: 26 }).map((_, i) => (
          <rect key={`m1${i}`} x={340 + i * 42} y={200} width={0.8} height={14} />
        ))}
      </g>

      {/* =========================================================
                              UPPER DECK
         ========================================================= */}
      <path
        d="M 336 194
           L 412 172
           L 1300 172
           L 1376 194 Z"
        fill="url(#deckC)"
      />
      <line x1="412" y1="172" x2="1300" y2="172" stroke="#8b919c" strokeWidth="0.6" />
      {/* Shadow slit between main deck and upper deck */}
      <rect x="332" y="192" width="1048" height="2" fill="#3f4550" opacity="0.55" />
      {/* Upper deck glass */}
      <path
        d="M 424 178 L 1288 178 L 1348 190 L 368 190 Z"
        fill="url(#glass)"
      />
      <path
        d="M 424 178 L 1288 178 L 1348 190 L 368 190 Z"
        fill="url(#glassSheen)"
        opacity="0.8"
      />
      {/* Column supports */}
      <rect x="412" y="172" width="3" height="20" fill="#7c828e" />
      <rect x="1297" y="172" width="3" height="20" fill="#7c828e" />
      {/* Railings hint above upper deck */}
      <g stroke="#8f96a2" strokeWidth="0.4" opacity="0.6">
        <line x1="416" y1="168" x2="1296" y2="168" />
        {Array.from({ length: 22 }).map((_, i) => (
          <line key={`rl${i}`} x1={430 + i * 42} y1={168} x2={430 + i * 42} y2={172} />
        ))}
      </g>

      {/* =========================================================
                              BRIDGE DECK
         ========================================================= */}
      <path
        d="M 480 172
           L 552 148
           L 1176 148
           L 1236 172 Z"
        fill="url(#deckA)"
      />
      <line x1="552" y1="148" x2="1176" y2="148" stroke="#8b919c" strokeWidth="0.6" />
      <rect x="484" y="170" width="748" height="2" fill="#3f4550" opacity="0.55" />
      {/* Bridge windshield */}
      <path
        d="M 564 154 L 1164 154 L 1212 168 L 512 168 Z"
        fill="url(#glass)"
      />
      <path
        d="M 564 154 L 1164 154 L 1212 168 L 512 168 Z"
        fill="url(#glassSheen)"
        opacity="0.85"
      />
      {/* Column supports */}
      <rect x="552" y="148" width="3" height="22" fill="#7c828e" />
      <rect x="1173" y="148" width="3" height="22" fill="#7c828e" />

      {/* =========================================================
                              SUN DECK
         ========================================================= */}
      <path
        d="M 620 148
           L 680 124
           L 1050 124
           L 1108 148 Z"
        fill="url(#deckB)"
      />
      <line x1="680" y1="124" x2="1050" y2="124" stroke="#8b919c" strokeWidth="0.6" />
      <rect x="624" y="146" width="482" height="2" fill="#3f4550" opacity="0.55" />
      {/* Sun deck side stripe (rail) */}
      <rect x="694" y="130" width="342" height="3" fill="#5b616c" opacity="0.55" />

      {/* =========================================================
                            MAST TOWER
         Tall central structure with sharp cross-bars.
         ========================================================= */}
      {/* base */}
      <path d="M 852 124 L 846 98 L 912 98 L 906 124 Z" fill="url(#deckA)" />
      <line x1="846" y1="98" x2="912" y2="98" stroke="#8b919c" strokeWidth="0.5" />
      {/* main upright */}
      <rect x="875" y="6" width="6" height="94" fill="#c8ced7" />
      <rect x="877" y="6" width="2" height="94" fill="#ffffff" opacity="0.35" />
      {/* Top pole tip */}
      <rect x="877" y="0" width="2" height="8" fill="#c8ced7" />
      {/* Top radar dome */}
      <circle cx="878" cy="10" r="5" fill="#c8ced7" stroke="#4c525d" strokeWidth="0.4" />
      <circle cx="878" cy="10" r="1.6" fill="#1f242c" opacity="0.75" />

      {/* Upper cross-bar with two large satellite domes */}
      <line
        x1="836"
        y1="26"
        x2="920"
        y2="26"
        stroke="#c8ced7"
        strokeWidth="2"
      />
      <circle cx="840" cy="23" r="5" fill="#c8ced7" stroke="#3f4550" strokeWidth="0.5" />
      <circle cx="916" cy="23" r="5" fill="#c8ced7" stroke="#3f4550" strokeWidth="0.5" />

      {/* Middle cross-bar */}
      <line
        x1="850"
        y1="42"
        x2="906"
        y2="42"
        stroke="#c8ced7"
        strokeWidth="1.5"
      />
      <rect x="852" y="39" width="5" height="5" fill="#c8ced7" stroke="#3f4550" strokeWidth="0.3" />
      <rect x="899" y="39" width="5" height="5" fill="#c8ced7" stroke="#3f4550" strokeWidth="0.3" />

      {/* Lower cross-bar with small dishes */}
      <line
        x1="858"
        y1="58"
        x2="898"
        y2="58"
        stroke="#c8ced7"
        strokeWidth="1.2"
      />
      <circle cx="860" cy="55" r="2.6" fill="#c8ced7" stroke="#3f4550" strokeWidth="0.3" />
      <circle cx="896" cy="55" r="2.6" fill="#c8ced7" stroke="#3f4550" strokeWidth="0.3" />

      {/* Halyards fanning down from mast top */}
      <line x1="878" y1="16" x2="820" y2="94" stroke="#8f96a2" strokeWidth="0.5" opacity="0.8" />
      <line x1="878" y1="16" x2="936" y2="94" stroke="#8f96a2" strokeWidth="0.5" opacity="0.8" />

      {/* Bow flagstaff */}
      <line x1="176" y1="196" x2="176" y2="218" stroke="#c8ced7" strokeWidth="0.8" />
      <rect x="176" y="196" width="12" height="6" fill="#c8ced7" />

      {/* Aft flagstaff */}
      <line x1="1518" y1="200" x2="1518" y2="216" stroke="#c8ced7" strokeWidth="0.8" />
      <rect x="1518" y="200" width="10" height="5" fill="#c8ced7" />

      {/* =========================================================
                         WATER RIPPLES
         ========================================================= */}
      <g stroke="#7c828e" strokeWidth="0.7" fill="none" opacity="0.35">
        <path d="M 10 320 L 160 316 L 300 322 L 460 318" />
        <path d="M 70 336 L 210 332 L 350 340 L 500 336" />
        <path d="M 20 350 L 170 346 L 310 354 L 470 350" />
        <path d="M 1100 320 L 1240 316 L 1380 322 L 1590 318" />
        <path d="M 1150 336 L 1290 332 L 1420 340 L 1590 336" />
      </g>
    </svg>
  );
}
