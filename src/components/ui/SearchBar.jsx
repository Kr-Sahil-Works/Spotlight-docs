import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { searchItems } from "../../content/search";


function highlight(text, query) {
  if (!query.trim()) return text;

  const regex = new RegExp(`(${query})`, "ig");

  return text.split(regex).map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span
        key={index}
        className="
        rounded
        bg-emerald-500/15
        px-1
        font-medium
        text-emerald-300
        "
      >
        {part}
      </span>
    ) : (
      part
    )
  );
}


export default function SearchBar() {
  const navigate = useNavigate();

  const inputRef = useRef(null);
  const wrapperRef = useRef(null);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const [recent, setRecent] = useState(() => {
  return JSON.parse(
    localStorage.getItem("spotlight-search") || "[]"
  );
});

const popularSearches = [
  "Installation",
  "Chat",
  "Offline",
  "Themes",
  "Notifications",
];

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (value.length < 2) return [];

    return searchItems.filter((item) => {
      return (
        item.title.toLowerCase().includes(value) ||
        item.description.toLowerCase().includes(value) ||
        item.keywords.some((keyword) =>
          keyword.toLowerCase().includes(value)
        )
      );
    });
  }, [query]);

useEffect(() => {
  function handleClick(e) {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(e.target)
    ) {
      setOpen(false);
    }
  }

function handleKey(e) {
  if (e.ctrlKey && e.key.toLowerCase() === "k") {
    e.preventDefault();

    setOpen(true);

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return;
  }

  if (!open) return;

  if (e.key === "Escape") {
    setOpen(false);
    return;
  }

  if (e.key === "ArrowDown") {
    e.preventDefault();

    setSelected((prev) =>
      Math.min(prev + 1, results.length - 1)
    );

    return;
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();

    setSelected((prev) =>
      Math.max(prev - 1, 0)
    );

    return;
  }

  if (e.key === "Enter") {
    e.preventDefault();

    if (results[selected]) {
      openPage(results[selected]);
    }
  }
}

  window.addEventListener("mousedown", handleClick);
  window.addEventListener("keydown", handleKey);

  return () => {
    window.removeEventListener("mousedown", handleClick);
    window.removeEventListener("keydown", handleKey);
  };
}, [open, results, selected]);

useEffect(() => {
  setSelected(0);
}, [query]);


function openPage(item) {
  const updated = [
    item,
    ...recent.filter((r) => r.path !== item.path),
  ].slice(0, 5);

  setRecent(updated);

  localStorage.setItem(
    "spotlight-search",
    JSON.stringify(updated)
  );

  navigate(item.path);

  setQuery("");
  setOpen(false);
}

  return (
    <div
      ref={wrapperRef}
      className="relative hidden lg:block"
    >
      <div
      onClick={() => {
  inputRef.current?.focus();
  setOpen(true);
}}
        className="
        flex
        h-11
        w-82.5
        items-center
        rounded-2xl
        border
        border-white/6
        bg-white/5
        px-4
        transition
        hover:bg-white/10
        "
      >
        <Search
          size={17}
          className="text-zinc-400"
        />

        <input
          ref={inputRef}
          value={query}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          placeholder="Search in documentation..."
          className="
          ml-3
          flex-1
          bg-transparent
          text-sm
          outline-none
          placeholder:text-zinc-500
          "
        />

      {query.length === 0 ? (

  <kbd
    className="
    rounded-lg
    bg-black/30
    px-2
    py-1
    text-[11px]
    text-zinc-500
    "
  >
    Ctrl K
  </kbd>

) : (

  <button
    onClick={() => {
      setQuery("");
      setOpen(false);
      inputRef.current?.blur();
    }}
    className="
    rounded-lg
    p-1.5
    text-zinc-500
    transition
    hover:bg-white/5
    hover:text-white
    "
  >
    <X size={15} />
  </button>

)}
      </div>

      <AnimatePresence>

{open && (
      <motion.div
  initial={{
    opacity: 0,
    y: 8,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  exit={{
    opacity: 0,
    y: 8,
  }}
  transition={{
    duration: 0.16,
  }}
  className="
  absolute
  right-0
  mt-3
  w-[320px]
  overflow-hidden
  rounded-3xl
  border
  border-white/6
  bg-[#101412]
  shadow-2xl
  "
>
          {query.length < 2 ? (
          <div className="p-5">

  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
    Recent Searches
  </p>

  {recent.length === 0 ? (
<div>

  <p className="mb-4 text-sm text-zinc-500">
    Popular Searches
  </p>

  <div className="flex flex-wrap gap-2">

    {popularSearches.map((item) => (

      <button
        key={item}
        onClick={() => {
          setQuery(item);
          setOpen(true);
          inputRef.current?.focus();
        }}
        className="
        rounded-full
        border
        border-white/6
        bg-white/5
        px-3
        py-2
        text-xs
        transition-all
        hover:border-emerald-500/20
        hover:bg-emerald-500/10
        "
      >
        {item}
      </button>

    ))}

  </div>

</div>
  ) : (
    <div className="space-y-2">

      {recent.map((item) => (
        <button
          key={item.path}
          onClick={() => openPage(item)}
          className="
          flex
          w-full
          items-center
          gap-3
          rounded-xl
          px-3
          py-2.5
          text-left
          transition
          hover:bg-white/5
          "
        >
          <span className="text-lg">
            {item.icon}
          </span>

          <div>

         <p className="font-medium">
  {highlight(item.title, query)}
</p>

      <p className="mt-1 text-sm text-zinc-500">
  {highlight(item.description, query)}
</p>

          </div>

        </button>
      ))}

    </div>
  )}

</div>
          ) : results.length === 0 ? (
            <div className="p-5 text-sm text-zinc-500">
              <div className="p-6 text-center">

  <p className="text-3xl">
    🔍
  </p>

  <h3 className="mt-3 font-semibold">
    No Results
  </h3>

 <div className="mt-5 flex flex-wrap justify-center gap-2">

  {popularSearches.map((item) => (

    <button
      key={item}
      onClick={() => {
        setQuery(item);
        setOpen(true);
        inputRef.current?.focus();
      }}
      className="
      rounded-full
      border
      border-white/6
      bg-white/5
      px-3
      py-2
      text-xs
      transition
      hover:border-emerald-500/20
      hover:bg-emerald-500/10
      "
    >
      {item}
    </button>

  ))}

</div>

</div>
            </div>
          ) : (
            results.map((item, index) => (
          <button
  ref={(el) => {
    if (selected === index) {
      el?.scrollIntoView({
        block: "nearest",
      });
    }
  }}
                key={item.path}
                onMouseEnter={() => setSelected(index)}
                onClick={() => openPage(item)}
             className={`
block
w-full
border-b
border-white/5
px-4
py-3
text-left
transition
${
selected === index
? "bg-emerald-500/10"
: "hover:bg-white/5"
}
`}
              >
             <div className="flex items-center gap-3">

  <span className="text-lg">
    {item.icon}
  </span>

  <div>

    <p className="font-medium">
      {item.title}
    </p>

    <p className="mt-1 text-sm text-zinc-500">
      {item.description}
    </p>

  </div>

</div>

             
              </button>
            ))
          )}
        </motion.div>
    )}

</AnimatePresence>
    </div>
  );
}