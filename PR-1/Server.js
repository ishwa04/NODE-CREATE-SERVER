const http = require("http");
const port = 1000;

const pathhandler = (req,res) => {
    res.write(" <h1> server welcomes you to our world </h1>");
    res.end();
}


const server = http.createServer();
server.listen (port,(err) =>{
    err ? console.log(err) : console.log("strated");
})