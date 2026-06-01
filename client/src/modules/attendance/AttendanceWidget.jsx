import { useState, useEffect } from "react";

import GlassCard from "../../components/common/GlassCard";

import AttendanceRow from "./AttendanceRow";

import {
  Plus,
  X,
} from "lucide-react";

import attendanceService from "./attendanceService";

import { calculateAttendance } from "../../utils/attendanceCalc";

const AttendanceWidget = () => {
  const [attendance, setAttendance] =
    useState([]);

  const [open, setOpen] =
    useState(false);

  const [subject, setSubject] =
    useState("");

  const [attended, setAttended] =
    useState("");

  const [total, setTotal] =
    useState("");

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance =
    async () => {
      try {
        const data =
          await attendanceService.getAll();

        setAttendance(data);
      } catch (error) {
        console.error(error);
      }
    };

  const dangerCount =
    attendance.filter((item) => {
      const percentage =
        calculateAttendance(
          item.attended,
          item.total
        );

      return percentage < 75;
    }).length;

  const handleAddSubject =
    async () => {
      if (!subject.trim()) return;

      try {
        await attendanceService.create({
          subject,
          attended:
            Number(attended),
          total: Number(total),
        });

        await loadAttendance();

        setSubject("");
        setAttended("");
        setTotal("");

        setOpen(false);
      } catch (error) {
        console.error(error);
      }
    };

  const handleUpdate =
    async (id, data) => {
      try {
        await attendanceService.update(
          id,
          data
        );

        await loadAttendance();
      } catch (error) {
        console.error(error);
      }
    };

  const handleDelete =
    async (id) => {
      try {
        await attendanceService.delete(
          id
        );

        await loadAttendance();
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <GlassCard
        gradient="
        from-[#d8f5d0]
        via-[#e6f9df]
        to-[#f3fff0]
        "
        className="
          col-span-5
          row-span-2
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
              attendance
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
                {dangerCount}
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
                below 75%
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
          <div className="space-y-4">
            {attendance.map((item) => (
              <AttendanceRow
                key={item._id}
                id={item._id}
                subject={item.subject}
                attended={
                  item.attended
                }
                total={item.total}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>
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
                  attendance subject
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
                type="number"
                placeholder="classes attended"
                value={attended}
                onChange={(e) =>
                  setAttended(
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
                type="number"
                placeholder="total classes"
                value={total}
                onChange={(e) =>
                  setTotal(
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
                handleAddSubject
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
              add subject
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AttendanceWidget;