import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { navigation } from "../../config/navigation";
import { useSidebar } from "../../hooks/useSidebar";

export default function Sidebar({ mobile = false }) {
  const { setOpen } = useSidebar();

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`
        glass
        sticky
        top-24
        h-[calc(100vh-7rem)]
        w-[280px]
        overflow-y-auto
        rounded-3xl
        p-5
        ${mobile ? "h-screen rounded-none pt-24" : ""}
      `}
    >
      {navigation.map((section) => (
        <div
          key={section.section}
          className="mb-8"
        >
          <h3
            className="
            mb-3
            px-3
            text-xs
            font-semibold
            uppercase
            tracking-[.18em]
            text-emerald-300/70
            "
          >
            {section.section}
          </h3>

          <div className="space-y-1">

            {section.pages.map((page) => (
              <NavLink
                key={page.path}
                to={page.path}
                onClick={() => mobile && setOpen(false)}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  rounded-2xl
                  px-4
                  py-3
                  text-sm
                  transition-all
                  ${
                    isActive
                      ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }
                  `
                }
              >
                {page.title}
              </NavLink>
            ))}

          </div>
        </div>
      ))}
    </motion.aside>
  );
}