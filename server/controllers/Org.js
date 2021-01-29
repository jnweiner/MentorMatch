const Org = require('../../database/models/Org.js');

const add = (req, res) => {
  const newOrg = new Org(req.body);
  newOrg.save((err, newOrg) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

module.exports = {
  add
};