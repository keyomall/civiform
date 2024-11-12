const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  questions: [{
    questionId: { type: String, required: true },
    textEN: { type: String, required: true },
    textES: { type: String, required: true },
    type: { type: String, enum: ['text', 'number', 'date', 'select', 'multiselect', 'boolean'], required: true },
    options: [String],
    required: { type: Boolean, default: false },
  }],
  category: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Form', formSchema);