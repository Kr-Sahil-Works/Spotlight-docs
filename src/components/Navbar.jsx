export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          Spotlight Docs
        </h1>

        <a
          href="#"
          className="rounded-lg border border-zinc-800 px-4 py-2 hover:bg-zinc-900"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}