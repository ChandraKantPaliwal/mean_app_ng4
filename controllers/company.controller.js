const Company = require('../models/company.model');

module.exports = {

    create(req,res){
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
    },
    find(req,res){

        Company.find({}, (err, companies) => {
            if (err) {
                return res.status(404).send(err);
            }
            return res.status(200).json(companies);
        });
    },
    findOne(req,res){

        let id = req.params.id;

        Company.findById(id, (err, company) => {
            if (err) {
                return res.status(404).send(err);
            }
            return res.status(200).json(company);
        })
    },
    update(req,res){

        if (!req.params.id) {
            return res.status(400).send({err: 'invalid id provided'});
        }

        let attributes = {};

        if (req.body.city) {
            attributes.city = req.body.city;
        }
        if (req.body.address) {
            attributes.address = req.body.address;
        }
        if (req.body.name) {
            attributes.name = req.body.name;
        }

        Company.findByIdAndUpdate(req.params.id, attributes, {new:true},(err, company) => {
            if (err) {
                return res.status(500).send(err);
            }
            return res.status(200).json(company);
        })
    },
    delete(req,res){
        if (!req.params.id) {
            return res.status(400).send({err: 'invalid id provided'});
        }

        Company.findByIdAndRemove(req.params.id,(err,company) => {
            if (err) {
                return res.status(500).send(err);
            }
            if(!company){
                return res.status(404).send({err: 'unable to find the company'});
            }

            return res.status(200).json({msg: 'company is deleted with id '+req.params.id})
        })
    }

};