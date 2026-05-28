import GlassCard from "../../components/common/GlassCard";

import {
  Plus,
  Minus,
} from "lucide-react";

import { useState } from "react";

import { useDashboard } from "../../context/DashboardContext";

const scales = [
  "10.0",
  "4.0",
  "%",
];

const CGPAWidget = () => {
  const {
    dashboardData,
    setCGPASemesters,
  } = useDashboard();

  const semesters =
    dashboardData.cgpa.semesters;

  const [selectedScale, setSelectedScale] =
    useState("10.0");

  const rawCGPA =
    semesters.reduce(
      (a, b) =>
        a + Number(b.value || 0),
      0
    ) / semesters.length;

  const formatValue = (
    value
  ) => {
    const number =
      Number(value || 0);

    if (
      selectedScale === "4.0"
    ) {
      return (
        (number / 10) *
        4
      ).toFixed(2);
    }

    if (
      selectedScale === "%"
    ) {
      return (
        number * 10
      ).toFixed(1);
    }

    return number.toFixed(2);
  };

  const cgpa =
    formatValue(rawCGPA);

  const lastDifference =
    semesters.length > 1
      ? (
          Number(
            semesters[
              semesters.length -
                1
            ].value || 0
          ) -
          Number(
            semesters[
              semesters.length -
                2
            ].value || 0
          )
        ).toFixed(2)
      : 0;

  const addSemester = () => {
    const updated = [
      ...semesters,

      {
        id: Date.now(),
        value: "",
      },
    ];

    setCGPASemesters(updated);
  };

  const removeSemester = () => {
    if (
      semesters.length <= 1
    ) {
      return;
    }

    const updated =
      semesters.slice(
        0,
        semesters.length - 1
      );

    setCGPASemesters(updated);
  };

  const updateSemester = (
    id,
    value
  ) => {
    const updated =
      semesters.map((semester) =>
        semester.id === id
          ? {
              ...semester,
              value,
            }
          : semester
      );

    setCGPASemesters(updated);
  };

  return (
    <GlassCard
      gradient="
      from-[#fff1d6]
      via-[#ffe5b4]
      to-[#fff7e8]
      "
      className="
        col-span-12
        row-span-2
      "
    >
      <div
        className="
          flex
          gap-10

          h-full
          min-h-0
        "
      >
        {/* left side */}
        <div
          className="
            w-[320px]

            flex
            flex-col

            shrink-0
          "
        >
          <p
            className="
              text-[13px]
              uppercase
              tracking-[0.28em]
              text-black/45
              mb-4
              font-semibold
            "
          >
            cgpa overview · semester tracker
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
            {selectedScale === "%"
              ? "%"
              : ""}
          </h2>

          <p className="text-black/50 mt-3">
            cumulative GPA
          </p>

          {/* change indicator */}
          <div
            className="
              mt-4

              inline-flex
              items-center
              gap-2

              rounded-full

              bg-[#ffd9df]

              px-3
              py-1.5

              text-sm
              font-semibold

              text-[#c94b4b]

              w-fit
            "
          >
            {semesters.length > 1
              ? `${
                  Number(
                    lastDifference
                  ) >= 0
                    ? "▲"
                    : "▼"
                } ${Math.abs(
                  Number(
                    lastDifference
                  )
                ).toFixed(
                  2
                )} from last sem`
              : "No previous semester"}
          </div>

          {/* scale */}
          <div className="mt-6">
            <p
              className="
                text-sm
                font-semibold
                text-black/60

                mb-3
              "
            >
              Scale:
            </p>

            <div className="flex gap-2 flex-wrap">
              {scales.map((scale) => (
                <button
                  key={scale}
                  onClick={() =>
                    setSelectedScale(
                      scale
                    )
                  }
                  className={`
                    h-10

                    px-4

                    rounded-xl

                    text-sm
                    font-semibold

                    transition-all
                    duration-300

                    ${
                      selectedScale ===
                      scale
                        ? `
                          bg-white/70
                          text-[#7a4d00]
                          border border-[#e9c98f]
                        `
                        : `
                          bg-white/35
                          text-black/45
                          border border-white/30
                        `
                    }

                    hover:bg-white/50
                  `}
                >
                  {scale}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* right side */}
        <div
          className="
            flex-1
            min-w-0

            flex
            flex-col

            min-h-0
          "
        >
          <p
            className="
              text-sm
              font-semibold
              text-black/60

              mb-5

              shrink-0
            "
          >
            Enter GPA per semester
          </p>

          {/* scroll section */}
          <div
            className="
              flex-1
              min-h-0

              overflow-y-auto

              pr-2
              pb-2
            "
            style={{
              scrollbarGutter:
                "stable",
            }}
          >
            <div className="space-y-4">
              {semesters.map(
                (sem, index) => (
                  <div
                    key={sem.id}
                    className="
                      grid
                      grid-cols-[70px_1fr_70px]
                      items-center
                      gap-4

                      w-full
                    "
                  >
                    <div
                      className="
                        text-sm
                        font-bold
                        text-black/70
                      "
                    >
                      Sem {index + 1}
                    </div>

                    {/* bar */}
                    <div
                      className="
                        h-10

                        rounded-2xl

                        bg-white/35

                        overflow-hidden

                        w-full
                      "
                    >
                      <div
                        className="
                          h-full

                          bg-[#FAF9F6]

                          flex
                          items-center

                          px-4

                          text-sm
                          font-bold
                          text-black

                          transition-all
                          duration-500

                          whitespace-nowrap
                        "
                        style={{
                          width: `${Math.min(
                            (Number(
                              sem.value ||
                                0
                            ) /
                              10) *
                              100,
                            100
                          )}%`,
                        }}
                      >
                        {sem.value
                          ? formatValue(
                              sem.value
                            )
                          : ""}
                      </div>
                    </div>

                    <input
                      type="number"
                      step="0.01"
                      value={sem.value}
                      onChange={(e) =>
                        updateSemester(
                          sem.id,
                          e.target.value
                        )
                      }
                      className="
                        w-[70px]
                        h-10

                        rounded-xl

                        bg-white/45

                        border border-white/30

                        text-lg
                        font-bold
                        text-center

                        outline-none

                        shrink-0
                      "
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* controls */}
          <div className="flex gap-3 mt-6 shrink-0">
            <button
              onClick={addSemester}
              className="
                h-12

                px-5

                rounded-2xl

                bg-white/45

                border border-white/30

                flex
                items-center
                gap-2

                font-semibold

                transition-all
                duration-300

                hover:bg-white/60
              "
            >
              <Plus size={18} />
              Add semester
            </button>

            <button
              onClick={removeSemester}
              className="
                h-12

                px-5

                rounded-2xl

                bg-[#ffd9df]

                text-[#c94b4b]

                flex
                items-center
                gap-2

                font-semibold

                transition-all
                duration-300

                hover:opacity-90
              "
            >
              <Minus size={18} />
              Remove last
            </button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default CGPAWidget;