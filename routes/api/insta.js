const express = require("express");
const router = express.Router();
const passport = require("passport");

// model
const Insta = require("../../models/Insta");
const validateInstaProfileInput = require("../../validation/validateInstaProfileInput");
// @route   GET api/commentbox/comments
// @desc    get users
// @access  Public
//http://localhost:5000/api/insta
router.get("/", (req, res) => {
  Insta.find((err, data) => {
    if (err) res.json({ success: false, error: err });
    return res.json({ success: true, comments: data });
  });
});

// @route   POST api/insta
// @desc    Post comments
// @access  Public
//http://localhost:5000/api/insta
router.post("/", (req, res) => {
  const profileFields = {};
  const errors = {};

  profileFields.user = req.user.id;
  if (req.body.isLiked) profileFields.isLiked = req.body.isLiked;
  if (req.body.username) profileFields.username = req.body.username;
  if (req.body.thumbnailUrl) profileFields.thumbnailUrl = req.body.thumbnailUrl;
  if (req.body.imageUrl) profileFields.imageUrl = req.body.imageUrl;
  if (req.body.likes) profileFields.likes = req.body.likes;

  Insta.findOne({ user: req.user.id }, profile => {
    if (profile) {
      errors.username = "The username already exists";
      res.status(400).json(errors);
    }
    new Insta(profileFields).save().then(profile => res.json(profile));
  });
});

// let { text } = req.body;
// if (!text) {
//   return res.json({
//     success: false,
//     error: "you must provide an comment"
//   });
// }
// profileFields.text = text;
// new Insta(profileFields).save(err => {
//   if (err) return res.status(400).json({ success: false, error: err });
//   return res.json({ success: true });
// });

// @route   POST api/insta/comments
// @desc    Add comments
// @access  Public
router.post("/comments", (req, res) => {});

// @route   POST api/insta
// @desc    Update comments
// @access  Public
//http://localhost:5000/api/insta/:insta:id
router.post("/comments/:commentId", (req, res) => {
  const commentId = req.params.commentId;
  if (!commentId) {
    return res
      .status(422)
      .json({ success: false, error: "No comment id provided" });
  }
  Insta.findOne({ _id: commentId }, (error, comment) => {
    if (error) return res.json({ success: false, error });
    const text = req.body.text;
    if (text) comment.text = text;
    comment.save(error => {
      if (error) return res.json({ success: false, error });
      Insta.find({}, (err, comment) => {
        if (err) {
          return res.status(401).json({ err: "failed to fetch comment" });
        }
        res.json(comment);
      });
    });
  });
});

// @route   Delete api/commentbox/comments
// @desc    Delete comments
// @access  Public
//http://localhost:5000/api/comments/:commentId
router.delete("/comments/:commentId", (req, res) => {
  const { commentId } = req.params;
  if (!commentId) {
    return res
      .status(400)
      .json({ success: false, error: "No comment id provided" });
  }
  Insta.remove({ _id: commentId }, (error, comment) => {
    if (error) {
      return res.status(400).json({ success: false, error });
    }
    return res.json({ success: true });
  });
});

module.exports = router;
