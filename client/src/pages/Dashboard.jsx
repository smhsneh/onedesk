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

      {/* grain */}
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
        <DashboardHeader />

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
  );
}

export default Dashboard;