const mongoose  = require('mongoose'),
      db        = require('./db');

let usersSchema = new mongoose.Schema({
  username: String,
  password: String
})

let Users = db.model("User", usersSchema);

module.exports = Users
