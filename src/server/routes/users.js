const express = require('express'),
      router = express.Router(),
      controller = require('../controllers/users');


router.get("/", controller.dataUser)
router.post("/signin", controller.signin);
router.post("/signup", controller.signup);

module.exports = router
