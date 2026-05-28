import {
  Pencil,
  Trash2,
} from "lucide-react";

const SubjectRow = ({
  id,
  subject,
  credits,
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
      <div className="flex items-center justify-between">
        <h3 className="capitalize font-semibold truncate">
          {subject}
        </h3>

        <div className="flex items-center gap-2 shrink-0">
          <span
            className="
              text-xs
              font-semibold

              px-2
              py-1

              rounded-full

              bg-white/45

              text-black/55
            "
          >
            {credits}cr
          </span>

          <button
            onClick={() =>
              onDelete(id)
            }
            className="
              h-7
              w-7

              rounded-lg

              flex
              items-center
              justify-center

              transition-all
              duration-300

              hover:bg-white/40
            "
          >
            <Trash2
              size={14}
              className="text-black/35"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectRow;