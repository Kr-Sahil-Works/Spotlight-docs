import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

const stack = [
  {
    title: "React Native",
    desc: "Cross-platform native UI framework",
    color: "from-cyan-500 to-sky-600",
  },
  {
    title: "Expo SDK 51",
    desc: "Development & deployment platform",
    color: "from-zinc-700 to-zinc-900",
  },
  {
    title: "TypeScript",
    desc: "Type-safe application development",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Expo Router",
    desc: "File-based navigation",
    color: "from-purple-500 to-indigo-700",
  },
  {
    title: "Convex",
    desc: "Realtime backend & database",
    color: "from-emerald-500 to-green-700",
  },
  {
    title: "Clerk",
    desc: "Authentication & session management",
    color: "from-violet-500 to-fuchsia-700",
  },
  {
    title: "MMKV",
    desc: "Offline local storage",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "FlashList",
    desc: "Ultra-fast list rendering",
    color: "from-lime-500 to-green-700",
  },
  {
    title: "Expo Image",
    desc: "Optimized image rendering",
    color: "from-pink-500 to-rose-700",
  },
  {
    title: "Expo Notifications",
    desc: "Push notifications",
    color: "from-yellow-500 to-orange-600",
  },
];

export default function TechStack() {
  return (
    <section className="mt-10">

      <GlassCard className="p-10">

        <SectionTitle
          badge="Technology"
          title="Technology Stack"
          subtitle="Modern technologies powering Spotlight."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {stack.map((item) => (
            <div
              key={item.title}
              className="
              rounded-3xl
              border
              border-white/5
              bg-white/3
              p-6
              transition
              hover:-translate-y-1
              hover:border-emerald-500/20
              "
            >

              <div
                className={`
                mb-5
                h-14
                w-14
                rounded-2xl
                bg-linear-to-br
                ${item.color}
                `}
              />

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </GlassCard>

    </section>
  );
}