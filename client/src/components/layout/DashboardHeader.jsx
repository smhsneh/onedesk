import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import {
  ChevronDown,
  GraduationCap,
  Briefcase,
  LogOut,
  User,
  Trash2,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import userService from "../../services/userService";

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
  { name: "College", icon: GraduationCap },
  { name: "Placement", icon: Briefcase },
];

const DashboardHeader = () => {
  const navigate = useNavigate();
  const { logout, user, updateMode } = useAuth();

  // Derived from user.mode in DB — no local state needed
  const activeMode = user?.mode === "placement" ? "Placement" : "College";

  const [selectedSemester, setSelectedSemester] = useState("Semester 4");
  const [semesterOpen, setSemesterOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const semesterRef = useRef(null);
  const profileRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  const handleDeleteAccount = async () => {
    try {
      await userService.deleteAccount();
      logout();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (semesterRef.current && !semesterRef.current.contains(e.target)) {
        setSemesterOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const deleteModal = deleteOpen &&
    createPortal(
      <div
        style={{ position: "fixed", inset: 0, zIndex: 999999 }}
        className="
          flex
          items-center
          justify-center
          bg-black/20
          backdrop-blur-md
        "
      >
        <div
          className="
            w-full
            max-w-md
            mx-4
            rounded-[32px]
            bg-white/90
            border border-white/40
            backdrop-blur-3xl
            p-7
            shadow-[0_30px_80px_rgba(0,0,0,0.2)]
          "
        >
          <h2 className="text-2xl font-black mb-3">
            Delete Account
          </h2>

          <p className="text-black/60">
            This action is permanent. All your subjects, attendance,
            assignments, exams, calendar events and CGPA records will
            be deleted.
          </p>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setDeleteOpen(false)}
              className="
                flex-1
                h-12
                rounded-2xl
                bg-white
                border border-black/10
                text-sm
                font-medium
                hover:bg-gray-50
                transition-all
              "
            >
              Go Back
            </button>

            <button
              onClick={handleDeleteAccount}
              className="
                flex-1
                h-12
                rounded-2xl
                bg-red-500
                text-white
                text-sm
                font-semibold
                hover:bg-red-600
                transition-all
              "
            >
              Delete
            </button>
          </div>
        </div>
      </div>,
      document.body
    );

  return (
    <>
      <div
        className="
          w-full
          pt-5
          px-5
          md:px-7
          mb-8
          relative
          z-50
        "
      >
        <div
          className="
            w-full
            h-[92px]
            rounded-[42px]
            bg-white/70
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
            <div
              className="
                text-[42px]
                font-black
                tracking-[-0.08em]
                leading-none
                select-none
              "
              style={{ fontFamily: "Geom" }}
            >
              onedesk
            </div>

            <div className="flex items-center gap-2">
              {modes.map((mode) => {
                const Icon = mode.icon;
                const active = activeMode === mode.name;

                return (
                  <button
                    key={mode.name}
                    onClick={() => updateMode(mode.name.toLowerCase())}
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
                            shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                          `
                          : `
                            text-black/45
                            hover:bg-white/50
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
                text-[11px]
                uppercase
                tracking-[0.28em]
                text-black/35
                font-semibold
              "
            >
              welcome back
            </p>

            <h3 className="text-lg font-bold tracking-tight">
              {user?.name || "User"}
            </h3>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* Semester Selector */}
            <div ref={semesterRef} className="relative">
              <button
                onClick={() => setSemesterOpen(!semesterOpen)}
                className="
                  h-12
                  px-5
                  rounded-2xl
                  bg-white
                  border border-black/5
                  flex
                  items-center
                  gap-3
                  text-sm
                  font-semibold
                  shadow-sm
                  hover:shadow-md
                  transition-all
                "
              >
                {selectedSemester.replace("Semester", "Sem")}

                <ChevronDown
                  size={16}
                  className={`
                    text-black/40
                    transition-all
                    duration-300
                    ${semesterOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              <div
                className={`
                  absolute
                  right-0
                  top-[68px]
                  w-[190px]
                  rounded-[24px]
                  bg-white
                  border border-black/5
                  shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                  overflow-hidden
                  transition-all
                  duration-300
                  origin-top-right
                  z-[9999]
                  ${
                    semesterOpen
                      ? `opacity-100 scale-100 pointer-events-auto`
                      : `opacity-0 scale-95 pointer-events-none`
                  }
                `}
              >
                <div className="p-3">
                  <div className="grid grid-cols-2 gap-2">
                    {semesters.map((sem, index) => (
                      <button
                        key={sem}
                        onClick={() => {
                          setSelectedSemester(sem);
                          setSemesterOpen(false);
                        }}
                        className={`
                          h-12
                          rounded-xl
                          text-sm
                          font-semibold
                          transition-all
                          duration-200
                          flex
                          items-center
                          justify-center
                          ${
                            selectedSemester === sem
                              ? `bg-[#17172f] text-white shadow-lg`
                              : `bg-[#f7f7f7] text-black/70 hover:bg-[#ececec]`
                          }
                        `}
                      >
                        Sem {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Menu */}
            <div ref={profileRef} className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="
                  h-12
                  w-12
                  rounded-full
                  bg-white
                  border border-black/5
                  flex
                  items-center
                  justify-center
                  shadow-sm
                  hover:shadow-md
                  hover:scale-105
                  active:scale-95
                  transition-all
                "
              >
                <User size={18} className="text-black/60" />
              </button>

              <div
                className={`
                  absolute
                  right-0
                  top-[68px]
                  w-[200px]
                  rounded-[24px]
                  bg-white
                  border border-black/5
                  shadow-[0_25px_60px_rgba(0,0,0,0.15)]
                  p-2
                  transition-all
                  duration-300
                  origin-top-right
                  z-[9999]
                  ${
                    profileOpen
                      ? `opacity-100 scale-100 pointer-events-auto`
                      : `opacity-0 scale-95 pointer-events-none`
                  }
                `}
              >
                <button
                  onClick={() => {
                    setDeleteOpen(true);
                    setProfileOpen(false);
                  }}
                  className="
                    w-full
                    h-11
                    rounded-xl
                    px-4
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-medium
                    text-red-500
                    hover:bg-red-50
                    transition-all
                  "
                >
                  <Trash2 size={16} />
                  Delete Account
                </button>

                <button
                  onClick={handleLogout}
                  className="
                    w-full
                    h-11
                    rounded-xl
                    px-4
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-medium
                    text-red-500
                    hover:bg-red-50
                    transition-all
                  "
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {deleteModal}
    </>
  );
};

export default DashboardHeader;