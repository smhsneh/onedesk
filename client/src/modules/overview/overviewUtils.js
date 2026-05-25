export const getUrgencyColor = (priority) => {
  switch (priority) {
    case "high":
      return "text-red-500";

    case "medium":
      return "text-yellow-500";

    default:
      return "text-green-500";
  }
};