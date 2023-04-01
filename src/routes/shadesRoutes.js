// src/routes/shadesRoutes.js
const express = require('express');
const router = express.Router();
const shadesController = require('../controllers/shadesController');

router.get('/', shadesController.getIndex);

module.exports = router;
