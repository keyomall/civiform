const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authService = {
  async login(username, password) {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('User not found');
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return { user, token };
  },

  async register(userData) {
    const user = new User(userData);
    await user.save();
    return user;
  },

  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  },
};

module.exports = authService;