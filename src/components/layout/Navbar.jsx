import { Menu, Search, Github } from "lucide-react";

import Logo from "../common/Logo";
import { useSidebar } from "../../hooks/useSidebar";

export default function Navbar() {
  const { setOpen } = useSidebar();

  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-white/5
      bg-[rgba(5,8,6,.72)]
      backdrop-blur-2xl
      "
    >
      <div
        className="
        mx-auto
        flex
        h-17
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
            onClick={() => setOpen(true)}
            className="
            rounded-xl
            p-2
            hover:bg-white/5
            xl:hidden
            "
          >
            <Menu size={21} />
          </button>

          <Logo showText />

        </div>

        {/* Search */}

        <button
          className="
          hidden
          md:flex
          h-11
          w-85
          items-center
          justify-between
          rounded-2xl
          border
          border-white/6
          bg-white/4
          px-4
          text-sm
          text-zinc-400
          transition
          hover:bg-white/6
          "
        >

          <div className="flex items-center gap-2">
            <Search size={16} />
            Search Documentation
          </div>

          <kbd
            className="
            rounded-lg
            bg-black/20
            px-2
            py-1
            text-[11px]
            "
          >
            Ctrl K
          </kbd>

        </button>

        {/* Right */}

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="
          flex
          items-center
          gap-2
          rounded-2xl
          border
          border-white/6
          bg-white/4
          px-4
          py-2.5
          text-sm
          transition
          hover:bg-white/8
          "
        >
          <Github size={18} />
          <span className="hidden sm:block">
            GitHub
          </span>
        </a>

      </div>
    </header>
  );
}