const express = require('express');
const app = express();

app.get('/',(req,res) => {
    return res.send('Welcome to MEAN App with Angular4+');
});


app.listen('3000',() => {
    console.log('App is running on PORT 3000');
});