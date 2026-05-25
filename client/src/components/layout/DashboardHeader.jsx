import { useState, useRef, useEffect } from "react";

import {
  ChevronDown,
  GraduationCap,
  LogOut,
  Trophy,
  Briefcase,
  User,
  Settings,
} from "lucide-react";

const semesters = [
  "Semester 1",
  "Semester 2",
  "Semester 3",
  "Semester 4",
  "Semester 5",
  "Semester 6",
  "Semester 7",
  "Semester 8",
];

const modes = [
  {
    name: "College",
    icon: GraduationCap,
  },
  {
    name: "Competitive",
    icon: Trophy,
  },
  {
    name: "Placement",
    icon: Briefcase,
  },
];

const DashboardHeader = () => {
  const [activeMode, setActiveMode] =
    useState("College");

  const [selectedSemester, setSelectedSemester] =
    useState("Semester 4");

  const [semesterOpen, setSemesterOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const semesterRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        semesterRef.current &&
        !semesterRef.current.contains(e.target)
      ) {
        setSemesterOpen(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      className="
        w-full

        pt-5
        mb-8

        px-5
        md:px-7

        relative
        z-[999]
      "
    >
      <div
        className="
          relative

          overflow-visible

          w-full

          min-h-[92px]

          rounded-[42px]

          bg-white/60

          backdrop-blur-2xl

          border border-white/40

          shadow-[0_10px_40px_rgba(0,0,0,0.05)]

          px-7

          flex
          items-center
          justify-between
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-10">
          {/* logo */}
          <div
            className="
              text-[42px]
              font-black
              tracking-[-0.08em]
              leading-none
            "
            style={{
              fontFamily: "Geom",
            }}
          >
            onedesk
          </div>

          {/* modes */}
          <div className="flex items-center gap-2">
            {modes.map((mode) => {
              const Icon = mode.icon;

              const active =
                activeMode === mode.name;

              return (
                <button
                  key={mode.name}
                  onClick={() =>
                    setActiveMode(mode.name)
                  }
                  className={`
                    h-12

                    px-5

                    rounded-2xl

                    flex
                    items-center
                    gap-2

                    text-sm
                    font-semibold

                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          bg-white

                          text-black

                          shadow-[0_4px_20px_rgba(0,0,0,0.06)]

                          scale-[1.02]
                        `
                        : `
                          text-black/45

                          hover:bg-white/40
                        `
                    }
                  `}
                >
                  <Icon size={16} />

                  {mode.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.28em]

              text-black/35

              font-semibold
            "
          >
            welcome back
          </p>

          <h3
            className="
              text-lg
              font-bold
              tracking-[-0.03em]
            "
          >
            User
          </h3>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* semester dropdown */}
          <div
            ref={semesterRef}
            className="relative"
          >
            <button
              onClick={() =>
                setSemesterOpen(
                  !semesterOpen
                )
              }
              className="
                h-12

                px-5

                rounded-2xl

                bg-white/55

                border border-white/35

                flex
                items-center
                gap-3

                text-sm
                font-semibold

                transition-all
                duration-300

                hover:bg-white
              "
            >
              {selectedSemester}

              <ChevronDown
                size={16}
                className={`
                  text-black/45

                  transition-all
                  duration-300

                  ${
                    semesterOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {semesterOpen && (
              <div
                className="
                  absolute

                  top-[64px]
                  right-0

                  w-[210px]

                  rounded-[28px]

                  bg-white/88

                  backdrop-blur-2xl

                  border border-white/40

                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]

                  p-2

                  z-[9999]
                "
              >
                {semesters.map((sem) => (
                  <button
                    key={sem}
                    onClick={() => {
                      setSelectedSemester(
                        sem
                      );

                      setSemesterOpen(
                        false
                      );
                    }}
                    className={`
                      w-full

                      h-11

                      rounded-2xl

                      px-4

                      text-left
                      text-sm
                      font-medium

                      transition-all
                      duration-200

                      ${
                        selectedSemester ===
                        sem
                          ? `
                            bg-white
                            shadow-sm
                          `
                          : `
                            hover:bg-white/70
                          `
                      }
                    `}
                  >
                    {sem}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* profile */}
          <div
            ref={profileRef}
            className="relative"
          >
            <button
              onClick={() =>
                setProfileOpen(
                  !profileOpen
                )
              }
              className="
                h-12
                w-12

                rounded-full

                bg-white/60

                border border-white/35

                flex
                items-center
                justify-center

                transition-all
                duration-300

                hover:bg-white
                hover:scale-105

                active:scale-95
              "
            >
              <User
                size={18}
                className="text-black/60"
              />
            </button>

            {profileOpen && (
              <div
                className="
                  absolute

                  top-[64px]
                  right-0

                  w-[190px]

                  rounded-[28px]

                  bg-white/88

                  backdrop-blur-2xl

                  border border-white/40

                  shadow-[0_15px_50px_rgba(0,0,0,0.08)]

                  p-2

                  z-[9999]
                "
              >
                <button
                  className="
                    w-full

                    h-11

                    rounded-2xl

                    px-4

                    flex
                    items-center
                    gap-3

                    text-sm
                    font-medium

                    transition-all
                    duration-200

                    hover:bg-white
                  "
                >
                  <Settings size={16} />

                  Settings
                </button>

                <button
                  className="
                    w-full

                    h-11

                    rounded-2xl

                    px-4

                    flex
                    items-center
                    gap-3

                    text-sm
                    font-medium

                    text-[#d94b68]

                    transition-all
                    duration-200

                    hover:bg-[#fff1f4]
                  "
                >
                  <LogOut size={16} />

                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;