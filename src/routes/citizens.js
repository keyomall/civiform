const express = require('express');
const citizenController = require('../controllers/citizenController');
const router = express.Router();

router.post('/', citizenController.createCitizen);
router.get('/:id', citizenController.getCitizen);
router.put('/:id', citizenController.updateCitizen);
router.delete('/:id', citizenController.deleteCitizen);
router.get('/search', citizenController.searchCitizens);

module.exports = router;