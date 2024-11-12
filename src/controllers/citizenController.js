const citizenService = require('../services/citizenService');

const citizenController = {
  async createCitizen(req, res) {
    try {
      const citizen = await citizenService.createCitizen(req.body);
      res.status(201).json(citizen);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getCitizen(req, res) {
    try {
      const citizen = await citizenService.getCitizenById(req.params.id);
      if (!citizen) {
        return res.status(404).json({ error: 'Citizen not found' });
      }
      res.json(citizen);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async updateCitizen(req, res) {
    try {
      const citizen = await citizenService.updateCitizen(req.params.id, req.body);
      res.json(citizen);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteCitizen(req, res) {
    try {
      await citizenService.deleteCitizen(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async searchCitizens(req, res) {
    try {
      const citizens = await citizenService.searchCitizens(req.query.q);
      res.json(citizens);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = citizenController;