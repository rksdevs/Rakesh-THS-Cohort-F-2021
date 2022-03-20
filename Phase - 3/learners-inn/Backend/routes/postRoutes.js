const express = require("express");
const router = express.Router();
const PostModel = require("../models/Post");
const {
  createPost,
  updatePost,
  deletePost,
  likeDislikePost,
  getOnePost,
  getTimelinePosts,
} = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

//Create a post
router.post("/", authMiddleware, createPost);

//Update a post
router.put("/:id", authMiddleware, updatePost);

//Delete a post
router.delete("/:id", authMiddleware, deletePost);

//Like/dislike a post
router.put("/:id/like", authMiddleware, likeDislikePost);

//Get one Post
router.get("/:id", authMiddleware, getOnePost);

//get timeline posts
router.get("/timeline/:userId", authMiddleware, getTimelinePosts);

module.exports = router;
