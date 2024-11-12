const formService = require('../services/formService');
const pdfService = require('../services/pdfService');

const formController = {
  async createForm(req, res) {
    try {
      const form = await formService.createForm(req.body);
      res.status(201).json(form);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getForm(req, res) {
    try {
      const form = await formService.getFormById(req.params.id);
      if (!form) {
        return res.status(404).json({ error: 'Form not found' });
      }
      res.json(form);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateForm(req, res) {
    try {
      const form = await formService.updateForm(req.params.id, req.body);
      res.json(form);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteForm(req, res) {
    try {
      await formService.deleteForm(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async submitForm(req, res) {
    try {
      const submission = await formService.submitForm(req.body);
      res.status(201).json(submission);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async importPDFForm(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
      const importedForm = await pdfService.importForm(req.file.path);
      
      // Crear un nuevo formulario en la base de datos
      const formData = {
        name: req.body.name || 'Imported Form',
        description: 'Imported from PDF',
        questions: importedForm.fields.map(field => ({
          questionId: field.label.toLowerCase().replace(/\s+/g, '_'),
          textEN: field.label,
          textES: field.label, // Aquí deberíamos usar un servicio de traducción
          type: 'text', // Por defecto, asumimos que todos son campos de texto
          required: false,
        })),
      };
  
      const form = await formService.createForm(formData);
  
      res.status(201).json({
        message: 'Form imported successfully',
        form: form,
        importedData: importedForm,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getFormSubmission(req, res) {
    try {
      const submission = await formService.getFormSubmission(req.params.id);
      if (!submission) {
        return res.status(404).json({ error: 'Form submission not found' });
      }
      res.json(submission);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = formController;