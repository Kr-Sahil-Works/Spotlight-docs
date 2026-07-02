export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* AMOLED Base */}

      <div className="absolute inset-0 bg-[#020302]" />

      {/* Left Glow */}

      <div
        className="
        absolute
        -left-56
        top-10
        h-225
        w-225
        rounded-full
        bg-emerald-500/5
        blur-[220px]
        beam-glow
        "
      />

      {/* Right Glow */}

      <div
        className="
        absolute
        -right-56
        bottom-0
        h-225
        w-225
        rounded-full
        bg-green-400/4
        blur-[220px]
        beam-glow
        "
        style={{
          animationDelay: "-12s",
        }}
      />

      {/* ========================= */}
      {/* Moving Beam 1 */}
      {/* ========================= */}

      <div
        className="
        beam
        absolute
        -left-48
        -top-40
        h-[180vh]
        w-85
        rotate-30
        "
        style={{
          animationDelay: "-4s",
        }}
      />

      {/* ========================= */}
      {/* Moving Beam 2 */}
      {/* ========================= */}

      <div
        className="
        beam
        absolute
        left-[34%]
        -top-56
        h-[190vh]
        w-90
        rotate-[-28deg]
        "
        style={{
          animationDuration: "34s",
        }}
      />

      {/* ========================= */}
      {/* Moving Beam 3 */}
      {/* ========================= */}

      <div
        className="
        beam
        absolute
        -right-30
        -top-48
        h-[180vh]
        w-82.5
        rotate-30
        "
        style={{
          animationDelay: "-18s",
          animationDuration: "30s",
        }}
      />

      {/* Center Ambient */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-175
        w-175
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-emerald-500/2
        blur-[180px]
        "
      />

      {/* Noise */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.5) 1px, transparent 0)",
          backgroundSize: "6px 6px",
        }}
      />

    </div>
  );
}