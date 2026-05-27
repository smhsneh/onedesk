export const calculateAttendance = (
  attended,
  total
) => {
  if (!total || total === 0) {
    return 0;
  }

  return Math.round(
    (attended / total) * 100
  );
};