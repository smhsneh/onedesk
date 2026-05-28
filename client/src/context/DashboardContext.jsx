import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const DashboardContext =
  createContext();

const defaultDashboardData = {
  semester: 4,

  attendance: [
    {
      id: 1,
      subject: "dbms",
      attended: 28,
      total: 36,
    },
    {
      id: 2,
      subject: "os",
      attended: 18,
      total: 30,
    },
    {
      id: 3,
      subject: "cn",
      attended: 25,
      total: 32,
    },
  ],

  assignments: [
    {
      id: 1,
      title: "dbms assignment",
      due: "today",
      completed: false,
    },
    {
      id: 2,
      title: "react submission",
      due: "2 days",
      completed: false,
    },
  ],

  exams: [
    {
      id: 1,
      subject: "cn internals",
      date: "2026-05-30",
    },
  ],

  subjects: [
    {
      id: 1,
      name: "dbms",
      credits: 4,
    },
    {
      id: 2,
      name: "os",
      credits: 3,
    },
  ],

  cgpa: {
    current: 8.42,

    semesters: [
      {
        id: 1,
        value: 8.1,
      },
      {
        id: 2,
        value: 8.3,
      },
      {
        id: 3,
        value: 8.5,
      },
      {
        id: 4,
        value: 8.42,
      },
    ],
  },

  calendarEvents: [],
};

export const DashboardProvider = ({
  children,
}) => {
  const [dashboardData, setDashboardData] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "onedesk-dashboard"
        );

      return saved
        ? JSON.parse(saved)
        : defaultDashboardData;
    });

  useEffect(() => {
    localStorage.setItem(
      "onedesk-dashboard",
      JSON.stringify(
        dashboardData
      )
    );
  }, [dashboardData]);

  // attendance
  const addAttendanceSubject = (
    subject
  ) => {
    setDashboardData((prev) => ({
      ...prev,

      attendance: [
        ...prev.attendance,
        subject,
      ],
    }));
  };

  const updateAttendance = (
    id,
    updatedData
  ) => {
    setDashboardData((prev) => ({
      ...prev,

      attendance:
        prev.attendance.map((item) =>
          item.id === id
            ? {
                ...item,
                ...updatedData,
              }
            : item
        ),
    }));
  };

  const deleteAttendanceSubject = (
    id
  ) => {
    setDashboardData((prev) => ({
      ...prev,

      attendance:
        prev.attendance.filter(
          (subject) =>
            subject.id !== id
        ),
    }));
  };

  // assignments
  const addAssignment = (
    assignment
  ) => {
    setDashboardData((prev) => ({
      ...prev,

      assignments: [
        ...prev.assignments,
        assignment,
      ],
    }));
  };

  const deleteAssignment = (
    id
  ) => {
    setDashboardData((prev) => ({
      ...prev,

      assignments:
        prev.assignments.filter(
          (assignment) =>
            assignment.id !== id
        ),
    }));
  };

  const toggleAssignment = (
    id
  ) => {
    setDashboardData((prev) => ({
      ...prev,

      assignments:
        prev.assignments.map(
          (assignment) =>
            assignment.id === id
              ? {
                  ...assignment,

                  completed:
                    !assignment.completed,
                }
              : assignment
        ),
    }));
  };

  // exams
  const addExam = (exam) => {
    setDashboardData((prev) => ({
      ...prev,

      exams: [
        ...prev.exams,
        exam,
      ],
    }));
  };

  const deleteExam = (id) => {
    setDashboardData((prev) => ({
      ...prev,

      exams:
        prev.exams.filter(
          (exam) =>
            exam.id !== id
        ),
    }));
  };

  // subjects
  const addSubject = (
    subject
  ) => {
    setDashboardData((prev) => ({
      ...prev,

      subjects: [
        ...prev.subjects,
        subject,
      ],
    }));
  };

  const updateSubject = (
    id,
    updatedData
  ) => {
    setDashboardData((prev) => ({
      ...prev,

      subjects:
        prev.subjects.map(
          (subject) =>
            subject.id === id
              ? {
                  ...subject,
                  ...updatedData,
                }
              : subject
        ),
    }));
  };

  const deleteSubject = (
    id
  ) => {
    setDashboardData((prev) => ({
      ...prev,

      subjects:
        prev.subjects.filter(
          (subject) =>
            subject.id !== id
        ),
    }));
  };

  // semester
  const setSemester = (
    semester
  ) => {
    setDashboardData((prev) => ({
      ...prev,
      semester,
    }));
  };

  // cgpa
  const setCGPASemesters = (
    semesters
  ) => {
    const values =
      semesters.map(
        (semester) =>
          Number(
            semester.value
          ) || 0
      );

    const total =
      values.reduce(
        (a, b) => a + b,
        0
      );

    const current =
      values.length > 0
        ? (
            total /
            values.length
          ).toFixed(2)
        : "0.00";

    setDashboardData((prev) => ({
      ...prev,

      cgpa: {
        ...prev.cgpa,

        current:
          Number(current),

        semesters,
      },
    }));
  };

  // calendar
  const addCalendarEvent = (
    event
  ) => {
    setDashboardData((prev) => ({
      ...prev,

      calendarEvents: [
        ...(
          prev.calendarEvents ||
          []
        ),
        event,
      ],
    }));
  };

  const deleteCalendarEvent = (
    id
  ) => {
    setDashboardData((prev) => ({
      ...prev,

      calendarEvents:
        (
          prev.calendarEvents ||
          []
        ).filter(
          (event) =>
            event.id !== id
        ),
    }));
  };

  return (
    <DashboardContext.Provider
      value={{
        dashboardData,

        addAttendanceSubject,
        updateAttendance,
        deleteAttendanceSubject,

        addAssignment,
        deleteAssignment,
        toggleAssignment,

        addExam,
        deleteExam,

        addSubject,
        updateSubject,
        deleteSubject,

        setSemester,
        setCGPASemesters,

        addCalendarEvent,
        deleteCalendarEvent,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () =>
  useContext(
    DashboardContext
  );