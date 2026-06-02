import Application from "../models/Application.js";

// GET ALL APPLICATIONS
export const getApplications = async (
  req,
  res
) => {
  try {
    const applications =
      await Application.find({
        user: req.user._id,
      }).sort({
        createdAt: -1,
      });

    res.status(200).json(
      applications
    );
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch applications",
    });
  }
};

// CREATE APPLICATION
export const createApplication =
  async (req, res) => {
    try {
      const {
        company,
        role,
        status,
      } = req.body;

      const application =
        await Application.create({
          user: req.user._id,
          company,
          role,
          status,
        });

      res.status(201).json(
        application
      );
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to create application",
      });
    }
  };

// UPDATE STATUS
export const updateApplication =
  async (req, res) => {
    try {
      const application =
        await Application.findOne({
          _id: req.params.id,
          user: req.user._id,
        });

      if (!application) {
        return res
          .status(404)
          .json({
            message:
              "Application not found",
          });
      }

      application.status =
        req.body.status;

      await application.save();

      res.status(200).json(
        application
      );
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to update application",
      });
    }
  };

// DELETE APPLICATION
export const deleteApplication =
  async (req, res) => {
    try {
      const application =
        await Application.findOne({
          _id: req.params.id,
          user: req.user._id,
        });

      if (!application) {
        return res
          .status(404)
          .json({
            message:
              "Application not found",
          });
      }

      await application.deleteOne();

      res.status(200).json({
        message:
          "Application deleted",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to delete application",
      });
    }
  };