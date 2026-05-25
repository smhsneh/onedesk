import GlassCard from "../../components/common/GlassCard";
import { BookOpen } from "lucide-react";

const subjects = [
  {
    name: "dbms",
    attendance: 82,
    credits: 4,
  },
  {
    name: "os",
    attendance: 74,
    credits: 3,
  },
  {
    name: "cn",
    attendance: 91,
    credits: 4,
  },
];

const SubjectsWidget = () => {
  return (
    <GlassCard
      gradient="
      from-[#f3d9fa]
      via-[#ead7ff]
      to-[#f8f2ff]
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
            subjects
          </p>

          <h2
            className="
              text-[30px]
              font-black
              tracking-[-0.04em]
            "
          >
            sem 4
          </h2>
        </div>

        <BookOpen
          size={18}
          className="text-black/40"
        />
      </div>

      <div className="space-y-4">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="
              rounded-2xl
              bg-white/35
              border border-white/30

              p-4
            "
          >
            <div className="flex justify-between mb-2">
              <h3 className="capitalize font-semibold">
                {subject.name}
              </h3>

              <span className="text-sm font-semibold text-black/55">
                {subject.attendance}%
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

                  bg-[#8c68b8]

                  transition-all
                  duration-500
                "
                style={{
                  width: `${subject.attendance}%`,
                }}
              />
            </div>

            <p className="text-xs text-black/40 mt-2">
              {subject.credits} credits
            </p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
};

export default SubjectsWidget;