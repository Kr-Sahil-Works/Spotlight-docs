import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

const items = [
  {
    title: "FlashList",
    desc: "Smooth scrolling with large datasets.",
  },
  {
    title: "Expo Image",
    desc: "Fast image loading & caching.",
  },
  {
    title: "MMKV",
    desc: "Instant offline access.",
  },
  {
    title: "Realtime",
    desc: "Optimized Convex subscriptions.",
  },
];

export default function Performance() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Performance"
        title="Optimized for Speed"
        subtitle="Performance isn't an afterthought. It's built into every layer."
      />

      <div className="grid gap-6 md:grid-cols-2">

        {items.map((item) => (
          <GlassCard key={item.title}>

            <h3 className="text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {item.desc}
            </p>

          </GlassCard>
        ))}

      </div>

    </section>
  );
}