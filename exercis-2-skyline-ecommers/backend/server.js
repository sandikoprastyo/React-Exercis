/* 
!penting keterangan
?express = adalah kerangka kerja aplikasi web backend untuk Node.js

?mongoose = adalah sebuah framework JavaScript yang umumnya digunakan pada aplikasi Node.js dengan database MongoDB

?bodyparser = merupakan modul nodejs yang digunakan untuk mengambil data dari framework Express body-parser mengekstrak seluruh bagian tubuh dari aliran permintaan yang masuk dan memaparkannya pada req. tubuh. Middleware ?adalah bagian dari Express. js sebelumnya tetapi sekarang Anda harus menginstalnya secara terpisah. Modul body-parser ini ?mengurai JSON, buffer, string, dan data yang dikodekan URL yang dikirimkan menggunakan permintaan HTTP POST.

?cors = adalah plugin yg memungkinkan permintaan AJAX dari situs lain untuk mengintegrasikan konten dari situs Anda menggunakan standar CORS. Ini digunakan jika Anda ingin mengintegrasikan konten dari situs Anda ke aplikasi JavaScript yang berjalan di domain host lain, atau ingin mengizinkan orang lain untuk, menggunakan standar CORS.

?dotenv = Dotenv adalah cara sederhana untuk memungkinkan Anda membuat kunci rahasia yang dibutuhkan aplikasi Anda agar tidak go public.

?next instal pm2 = adalah manajer proses untuk JavaScript runtime Node.js.
*/
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const productModel = require('./model/models-product');
require('dotenv/config');
//import router
const productRouter = require('./router/product');
app.use(bodyParser.urlencoded({ extended: true }));
// Set EJS as templating engine
app.set('view engine', 'ejs');
//app use lib cors and body-parser
app.use(cors());
app.use(bodyParser.json());
//use postRouter
app.use('/products', productRouter);

//image multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});
let upload = multer({ storage: storage });

// Uploading the image
app.post('/', (req, res) => {
  var obj = {
    name: req.body.name,
    price: req.body.price,
    rate: req.body.rate,
    image: req.body.image,
  };
  productModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      //obj.save();
      res.redirect('/');
    }
  });
});

// root
app.get('/', (req, res) => {
  productModel.find({}, (err, items) => {
    if (err) {
      res.json(err);
      console.log(err);
      res.send();
    } else {
      res.render('app', { items: items });
    }
  });
});

//connect to DB mongo
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connect to db success');
    console.log('====================================');
  },
);

//! Endpoint running server
app.listen(8080, () => {
  console.log('====================================');
  console.log('server running in port http://localhost:8080');
  console.log('====================================');
});
