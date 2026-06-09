import { NavLink } from "react-router-dom";
import { docs } from "../data/docs";

export default function Sidebar() {
  return (
    <aside className="sticky top-20 h-fit w-64 border-r border-zinc-800 p-4">
      <div className="space-y-2">
        {docs.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 ${
                isActive
                  ? "bg-zinc-900"
                  : "hover:bg-zinc-900"
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}