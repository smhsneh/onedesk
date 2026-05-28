import { useState } from "react";

import GlassCard from "../../components/common/GlassCard";

import {
  FileText,
  Plus,
  X,
} from "lucide-react";

import { useDashboard } from "../../context/DashboardContext";

const ExamWidget = () => {
  const {
    dashboardData,
    addExam,
    deleteExam,
  } = useDashboard();

  const exams =
    dashboardData.exams;

  const [subject, setSubject] =
    useState("");

  const [date, setDate] =
    useState("");

  const getDaysLeft = (
    examDate
  ) => {
    const today = new Date();

    const target = new Date(
      examDate
    );

    today.setHours(0, 0, 0, 0);

    target.setHours(0, 0, 0, 0);

    const diff =
      target - today;

    const days = Math.max(
      0,
      Math.ceil(
        diff /
          (1000 * 60 * 60 * 24)
      )
    );

    return days === 0
      ? "today"
      : `${days}d`;
  };

  const getColor = (
    examDate
  ) => {
    const today = new Date();

    const target = new Date(
      examDate
    );

    today.setHours(0, 0, 0, 0);

    target.setHours(0, 0, 0, 0);

    const diff =
      target - today;

    const days = Math.ceil(
      diff /
        (1000 * 60 * 60 * 24)
    );

    if (days <= 2) {
      return "bg-[#ff6b8a]";
    }

    if (days <= 7) {
      return "bg-[#ff9f68]";
    }

    if (days <= 14) {
      return "bg-[#7aa8ff]";
    }

    return "bg-[#8bdb81]";
  };

  const formatDate = (
    examDate
  ) => {
    return new Date(
      examDate
    ).toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "short",
      }
    );
  };

  const handleAddExam = () => {
    if (
      !subject.trim() ||
      !date
    ) {
      return;
    }

    addExam({
      id: Date.now(),
      subject,
      date,
    });

    setSubject("");
    setDate("");
  };

  return (
    <GlassCard
      gradient="
      from-[#ffd6df]
      via-[#ffe5ec]
      to-[#fff1f4]
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
          {exams.map((exam) => (
            <button
              key={exam.id}
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
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`
                      w-2.5
                      h-2.5
                      rounded-full
                      shrink-0
                      ${getColor(
                        exam.date
                      )}
                    `}
                  />

                  <span className="capitalize font-semibold truncate">
                    {exam.subject}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-sm text-black/50">
                    {formatDate(
                      exam.date
                    )}
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
                    {getDaysLeft(
                      exam.date
                    )}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      deleteExam(
                        exam.id
                      );
                    }}
                  >
                    <X
                      size={15}
                      className="text-black/25"
                    />
                  </button>
                </div>
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
          value={subject}
          onChange={(e) =>
            setSubject(
              e.target.value
            )
          }
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
          value={date}
          onChange={(e) =>
            setDate(
              e.target.value
            )
          }
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
          onClick={
            handleAddExam
          }
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

export default ExamWidget;