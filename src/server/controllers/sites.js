const db = require('../models/sites');

let dataSite = (req, res) => {
  db.find({}, (err, result) => {
    if (!err) {
      res.send(result)
    }else{
      res.send(err)
    }
  })
}

let addSite = (req, res) => {
  db.create({
    url: req.body.url,
    username: req.body.username,
    password: req.body.password
  }, (err, result) => {
    if (!err) {
      db.find({}, (error, dataResult) => {
        if (!err) {
          res.send(dataResult)
        }
      })
    }else{
      res.send(err)
    }
  })
}

let removeSite = (req, res) => {
  db.findByIdAndRemove(req.params.id, (err, result) => {
    if (!err) {
      db.find({}, (error, dataResult) => {
        if (!err) {
          res.send(dataResult)
        }
      })
    }else{
      res.send(err)
    }
  })
}

let editSite = (req, res) => {
  db.findByIdAndUpdate(
    req.params.id,
    {
      $set:{
        url: req.body.url,
        username: req.body.username,
        password: req.body.password
      }
    }, {new: true}, (err, result) => {
      if (!err) {
        db.find({}, (error, dataResult) => {
          if (!err) {
            res.send(dataResult)
          }
        })
      }else{
        res.send(err)
      }
  })
}

module.exports = {
  dataSite, addSite, editSite, removeSite
}
