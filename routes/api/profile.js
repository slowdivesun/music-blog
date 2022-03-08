const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Models
const Author = require("../../models/Author");
const Profile = require("../../models/Profile");

// @ route  GET api/profile/me
// @desc    Get current user profile
// @access  Public
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ author: req.author.id }).populate(
      "user",
      ["name"]
    );

    if (!profile) {
      return res
        .status(400)
        .json({ msg: "There is no profile for this author" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
