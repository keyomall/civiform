const mongoose = require('mongoose');

const citizenSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  curp: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  phoneNumber: String,
  email: String,
  documents: [{
    type: { type: String, required: true },
    fileUrl: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
  }],
  forms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FormSubmission' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Citizen', citizenSchema);