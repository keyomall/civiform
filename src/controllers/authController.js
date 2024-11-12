const authService = require('../services/authService');

const authController = {
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const { user, token } = await authService.login(username, password);
      res.json({ user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async register(req, res) {
    try {
      const user = await authService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};

module.exports = authController;