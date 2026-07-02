import { motion } from "framer-motion";

import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

const stats = [
  {
    value: "40+",
    label: "Major Features",
    description: "Complete social platform experience",
  },
  {
    value: "104",
    label: "Chat Themes",
    description: "Premium wallpapers & UI themes",
  },
  {
    value: "100%",
    label: "TypeScript",
    description: "Fully typed modern codebase",
  },
  {
    value: "Offline",
    label: "MMKV Cache",
    description: "Fast local caching & sync",
  },
];

export default function Stats() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Highlights"
        title="Built with Performance in Mind"
        subtitle="Every part of Spotlight has been designed for speed, scalability and a premium user experience."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .35,
              delay: index * .05,
            }}
          >
            <GlassCard className="h-full">

              <h2 className="text-5xl font-black text-emerald-300">
                {item.value}
              </h2>

              <h3 className="mt-6 text-xl font-semibold">
                {item.label}
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {item.description}
              </p>

            </GlassCard>
          </motion.div>
        ))}

      </div>

    </section>
  );
}