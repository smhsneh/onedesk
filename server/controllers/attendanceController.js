import Attendance from "../models/Attendance.js";

export const createAttendance = async (
  req,
  res
) => {
  try {
    const attendance =
      await Attendance.create({
        user: req.user._id,
        ...req.body,
      });

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAttendance = async (
  req,
  res
) => {
  try {
    const attendance =
      await Attendance.find({
        user: req.user._id,
      });

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateAttendance =
  async (req, res) => {
    try {
      const attendance =
        await Attendance.findOneAndUpdate(
          {
            _id: req.params.id,
            user: req.user._id,
          },
          req.body,
          {
            new: true,
          }
        );

      res.status(200).json(
        attendance
      );
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const deleteAttendance =
  async (req, res) => {
    try {
      await Attendance.findOneAndDelete(
        {
          _id: req.params.id,
          user: req.user._id,
        }
      );

      res.status(200).json({
        message: "Deleted",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };