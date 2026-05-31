import Subject from "../models/Subject.js";

export const createSubject = async (req, res) => {
  try {
    const { name, attendedClasses, totalClasses, credits } = req.body;

    const subject = await Subject.create({
      user: req.user._id,
      name,
      attendedClasses,
      totalClasses,
      credits,
    });

    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!subject) {
      return res.status(404).json({
        message: "Subject not found",
      });
    }

    await subject.deleteOne();

    res.status(200).json({
      message: "Subject deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};