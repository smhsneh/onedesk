import { Trash2 } from "lucide-react";

const OARow = ({
  id,
  company,
  deadline,
  status,
  onStatusChange,
  onDelete,
}) => {
  const daysLeft = Math.ceil(
    (new Date(deadline) -
      new Date()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div
      className="
        rounded-2xl
        bg-white/40
        border border-white/30
        p-4
      "
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3
            className="
              font-semibold
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
            {daysLeft >= 0
              ? `${daysLeft} days left`
              : "deadline passed"}
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
          "
        >
          <option value="Pending">
            Pending
          </option>

          <option value="Completed">
            Completed
          </option>
        </select>

        <button
          onClick={() =>
            onDelete(id)
          }
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
          "
        >
          <Trash2 size={15} />
        </button>
      </div>
    </div>
  );
};

export default OARow;