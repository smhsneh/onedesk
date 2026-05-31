import Exam from "../models/Exam.js";

export const createExam = async (req, res) => {
  try {
    const { examName, examDate } = req.body;

    const exam = await Exam.create({
      user: req.user._id,
      examName,
      examDate,
    });

    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getExams = async (req, res) => {
  try {
    const exams = await Exam.find({
      user: req.user._id,
    }).sort({ examDate: 1 });

    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteExam = async (req, res) => {
  try {
    const exam = await Exam.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!exam) {
      return res.status(404).json({
        message: "Exam not found",
      });
    }

    await exam.deleteOne();

    res.status(200).json({
      message: "Exam deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};