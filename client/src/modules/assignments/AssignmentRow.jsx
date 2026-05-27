import {
  Check,
  Trash2,
} from "lucide-react";

const AssignmentRow = ({
  id,
  title,
  due,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <div
      className="
        rounded-2xl
        bg-white/40
        border border-white/30

        p-4

        transition-all
        duration-300

        hover:bg-white/50
      "
    >
      <div className="flex items-center justify-between gap-4">
        {/* left */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => onToggle(id)}
            className={`
              h-7
              w-7

              rounded-xl

              border

              flex
              items-center
              justify-center

              transition-all
              duration-300

              ${
                completed
                  ? `
                    bg-[#b7f7c5]
                    border-[#b7f7c5]
                  `
                  : `
                    bg-white/40
                    border-white/40
                    hover:bg-white/60
                  `
              }
            `}
          >
            {completed && (
              <Check
                size={15}
                className="text-black/60"
              />
            )}
          </button>

          <div className="min-w-0">
            <h3
              className={`
                capitalize
                font-medium
                truncate

                ${
                  completed
                    ? "line-through text-black/35"
                    : "text-black/75"
                }
              `}
            >
              {title}
            </h3>

            <span
              className="
                text-xs
                text-black/45
              "
            >
              due {due}
            </span>
          </div>
        </div>

        {/* right */}
        <button
          onClick={() => onDelete(id)}
          className="
            h-9
            w-9

            rounded-xl

            bg-white/30

            border border-white/30

            flex
            items-center
            justify-center

            shrink-0

            transition-all
            duration-300

            hover:bg-[#ffd6df]
          "
        >
          <Trash2
            size={16}
            className="text-black/45"
          />
        </button>
      </div>
    </div>
  );
};

export default AssignmentRow;