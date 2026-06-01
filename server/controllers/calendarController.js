import CalendarEvent from "../models/CalendarEvent.js";

export const getEvents =
  async (req, res) => {
    try {
      const events =
        await CalendarEvent.find({
          user: req.user._id,
        });

      res.status(200).json(
        events
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

export const createEvent =
  async (req, res) => {
    try {
      const {
        title,
        date,
        color,
      } = req.body;

      const event =
        await CalendarEvent.create(
          {
            user:
              req.user._id,

            title,
            date,
            color,
          }
        );

      res.status(201).json(
        event
      );
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };

export const deleteEvent =
  async (req, res) => {
    try {
      const event =
        await CalendarEvent.findOne(
          {
            _id:
              req.params.id,

            user:
              req.user._id,
          }
        );

      if (!event) {
        return res
          .status(404)
          .json({
            message:
              "Event not found",
          });
      }

      await event.deleteOne();

      res.status(200).json({
        message:
          "Event deleted",
      });
    } catch (error) {
      res.status(500).json({
        message:
          error.message,
      });
    }
  };