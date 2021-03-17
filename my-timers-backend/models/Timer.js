const mongoose = require("mongoose");

const timerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: "User is required",
      ref: "User",
    },
    title: {
      type: String,
      required: "Title is required",
    },
    timestamp: {
      type: Number,
      required: "Timestamp is required",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Timer", timerSchema);
