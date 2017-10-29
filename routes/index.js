const express = require('express');
const Router = express.Router();
const companyRoutes = require('./company.routes');

Router.use('/companies', companyRoutes);

module.exports = Router;