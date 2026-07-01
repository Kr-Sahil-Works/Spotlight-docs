import GlassCard from "../../components/common/GlassCard";
import { stats } from "../../content/introduction";

export default function Stats() {
  return (
    <section className="mt-10">

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => (
          <GlassCard
            key={item.label}
            className="p-8 text-center"
          >

            <h2 className="text-4xl font-black text-emerald-300">
              {item.value}
            </h2>

            <p className="mt-3 text-zinc-400">
              {item.label}
            </p>

          </GlassCard>
        ))}

      </div>

    </section>
  );
}