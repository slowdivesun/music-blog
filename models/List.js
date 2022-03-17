const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  entries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "review",
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = List = mongoose.model("list", ListSchema);
