import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    attendedClasses: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalClasses: {
      type: Number,
      default: 0,
      min: 0,
    },

    credits: {
      type: Number,
      default: 4,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Subject = mongoose.model("Subject", subjectSchema);

export default Subject;