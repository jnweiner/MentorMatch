const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
  name: String,
  attributes: Array,
  mentorQuestions: Array,
  menteeQuestions: Array,
  admins: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin"
    }
  ]
});

const Org = mongoose.model('Org', orgSchema);

module.exports = Org;