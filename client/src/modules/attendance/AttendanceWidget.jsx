import GlassCard from "../../components/common/GlassCard";

import {
  BarChart3,
} from "lucide-react";

const attendance = [
  {
    subject: "dbms",
    attended: 78,
    total: 100,
  },
  {
    subject: "os",
    attended: 91,
    total: 100,
  },
  {
    subject: "cn",
    attended: 65,
    total: 100,
  },
  {
    subject: "dsp",
    attended: 88,
    total: 100,
  },
  {
    subject: "ai",
    attended: 82,
    total: 100,
  },
  {
    subject: "ml",
    attended: 73,
    total: 100,
  },
  {
    subject: "java",
    attended: 94,
    total: 100,
  },
  {
    subject: "react",
    attended: 69,
    total: 100,
  },
];

const AttendanceWidget = () => {
  const calculatePercentage = (
    attended,
    total
  ) => {
    return Math.round(
      (attended / total) * 100
    );
  };

  const getBarColor = (percentage) => {
    if (percentage >= 75) {
      return "bg-[#3ea66b]";
    }

    return "bg-[#d95c5c]";
  };

  const average = Math.round(
    attendance.reduce((acc, item) => {
      return (
        acc +
        calculatePercentage(
          item.attended,
          item.total
        )
      );
    }, 0) / attendance.length
  );

  return (
    <GlassCard
      gradient="
      from-[#d8f3dc]
      via-[#c7f9cc]
      to-[#edfdf0]
      "
      className="
        col-span-5
        row-span-2
      "
    >
      {/* header */}
      <div className="flex items-center justify-between mb-5 shrink-0">
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
            attendance
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
              {average}%
            </h2>

            <span
              className="
                mb-2

                px-3
                py-1

                rounded-full

                bg-white/45

                text-xs
                font-semibold
                text-black/50
              "
            >
              avg
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

            active:scale-95
          "
        >
          <BarChart3
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
        <div
          className="
            grid
            grid-cols-2

            gap-4
          "
        >
          {attendance.map((item) => {
            const percentage =
              calculatePercentage(
                item.attended,
                item.total
              );

            return (
              <div
                key={item.subject}
                className="
                  min-w-0

                  rounded-2xl

                  bg-white/20

                  border border-white/25

                  p-4
                "
              >
                {/* top */}
                <div className="flex items-center justify-between mb-3 gap-3">
                  <span className="capitalize font-semibold text-[18px] truncate">
                    {item.subject}
                  </span>

                  <span
                    className={`
                      text-sm
                      font-bold

                      shrink-0

                      ${
                        percentage >= 75
                          ? "text-[#2f8f46]"
                          : "text-[#d9485f]"
                      }
                    `}
                  >
                    {percentage}%
                  </span>
                </div>

                {/* progress */}
                <div
                  className="
                    w-full
                    h-[7px]

                    rounded-full

                    bg-white/40

                    overflow-hidden

                    mb-4
                  "
                >
                  <div
                    className={`
                      h-full
                      rounded-full

                      transition-all
                      duration-500

                      ${getBarColor(
                        percentage
                      )}
                    `}
                    style={{
                      width: `${percentage}%`,
                    }}
                  />
                </div>

                {/* inputs */}
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="number"
                    defaultValue={item.attended}
                    className="
                      min-w-0
                      flex-1

                      h-10

                      rounded-xl

                      bg-white/45

                      border border-white/30

                      px-3

                      text-sm
                      font-semibold

                      outline-none

                      focus:bg-white/60
                    "
                  />

                  <span className="text-black/35 text-sm shrink-0">
                    /
                  </span>

                  <input
                    type="number"
                    defaultValue={item.total}
                    className="
                      min-w-0
                      flex-1

                      h-10

                      rounded-xl

                      bg-white/45

                      border border-white/30

                      px-3

                      text-sm
                      font-semibold

                      outline-none

                      focus:bg-white/60
                    "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </GlassCard>
  );
};

export default AttendanceWidget;