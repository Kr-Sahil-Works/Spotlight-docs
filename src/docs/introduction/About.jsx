import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

export default function About() {
  return (
    <section className="mt-10">

      <GlassCard className="p-10">

        <SectionTitle
          badge="Overview"
          title="What is Spotlight?"
          subtitle="A modern social platform built from the ground up with performance, simplicity and beautiful user experience as the primary goals."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          <div>

            <p className="leading-8 text-zinc-300">

              Spotlight is a modern social networking application
              inspired by today's leading messaging and social
              platforms while introducing its own polished design,
              performance optimizations and offline-first experience.

            </p>

            <p className="mt-6 leading-8 text-zinc-400">

              Every feature has been carefully engineered using
              modern React Native architecture with a strong focus on
              smooth animations, optimized rendering, real-time data,
              caching, security and maintainability.

            </p>

          </div>

          <div className="space-y-5">

            <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-5">
              💬 Real-time Messaging
            </div>

            <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-5">
              📸 Stories & Posts
            </div>

            <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-5">
              🌐 Offline Ready
            </div>

            <div className="rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-5">
              🎨 Premium Theme Engine
            </div>

          </div>

        </div>

      </GlassCard>

    </section>
  );
}