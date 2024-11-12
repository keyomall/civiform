const express = require('express');
const municipalityController = require('../controllers/municipalityController');
const router = express.Router();

router.post('/', municipalityController.createMunicipality);
router.get('/:id', municipalityController.getMunicipality);
router.put('/:id', municipalityController.updateMunicipality);
router.delete('/:id', municipalityController.deleteMunicipality);
router.get('/', municipalityController.getAllMunicipalities);

module.exports = router;