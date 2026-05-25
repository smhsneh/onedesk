import GlassCard from "../../components/common/GlassCard";
import { TrendingUp } from "lucide-react";

const semesters = [
  8.4,
  8.6,
  8.8,
  8.7,
];

const CGPAWidget = () => {
  const cgpa = (
    semesters.reduce((a, b) => a + b, 0) /
    semesters.length
  ).toFixed(1);

  return (
    <GlassCard
      gradient="
      from-[#fff1d6]
      via-[#ffe5b4]
      to-[#fff7e8]
      "
      className="col-span-12 row-span-2"
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
            cgpa overview
          </p>

          <h2
            className="
              text-7xl
              font-black
              tracking-[-0.05em]
              leading-none
            "
          >
            {cgpa}
          </h2>

          <p className="text-black/50 mt-3">
            cumulative gpa
          </p>
        </div>

        <TrendingUp
          size={18}
          className="text-black/40"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {semesters.map((sem, index) => (
          <div
            key={index}
            className="
              rounded-2xl
              bg-white/35
              border border-white/30

              p-4
            "
          >
            <p className="text-xs text-black/40 mb-2">
              semester {index + 1}
            </p>

            <h3 className="text-3xl font-black">
              {sem}
            </h3>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default CGPAWidget;