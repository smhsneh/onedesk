import GlassCard from "../../components/common/GlassCard";
import { AlertTriangle } from "lucide-react";

const alerts = [
  {
    title: "dbms assignment due",
    time: "today",
  },
  {
    title: "os attendance below 75%",
    time: "urgent",
  },
  {
    title: "cn internals this friday",
    time: "3 days",
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
      className="col-span-6 row-span-2"
    >
      <div className="flex items-start justify-between mb-8">
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
            danger zone
          </p>

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

          <p className="text-black/50 mt-3">
            upcoming submissions and exams
            requiring immediate attention.
          </p>
        </div>

        <AlertTriangle
          size={18}
          className="text-black/40"
        />
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.title}
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
              {alert.title}
            </span>

            <span className="text-xs text-black/40">
              {alert.time}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default OverviewWidget;