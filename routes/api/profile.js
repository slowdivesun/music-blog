const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

// Models
const Author = require("../../models/Author");
const Profile = require("../../models/Profile");

// @ route  GET api/profile/me
// @desc    Get current user profile
// @access  Public
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ author: req.author.id }).populate(
      "author",
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

// @ route  GET api/profile
// @desc    Create or Update a user
// @access  Private
// What if someone wants to update their profile but not their bio
router.post(
  "/",
  [auth, [check("bio", "Bio is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { bio, facebook, twitter, instagram } = req.body;

    const profileFields = {};
    profileFields.bio = bio;
    profileFields.author = req.author.id;

    profileFields.social = {};
    if (twitter) profileFields.social.twitter = twitter;
    if (instagram) profileFields.social.instagram = instagram;
    if (facebook) profileFields.social.facebook = facebook;

    try {
      let profile = await Profile.findOne({ author: req.author.id });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { author: req.author.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @ route  GET api/profile
// @desc    Get all profiles
// @access  Public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("author", ["name"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route  GET api/profile/author/:author_id
// @desc    Get profile by author ID
// @access  Public
router.get("/author/:author_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      author: req.params.author_id,
    }).populate("author", ["name"]);

    if (!profile) return res.status(400).json({ msg: "No profile found" });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
