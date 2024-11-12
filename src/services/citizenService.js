const Citizen = require('../models/Citizen');
const cacheService = require('./cacheService');

const citizenService = {
  async createCitizen(citizenData) {
    const citizen = new Citizen(citizenData);
    await citizen.save();
    return citizen;
  },

  async getCitizenById(id) {
    const cacheKey = `citizen:${id}`;
    const cachedCitizen = await cacheService.get(cacheKey);
    
    if (cachedCitizen) {
      return JSON.parse(cachedCitizen);
    }

    const citizen = await Citizen.findById(id);
    if (citizen) {
      await cacheService.set(cacheKey, JSON.stringify(citizen));
    }
    
    return citizen;
  },

  async updateCitizen(id, updateData) {
    const citizen = await Citizen.findByIdAndUpdate(id, updateData, { new: true });
    if (citizen) {
      const cacheKey = `citizen:${id}`;
      await cacheService.del(cacheKey); // Invalidar caché al actualizar
    }
    return citizen;
  },

  async deleteCitizen(id) {
    const citizen = await Citizen.findByIdAndDelete(id);
    if (citizen) {
      const cacheKey = `citizen:${id}`;
      await cacheService.del(cacheKey); // Invalidar caché al eliminar
    }
    return citizen;
  },

  async searchCitizens(query) {
    return Citizen.find({
      $or: [
        { firstName: { $regex: query, $options: 'i' } },
        { lastName: { $regex: query, $options: 'i' } },
        { curp: { $regex: query, $options: 'i' } },
      ],
    }).select('firstName lastName curp').limit(20).lean();
  },
};

module.exports = citizenService;