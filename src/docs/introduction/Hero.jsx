import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import GlassCard from "../../components/common/GlassCard";
import Badge from "../../components/common/Badge";
import Button from "../../components/ui/Button";
import Logo from "../../components/common/Logo";

import { hero, techStack } from "../../content/introduction";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div
        className="
        absolute
        -left-32
        -top-24
        h-96
        w-96
        rounded-full
        bg-emerald-500/20
        blur-[140px]
        "
      />

      <div
        className="
        absolute
        right-0
        top-20
        h-80
        w-80
        rounded-full
        bg-green-400/10
        blur-[140px]
        "
      />

      <GlassCard className="relative p-10 md:p-16">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
        >

          <Logo />

          <div className="mt-8">
            <Badge>
              {hero.badge}
            </Badge>
          </div>

          <h1
            className="
            mt-6
            max-w-5xl
            text-5xl
            font-black
            leading-tight
            md:text-7xl
            "
          >
            {hero.title}
          </h1>

          <p
            className="
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-zinc-400
            "
          >
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link to="/installation">
              <Button>
                Get Started
              </Button>
            </Link>

            <Link to="/features">
              <Button className="bg-white text-black hover:bg-zinc-200">
                Features
              </Button>
            </Link>

          </div>

          <div className="mt-14 flex flex-wrap gap-3">

            {techStack.map((tech) => (
              <Badge key={tech}>
                {tech}
              </Badge>
            ))}

          </div>

        </motion.div>

      </GlassCard>

    </section>
  );
}