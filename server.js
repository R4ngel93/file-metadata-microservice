'use strict';
/* Requiring */
const express = require('express');
const cors = require('cors');
const multer = require('multer');

/* Initialize app */
const app = express();
const upload = multer();

/* Middlewares */
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

/* Routes */
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

/* My stuff */
app.post('/api/fileanalyse', upload.single('upfile'), (request, response, next) => {

  const { originalname, size, mimetype } = request.file;

  const result = {
    name: originalname,
    type: mimetype,
    size: size
  };

  return response.json(result);

});


/* Starting server */
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});