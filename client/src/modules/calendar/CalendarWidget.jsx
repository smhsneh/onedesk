import GlassCard from "../../components/common/GlassCard";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {
  useRef,
  useState,
  useEffect,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  X,
  Trash2,
} from "lucide-react";

import calendarService from "./calendarService";

const colors = [
  "#d95c5c",
  "#e0b04f",
  "#5b8def",
  "#5f8f52",
  "#9b6bff",
];

const CalendarWidget = () => {
  const [date, setDate] =
    useState(new Date());

  const [open, setOpen] =
    useState(false);

  const [viewOpen, setViewOpen] =
    useState(false);

  const [selectedDate, setSelectedDate] =
    useState(null);

  const [selectedDayEvents, setSelectedDayEvents] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [selectedColor, setSelectedColor] =
    useState(colors[0]);

  const [events, setEvents] =
    useState([]);

  const clickTimeout =
    useRef(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents =
    async () => {
      try {
        const data =
          await calendarService.getEvents();

        setEvents(data);
      } catch (error) {
        console.error(error);
      }
    };

  const getEventsForDate = (
    currentDate
  ) => {
    return events.filter(
      (event) => {
        const eventDate =
          new Date(event.date);

        return (
          eventDate.toDateString() ===
          currentDate.toDateString()
        );
      }
    );
  };

  const handleCreateEvent =
    async () => {
      if (!title.trim()) {
        return;
      }

      try {
        const newEvent =
          await calendarService.createEvent({
            title,
            date: selectedDate,
            color: selectedColor,
          });

        setEvents((prev) => [
          ...prev,
          newEvent,
        ]);

        setTitle("");
        setSelectedColor(colors[0]);

        setOpen(false);
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <GlassCard
        gradient="
        from-[#d6e4ff]
        via-[#ead7ff]
        to-[#f5f0ff]
        "
        className="
          col-span-4
          row-span-3
        "
      >
        {/* header */}
        <div className="flex items-start justify-between mb-5 shrink-0">
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
              calendar
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
            "
          >
            <CalendarDays
              size={18}
              className="text-black/40"
            />
          </button>
        </div>

        {/* calendar */}
        <div
          className="
            flex-1
            overflow-hidden
          "
        >
          <div className="calendar-wrapper h-full">
            <Calendar
              onChange={setDate}
              value={date}
              onClickDay={(value) => {
                if (
                  clickTimeout.current
                ) {
                  clearTimeout(
                    clickTimeout.current
                  );

                  clickTimeout.current =
                    null;

                  setSelectedDate(
                    value
                  );

                  setOpen(true);

                  return;
                }

                clickTimeout.current =
                  setTimeout(() => {
                    const dayEvents =
                      getEventsForDate(
                        value
                      );

                    setSelectedDayEvents(
                      dayEvents
                    );

                    setSelectedDate(
                      value
                    );

                    setViewOpen(
                      true
                    );

                    clickTimeout.current =
                      null;
                  }, 250);
              }}
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

                    hover:bg-white/50
                  "
                >
                  <ChevronRight size={16} />
                </div>
              }
              next2Label={null}
              prev2Label={null}
              showNeighboringMonth
              formatShortWeekday={(
                locale,
                date
              ) =>
                [
                  "s",
                  "m",
                  "t",
                  "w",
                  "t",
                  "f",
                  "s",
                ][date.getDay()]
              }
              tileContent={({
                date,
                view,
              }) => {
                if (
                  view !== "month"
                ) {
                  return null;
                }

                const dayEvents =
                  getEventsForDate(
                    date
                  );

                if (
                  dayEvents.length ===
                  0
                ) {
                  return null;
                }

                return (
                  <div
                    className="
                      mt-1

                      flex
                      flex-col
                      gap-1

                      items-center
                    "
                  >
                    {dayEvents
                      .slice(0, 2)
                      .map(
                        (
                          event
                        ) => (
                          <div
                            key={
                              event._id
                            }
                            className="
                              max-w-full

                              px-1.5
                              py-[2px]

                              rounded-md

                              text-white

                              text-[8px]
                              font-semibold

                              leading-none

                              truncate
                            "
                            style={{
                              backgroundColor:
                                event.color,
                            }}
                          >
                            {
                              event.title
                            }
                          </div>
                        )
                      )}

                    {dayEvents.length >
                      2 && (
                      <span
                        className="
                          text-[8px]
                          font-semibold
                          text-black/50
                        "
                      >
                        +
                        {dayEvents.length -
                          2}
                      </span>
                    )}
                  </div>
                );
              }}
            />
          </div>
        </div>
      </GlassCard>

      {/* create modal */}
      {open && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            bg-black/20
            backdrop-blur-md

            p-5
          "
        >
          <div
            className="
              w-full
              max-w-md

              rounded-[32px]

              bg-white/70

              border border-white/40

              backdrop-blur-3xl

              p-6
            "
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                className="
                  text-2xl
                  font-black
                "
              >
                create event
              </h2>

              <button
                onClick={() =>
                  setOpen(false)
                }
              >
                <X size={18} />
              </button>
            </div>

            <input
              type="text"
              placeholder="event title"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              className="
                w-full

                rounded-2xl

                bg-white/40

                border border-white/30

                px-4
                py-4

                outline-none
              "
            />

            <div className="flex gap-3 mt-5">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() =>
                    setSelectedColor(
                      color
                    )
                  }
                  className={`
                    h-10
                    w-10

                    rounded-xl

                    border-2

                    ${
                      selectedColor ===
                      color
                        ? "border-black"
                        : "border-transparent"
                    }
                  `}
                  style={{
                    backgroundColor:
                      color,
                  }}
                />
              ))}
            </div>

            <button
              onClick={
                handleCreateEvent
              }
              className="
                mt-6

                w-full

                rounded-2xl

                bg-black

                text-white

                py-4

                font-semibold
              "
            >
              add event
            </button>
          </div>
        </div>
      )}

      {/* view modal */}
      {viewOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            bg-black/20
            backdrop-blur-md

            p-5
          "
        >
          <div
            className="
              w-full
              max-w-md

              rounded-[32px]

              bg-white/70

              border border-white/40

              backdrop-blur-3xl

              p-6
            "
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                className="
                  text-2xl
                  font-black
                "
              >
                events
              </h2>

              <button
                onClick={() =>
                  setViewOpen(
                    false
                  )
                }
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3">
              {selectedDayEvents.length ===
              0 ? (
                <p className="text-black/45">
                  no events
                </p>
              ) : (
                selectedDayEvents.map(
                  (event) => (
                    <div
                      key={
                        event._id
                      }
                      className="
                        rounded-2xl

                        bg-white/40

                        border border-white/30

                        p-4

                        flex
                        items-center
                        justify-between
                      "
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            h-3
                            w-3

                            rounded-full
                          "
                          style={{
                            backgroundColor:
                              event.color,
                          }}
                        />

                        <span className="font-semibold capitalize">
                          {
                            event.title
                          }
                        </span>
                      </div>

                      <button
                        onClick={async () => {
                          try {
                            await calendarService.deleteEvent(
                              event._id
                            );

                            setEvents((prev) =>
                              prev.filter(
                                (item) =>
                                  item._id !== event._id
                              )
                            );
                          } catch (error) {
                            console.error(error);
                          }
                        }}
                        className="
                          h-8
                          w-8

                          rounded-xl

                          flex
                          items-center
                          justify-center

                          hover:bg-white/40
                        "
                      >
                        <Trash2
                          size={16}
                          className="text-black/40"
                        />
                      </button>
                    </div>
                  )
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendarWidget;