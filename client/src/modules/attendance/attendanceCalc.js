export const calculateAttendance = (
  attended,
  total
) => {
  if (!total) return 0;

  return ((attended / total) * 100).toFixed(0);
};