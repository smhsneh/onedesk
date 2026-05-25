const AttendanceRow = ({
  subject,
  value,
}) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="capitalize font-medium">
          {subject}
        </span>

        <span className="text-sm">
          {value}%
        </span>
      </div>

      <div className="w-full h-3 rounded-full bg-white/40 overflow-hidden">
        <div
          className="h-full rounded-full bg-black/70"
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
};

export default AttendanceRow;