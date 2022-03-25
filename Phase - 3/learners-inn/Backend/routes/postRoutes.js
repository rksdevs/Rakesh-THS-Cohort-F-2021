const express = require("express");
const router = express.Router();
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
router.post("/", createPost);

//Update a post
router.put("/:id", updatePost);

//Delete a post
router.delete("/:id", deletePost);

//Like/dislike a post
router.put("/:id/like", likeDislikePost);

//Get one Post
router.get("/:id", getOnePost);

//get timeline posts
router.get("/timeline/:userId", getTimelinePosts);

module.exports = router;
