
import { Trash2 } from "lucide-react";

const statuses = [
  "Applied",
  "OA",
  "Interview",
  "Rejected",
  "Offer",
];

const ApplicationRow = ({
  id,
  company,
  role,
  status,
  onStatusChange,
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
        <div className="min-w-0 flex-1">
          <h3
            className="
              font-semibold
              text-black/75
              truncate
            "
          >
            {company}
          </h3>

          <p
            className="
              text-xs
              text-black/45
            "
          >
            {role}
          </p>
        </div>

        <select
          value={status}
          onChange={(e) =>
            onStatusChange(
              id,
              e.target.value
            )
          }
          className="
            rounded-xl
            bg-white/50
            border border-white/30
            px-3
            py-2
            text-xs
            font-semibold
            outline-none
          "
        >
          {statuses.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>

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

            hover:bg-[#ffd6df]

            transition-all
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

export default ApplicationRow;