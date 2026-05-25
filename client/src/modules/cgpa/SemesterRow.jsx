const SemesterRow = ({
  semester,
  gpa,
}) => {
  return (
    <div
      className="
        rounded-2xl
        bg-white/40
        border border-white/30
        p-4
      "
    >
      <h3 className="capitalize text-sm text-black/50 mb-2">
        {semester}
      </h3>

      <p className="text-2xl font-bold">
        {gpa}
      </p>
    </div>
  );
};

export default SemesterRow;