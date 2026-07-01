import {
  ArrowDown,
  Database,
  Smartphone,
  Server,
  HardDrive,
  Rocket,
} from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

const flow = [
  {
    icon: Smartphone,
    title: "React Native",
    subtitle: "Cross-platform UI",
  },
  {
    icon: Rocket,
    title: "Expo SDK 51",
    subtitle: "Development Platform",
  },
  {
    icon: Server,
    title: "Feature Modules",
    subtitle: "Scalable Architecture",
  },
  {
    icon: Database,
    title: "Convex Backend",
    subtitle: "Realtime Database",
  },
  {
    icon: HardDrive,
    title: "MMKV Cache",
    subtitle: "Offline First",
  },
];

export default function Architecture() {
  return (
    <section className="mt-10">

      <GlassCard className="p-10">

        <SectionTitle
          badge="Architecture"
          title="Application Architecture"
          subtitle="Spotlight follows a feature-based architecture focused on scalability, realtime synchronization, offline support and maintainability."
        />

        <div className="mx-auto mt-12 max-w-3xl">

          {flow.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col items-center"
              >

                <div
                  className="
                  w-full
                  rounded-3xl
                  border
                  border-emerald-500/10
                  bg-emerald-500/5
                  p-6
                  transition
                  hover:border-emerald-400/25
                  hover:bg-emerald-500/10
                  "
                >

                  <div className="flex items-center gap-5">

                    <div
                      className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-emerald-500/15
                      "
                    >
                      <Icon
                        size={28}
                        className="text-emerald-300"
                      />
                    </div>

                    <div>

                      <h3 className="text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-zinc-400">
                        {item.subtitle}
                      </p>

                    </div>

                  </div>

                </div>

                {index !== flow.length - 1 && (
                  <ArrowDown
                    className="my-5 text-emerald-400"
                    size={24}
                  />
                )}

              </div>
            );
          })}

        </div>

      </GlassCard>

    </section>
  );
}