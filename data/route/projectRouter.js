const express = require('express'),
        router = express.Router(),
        db= require('../helpers/projectModel'),
        routeApi = require ('./routeApi'),
        routeApiProjectsActions = require('./routeApiProjectsActions')


routeApi(db,router);
routeApiProjectsActions(db,router);

module.exports = router;