const express = require('express');
const router = express.Router();
const Mongoose = require('mongoose');
const Logements = require('../models/Logements.js');
const logementsCtrl = require("../controllers/logements.js");
const auth = require("../middlewares/auth.js");
const uploadMiddleware = require('../middlewares/upload.js')
const multer  = require('multer')
const upload = multer()


//Routes
router.get("/", logementsCtrl.getAllHousing);

router.post("/", auth, uploadMiddleware.fields([{ name: 'image', maxCount: 1 }]), logementsCtrl.createHousing);

router.get("/:id", logementsCtrl.getHousingById);

router.put("/:id", auth, logementsCtrl.updateHousingById);

router.delete("/:id", auth, logementsCtrl.deleteHousingById);

// Fin du document
module.exports = router;