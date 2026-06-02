import OADeadline from "../models/OADeadline.js";

// GET ALL
export const getOADeadlines =
  async (req, res) => {
    try {
      const deadlines =
        await OADeadline.find({
          user: req.user._id,
        }).sort({
          deadline: 1,
        });

      res.status(200).json(
        deadlines
      );
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to fetch OA deadlines",
      });
    }
  };

// CREATE
export const createOADeadline =
  async (req, res) => {
    try {
      const {
        company,
        deadline,
        status,
      } = req.body;

      const oa =
        await OADeadline.create({
          user: req.user._id,
          company,
          deadline,
          status,
        });

      res.status(201).json(oa);
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to create OA deadline",
      });
    }
  };

// UPDATE
export const updateOADeadline =
  async (req, res) => {
    try {
      const oa =
        await OADeadline.findOne({
          _id: req.params.id,
          user: req.user._id,
        });

      if (!oa) {
        return res.status(404).json({
          message:
            "OA deadline not found",
        });
      }

      oa.status = req.body.status;

      await oa.save();

      res.status(200).json(oa);
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to update OA deadline",
      });
    }
  };

// DELETE
export const deleteOADeadline =
  async (req, res) => {
    try {
      const oa =
        await OADeadline.findOne({
          _id: req.params.id,
          user: req.user._id,
        });

      if (!oa) {
        return res.status(404).json({
          message:
            "OA deadline not found",
        });
      }

      await oa.deleteOne();

      res.status(200).json({
        message:
          "OA deadline deleted",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to delete OA deadline",
      });
    }
  };