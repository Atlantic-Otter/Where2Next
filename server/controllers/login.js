const User = require('../../database/schema.js');

module.exports = {
  validate: function(req, res) {
    if (!req.query.username || !req.query.password) {
      res.status(400).send(new Error('Required query parameters: `username` and `password`'));
    } else {
      User.findOne({
        username: req.query.username
      }).then((results) => {
        var expectedPassword = results === null ? null : results.password;
        if (req.query.password === expectedPassword) {
          res.status(200).send(results);
        } else {
          res.status(200).send('incorrect password');
        }


      })
      .catch((err) => {
        console.log('error querying username/password match');
        res.status(404).send(err);
        // throw err;
      });
    }
  }

};
