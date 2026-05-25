import GlassCard from "../../components/common/GlassCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CalendarWidget = () => {
  const [date, setDate] = useState(new Date());

  return (
    <GlassCard
      gradient="
      from-[#d6e4ff]
      via-[#ead7ff]
      to-[#f5f0ff]
      "
      className="col-span-4 row-span-3"
    >
      <div className="flex items-start justify-between mb-5">
        <div>
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.25em]
              text-black/40
              mb-3
            "
          >
            may 2026
          </p>
        </div>

        <p className="text-black/40 text-sm">
          monthly view
        </p>
      </div>

      <div className="calendar-wrapper">
        <Calendar
          onChange={setDate}
          value={date}
          prevLabel={<ChevronLeft size={16} />}
          nextLabel={<ChevronRight size={16} />}
          next2Label={null}
          prev2Label={null}
          showNeighboringMonth={true}
          formatShortWeekday={(locale, date) =>
            ["s", "m", "t", "w", "t", "f", "s"][
              date.getDay()
            ]
          }
        />
      </div>
    </GlassCard>
  );
};

export default CalendarWidget;