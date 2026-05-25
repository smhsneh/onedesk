import GlassCard from "../../components/common/GlassCard";
import { BarChart3 } from "lucide-react";

const attendance = [
  {
    subject: "dbms",
    value: 82,
  },
  {
    subject: "os",
    value: 74,
  },
  {
    subject: "cn",
    value: 91,
  },
];

const AttendanceWidget = () => {
  return (
    <GlassCard
      gradient="
      from-[#d8f3dc]
      via-[#c7f9cc]
      to-[#edfdf0]
      "
      className="col-span-3 row-span-2"
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
            attendance
          </p>

          <h2
            className="
              text-6xl
              font-black
              tracking-[-0.04em]
              leading-none
            "
          >
            82%
          </h2>

          <p className="text-black/50 mt-2">
            semester average
          </p>
        </div>

        <BarChart3
          size={18}
          className="text-black/40"
        />
      </div>

      <div className="space-y-5">
        {attendance.map((item) => (
          <div key={item.subject}>
            <div className="flex justify-between mb-2">
              <span className="capitalize font-semibold">
                {item.subject}
              </span>

              <span className="text-sm font-semibold text-black/55">
                {item.value}%
              </span>
            </div>

            <div
              className="
                w-full
                h-[7px]

                rounded-full

                bg-white/40

                overflow-hidden
              "
            >
              <div
                className="
                  h-full
                  rounded-full

                  bg-[#4f8f68]

                  transition-all
                  duration-500
                "
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default AttendanceWidget;