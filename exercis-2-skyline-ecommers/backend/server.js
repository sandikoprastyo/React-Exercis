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
require('dotenv/config');

//app use lib cors and body-parser
app.use(cors());
app.use(bodyParser.json());

//import router
const postRouter = require('./router/post');

//use postRouter
app.use('/posts', postRouter);

// root
app.get('/', (req, res) => {
  res.send('<h1>This home page</h1>');
});

//connect to DB mongo
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () => {
  console.log('Connect to db success');
  console.log('====================================');
});

//! Endpoint running server
app.listen(8080, () => {
  console.log('====================================');
  console.log('server running in port http://localhost:8080');
  console.log('====================================');
});
