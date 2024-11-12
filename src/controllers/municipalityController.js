const municipalityService = require('../services/municipalityService');

const municipalityController = {
  async createMunicipality(req, res) {
    try {
      const municipality = await municipalityService.createMunicipality(req.body);
      res.status(201).json(municipality);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getMunicipality(req, res) {
    try {
      const municipality = await municipalityService.getMunicipalityById(req.params.id);
      if (!municipality) {
        return res.status(404).json({ error: 'Municipality not found' });
      }
      res.json(municipality);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateMunicipality(req, res) {
    try {
      const municipality = await municipalityService.updateMunicipality(req.params.id, req.body);
      res.json(municipality);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteMunicipality(req, res) {
    try {
      await municipalityService.deleteMunicipality(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAllMunicipalities(req, res) {
    try {
      const municipalities = await municipalityService.getAllMunicipalities();
      res.json(municipalities);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = municipalityController;