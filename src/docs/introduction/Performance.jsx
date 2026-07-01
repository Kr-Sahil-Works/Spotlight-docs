import {
  Zap,
  HardDrive,
  Image,
  Smartphone,
  Wifi,
  ShieldCheck,
} from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

const features = [
  {
    icon: Zap,
    title: "FlashList",
    desc: "Smooth scrolling even with large datasets.",
  },
  {
    icon: HardDrive,
    title: "MMKV Cache",
    desc: "Fast offline access to chats and feed.",
  },
  {
    icon: Image,
    title: "WEBP Images",
    desc: "Optimized image compression and loading.",
  },
  {
    icon: Smartphone,
    title: "Native Performance",
    desc: "Built using React Native & Expo.",
  },
  {
    icon: Wifi,
    title: "Realtime Sync",
    desc: "Convex powers realtime communication.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Auth",
    desc: "Clerk authentication with Google Sign-In.",
  },
];

export default function Performance() {
  return (
    <section className="mt-10">
      <GlassCard className="p-10">
        <SectionTitle
          badge="Performance"
          title="Built for Speed"
          subtitle="Every important part of Spotlight has been optimized for responsiveness and reliability."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/5 bg-white/3 p-6 transition hover:border-emerald-500/20 hover:bg-white/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon
                    size={28}
                    className="text-emerald-300"
                  />
                </div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </section>
  );
}