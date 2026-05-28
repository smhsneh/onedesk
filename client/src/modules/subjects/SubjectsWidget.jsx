import GlassCard from "../../components/common/GlassCard";

import SubjectRow from "./SubjectRow";

import {
  BookOpen,
  Plus,
} from "lucide-react";

import { useState } from "react";

import { useDashboard } from "../../context/DashboardContext";

const SubjectsWidget = () => {
  const {
    dashboardData,
    addSubject,
    deleteSubject,
  } = useDashboard();

  const subjects =
    dashboardData.subjects;

  const [name, setName] =
    useState("");

  const [credits, setCredits] =
    useState("");

  const handleAddSubject = () => {
    if (!name.trim()) return;

    addSubject({
      id: Date.now(),
      name,
      credits:
        Number(credits) || 0,
    });

    setName("");
    setCredits("");
  };

  return (
    <GlassCard
      gradient="
      from-[#fff1d6]
      via-[#ffe5b4]
      to-[#fff7e8]
      "
      className="
        col-span-3
        row-span-2
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
            subjects · sem 4
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

            active:scale-95
          "
        >
          <BookOpen
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
          {subjects.map((subject) => (
            <SubjectRow
              key={subject.id}
              id={subject.id}
              subject={subject.name}
              credits={
                subject.credits
              }
              onDelete={
                deleteSubject
              }
            />
          ))}
        </div>
      </div>

      {/* add subject */}
      <div
        className="
          mt-4
          shrink-0

          rounded-2xl

          border border-dashed
          border-[#f3d59a]

          bg-white/20

          p-2

          flex
          items-center
          gap-2
        "
      >
        <input
          type="text"
          placeholder="Subject name"
          value={name}
          onChange={(e) =>
            setName(
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
          type="number"
          placeholder="cr"
          value={credits}
          onChange={(e) =>
            setCredits(
              e.target.value
            )
          }
          className="
            w-[56px]

            h-11

            rounded-xl

            bg-white/45

            border border-white/30

            px-3

            outline-none

            text-sm
            font-semibold
          "
        />

        <button
          onClick={
            handleAddSubject
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

            active:scale-95
          "
        >
          <Plus size={18} />
        </button>
      </div>
    </GlassCard>
  );
};

export default SubjectsWidget;