const Citizen = require('../models/Citizen');
const FormSubmission = require('../models/FormSubmission');

const reportService = {
  async getCitizenStats() {
    const totalCitizens = await Citizen.countDocuments();
    const citizensByGender = await Citizen.aggregate([
      { $group: { _id: '$gender', count: { $sum: 1 } } }
    ]);
    return { totalCitizens, citizensByGender };
  },

  async getFormStats() {
    const totalForms = await FormSubmission.countDocuments();
    const formsByStatus = await FormSubmission.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);
    return { totalForms, formsByStatus };
  },

  async getUserActivityReport(startDate, endDate) {
    return FormSubmission.aggregate([
      {
        $match: {
          submittedAt: { $gte: new Date(startDate), $lte: new Date(endDate) }
        }
      },
      {
        $group: {
          _id: '$submittedBy',
          count: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $unwind: '$user'
      },
      {
        $project: {
          username: '$user.username',
          count: 1
        }
      }
    ]);
  },
};

module.exports = reportService;