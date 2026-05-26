import GlassCard from "../../components/common/GlassCard";

import {
  Plus,
  Minus,
} from "lucide-react";

const semesters = [
  8.4,
  8.6,
  8.8,
  8.7,
  8.9,
  9.1,
  8.5,
];

const scales = [
  "10.0",
  "4.0",
  "%",
];

const CGPAWidget = () => {
  const cgpa = (
    semesters.reduce((a, b) => a + b, 0) /
    semesters.length
  ).toFixed(2);

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
            min-w-[220px]

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
            ▼ -0.1 from last sem
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
              {scales.map((scale, index) => (
                <button
                  key={scale}
                  className={`
                    h-10

                    px-4

                    rounded-xl

                    text-sm
                    font-semibold

                    transition-all
                    duration-300

                    ${
                      index === 0
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

          {/* trend */}
          <div className="mt-6">
            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-black/40
                mb-3
                font-semibold
              "
            >
              trend
            </p>

            <div className="flex gap-1.5 flex-wrap">
              {semesters.map((sem, index) => (
                <div
                  key={index}
                  className={`
                    h-10
                    w-14

                    rounded-lg

                    ${
                      sem >= 8.7
                        ? "bg-[#b97a1f]"
                        : sem >= 8.5
                        ? "bg-[#d8c189]"
                        : "bg-[#e4d3a6]"
                    }
                  `}
                />
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
          >
            <div className="space-y-4">
              {semesters.map((sem, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div
                    className="
                      min-w-[42px]

                      text-sm
                      font-bold
                      text-black/70

                      shrink-0
                    "
                  >
                    Sem {index + 1}
                  </div>

                  {/* bar */}
                  <div
                    className="
                      flex-1

                      h-10

                      rounded-2xl

                      bg-white/35

                      overflow-hidden
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
                      "
                      style={{
                        width: `${(sem / 10) * 100}%`,
                      }}
                    >
                      {sem}
                    </div>
                  </div>

                  <div
                    className="
                      w-[62px]
                      h-10

                      rounded-xl

                      bg-white/45

                      border border-white/30

                      flex
                      items-center
                      justify-center

                      text-lg
                      font-bold

                      shrink-0
                    "
                  >
                    {sem}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* controls */}
          <div className="flex gap-3 mt-6 shrink-0">
            <button
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