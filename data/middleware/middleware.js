const bodyParser = require("body-parser"),
    helmet = require('helmet'),
    morgan = require('morgan'),
    projectRouter = require ('../route/projectRouter'),
    actionRouter = require ('../route/actionRouter');


// EXPORT ALL MIDDLEWARE
module.exports = (server)=>{

//Here we are configuring express to use body-parser as middle-ware.
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Third Part middlewares
server.use(helmet());
server.use(morgan('short'));

//custom middleware
server.use('/projects',projectRouter);
server.use('/actions',actionRouter);

}


   
