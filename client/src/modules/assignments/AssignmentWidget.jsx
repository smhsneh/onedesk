import GlassCard from "../../components/common/GlassCard";

import {
  ClipboardList,
  Plus,
  X,
} from "lucide-react";

const assignments = [
  {
    title: "dbms assignment",
    due: "tomorrow",
    urgent: true,
  },
  {
    title: "os lab report",
    due: "3 days",
    urgent: false,
  },
  {
    title: "cn module 5",
    due: "5 days",
    urgent: false,
  },
  {
    title: "dsp project",
    due: "8 days",
    urgent: false,
  },
  {
    title: "ai presentation",
    due: "2 days",
    urgent: true,
  },
  {
    title: "java assignment",
    due: "6 days",
    urgent: false,
  },
  {
    title: "ml quiz prep",
    due: "4 days",
    urgent: false,
  },
  {
    title: "react dashboard",
    due: "today",
    urgent: true,
  },
  {
    title: "networking notes",
    due: "7 days",
    urgent: false,
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
      className="
        col-span-4
        row-span-3
      "
    >
      {/* header */}
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div>
          <p
            className="
              text-[13px]
              uppercase
              tracking-[0.28em]
              text-black/45
              mb-3
              font-semibold
            "
          >
            assignments
          </p>

          <div className="flex items-end gap-3">
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

            <span className="text-black/50 mb-2">
              pending
            </span>
          </div>
        </div>

        <button
          className="
            h-10
            w-10

            rounded-2xl

            bg-white/25

            border border-white/30

            flex
            items-center
            justify-center

            transition-all
            duration-300

            hover:bg-white/40
            hover:scale-105
          "
        >
          <ClipboardList
            size={18}
            className="text-black/40"
          />
        </button>
      </div>

      {/* scroll section */}
      <div
        className="
          flex-1
          min-h-0

          overflow-y-auto

          pr-1
          pb-2
        "
        style={{
          scrollbarGutter: "stable",
        }}
      >
        <div className="space-y-3">
          {assignments.map((assignment) => (
            <button
              key={assignment.title}
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
                  className="
                    h-5
                    w-5

                    rounded-full

                    border-2
                    border-[#7aa7e8]

                    shrink-0
                  "
                />

                <span className="capitalize font-semibold truncate">
                  {assignment.title}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={`
                    text-xs
                    font-semibold

                    ${
                      assignment.urgent
                        ? "text-[#d9485f]"
                        : "text-black/45"
                    }
                  `}
                >
                  {assignment.due}
                </span>

                <X
                  size={16}
                  className="
                    text-black/25

                    hover:text-black/50

                    transition-all
                  "
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* add tray */}
      <div
        className="
          mt-4
          shrink-0

          rounded-2xl

          border border-dashed
          border-[#bfd8ff]

          bg-white/20

          p-2

          flex
          items-center
          gap-2
        "
      >
        <input
          type="text"
          placeholder="Assignment name"
          className="
            flex-1
            min-w-0

            h-11

            rounded-xl

            bg-white/45

            border border-white/30

            px-4

            outline-none

            text-sm
            font-medium

            placeholder:text-black/35
          "
        />

        <input
          type="date"
          className="
            h-11

            rounded-xl

            bg-white/45

            border border-white/30

            px-3

            outline-none

            text-sm
          "
        />

        <button
          className="
            h-11
            w-11

            shrink-0

            rounded-xl

            bg-[#1c1c35]

            flex
            items-center
            justify-center

            text-white

            transition-all
            duration-300

            hover:scale-105
          "
        >
          <Plus size={18} />
        </button>
      </div>
    </GlassCard>
  );
};

export default AssignmentWidget;