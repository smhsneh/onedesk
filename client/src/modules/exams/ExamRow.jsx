import {
  Trash2,
} from "lucide-react";

const ExamRow = ({
  id,
  subject,
  date,
  daysLeft,
  onDelete,
}) => {
  return (
    <div
      className="
        rounded-2xl
        border border-white/30
        bg-white/40
        p-4
      "
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="capitalize font-medium truncate">
            {subject}
          </h3>

          <p className="text-xs text-black/45 mt-1">
            {date}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span
            className={`
              text-xs
              font-semibold

              ${
                daysLeft <= 2
                  ? "text-[#d95c5c]"
                  : "text-black/50"
              }
            `}
          >
            {daysLeft === 0
              ? "today"
              : `${daysLeft}d left`}
          </span>

          <button
            onClick={() =>
              onDelete(id)
            }
            className="
              h-8
              w-8

              rounded-xl

              bg-white/30

              border border-white/30

              flex
              items-center
              justify-center

              transition-all
              duration-300

              hover:bg-white/45
            "
          >
            <Trash2
              size={14}
              className="text-black/40"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamRow;