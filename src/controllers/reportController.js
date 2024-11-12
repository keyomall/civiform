const reportService = require('../services/reportService');

const reportController = {
  async getCitizenStats(req, res) {
    try {
      const stats = await reportService.getCitizenStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getFormStats(req, res) {
    try {
      const stats = await reportService.getFormStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getUserActivityReport(req, res) {
    try {
      const { startDate, endDate } = req.query;
      const report = await reportService.getUserActivityReport(startDate, endDate);
      res.json(report);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = reportController;