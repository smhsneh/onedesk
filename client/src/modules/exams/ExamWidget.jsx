import GlassCard from "../../components/common/GlassCard";
import {
  FileText,
  Plus,
  X,
} from "lucide-react";

const exams = [
  {
    subject: "os mid sem",
    date: "27 may",
    remaining: "2d",
    color: "bg-[#ff6b8a]",
  },
  {
    subject: "dbms internal",
    date: "3 june",
    remaining: "9d",
    color: "bg-[#ff9f68]",
  },
  {
    subject: "cn end sem",
    date: "18 june",
    remaining: "24d",
    color: "bg-[#7aa8ff]",
  },
];

const ExamWidget = () => {
  return (
    <GlassCard
      gradient="
      from-[#ffd6df]
      via-[#ffe5ec]
      to-[#fff1f4]
      "
      className="col-span-4 row-span-3"
    >
      <div className="flex items-center justify-between mb-6">
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
            exam dates
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
          <FileText
            size={18}
            className="text-black/40"
          />
        </button>
      </div>

      <div
        className="
          space-y-3

          max-h-[210px]

          overflow-y-auto

          pr-1

          smooth-scroll
        "
      >
        {exams.map((exam) => (
          <button
            key={exam.subject}
            className="
              w-full

              rounded-2xl
              bg-white/35

              border border-white/30

              px-4
              py-3

              text-left

              transition-all
              duration-300

              hover:bg-white/45
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

                <X
                  size={15}
                  className="text-black/25"
                />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* add tray */}
      <div
        className="
          mt-4

          rounded-2xl

          border border-dashed
          border-[#ffc8d5]

          bg-white/20

          p-2

          flex
          items-center
          gap-2
        "
      >
        <input
          type="text"
          placeholder="Exam name"
          className="
            flex-1

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

export default ExamWidget;