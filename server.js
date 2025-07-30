var express= require("express");
var app = express();
var http = require(`http`).Server(app); //used to provide http functionality
const path = require("path");

app.use(express.static(__dirname + `/www`));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

const users = [
    { email: 'user1@example.com', password: '123' },
    { email: 'user2@example.com', password: '456' },
    { email: 'user3@example.com', password: '789' }
  ];

let server = http.listen(3000, function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log('Server listening on: ' + host + "port:" + port);
});

app.get('/', function(req,res) {
    res.sendFile(__dirname + `/www/form.html`);
});

// Account page route
app.get('/account', function (req, res) {
    res.sendFile(path.resolve(`./www/account.html`));
  });

app.post('/login', function(req,res) {

    console.log("Received login:", req.body);

    const { email, password } = req.body || {};
    let valid = false;
  
    if (typeof email === 'string' && typeof password === 'string') {
      if (
        (email === users[0].email && password === users[0].password) ||
        (email === users[1].email && password === users[1].password) ||
        (email === users[2].email && password === users[2].password)
      ) {
        valid = true;
      }
    }
  
    return res.json({ valid });
});

 
