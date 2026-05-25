import GlassCard from "../../components/common/GlassCard";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
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
              text-[13px]
              uppercase
              tracking-[0.28em]
              text-black/45
              mb-3
              font-semibold
            "
          >
            may 2026
          </p>
        </div>

        <button
          className="
            h-10
            w-10

            rounded-2xl

            bg-white/25

            border border-white/30

            flex
            items-center
            justify-center

            transition-all
            duration-300

            hover:bg-white/40
            hover:scale-105

            active:scale-95
          "
        >
          <CalendarDays
            size={18}
            className="text-black/40"
          />
        </button>
      </div>

      <div className="calendar-wrapper">
        <Calendar
          onChange={setDate}
          value={date}
          prevLabel={
            <div
              className="
                h-8
                w-8

                rounded-xl

                bg-white/35

                border border-white/30

                flex
                items-center
                justify-center

                transition-all
                duration-300

                hover:bg-white/50
              "
            >
              <ChevronLeft size={16} />
            </div>
          }
          nextLabel={
            <div
              className="
                h-8
                w-8

                rounded-xl

                bg-white/35

                border border-white/30

                flex
                items-center
                justify-center

                transition-all
                duration-300

                hover:bg-white/50
              "
            >
              <ChevronRight size={16} />
            </div>
          }
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