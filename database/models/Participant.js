const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['mentor', 'mentee']
  },
  firstName: String,
  lastName: String,
  email: String,
  org_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Org"
  },
  matchs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Participant"
    }
  ],
  attributes: mongoose.Schema.Types.Mixed,
  additionalInfo: mongoose.Schema.Types.Mixed
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;