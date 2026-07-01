import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .35,
      }}
      className={`
        glass
        rounded-[28px]
        p-8
        md:p-10
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}