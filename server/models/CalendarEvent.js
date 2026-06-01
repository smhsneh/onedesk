import mongoose from "mongoose";

const calendarEventSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      title: {
        type: String,
        required: true,
      },

      date: {
        type: Date,
        required: true,
      },

      color: {
        type: String,
        default: "#5b8def",
      },
    },
    {
      timestamps: true,
    }
  );

const CalendarEvent =
  mongoose.model(
    "CalendarEvent",
    calendarEventSchema
  );

export default CalendarEvent;