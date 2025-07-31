const path = require('path');

module.exports = {
  route: (app, path) => {
    app.get('/account', (req, res) => {
      res.sendFile(path.resolve('./www/account.html'));
    })
  }
}