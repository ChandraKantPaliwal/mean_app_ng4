const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CompanySchema = new Schema({

    name: {
        type: String,
        required: true
    },
    address: String,
    city: String
});

module.exports = mongoose.model('Company',CompanySchema);