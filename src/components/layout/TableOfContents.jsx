import {
  MessageCircle,
  Images,
  WifiOff,
  Palette,
} from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

const highlights = [
  {
    icon: MessageCircle,
    title: "Realtime Messaging",
  },
  {
    icon: Images,
    title: "Stories & Posts",
  },
  {
    icon: WifiOff,
    title: "Offline Ready",
  },
  {
    icon: Palette,
    title: "104 Chat Themes",
  },
];

export default function About() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Overview"
        title="What is Spotlight?"
        subtitle="A premium social platform engineered with performance, simplicity and scalability."
      />

      <GlassCard>

        <p className="text-lg leading-8 text-zinc-300">
          Spotlight combines realtime messaging, social sharing,
          offline-first architecture and premium UI into one
          modern mobile application. Every feature has been
          carefully designed for smooth performance and an
          exceptional user experience.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">

          {highlights.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/6
                bg-white/4
                p-4
                "
              >

                <div
                  className="
                  rounded-xl
                  bg-emerald-500/15
                  p-3
                  text-emerald-300
                  "
                >
                  <Icon size={22} />
                </div>

                <span className="font-medium">
                  {item.title}
                </span>

              </div>
            );
          })}

        </div>

      </GlassCard>

    </section>
  );
}