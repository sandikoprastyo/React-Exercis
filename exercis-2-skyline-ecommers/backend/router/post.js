//import express
const express = require('express');
//import router
const router = express.Router();
//import Post models from models folder
const Post = require('../model/models-post');

//! Endpoint get all post data
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    //res format json
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

//! Endpoint get post by id
router.get('/:postId', async (req, res) => {
  try {
    const getID = await Post.findById(req.params.postId);
    res.json(getID);
  } catch (err) {
    res.json({ message: err });
  }
});

//! Endpoint post data
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//! Endpoint delete data post by id
router.delete('/:postId', async (req, res) => {
  try {
    const deletePost = await Post.remove({ _id: req.params.postId });
    //response bisa diganti dengan message agar FE tau
    res.json(deletePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//! Endpoint delete all data post
router.delete('/', async (req, res) => {
  try {
    const deletePost = await Post.remove();
    //response bisa diganti dengan message agar FE tau
    res.json(deletePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//! Endpoint Update post
router.patch('/:postId', async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } },
    );
    res.send({ message: 'ok' });
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
