const User = require('../../database/schema.js');

module.exports = {
  validate: function(req, res) {
    if (!req.query.username || !req.query.password) {
      res.status(400).send(new Error('Required query parameters: `username` and `password`'));
    } else {
      User.findOne({
        username: req.query.username
      }).then((results) => {
        console.log('recieved results:', results);
        res.status(200).send(req.query.password === results.password);
      })
      .catch((err) => {
        console.log('error querying username/password match');
        res.status(404).send(err);
        throw err;
      });
    }
  }

};
