const mongoose = require("mongoose");
const Timer = mongoose.model("Timer");
const User = mongoose.model("User");
const jwt = require("jwt-then");

exports.createTimer = async (req, res, next) => {
  const { title, timestamp } = req.body;
  const user = await User.findOne({ id: req.payload.id });

  const timer = new Timer({
    user,
    title,
    timestamp,
  });

  await timer.save();

  res.json({
    message: "Timer created",
    timer: {
      _id: timer._id,
      title: timer.title,
      timestamp: timer.timestamp,
    },
  });
};

exports.getTimers = async (req, res, next) => {
  const user = await User.findOne({ id: req.payload.id });
  const timers = await Timer.find({ user });

  res.json({
    message: "Success",
    timers,
  });
};

exports.deleteTimer = async (req, res, next) => {
  const { id } = req.body;
  const timer = await Timer.findOneAndDelete({ _id: id });

  res.json({
    message: "Timer deleted",
    timer,
  });
};
