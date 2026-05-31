import Assignment from "../models/Assignment.js";

export const createAssignment = async (req, res) => {
  try {
    const { title, dueDate } = req.body;

    const assignment = await Assignment.create({
      user: req.user._id,
      title,
      dueDate,
    });

    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({
      user: req.user._id,
    }).sort({ dueDate: 1 });

    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const toggleAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!assignment) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }

    assignment.completed = !assignment.completed;

    await assignment.save();

    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!assignment) {
      return res.status(404).json({
        message: "Assignment not found",
      });
    }

    await assignment.deleteOne();

    res.status(200).json({
      message: "Assignment deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};