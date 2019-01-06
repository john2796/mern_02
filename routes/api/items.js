const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   UPDATE api/items/:id
// @desc    UPDATE A Item
// @access  Public
router.put("/update/:id", (req, res) => {
  Item.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    item
  ) {
    if (err) return next(err);
    res.send("Product updated");
  });
});

module.exports = router;

/*
{
  "_id": "5c3183fc3e63e474391283fb",
  "name": "icecream",
  "date": "2019-01-06T04:28:44.003Z",
  "__v": 0
}, */
