import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

const stack = [
  {
    title: "React Native",
    desc: "Cross-platform UI",
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Expo",
    desc: "Development Platform",
    color: "from-zinc-700 to-zinc-500",
  },
  {
    title: "Convex",
    desc: "Realtime Backend",
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Clerk",
    desc: "Authentication",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "MMKV",
    desc: "Offline Cache",
    color: "from-emerald-500 to-green-400",
  },
];

export default function Architecture() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Architecture"
        title="Modern Tech Stack"
        subtitle="Every technology was selected for performance, scalability and developer experience."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {stack.map((item) => (
          <GlassCard key={item.title}>

            <div
              className={`
              mb-6
              h-14
              w-14
              rounded-2xl
              bg-linear-to-br
              ${item.color}
              `}
            />

            <h3 className="text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-3 text-zinc-400">
              {item.desc}
            </p>

          </GlassCard>
        ))}

      </div>

    </section>
  );
}