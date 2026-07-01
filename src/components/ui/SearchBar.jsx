import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div
      className="
      flex
      items-center
      gap-3
      rounded-2xl
      border
      border-white/5
      bg-white/5
      px-4
      py-3
      "
    >
      <Search
        size={18}
        className="text-zinc-500"
      />

      <input
        type="text"
        placeholder="Search documentation..."
        className="
        w-full
        bg-transparent
        text-sm
        outline-none
        placeholder:text-zinc-500
        "
      />
    </div>
  );
}