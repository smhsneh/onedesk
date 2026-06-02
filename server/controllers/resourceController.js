import Resource from "../models/Resource.js";

// GET ALL
export const getResources =
  async (req, res) => {
    try {
      const resources =
        await Resource.find({
          user: req.user._id,
        }).sort({
          createdAt: -1,
        });

      res.status(200).json(
        resources
      );
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to fetch resources",
      });
    }
  };

// CREATE
export const createResource =
  async (req, res) => {
    try {
      const {
        title,
        url,
        category,
      } = req.body;

      const resource =
        await Resource.create({
          user: req.user._id,
          title,
          url,
          category,
        });

      res.status(201).json(
        resource
      );
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to create resource",
      });
    }
  };

// DELETE
export const deleteResource =
  async (req, res) => {
    try {
      const resource =
        await Resource.findOne({
          _id: req.params.id,
          user: req.user._id,
        });

      if (!resource) {
        return res.status(404).json({
          message:
            "Resource not found",
        });
      }

      await resource.deleteOne();

      res.status(200).json({
        message:
          "Resource deleted",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to delete resource",
      });
    }
  };