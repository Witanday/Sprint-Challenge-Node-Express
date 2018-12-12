
// add your server code 
const express = require ('express'),
    server = express(),
    PORT = process.env.PORT || 4015;
   

// import middleware  and call 
const middlewares = require('./data/middleware/middleware');

middlewares(server);

server.get('/p', (req,res)=>{
    res.jsonp({
        Message :"GET REQUEST"
    })
})

server.listen(PORT, () =>{
    console.log(`SERVER IS UP AND RUNNING ON PORT ${PORT}`)
});