const express = require('express'),
      router = express.Router(),
      controller = require('../controllers/sites');


router.get("/", controller.dataSite);
router.delete("/:id", controller.removeSite);
router.put("/:id", controller.editSite);
router.post("/", controller.addSite);

module.exports = router
