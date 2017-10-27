const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Company = require('./models/company.model');

const bodyParser = require('body-parser');

const MONGO_DB_URI = 'mongodb://localhost/y_mean';
mongoose.connect(MONGO_DB_URI, {
    useMongoClient: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connection.on('connected', () => {
    console.log('app is connected to mongodb ', MONGO_DB_URI);
});

mongoose.connection.on('error', err => {
    console.log('error while connecting to mongoose ', err);
});

app.get('/', (req, res) => {
    return res.send('Welcome to MEAN App with Angular4+');
});

app.post('/companies', (req, res) => {

    if (!req.body.name) {
        return res.status(400).send({err: 'name is required field'});
    }

    Company.create({
        name: req.body.name,
        city: req.body.city,
        address: req.body.address
    }, (err, savedCompany) => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json(savedCompany);
    })


});

app.listen('3000', () => {
    console.log('App is running on PORT 3000');
});