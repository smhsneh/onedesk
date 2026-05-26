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

        relative
        overflow-hidden
      "
      style={{
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* background image */}
      <div
        className="
          absolute
          inset-0

          scale-[1.03]

          blur-[10px]

          opacity-[0.92]

          pointer-events-none
        "
        style={{
          backgroundImage: 'url("/images/bg2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "scale(1.06)",
          willChange: "transform",
        }}
      />

      {/* subtle cinematic overlay */}
      <div
        className="
          absolute
          inset-0

          bg-white/[0.08]

          pointer-events-none
        "
      />

      {/* soft atmospheric glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute

            top-[-10%]
            left-[-8%]

            w-[520px]
            h-[520px]

            rounded-full

            bg-[#ff99c8]/12

            blur-[120px]
          "
        />

        <div
          className="
            absolute

            bottom-[-15%]
            right-[-10%]

            w-[620px]
            h-[620px]

            rounded-full

            bg-[#a9def9]/12

            blur-[140px]
          "
        />

        <div
          className="
            absolute

            top-[35%]
            right-[22%]

            w-[420px]
            h-[420px]

            rounded-full

            bg-[#e4c1f9]/10

            blur-[110px]
          "
        />
      </div>

      {/* grain */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.025]

          mix-blend-soft-light

          pointer-events-none
        "
        style={{
          backgroundImage:
            'url("https://grainy-gradients.vercel.app/noise.svg")',
        }}
      />

      <div className="relative z-10">
        {/* header */}
        <div
          className="
            sticky
            top-0
            z-50

            backdrop-blur-3xl

            bg-white/42
          "
        >
          <DashboardHeader />
        </div>

        {/* workspace */}
        <div className="px-5 md:px-7 mt-6">
          <div
            className="
              relative

              rounded-[42px]

              bg-white/28

              backdrop-blur-[30px]

              border border-white/35

              shadow-[0_25px_80px_rgba(0,0,0,0.10)]

              p-5
              md:p-6

              overflow-visible
            "
          >
            {/* internal glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="
                  absolute

                  -top-20
                  left-20

                  h-[280px]
                  w-[280px]

                  rounded-full

                  bg-white/30

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

                  bg-[#ffe5ec]/30

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

                  bg-[#d6e4ff]/25

                  blur-[90px]
                "
              />
            </div>

            {/* ultra subtle card grain */}
            <div
              className="
                absolute
                inset-0

                opacity-[0.018]

                rounded-[42px]

                mix-blend-overlay

                pointer-events-none
              "
              style={{
                backgroundImage:
                  'url("https://grainy-gradients.vercel.app/noise.svg")',
              }}
            />

            {/* dashboard */}
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