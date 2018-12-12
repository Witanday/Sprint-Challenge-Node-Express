
const express = require('express'),
        router = express.Router(),
        db= require('../helpers/actionModel'),
        routeApi = require ('./routeApi');


routeApi(db,router);

module.exports = router;