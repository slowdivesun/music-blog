const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
  },
  bio: {
    type: String,
    required: true,
  },
  social: {
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
