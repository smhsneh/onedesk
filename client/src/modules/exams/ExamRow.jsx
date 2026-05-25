const ExamRow = ({
  subject,
  date,
}) => {
  return (
    <div
      className="
        rounded-2xl
        border border-white/30
        bg-white/40
        p-4
      "
    >
      <div className="flex items-center justify-between">
        <h3 className="capitalize font-medium">
          {subject}
        </h3>

        <span className="text-xs text-black/50">
          {date}
        </span>
      </div>
    </div>
  );
};

export default ExamRow;