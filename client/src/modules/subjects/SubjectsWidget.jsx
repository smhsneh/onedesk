import GlassCard from "../../components/common/GlassCard";
import {
  BookOpen,
  Plus,
  X,
} from "lucide-react";

const subjects = [
  {
    name: "dbms",
    credits: 4,
  },
  {
    name: "os",
    credits: 3,
  },
  {
    name: "cn",
    credits: 4,
  },
  {
    name: "dsp",
    credits: 3,
  },
];

const SubjectsWidget = () => {
  return (
    <GlassCard
      gradient="
      from-[#fff1d6]
      via-[#ffe5b4]
      to-[#fff7e8]
      "
      className="col-span-3 row-span-2"
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

      {/* subjects */}
      <div
        className="
          space-y-3

          max-h-[190px]

          overflow-y-auto

          pr-1

          smooth-scroll
        "
      >
        {subjects.map((subject) => (
          <button
            key={subject.name}
            className="
              w-full

              rounded-2xl
              bg-white/35

              border border-white/30

              px-4
              py-3

              text-left

              flex
              items-center
              justify-between

              transition-all
              duration-300

              hover:bg-white/45
            "
          >
            <h3 className="capitalize font-semibold">
              {subject.name}
            </h3>

            <div className="flex items-center gap-2">
              <span
                className="
                  text-xs
                  font-semibold

                  px-2
                  py-1

                  rounded-full

                  bg-white/45

                  text-black/55
                "
              >
                {subject.credits}cr
              </span>

              <X
                size={15}
                className="
                  text-black/25

                  hover:text-black/50

                  transition-all
                "
              />
            </div>
          </button>
        ))}
      </div>

      {/* add subject */}
      <div
        className="
          mt-4

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
          type="number"
          placeholder="cr"
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