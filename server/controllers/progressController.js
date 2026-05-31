import Progress from "../models/Progress.js";

export const getProgress = async (req, res) => {
  try {
    let progress = await Progress.findOne({
      user: req.user._id,
    });

    if (!progress) {
      progress = await Progress.create({
        user: req.user._id,
        semesters: [],
      });
    }

    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProgress = async (req, res) => {
  try {
    const { semesters } = req.body;

    const progress = await Progress.findOneAndUpdate(
      {
        user: req.user._id,
      },
      {
        semesters,
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};