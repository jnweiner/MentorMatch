const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
  name: String,
  attributes: Array,
  mentorQuestions: Array,
  menteeQuestions: Array,
  admin_id: String
});

const Org = mongoose.model('Org', orgSchema);

module.exports = Org;