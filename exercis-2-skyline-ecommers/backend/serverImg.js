const express = require('express');
const fs = require('fs');
var app = express();
var router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, 'uploads/');
  },
});

const upload = multer({ storage: storage });
router
  .route('/img_data')
  .post(upload.single('file'), function (req, res) {
    var new_img = new Img();
    new_img.img.data = fs.readFileSync(req.file.path);
    new_img.img.contentType = 'image/png'; // or 'image/png'
    new_img.save();
    res.json({ message: 'New image added to the db!' });
  })
  .get(function (req, res) {
    Img.findOne({}, 'img createdAt', function (err, img) {
      if (err) res.send(err);
      res.contentType('json');
      res.send(img);
    }).sort({ createdAt: 'desc' });
  });
