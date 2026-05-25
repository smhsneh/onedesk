import GlassCard from "../../components/common/GlassCard";
import { FileText } from "lucide-react";

const exams = [
  {
    subject: "os mid sem",
    date: "27 may",
    remaining: "2d",
    color: "bg-red-400",
  },
  {
    subject: "dbms internal",
    date: "3 june",
    remaining: "9d",
    color: "bg-orange-400",
  },
  {
    subject: "cn end sem",
    date: "18 june",
    remaining: "24d",
    color: "bg-blue-400",
  },
];

const ExamWidget = () => {
  return (
    <GlassCard
      gradient="
      from-[#f3d9fa]
      via-[#ead7ff]
      to-[#f8f2ff]
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
            exam dates
          </p>
        </div>

        <FileText
          size={18}
          className="text-black/40"
        />
      </div>

      <div className="space-y-3">
        {exams.map((exam) => (
          <div
            key={exam.subject}
            className="
              rounded-2xl
              bg-white/35
              border border-white/30

              px-4
              py-3
            "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`
                    w-2.5
                    h-2.5
                    rounded-full
                    ${exam.color}
                  `}
                />

                <span className="capitalize font-semibold">
                  {exam.subject}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-black/50">
                  {exam.date}
                </span>

                <span
                  className="
                    text-xs
                    font-semibold

                    px-2
                    py-1

                    rounded-full

                    bg-white/50
                  "
                >
                  {exam.remaining}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default ExamWidget;