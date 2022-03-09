const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

// Models
const Author = require("../../models/Author");
const Profile = require("../../models/Profile");
const Review = require("../../models/Review");

// @ route  POST api/reviews
// @desc    Create a review
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("text", "Text is required").not().isEmpty(),
      check("title", "Title is required").not().isEmpty(),
      check("artist", "Artist is required").not().isEmpty(),
      check("genre", "Genre is required").not().isEmpty(),
      check("score", "Score is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    try {
      const author = await Author.findById(req.author.id).select("-password");

      const newReview = new Review({
        text: req.body.text,
        title: req.body.title,
        artist: req.body.artist,
        genre: req.body.genre,
        score: req.body.score,
      });

      const review = await newReview.save();

      res.json(review);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @ route  GET api/reviews
// @desc    Get all reviews
// @access  Public
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route  GET api/reviews/:id
// @desc    Get review by ID
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
