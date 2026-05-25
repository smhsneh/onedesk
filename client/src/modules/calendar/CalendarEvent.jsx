const CalendarEvent = ({
  title,
  date,
}) => {
  return (
    <div
      className="
        rounded-2xl
        border border-white/30
        bg-white/40
        p-3
      "
    >
      <h3 className="font-medium capitalize">
        {title}
      </h3>

      <p className="text-xs text-black/50 mt-1">
        {date}
      </p>
    </div>
  );
};

export default CalendarEvent;