var express= require("express");
var app = express();
var http = require(`http`).Server(app); //used to provide http functionality
const path = require("path");

app.use(express.static(__dirname + `/www`));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

const users = [
    { name: 'Ruby Smith', email: 'user1@example.com', password: '123' },
    { name: 'Zac Robert', email: 'user2@example.com', password: '456' },
    { name: 'Hao Tsuneyama', email: 'user3@example.com', password: '789' }
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
    let name = '';
    let valid = false;
  
    if (typeof email === 'string' && typeof password === 'string') {
        const account = users.find(account => account.email === email && account.password === password);
      if (account) {
        valid = true;
        name = account.name;
      }
    }
    // Send back the result with name and email if valid
    return res.json({ valid: valid, name: name, email: email });
});

 
