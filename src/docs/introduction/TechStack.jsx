import GlassCard from "../../components/common/GlassCard";
import SectionTitle from "../../components/common/SectionTitle";

import reactLogo from "../../assets/images/react.png";
import expoLogo from "../../assets/images/expo.png";
import convexLogo from "../../assets/images/convex.png";
import clerkLogo from "../../assets/images/clerk.png";

const stack = [
  {
    name: "React Native",
    logo: reactLogo,
    image: true,
    description: "Cross-platform mobile development",
  },
  {
    name: "Expo SDK 51",
    logo: expoLogo,
    image: true,
    description: "Modern React Native workflow",
  },
  {
    name: "Convex",
    logo: convexLogo,
    image: true,
    description: "Realtime backend & database",
  },
  {
    name: "Clerk",
    logo: clerkLogo,
    image: true,
    description: "Authentication & user management",
  },
  {
    name: "MMKV",
    logo: "⚡",
    image: false,
    description: "Offline storage & caching",
  },
  {
    name: "FlashList",
    logo: "🚀",
       image: false,
    description: "High performance lists",
  },
  {
    name: "Expo Image",
    logo: "🖼️",
       image: false,
    description: "Fast image rendering",
  },
  {
    name: "Expo Notifications",
    logo: "🔔",
       image: false,
    description: "Push notifications",
  },
];

export default function TechStack() {
  return (
    <section className="section">

      <SectionTitle
        eyebrow="Technology"
        title="Powered by Modern Technologies"
        subtitle="Spotlight uses carefully selected technologies to provide excellent developer experience and application performance."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stack.map((item) => (

          <GlassCard
            key={item.name}
            className="transition-all duration-300 hover:-translate-y-1"
          >
{item.image ? (
  <img
    src={item.logo}
    alt={item.name}
    className="mb-5 h-14 w-14 object-contain"
  />
) : (
  <div className="mb-5 text-5xl">
    {item.logo}
  </div>
)}

            <h3 className="text-xl font-bold">
              {item.name}
            </h3>

            <p className="mt-3 leading-7 text-zinc-400">
              {item.description}
            </p>

          </GlassCard>

        ))}

      </div>

    </section>
  );
}