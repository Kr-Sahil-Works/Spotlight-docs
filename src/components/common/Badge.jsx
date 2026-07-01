export default function Badge({
  children,
  className = "",
}) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        border-emerald-500/20
        bg-emerald-500/10
        px-4
        py-1.5
        text-xs
        font-medium
        tracking-wide
        text-emerald-300
        ${className}
      `}
    >
      {children}
    </span>
  );
}