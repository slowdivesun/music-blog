const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "genres",
    },
  ],
  score: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Review = mongoose.model("review", ReviewSchema);
