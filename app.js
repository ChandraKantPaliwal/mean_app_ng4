const express = require('express');
const app = express();
const mongoose = require('mongoose');


const MONGO_DB_URI = 'mongodb://localhost/y_mean';
mongoose.connect(MONGO_DB_URI,{
   useMongoClient: true
});

mongoose.connection.on('connected',() => {
    console.log('app is connected to mongodb ', MONGO_DB_URI);
});

mongoose.connection.on('error', err => {
    console.log('error while connecting to mongoose ', err);
});

app.get('/',(req,res) => {
    return res.send('Welcome to MEAN App with Angular4+');
});

app.listen('3000',() => {
    console.log('App is running on PORT 3000');
});