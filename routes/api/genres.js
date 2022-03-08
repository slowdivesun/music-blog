const express = require("express");
const router = express.Router();

// @ route  GET api/genre
// @desc    Test route
// @access  Public
router.get("/", (req, res) => {
  res.send("Genre Route");
});

module.exports = router;
