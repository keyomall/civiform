const Municipality = require('../models/Municipality');

const municipalityService = {
  async createMunicipality(municipalityData) {
    const municipality = new Municipality(municipalityData);
    await municipality.save();
    return municipality;
  },

  async getMunicipalityById(id) {
    return Municipality.findById(id);
  },

  async updateMunicipality(id, updateData) {
    return Municipality.findByIdAndUpdate(id, updateData, { new: true });
  },

  async deleteMunicipality(id) {
    return Municipality.findByIdAndDelete(id);
  },

  async getAllMunicipalities() {
    return Municipality.find();
  },

  async getMunicipalityByCode(code) {
    return Municipality.findOne({ code });
  },
};

module.exports = municipalityService;