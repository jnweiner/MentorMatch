const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const db = require('../database/index.js');
const admin = require('./controllers/Admin.js');
const org = require('./controllers/Org.js');
const participant = require('./controllers/Participant.js');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/api/admins', admin.add);
app.post('/api/orgs', org.add);
app.post('/api/participants', participant.add);

app.patch('/api/participants', participant.update);


const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});