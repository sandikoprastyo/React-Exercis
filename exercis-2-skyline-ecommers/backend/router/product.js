//import express
const express = require('express');
//import router
const router = express.Router();
//import Post models from models folder
const Product = require('../model/models-product');

//! Endpoint get all post data
router.get('/', async (req, res) => {
  try {
    const product = await Product.find();
    //res format json
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

//! Endpoint get post by id
router.get('/:productId', async (req, res) => {
  try {
    const getID = await Product.findById(req.params.productId);
    res.json(getID);
  } catch (err) {
    res.json({ message: err });
  }
});

//! Endpoint post data
router.post('/', async (req, res) => {
  const postProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    rate: req.body.rate,
    image: req.body.image,
  });
  try {
    const savePost = await postProduct.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});

//! Endpoint delete data post by id
router.delete('/:productId', async (req, res) => {
  try {
    const deleteProduct = await Product.remove({ _id: req.params.productId });
    res.json(deleteProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//! Endpoint delete all data post
router.delete('/', async (req, res) => {
  try {
    const deleteProduct = await Product.remove();
    //response bisa diganti dengan message agar FE tau
    res.json(deleteProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

//! Endpoint Update post
router.patch('/:productId', async (req, res) => {
  try {
    const updatePost = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          name: req.body.name,
          price: req.body.price,
          rate: req.body.rate,
          image: req.body.image,
        },
      },
    );
    res.send({ message: 'ok' });
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
