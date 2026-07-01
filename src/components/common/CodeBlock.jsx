import { Copy } from "lucide-react";

export default function CodeBlock({
  language = "tsx",
  children,
}) {
  async function copyCode() {
    await navigator.clipboard.writeText(children);
  }

  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      border
      border-white/5
      bg-[#08110D]
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        border-b
        border-white/5
        px-5
        py-3
        "
      >
        <span className="text-sm text-zinc-400">
          {language}
        </span>

        <button
          onClick={copyCode}
          className="
          rounded-xl
          p-2
          transition
          hover:bg-white/5
          "
        >
          <Copy size={17} />
        </button>
      </div>

      <pre
        className="
        overflow-x-auto
        p-6
        text-sm
        leading-7
        text-emerald-300
        "
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}