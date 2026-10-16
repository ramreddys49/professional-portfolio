const nodes = [
  { id: "n1", x: 86, y: 118, r: 5.5 },
  { id: "n2", x: 176, y: 72, r: 4.5 },
  { id: "n3", x: 268, y: 108, r: 6 },
  { id: "n4", x: 356, y: 70, r: 4 },
  { id: "n5", x: 118, y: 208, r: 4.5 },
  { id: "n6", x: 214, y: 188, r: 7 },
  { id: "n7", x: 312, y: 228, r: 5 },
  { id: "n8", x: 392, y: 168, r: 4.5 },
  { id: "n9", x: 92, y: 308, r: 4 },
  { id: "n10", x: 196, y: 332, r: 5.5 },
  { id: "n11", x: 292, y: 302, r: 6.5 },
  { id: "n12", x: 378, y: 348, r: 4 },
  { id: "n13", x: 154, y: 142, r: 3.5 },
  { id: "n14", x: 248, y: 268, r: 4 },
] as const;

const edges: Array<[string, string]> = [
  ["n1", "n2"],
  ["n1", "n5"],
  ["n1", "n13"],
  ["n2", "n3"],
  ["n2", "n13"],
  ["n3", "n4"],
  ["n3", "n6"],
  ["n3", "n8"],
  ["n4", "n8"],
  ["n5", "n6"],
  ["n5", "n9"],
  ["n6", "n7"],
  ["n6", "n13"],
  ["n6", "n14"],
  ["n7", "n8"],
  ["n7", "n11"],
  ["n7", "n14"],
  ["n9", "n10"],
  ["n10", "n11"],
  ["n10", "n14"],
  ["n11", "n12"],
  ["n11", "n14"],
];

const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]));

const labels = [
  { text: "SYSTEM", x: 214, y: 164 },
  { text: "EVENT", x: 292, y: 278 },
  { text: "SIGNAL", x: 86, y: 94 },
] as const;

export function NetworkVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-border bg-surface/50"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.10),transparent_42%),radial-gradient(circle_at_78%_72%,rgba(56,189,248,0.07),transparent_40%)]" />
      <svg
        viewBox="0 0 480 420"
        className="relative h-full w-full"
        role="presentation"
      >
        <defs>
          <linearGradient id="edge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.28" />
          </linearGradient>
        </defs>

        {edges.map(([from, to]) => {
          const a = nodeMap[from];
          const b = nodeMap[to];
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#edge)"
              strokeWidth="1.1"
            />
          );
        })}

        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 8}
              fill="#2dd4bf"
              className="opacity-[0.06]"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#0b1220"
              stroke="#5eead4"
              strokeWidth="1.25"
              className={
                node.id === "n6" || node.id === "n11"
                  ? "animate-node-pulse"
                  : "opacity-80"
              }
            />
          </g>
        ))}

        {labels.map((label) => (
          <text
            key={label.text}
            x={label.x}
            y={label.y}
            textAnchor="middle"
            className="fill-muted text-[10px] tracking-[0.28em]"
          >
            {label.text}
          </text>
        ))}
      </svg>
    </div>
  );
}
