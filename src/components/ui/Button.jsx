import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5">

      <div
        className="
        mx-auto
        flex
        max-w-412.5
        flex-col
        items-center
        justify-between
        gap-8
        px-6
        py-10
        md:flex-row
        "
      >

        <div className="flex items-center gap-4">

          <Logo />

          <div>

            <h3 className="font-semibold">
              Spotlight Documentation
            </h3>

            <p className="mt-1 text-sm text-zinc-500">
              Premium documentation for Spotlight.
            </p>

          </div>

        </div>

        <div className="text-center md:text-right">

          <p className="text-sm text-zinc-500">
            Built with React • Vite • Tailwind CSS
          </p>

          <p className="mt-1 text-xs text-zinc-600">
            © 2026 Kr Sahil Studio. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}