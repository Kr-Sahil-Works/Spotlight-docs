import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Logo({
  size = 44,
  showText = false,
}) {
  return (
    <Link
      to="/"
      className="flex items-center gap-3"
    >
      <img
        src={logo}
        alt="Spotlight"
        width={size}
        height={size}
        className="rounded-xl object-contain"
      />

      {showText && (
        <div>
          <h2 className="text-lg font-bold tracking-tight text-white">
            Spotlight
          </h2>

          <p className="text-xs text-zinc-400">
            Documentation
          </p>
        </div>
      )}
    </Link>
  );
}