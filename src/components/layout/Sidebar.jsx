import { NavLink } from "react-router-dom";
import { navigation } from "../../config/navigation";

export default function Sidebar({ mobile = false }) {
  return (
    <aside
      className={`
        glass
        sticky
        top-24
        h-[calc(100vh-7rem)]
        w-71.25
        overflow-y-auto
        rounded-[28px]
        p-6
        ${mobile ? "h-full rounded-none border-0" : ""}
      `}
    >
      {navigation.map((group) => (
        <div
          key={group.section}
          className="mb-9"
        >
          <h3
            className="
            mb-4
            px-2
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-emerald-300/70
            "
          >
            {group.section}
          </h3>

          <div className="space-y-1">

            {group.pages.map((page) => (
              <NavLink
                key={page.path}
                to={page.path}
                className={({ isActive }) =>
                  `
                  block
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