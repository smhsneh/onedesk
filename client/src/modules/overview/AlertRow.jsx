// src/modules/overview/AlertRow.jsx

import {
  ChevronRight,
} from "lucide-react";

import { getUrgencyColor } from "./overviewUtils";

const AlertRow = ({
  title,
  time,
  priority,
}) => {
  const colors =
    getUrgencyColor(
      priority
    );

  return (
    <button
      className="
        w-full

        rounded-2xl
        bg-white/35

        border border-white/30

        px-4
        py-3

        flex
        items-center
        justify-between

        transition-all
        duration-300

        hover:bg-white/45
      "
    >
      <div className="flex items-center gap-3 min-w-0">
        <div
          className={`
            h-2.5
            w-2.5

            rounded-full

            shrink-0

            ${colors.dot}
          `}
        />

        <span className="capitalize font-medium truncate">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span
          className={`
            text-xs
            font-semibold

            ${colors.text}
          `}
        >
          {time}
        </span>

        <ChevronRight
          size={15}
          className="text-black/25"
        />
      </div>
    </button>
  );
};

export default AlertRow;