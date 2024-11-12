const Form = require('../models/Form');
const FormSubmission = require('../models/FormSubmission');

const formService = {
  async createForm(formData) {
    const form = new Form(formData);
    await form.save();
    return form;
  },

  async getFormById(id) {
    return Form.findById(id);
  },

  async updateForm(id, updateData) {
    return Form.findByIdAndUpdate(id, updateData, { new: true });
  },

  async deleteForm(id) {
    return Form.findByIdAndDelete(id);
  },

  async submitForm(submissionData) {
    const submission = new FormSubmission(submissionData);
    await submission.save();
    return submission;
  },

  async getFormSubmission(id) {
    return FormSubmission.findById(id).populate('form').populate('citizen');
  },

  async getFormSubmissionsByForm(formId) {
    return FormSubmission.find({ form: formId }).populate('citizen');
  },

  async getFormSubmissionsByCitizen(citizenId) {
    return FormSubmission.find({ citizen: citizenId }).populate('form');
  },
};

module.exports = formService;