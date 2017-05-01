const db = require('../models/users');

let signin = (req, res) => {
  db.findOne({username: req.body.username, password: req.body.password}, (err, result) => {
    if (!err) {
      res.send(result)
    }else{
      res.send(err)
    }
  })
}

let dataUser = (req, res) => {
  db.find({}, (err, result) => {
    if (!err) {
      res.send(result)
    }else{
      res.send(err)
    }
  })
}

let signup = (req, res) => {
  db.create({
    username: req.body.username,
    password: req.body.password
  }, (err, result) => {
    if (!err) {
      res.send(result)
    }else {
      res.send(err)
    }
  })
}

module.exports = {
  signin, dataUser, signup
}
