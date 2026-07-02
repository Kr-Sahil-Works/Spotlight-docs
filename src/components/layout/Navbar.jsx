import {
  Menu,
  X,
  GitBranch,
} from "lucide-react";

import Logo from "../common/Logo";
import SearchBar from "../ui/SearchBar";

import { useSidebar } from "../../hooks/useSidebar";

export default function Navbar() {
  const {
    open,
    toggleSidebar,
  } = useSidebar();

  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-white/5
      bg-[rgba(6,10,8,.72)]
      backdrop-blur-2xl
      "
    >
      <div
        className="
        mx-auto
        flex
        h-16
        max-w-412.5
        items-center
        justify-between
        px-4
        lg:px-8
        "
      >
        {/* Left */}

        <div className="flex items-center gap-4">

          <button
            onClick={toggleSidebar}
            className="
            rounded-xl
            p-2
            transition
            hover:bg-white/5
            xl:hidden
            "
          >
            {open ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

          <Logo showText />

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <SearchBar />

          <a
            href="https://github.com/Kr-Sahil-Works"
            target="_blank"
            rel="noreferrer"
            className="
            flex
            items-center
            gap-2
            rounded-2xl
            border
            border-white/6
            bg-white/5
            px-4
            py-2.5
            text-sm
            transition-all
            hover:bg-white/10
            "
          >
            <GitBranch size={18} />

            <span className="hidden md:block">
              GitHub
            </span>

          </a>

        </div>

      </div>
    </header>
  );
}