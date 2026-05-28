export const getUrgencyColor = (
  priority
) => {
  switch (priority) {
    case "high":
      return {
        dot: "bg-[#d95c5c]",
        text: "text-[#c94b4b]",
      };

    case "medium":
      return {
        dot: "bg-[#e0b04f]",
        text: "text-black/45",
      };

    default:
      return {
        dot: "bg-[#8bbf7a]",
        text: "text-[#5f8f52]",
      };
  }
};

const getDaysLeft = (date) => {
  const today = new Date();

  const target =
    new Date(date);

  const difference =
    target - today;

  return Math.ceil(
    difference /
      (1000 * 60 * 60 * 24)
  );
};

export const generateOverviewAlerts = (
  dashboardData
) => {
  const alerts = [];

  // attendance alerts
  dashboardData.attendance.forEach(
    (subject) => {
      const percentage =
        (
          (subject.attended /
            subject.total) *
          100
        ).toFixed(0);

      if (percentage < 75) {
        alerts.push({
          id: `attendance-${subject.id}`,

          title: `${subject.subject} attendance below 75%`,

          time: "urgent",

          priority: "high",
        });
      }
    }
  );

  // assignment alerts
  dashboardData.assignments.forEach(
    (assignment) => {
      if (
        assignment.completed
      ) {
        return;
      }

      let priority =
        "medium";

      if (
        assignment.due ===
        "today"
      ) {
        priority = "high";
      }

      alerts.push({
        id: `assignment-${assignment.id}`,

        title: assignment.title,

        time: assignment.due,

        priority,
      });
    }
  );

  // exam alerts
  dashboardData.exams.forEach(
    (exam) => {
      const daysLeft =
        getDaysLeft(
          exam.date
        );

      let priority = "low";

      if (daysLeft <= 2) {
        priority = "high";
      } else if (
        daysLeft <= 5
      ) {
        priority = "medium";
      }

      alerts.push({
        id: `exam-${exam.id}`,

        title: exam.subject,

        time:
          daysLeft <= 0
            ? "today"
            : `${daysLeft} days`,

        priority,
      });
    }
  );

  return alerts;
};