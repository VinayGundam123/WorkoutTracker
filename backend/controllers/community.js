const mongoose = require("mongoose");
const model = require("../model/community");
const Community = model.Community;

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Community.find({});
    console.log(posts);
    res.status(201).json(posts);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Community.findById(id);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createPost = async (req, res) => {
  try {
    const post = await Community.create(req.body);
    console.log(post);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updatePost = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const post = await Community.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const post = await Community.findByIdAndDelete(id, { new: true });
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.likeGetPost = async (req, res) => {
    const userId = req.query.userId;
    try {
      const post = await Community.findById(req.params.id);
      if (!post) return res.status(404).json({ message: "Post not found" });
  
      const alreadyLiked = post.likedBy.includes(userId);
      await post.save();
      res.status(200).json({ liked:alreadyLiked,likes: post.likes });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error", error: err });
    }
};

exports.likeUpdatePost = async (req, res) => {
    const userId = req.body.userId;
  
    try {
      const post = await Community.findById(req.params.id);
      if (!post) return res.status(404).json({ message: "Post not found" });
  
      const alreadyLiked = post.likedBy.includes(userId);
  
      if (alreadyLiked) {
        post.likedBy.pull(userId);
        post.likes = Math.max(0, post.likes - 1); // Prevent negative likes
      } else {
        post.likedBy.push(userId);
        post.likes += 1;
      }
  
      await post.save();
      res.status(200).json({ liked: !alreadyLiked, likes: post.likes });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error", error: err });
    }
  };
  
exports.commentUpdatePost = async (req, res) => {
    const { userId, username,comment } = req.body;
    try {
        const post = await Community.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        console.log(userId,username,comment);
        const newComment = { user: userId, username:username ,comment };
        post.comments.push(newComment);
        await post.save();

        res.status(200).json({ message: "Comment added", comment: newComment });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};
  