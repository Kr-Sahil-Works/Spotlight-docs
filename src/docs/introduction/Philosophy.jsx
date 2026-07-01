import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

const principles = [
  {
    title: "Performance First",
    text: "Every screen is designed to feel smooth using FlashList, optimized rendering, memoization and efficient caching.",
  },
  {
    title: "Offline Experience",
    text: "Important data is cached using MMKV so users can continue browsing chats and content even without internet.",
  },
  {
    title: "Modern UI",
    text: "A premium interface inspired by modern social applications with glassmorphism, animations and dynamic themes.",
  },
  {
    title: "Scalable Architecture",
    text: "Feature-based project structure keeps the application organized and easy to extend.",
  },
  {
    title: "Developer Experience",
    text: "TypeScript, reusable components and clean architecture make Spotlight easier to maintain.",
  },
  {
    title: "Security",
    text: "Authentication is powered by Clerk with secure Google Sign-In and encrypted communication channels.",
  },
];

export default function Philosophy() {
  return (
    <section className="mt-10">

      <GlassCard className="p-10">

        <SectionTitle
          badge="Philosophy"
          title="Design Principles"
          subtitle="The core ideas behind Spotlight's architecture and user experience."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">

          {principles.map((item) => (
            <div
              key={item.title}
              className="
              rounded-3xl
              border
              border-emerald-500/10
              bg-emerald-500/4
              p-7
              transition
              hover:border-emerald-400/20
              hover:bg-emerald-500/[0.07]
              "
            >

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </GlassCard>

    </section>
  );
}