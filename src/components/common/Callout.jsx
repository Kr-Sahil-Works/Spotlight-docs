import {
  Info,
  TriangleAlert,
  CircleCheck,
  CircleX,
} from "lucide-react";

const variants = {
  info: {
    icon: Info,
    classes:
      "border-sky-500/20 bg-sky-500/10 text-sky-200",
  },

  success: {
    icon: CircleCheck,
    classes:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-200",
  },

  warning: {
    icon: TriangleAlert,
    classes:
      "border-yellow-500/20 bg-yellow-500/10 text-yellow-200",
  },

  danger: {
    icon: CircleX,
    classes:
      "border-red-500/20 bg-red-500/10 text-red-200",
  },
};

export default function Callout({
  type = "info",
  children,
}) {
  const Icon = variants[type].icon;

  return (
    <div
      className={`
      flex
      gap-4
      rounded-3xl
      border
      p-5
      ${variants[type].classes}
      `}
    >
      <Icon size={22} />

      <div className="leading-7">
        {children}
      </div>
    </div>
  );
}