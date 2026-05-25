const SubjectRow = ({
  subject,
  attendance,
  credits,
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
      <div className="flex items-center justify-between mb-2">
        <h3 className="capitalize font-semibold">
          {subject}
        </h3>

        <span className="text-sm">
          {attendance}%
        </span>
      </div>

      <div className="w-full h-2 rounded-full bg-white/40 overflow-hidden">
        <div
          className="h-full rounded-full bg-black/70"
          style={{
            width: `${attendance}%`,
          }}
        />
      </div>

      <p className="text-xs text-black/50 mt-2">
        {credits} credits
      </p>
    </div>
  );
};

export default SubjectRow;