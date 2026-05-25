const AssignmentRow = ({
  title,
  due,
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
      <div className="flex items-center justify-between">
        <h3 className="capitalize font-medium">
          {title}
        </h3>

        <span className="text-xs text-black/50">
          {due}
        </span>
      </div>
    </div>
  );
};

export default AssignmentRow;