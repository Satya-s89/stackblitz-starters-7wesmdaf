const express = require('express');
const { resolve } = require('path');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = 3010;

app.use(express.static('static'));

async function connectDatabase(){
  try {
    await mongoose.connect('process.env.MONGOOSE_URL')
    res.status(200).send("Database connected")
  } catch (error) {
    res.status(400).send({msg:"Error"},error)
  }
}

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
