import {
  Minus,
  Plus,
  RotateCcw,
  Trash2,
} from "lucide-react";

import { calculateAttendance } from "../../utils/attendanceCalc";

const AttendanceRow = ({
  id,
  subject,
  attended,
  total,
  onUpdate,
  onDelete,
}) => {
  const percentage =
    calculateAttendance(
      attended,
      total
    );

  const isDanger =
    percentage < 75;

  return (
    <div>
      <div className="flex justify-between mb-2">
        <div>
          <span className="capitalize font-medium">
            {subject}
          </span>

          <p className="text-xs text-black/40">
            {attended}/{total} classes
          </p>
        </div>

        <span
          className={`
            text-sm
            font-semibold

            ${
              isDanger
                ? "text-[#d95c5c]"
                : "text-[#2f7a35]"
            }
          `}
        >
          {percentage}%
        </span>
      </div>

      <div className="w-full h-3 rounded-full bg-white/40 overflow-hidden">
        <div
          className={`
            h-full
            rounded-full
            transition-all
            duration-300

            ${
              isDanger
                ? "bg-[#d95c5c]"
                : "bg-[#2f7a35]"
            }
          `}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div className="flex gap-2 mt-2 flex-wrap">
        <button
          onClick={() =>
            onUpdate(id, {
              total: total + 1,
            })
          }
          className="
            h-6

            px-2

            rounded-lg

            bg-white/30

            border border-white/30

            flex
            items-center
            gap-1

            text-[10px]
            font-medium

            transition-all
            duration-300

            hover:bg-white/45
          "
        >
          <Minus size={10} />
          missed
        </button>

        <button
          onClick={() =>
            onUpdate(id, {
              attended:
                attended + 1,

              total: total + 1,
            })
          }
          className="
            h-6

            px-2

            rounded-lg

            bg-white/30

            border border-white/30

            flex
            items-center
            gap-1

            text-[10px]
            font-medium

            transition-all
            duration-300

            hover:bg-white/45
          "
        >
          <Plus size={10} />
          attended
        </button>

        <button
          onClick={() =>
            onUpdate(id, {
              attended: 0,
              total: 0,
            })
          }
          className="
            h-6

            px-2

            rounded-lg

            bg-white/30

            border border-white/30

            flex
            items-center
            gap-1

            text-[10px]
            font-medium

            transition-all
            duration-300

            hover:bg-white/45
          "
        >
          <RotateCcw size={10} />
          reset
        </button>

        <button
          onClick={() =>
            onDelete(id)
          }
          className="
            h-6

            px-2

            rounded-lg

            bg-[#ffd6df]

            border border-[#ffd6df]

            flex
            items-center
            gap-1

            text-[10px]
            font-medium
            text-[#c94b4b]

            transition-all
            duration-300

            hover:opacity-90
          "
        >
          <Trash2 size={10} />
          delete
        </button>
      </div>
    </div>
  );
};

export default AttendanceRow;