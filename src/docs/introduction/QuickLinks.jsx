import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Layers,
  Trash2,
} from "lucide-react";

import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

const links = [
  {
    title: "Installation",
    desc: "Setup Spotlight locally.",
    to: "/installation",
    icon: Download,
  },
  {
    title: "Features",
    desc: "Explore every feature.",
    to: "/features",
    icon: Layers,
  },
  {
    title: "Delete Account",
    desc: "Account deletion guide.",
    to: "/delete-account",
    icon: Trash2,
  },
];

export default function QuickLinks() {
  return (
    <section className="my-10">
      <GlassCard className="p-10">
        <SectionTitle
          badge="Explore"
          title="Continue Reading"
          subtitle="Jump directly into the next documentation sections."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                to={item.to}
                className="group rounded-3xl border border-white/5 bg-white/3 p-7 transition hover:border-emerald-500/20 hover:bg-white/5"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
                  <Icon
                    className="text-emerald-300"
                    size={26}
                  />
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 font-medium text-emerald-300">
                  Learn More

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </GlassCard>
    </section>
  );
}