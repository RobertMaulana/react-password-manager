const mongoose  = require('mongoose'),
      db        = require('./db');

let sitesSchema = new mongoose.Schema({
  url: String,
  username: String,
  password: String
})

let Sites = db.model("Site", sitesSchema);

module.exports = Sites
