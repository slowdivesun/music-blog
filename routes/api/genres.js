const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Genre = require("../../models/Genre");

// @ route  POST api/genre
// @desc    Post a genre
// @access  Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name } = req.body;
    const genre = { name };

    try {
      newGenre = new Genre(genre);

      await newGenre.save();

      res.json(newGenre);
    } catch (err) {
      console.error(err.message);
      req.status(500).send("Server Error");
    }
  }
);

module.exports = router;
