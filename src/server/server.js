const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      cors        = require('cors');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const users = require('./routes/users');
const sites = require('./routes/sites');

app.use("/users", users);
app.use("/sites", sites);

app.listen(3000, () => {
  console.log(`Server running!`);
})
