const express = require('express');
const reportController = require('../controllers/reportController');
const router = express.Router();

router.get('/citizen-stats', reportController.getCitizenStats);
router.get('/form-stats', reportController.getFormStats);
router.get('/user-activity', reportController.getUserActivityReport);

module.exports = router;