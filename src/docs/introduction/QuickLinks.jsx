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
    description: "Set up Spotlight locally.",
    icon: Download,
    path: "/installation",
  },
  {
    title: "Features",
    description: "Explore every feature.",
    icon: Layers,
    path: "/features",
  },
  {
    title: "Delete Account",
    description: "Account deletion guide.",
    icon: Trash2,
    path: "/delete-account",
  },
];

export default function QuickLinks() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Documentation"
        title="Continue Reading"
        subtitle="Jump directly to the next section of the documentation."
      />

      <div className="grid gap-6 md:grid-cols-3">

        {links.map((item) => {

          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              to={item.path}
            >
              <GlassCard
                className="
                h-full
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-emerald-500/20
                "
              >

                <Icon
                  size={36}
                  className="mb-6 text-emerald-400"
                />

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-emerald-300">

                  Open

                  <ArrowRight size={18} />

                </div>

              </GlassCard>
            </Link>
          );
        })}

      </div>

    </section>
  );
}