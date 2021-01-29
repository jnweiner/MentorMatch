const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
