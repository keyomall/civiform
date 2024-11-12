const express = require('express');
const formController = require('../controllers/formController');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/', formController.createForm);
router.get('/:id', formController.getForm);
router.put('/:id', formController.updateForm);
router.delete('/:id', formController.deleteForm);
router.post('/submit', formController.submitForm);
router.get('/submission/:id', formController.getFormSubmission);
router.post('/import', upload.single('pdfFile'), formController.importPDFForm);

module.exports = router;