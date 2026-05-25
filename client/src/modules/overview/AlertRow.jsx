const AlertRow = ({
  title,
  time,
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
        <h3 className="font-medium capitalize">
          {title}
        </h3>

        <span className="text-xs text-black/50">
          {time}
        </span>
      </div>
    </div>
  );
};

export default AlertRow;