const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  status: String,
  firstName: String,
  lastName: String,
  email: String,
  org_id: String,
  paired: {
    type: Boolean,
    default: false
  },
  match_id: {
    type: String,
    default: ''
  },
  attributes: mongoose.Schema.Types.Mixed,
  additionalInfo: mongoose.Schema.Types.Mixed
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;