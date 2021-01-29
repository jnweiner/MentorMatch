const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  orgs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Org"
    }
  ]
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
