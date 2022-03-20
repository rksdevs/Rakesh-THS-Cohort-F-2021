const User = require("../models/User");
const Post = require("../models/Post");
// const bcrypt = require("bcrypt");

//Create post
const createPost = async (req, res) => {
  try {
    //Validation - user id validation user
    // const user = await User.findById(req.userIdFromAuthMiddleware);
    // if (user !== req.body.userId) {
    //   return res.status(403).json({ info: "Not Authorized" });
    // }

    //Using middleware

    // const { desc } = req.body;
    // const newPost = new Post({
    //   userId: req.userIdFromAuthMiddleware,
    //   desc,
    // });

    //Without middleware
    const newPost = await Post(req.body);
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

//Update Post
const updatePost = async (req, res) => {
  try {
    //Without Middleware
    const post = await Post.findById(req.params.id);

    // validation - can update only one's own posts

    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

//Delete Post
const deletePost = async (req, res) => {
  try {
    //Without Middleware
    const post = await Post.findById(req.params.id);

    // validation - can delete only one's own posts

    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

//Like/Dislike a post

const likeDislikePost = async (req, res) => {
  try {
    //Without Middleware
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

//Get one post

const getOnePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

//Get Timeline Posts

const getTimelinePosts = async (req, res) => {
  try {
    //Without Middleware

    //get the user whose timeline we are pulling
    const userForTimeline = await User.findById(req.params.userId);

    //get all posts from the user
    const userPosts = await Post.find({ userId: userForTimeline._id });

    //get all posts from the user's followings
    const friendPosts = await Promise.all(
      userForTimeline.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );

    //concat and send them
    res.status(200).json(userPosts.concat(...friendPosts));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ info: "Internal Server Error", error });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  likeDislikePost,
  getOnePost,
  getTimelinePosts,
};
