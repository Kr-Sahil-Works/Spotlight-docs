import { NavLink } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import { navigation } from "../../config/navigation";
import { useSidebar } from "../../hooks/useSidebar";

export default function Sidebar({ mobile = false }) {
  const { closeSidebar } = useSidebar();

  return (
    <aside
      className={`
        glass
        ${
          mobile
            ? "h-full rounded-none"
            : "sticky top-24 h-[calc(100vh-7rem)] rounded-[28px]"
        }
        w-71.25
        overflow-y-auto
        border-r border-white/5
        p-6
      `}
    >
      {navigation.map((group, index) => (
        <div
          key={group.section}
          className="mb-9"
        >
          {/* Section Header */}

          <div className="mb-4 flex items-center justify-between">

            <h3
              className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-emerald-300/70
              "
            >
              {group.section}
            </h3>

            {mobile && index === 0 && (
              <button
                onClick={closeSidebar}
                className="
                rounded-xl
                p-2
                text-zinc-400
                transition-all
                duration-200
                hover:bg-white/5
                hover:text-white
                "
                aria-label="Close sidebar"
              >
                <ChevronLeft size={20} />
              </button>
            )}

          </div>

          <div className="space-y-1">

            {group.pages.map((page) => (
              <NavLink
                key={page.path}
                to={page.path}
                onClick={() => {
                  if (mobile) {
                    closeSidebar();
                  }
                }}
                className={({ isActive }) =>
                  `
                  block
                  rounded-2xl
                  border
                  px-4
                  py-3
                  transition-all
                  ${
                    isActive
                      ? "border-emerald-500/20 bg-emerald-500/15 text-emerald-300"
                      : "border-transparent text-zinc-400 hover:bg-white/5 hover:text-white"
                  }
                  `
                }
              >
                <p className="font-medium">
                  {page.title}
                </p>

                {page.description && (
                  <p className="mt-1 text-xs text-zinc-500">
                    {page.description}
                  </p>
                )}
              </NavLink>
            ))}

          </div>
        </div>
      ))}
    </aside>
  );
}