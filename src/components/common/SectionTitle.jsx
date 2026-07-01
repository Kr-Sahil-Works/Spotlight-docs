export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}) {
  return (
    <div className="mb-12">

      {eyebrow && (
        <p
          className="
          mb-4
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-emerald-300
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
        max-w-3xl
        text-4xl
        font-black
        tracking-tight
        md:text-5xl
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
          mt-5
          max-w-3xl
          text-lg
          leading-8
          text-zinc-400
          "
        >
          {subtitle}
        </p>
      )}

    </div>
  );
}