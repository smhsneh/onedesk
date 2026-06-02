import mongoose from "mongoose";

const oaDeadlineSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    deadline: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const OADeadline = mongoose.model(
  "OADeadline",
  oaDeadlineSchema
);

export default OADeadline;