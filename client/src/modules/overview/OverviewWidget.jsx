import GlassCard from "../../components/common/GlassCard";

import {
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

const alerts = [
  {
    title: "dbms assignment due",
    time: "today",
    danger: true,
  },
  {
    title: "os attendance below 75%",
    time: "urgent",
    danger: true,
  },
  {
    title: "cn internals this friday",
    time: "3 days",
    danger: false,
  },
  {
    title: "dsp project review",
    time: "next week",
    danger: false,
  },
  {
    title: "ai presentation pending",
    time: "tomorrow",
    danger: true,
  },
  {
    title: "react submission",
    time: "2 days",
    danger: false,
  },
  {
    title: "java lab viva",
    time: "4 days",
    danger: false,
  },
  {
    title: "ml quiz upcoming",
    time: "5 days",
    danger: false,
  },
];

const OverviewWidget = () => {
  return (
    <GlassCard
      gradient="
      from-[#ffd6df]
      via-[#ffe5ec]
      to-[#fff1f4]
      "
      className="
        col-span-4
        row-span-2
      "
    >
      {/* header */}
      <div className="flex items-start justify-between mb-8 shrink-0">
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
            danger zone
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
              3
            </h2>

            <span
              className="
                mb-2

                px-3
                py-1

                rounded-full

                bg-white/40

                text-xs
                font-semibold
                text-black/50
              "
            >
              active
            </span>
          </div>

          <p className="text-black/50 mt-3">
            upcoming submissions and exams
            requiring immediate attention.
          </p>
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
          <AlertTriangle
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
          {alerts.map((alert) => (
            <button
              key={alert.title}
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

                    ${
                      alert.danger
                        ? "bg-[#d95c5c]"
                        : "bg-[#e0b04f]"
                    }
                  `}
                />

                <span className="capitalize font-medium truncate">
                  {alert.title}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={`
                    text-xs
                    font-semibold

                    ${
                      alert.danger
                        ? "text-[#c94b4b]"
                        : "text-black/40"
                    }
                  `}
                >
                  {alert.time}
                </span>

                <ChevronRight
                  size={15}
                  className="text-black/25"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export default OverviewWidget;