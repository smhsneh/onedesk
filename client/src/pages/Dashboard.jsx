import DashboardHeader from "../components/layout/DashboardHeader";
import BentoGrid from "../components/layout/BentoGrid";

import OverviewWidget from "../modules/overview/OverviewWidget";
import AttendanceWidget from "../modules/attendance/AttendanceWidget";
import CalendarWidget from "../modules/calendar/CalendarWidget";
import AssignmentWidget from "../modules/assignments/AssignmentWidget";
import CGPAWidget from "../modules/cgpa/CGPAWidget";
import SubjectsWidget from "../modules/subjects/SubjectsWidget";
import ExamWidget from "../modules/exams/ExamWidget";

function Dashboard() {
  return (
    <div
      className="
        min-h-screen
        pb-20
        bg-[#f7f6f4]
        relative
        overflow-hidden
      "
      style={{
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* atmospheric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute
            w-[500px]
            h-[500px]
            bg-[#ff99c8]/18
            blur-[120px]
            rounded-full
            top-[0%]
            left-[-5%]
          "
        />

        <div
          className="
            absolute
            w-[600px]
            h-[600px]
            bg-[#a9def9]/18
            blur-[140px]
            rounded-full
            bottom-[-10%]
            right-[-5%]
          "
        />

        <div
          className="
            absolute
            w-[420px]
            h-[420px]
            bg-[#e4c1f9]/14
            blur-[110px]
            rounded-full
            top-[35%]
            right-[25%]
          "
        />
      </div>

      {/* subtle grain */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          pointer-events-none
        "
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />

      <div className="relative z-10">
        {/* header */}
        <DashboardHeader />

        {/* workspace container */}
        <div className="px-5 md:px-7 mt-6">
          <div
            className="
              relative

              rounded-[42px]

              bg-white/30

              backdrop-blur-2xl

              border border-white/35

              shadow-[0_10px_50px_rgba(0,0,0,0.05)]

              p-5
              md:p-6

              overflow-hidden
            "
          >
            {/* glow layers */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
                  absolute

                  -top-20
                  left-20

                  h-[280px]
                  w-[280px]

                  rounded-full

                  bg-white

                  opacity-[0.22]

                  blur-[100px]
                "
              />

              <div
                className="
                  absolute

                  bottom-0
                  right-10

                  h-[240px]
                  w-[240px]

                  rounded-full

                  bg-[#ffe5ec]

                  opacity-[0.18]

                  blur-[100px]
                "
              />

              <div
                className="
                  absolute

                  top-[35%]
                  left-[40%]

                  h-[220px]
                  w-[220px]

                  rounded-full

                  bg-[#d6e4ff]

                  opacity-[0.15]

                  blur-[90px]
                "
              />
            </div>

            {/* actual dashboard */}
            <div className="relative z-10">
              <BentoGrid>
                <OverviewWidget />

                <AttendanceWidget />

                <SubjectsWidget />

                <CalendarWidget />

                <AssignmentWidget />

                <ExamWidget />

                <CGPAWidget />
              </BentoGrid>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;