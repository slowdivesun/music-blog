const express = require("express");
const router = express.Router();

// @ route  GET api/authors
// @desc    Test route
// @access  Public
router.get("/", (req, res) => {
  res.send("Author Route");
});

module.exports = router;
