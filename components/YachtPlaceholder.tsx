const gradients: [string, string, string][] = [
  ["#0f2027", "#203a43", "#2c5364"],
  ["#1e3c72", "#2a5298", "#1e3c72"],
  ["#141e30", "#243b55", "#3a6073"],
  ["#0b3d91", "#4b6cb7", "#182848"],
  ["#232526", "#414345", "#2c5364"],
  ["#0a2540", "#2a5470", "#6ea3c7"],
];

export default function YachtPlaceholder({ index }: { index: number }) {
  const g = gradients[index % gradients.length];
  const gradientId = `sea-${index}`;
  const skyId = `sky-${index}`;
  return (
    <svg
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={skyId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={g[0]} />
          <stop offset="60%" stopColor={g[1]} />
        </linearGradient>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={g[1]} stopOpacity="0.9" />
          <stop offset="100%" stopColor={g[2]} />
        </linearGradient>
      </defs>

      {/* sky */}
      <rect width="800" height="360" fill={`url(#${skyId})`} />
      {/* subtle sun glow */}
      <circle cx="620" cy="200" r="90" fill="#ffffff" opacity="0.06" />
      <circle cx="620" cy="200" r="50" fill="#ffffff" opacity="0.08" />

      {/* sea */}
      <rect y="360" width="800" height="240" fill={`url(#${gradientId})`} />
      {/* horizon line */}
      <rect y="358" width="800" height="1" fill="#ffffff" opacity="0.15" />

      {/* wave lines */}
      <g fill="none" stroke="#ffffff" strokeWidth="0.6" opacity="0.18">
        <path d="M0,420 C120,410 260,430 400,420 S680,410 800,420" />
        <path d="M0,460 C140,450 280,470 420,460 S700,450 800,460" />
        <path d="M0,500 C120,490 260,510 420,500 S700,490 800,500" />
        <path d="M0,540 C140,530 280,550 420,540 S700,530 800,540" />
      </g>

      {/* yacht silhouette */}
      <g transform="translate(260, 300)" fill="#ffffff" opacity="0.92">
        {/* hull */}
        <path d="M0,60 L280,60 L260,90 L20,90 Z" />
        {/* middle deck */}
        <path d="M40,60 L240,60 L235,40 L60,40 Z" opacity="0.95" />
        {/* upper deck */}
        <path d="M85,40 L200,40 L195,22 L110,22 Z" opacity="0.9" />
        {/* mast */}
        <rect x="150" y="0" width="1.5" height="24" />
        {/* windows band */}
        <rect x="70" y="66" width="170" height="4" fill={g[0]} opacity="0.4" />
      </g>

      {/* reflection */}
      <g transform="translate(260, 393)" opacity="0.18">
        <path d="M0,0 L280,0 L260,30 L20,30 Z" fill="#ffffff" />
      </g>
    </svg>
  );
}
