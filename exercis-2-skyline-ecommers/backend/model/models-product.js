const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  price: Number,
  rate: Number,
  image: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Products', ProductSchema);
