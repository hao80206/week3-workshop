const validator = require("validator")


const users = [
    { name: 'Ruby Smith', email: 'user1@example.com', password: '123' },
    { name: 'Zac Robert', email: 'user2@example.com', password: '456' },
    { name: 'Hao Tsuneyama', email: 'user3@example.com', password: '789' }
  ];

module.exports = {
  route: (app) => {
    app.post('/login', function(req,res) {
    
        console.log("Received login:", req.body);
    
        const { email, password } = req.body || {};
        let name = '';
        let valid = false;
      
        
        if (validator.isEmail(email) && (typeof email === 'string' && typeof password === 'string')) {
            const account = users.find(account => account.email === email && account.password === password);
          if (account) {
            valid = true;
            name = account.name;
          }
        }
        // Send back the result with name and email if valid
        return res.json({ valid: valid, name: name, email: email });
    });

  } 
}
 
