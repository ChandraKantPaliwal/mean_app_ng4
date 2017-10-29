const express = require('express');

const  Router = express.Router();
const  CompanyController = require('../controllers/company.controller');


Router.get('/' , CompanyController.find);
Router.get('/:id' , CompanyController.findOne);
Router.post('/' , CompanyController.create);
Router.put('/:id' , CompanyController.update);
Router.delete('/:id' , CompanyController.delete);

module.exports = Router;