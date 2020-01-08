import express = require('express');
import cors = require('cors');
import mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port: string = process.env.PORT || '5000';

app.use(cors());
app.use(express.json());

const uri: string = process.env.ATLAS_URI;

mongoose.connect(uri.toString(), {useNewUrlParser: true}).then(() => {
  console.log(`mongo DB Ready to use`);
}, err => {
  console.log(`mongo DB Connection failed: ${err}`);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});