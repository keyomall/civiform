const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
  form: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  citizen: { type: mongoose.Schema.Types.ObjectId, ref: 'Citizen', required: true },
  answers: [{
    questionId: { type: String, required: true },
    answer: mongoose.Schema.Types.Mixed,
  }],
  status: { type: String, enum: ['draft', 'submitted', 'approved', 'rejected'], default: 'draft' },
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  submittedAt: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FormSubmission', formSubmissionSchema);