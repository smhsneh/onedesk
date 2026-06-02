import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    url: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "DSA",
        "Aptitude",
        "CS Fundamentals",
        "Projects",
        "Interview Prep",
        "Other",
      ],
      default: "Other",
    },
  },
  {
    timestamps: true,
  }
);

const Resource = mongoose.model(
  "Resource",
  resourceSchema
);

export default Resource;