import { ChevronUp } from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  });

const opacity = useTransform(
  scrollYProgress,
  [0, 0.15, 1],
  [0, 0.4, 1]
);

  const scale = useTransform(
    scrollYProgress,
    [0, 0.06],
    [0.85, 1]
  );

  const circumference = 2 * Math.PI * 23;

  return (
    <motion.button
      style={{
        opacity,
        scale,
      }}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
      fixed
      bottom-6
      right-2
      sm:bottom-22
      sm:right-10
      z-9999
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
     
      bg-[#010101]


      transition-all
      duration-300
      hover:-translate-y-1
      active:scale-95
      "
      aria-label="Scroll to top"
    >
      {/* Background Ring */}

      <svg
        className="absolute inset-0"
        viewBox="0 0 56 56"
      >

        <motion.circle
          cx="28"
          cy="28"
          r="23"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
        style={{
  strokeDashoffset: useTransform(
    progress,
    (v) => circumference * (1 - v)
  ),
filter: "drop-shadow(0 0 2px rgba(132,204,22,.18))",
}}
          transform="rotate(-90 28 28)"
        />

  <defs>

  <linearGradient
    id="progressGradient"
    x1="5%"
    y1="95%"
    x2="95%"
    y2="5%"
  >

    <stop
      offset="0%"
      stopColor="#16a34a"
    />

    <stop
      offset="28%"
      stopColor="#84cc16"
    />

    <stop
      offset="55%"
      stopColor="#bef264"
    />

    <stop
      offset="78%"
      stopColor="#4ade80"
    />

    <stop
      offset="100%"
      stopColor="#22c55e"
    />

  </linearGradient>

</defs>
      </svg>

      <ChevronUp
        size={21}
        strokeWidth={2.5}
        className="relative z-10 text-white"
      />


    </motion.button>
  );
}