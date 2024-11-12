const mongoose = require('mongoose');

const municipalitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  state: { type: String, required: true },
  logo: String,
  theme: {
    primaryColor: String,
    secondaryColor: String,
    fontFamily: String,
  },
  modules: [{
    name: String,
    enabled: Boolean,
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Municipality', municipalitySchema);