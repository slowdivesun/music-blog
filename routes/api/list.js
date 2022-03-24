const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const Review = require("../../models/Review");
const List = require("../../models/List");
const Author = require("../../models/Author");

router.post(
  "/",
  [
    auth,
    [check("name", "Name is required").not().isEmpty()],
    [check("entries", "Entries are required").not().isEmpty()],
  ],
  async (req, res) => {
    try {
      let review;
      for (let i = 0; i < req.body.entries.length; i++) {
        review = await Review.findById(req.body.entries[i]);
        if (!review) {
          return res.status(400).json({ msg: "Wrong review ID provided" });
        }
      }

      const author = await Author.findById(req.author.id).select("-password");

      const newList = new List({
        name: req.body.name,
        entries: req.body.entries,
        author: author,
      });

      const list = await newList.save();
      res.json(list);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const lists = await List.find().populate([
      { path: "author", select: ["name", "_id"] },
    ]);

    res.json(lists);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/:list_id", async (req, res) => {
  try {
    const list = await List.findById(req.params.list_id).populate([
      { path: "entries", select: ["_id", "title", "artist"] },
      { path: "author", select: ["name", "_id"] },
    ]);

    if (!list) {
      return res.status(404).json({ msg: "List not found" });
    }

    res.json(list);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
