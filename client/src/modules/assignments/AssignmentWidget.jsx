import { useState } from "react";

import GlassCard from "../../components/common/GlassCard";

import AssignmentRow from "./AssignmentRow";

import {
  ClipboardList,
  Plus,
  X,
} from "lucide-react";

import { useDashboard } from "../../context/DashboardContext";

const AssignmentWidget = () => {
  const {
    dashboardData,
    toggleAssignment,
    deleteAssignment,
    addAssignment,
  } = useDashboard();

  const assignments =
    dashboardData.assignments;

  const [open, setOpen] =
    useState(false);

  const [title, setTitle] =
    useState("");

  const [due, setDue] =
    useState("");

  const handleAddAssignment = () => {
    if (!title.trim()) return;

    const newAssignment = {
      id: Date.now(),
      title,
      due: due || "soon",
      completed: false,
    };

    addAssignment(newAssignment);

    setTitle("");
    setDue("");

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
              assignments
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
                {assignments.length}
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
        >
          <div className="space-y-3">
            {assignments.map(
              (assignment) => (
                <AssignmentRow
                  key={
                    assignment.id
                  }
                  id={assignment.id}
                  title={
                    assignment.title
                  }
                  due={
                    assignment.due
                  }
                  completed={
                    assignment.completed
                  }
                  onToggle={
                    toggleAssignment
                  }
                  onDelete={
                    deleteAssignment
                  }
                />
              )
            )}
          </div>

          {/* empty state */}
          {assignments.length ===
            0 && (
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
                <ClipboardList
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
                no assignments
              </h3>

              <p className="text-sm text-black/40">
                everything looks
                clear for now.
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
                  new assignment
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
                placeholder="assignment title"
                value={title}
                onChange={(e) =>
                  setTitle(
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
                type="text"
                placeholder="due date"
                value={due}
                onChange={(e) =>
                  setDue(
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
            </div>

            {/* action */}
            <button
              onClick={
                handleAddAssignment
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
              add assignment
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignmentWidget;