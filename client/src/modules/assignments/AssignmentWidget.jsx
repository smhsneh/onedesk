import GlassCard from "../../components/common/GlassCard";
import { ClipboardList } from "lucide-react";

const assignments = [
  {
    title: "dbms assignment",
    due: "tomorrow",
  },
  {
    title: "os lab report",
    due: "3 days",
  },
];

const AssignmentWidget = () => {
  return (
    <GlassCard
      gradient="
      from-[#d6e4ff]
      via-[#cfe8ff]
      to-[#eef6ff]
      "
      className="col-span-4 row-span-3"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-black/40
              mb-3
            "
          >
            assignments
          </p>

          <h2
            className="
              text-6xl
              font-black
              tracking-[-0.04em]
              leading-none
            "
          >
            12
          </h2>

          <p className="text-black/50 mt-2">
            pending submissions
          </p>
        </div>

        <ClipboardList
          size={18}
          className="text-black/40"
        />
      </div>

      <div className="space-y-3">
        {assignments.map((assignment) => (
          <div
            key={assignment.title}
            className="
              rounded-2xl
              bg-white/35
              border border-white/30

              px-4
              py-3

              flex
              items-center
              justify-between
            "
          >
            <span className="capitalize font-medium">
              {assignment.title}
            </span>

            <span className="text-xs text-black/40">
              {assignment.due}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default AssignmentWidget;