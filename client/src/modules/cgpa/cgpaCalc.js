export const calculateCGPA = (
  semesters
) => {
  if (!semesters.length) return 0;

  const total = semesters.reduce(
    (acc, sem) => acc + sem.gpa,
    0
  );

  return (total / semesters.length).toFixed(2);
};