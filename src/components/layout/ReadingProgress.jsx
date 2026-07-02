import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const value =
        height <= 0 ? 0 : (scrollTop / height) * 100;

      setProgress(value);
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      {/* Glow */}

      <div
        className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-9998
        h-px
        blur-md
        "
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg,#34d399,#10b981,#4ade80)",
        }}
      />

      {/* Bar */}

      <div
        className="
        fixed
        left-0
        top-0
        z-9999
        h-0.75
        rounded-r-full
        transition-[width]
        duration-75
        "
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg,#34d399,#22c55e,#86efac,#22c55e)",
          boxShadow:
            "0 0 14px rgba(34,197,94,.45)",
        }}
      />
    </>
  );
}