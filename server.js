var express= require("express");
var app = express();
var http = require(`http`).Server(app); //used to provide http functionality
const path = require("path");


app.use(express.static(__dirname + `/www`));
app.use(express.json());

require('./route/login').route(app,path);
require('./route/account').route(app,path);

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log('Server listening on: ' + host + "port:" + port);
});

app.get('/', function(req,res) {
    res.sendFile(__dirname + `/www/form.html`); //naviagte to form page as a defaults
});


 
