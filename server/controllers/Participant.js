const Participant = require('../../database/models/Participant.js');

const add = (req, res) => {
  const newParticipant = new Participant(req.body);
  newParticipant.markModified('attributes');
  newParticipant.markModified('additionalInfo');
  newParticipant.save((err, newParticipant) => {
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