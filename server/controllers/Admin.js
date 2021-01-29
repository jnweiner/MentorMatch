const Admin = require('../../database/models/Admin.js');

const add = (req, res) => {
  const newAdmin = new Admin(req.body);
  newAdmin.save((err, newAdmin) => {
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