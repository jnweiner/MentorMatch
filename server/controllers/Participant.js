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

const update = (req, res) => {
  Participant.findById(req.body._id, (err, doc) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      if (req.body.subProperty) {
        doc[req.body.property][req.body.subProperty] = req.body.newValue;
      } else {
        doc[req.body.property] = req.body.newValue;
      }
      doc.markModified(req.body.property);
      doc.save();
      res.sendStatus(200);
    }
  });
};

module.exports = {
  add,
  update
};