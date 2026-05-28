import { useState } from "react";

import GlassCard from "../../components/common/GlassCard";

import ExamRow from "./ExamRow";

import {
  FileClock,
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

  const [open, setOpen] =
    useState(false);

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

    return Math.max(
      0,
      Math.ceil(
        diff /
          (1000 * 60 * 60 * 24)
      )
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

    setOpen(false);
  };

  return (
    <>
      <GlassCard
        gradient="
        from-[#ffe0c7]
        via-[#ffe9d6]
        to-[#fff3eb]
        "
        className="
          col-span-4
          row-span-3
        "
      >
        {/* header */}
        <div className="flex items-start justify-between mb-6 shrink-0">
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
              exams
            </p>

            <div className="flex items-end gap-3">
              <h2
                className="
                  text-5xl
                  font-black
                  tracking-[-0.04em]
                  leading-none
                "
              >
                {exams.length}
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
                upcoming
              </span>
            </div>
          </div>

          <button
            onClick={() =>
              setOpen(true)
            }
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
            <Plus
              size={18}
              className="text-black/40"
            />
          </button>
        </div>

        {/* body */}
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
              <ExamRow
                key={exam.id}
                id={exam.id}
                subject={
                  exam.subject
                }
                date={exam.date}
                daysLeft={getDaysLeft(
                  exam.date
                )}
                onDelete={
                  deleteExam
                }
              />
            ))}
          </div>

          {exams.length === 0 && (
            <div
              className="
                h-full

                flex
                flex-col
                items-center
                justify-center

                text-center

                py-10
              "
            >
              <div
                className="
                  h-16
                  w-16

                  rounded-3xl

                  bg-white/35

                  border border-white/30

                  flex
                  items-center
                  justify-center

                  mb-4
                "
              >
                <FileClock
                  size={28}
                  className="text-black/30"
                />
              </div>

              <h3
                className="
                  text-lg
                  font-semibold
                  text-black/55
                  mb-2
                "
              >
                no exams
              </h3>

              <p className="text-sm text-black/40">
                nothing scheduled yet.
              </p>
            </div>
          )}
        </div>
      </GlassCard>

      {/* modal */}
      {open && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            bg-black/20
            backdrop-blur-md

            p-5
          "
        >
          <div
            className="
              w-full
              max-w-md

              rounded-[32px]

              bg-white/70

              border border-white/40

              backdrop-blur-3xl

              shadow-[0_20px_60px_rgba(0,0,0,0.15)]

              p-6
            "
          >
            {/* top */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p
                  className="
                    text-[12px]
                    uppercase
                    tracking-[0.28em]
                    text-black/40
                    mb-2
                    font-semibold
                  "
                >
                  create
                </p>

                <h2
                  className="
                    text-2xl
                    font-black
                    tracking-[-0.04em]
                  "
                >
                  new exam
                </h2>
              </div>

              <button
                onClick={() =>
                  setOpen(false)
                }
                className="
                  h-10
                  w-10

                  rounded-2xl

                  bg-white/40

                  border border-white/30

                  flex
                  items-center
                  justify-center

                  hover:bg-white/60

                  transition-all
                "
              >
                <X
                  size={18}
                  className="text-black/45"
                />
              </button>
            </div>

            {/* inputs */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="subject name"
                value={subject}
                onChange={(e) =>
                  setSubject(
                    e.target.value
                  )
                }
                className="
                  w-full

                  rounded-2xl

                  bg-white/40

                  border border-white/30

                  px-4
                  py-4

                  outline-none

                  placeholder:text-black/30
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
                  w-full

                  rounded-2xl

                  bg-white/40

                  border border-white/30

                  px-4
                  py-4

                  outline-none

                  text-black/70
                "
              />
            </div>

            {/* action */}
            <button
              onClick={
                handleAddExam
              }
              className="
                mt-6

                w-full

                rounded-2xl

                bg-black

                text-white

                py-4

                font-semibold

                transition-all
                duration-300

                hover:scale-[1.02]
              "
            >
              add exam
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ExamWidget;