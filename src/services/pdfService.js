const fs = require('fs');
const pdf = require('pdf-parse');
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

const pdfService = {
  async extractTextFromPDF(filePath) {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    return data.text;
  },

  async analyzeForm(filePath) {
    const [result] = await client.documentTextDetection(filePath);
    const fullTextAnnotation = result.fullTextAnnotation;
    return fullTextAnnotation.text;
  },

  async extractFormFields(text) {
    // This is a simplified version. In a real-world scenario, you'd use more sophisticated NLP techniques.
    const lines = text.split('\n');
    const fields = [];

    for (const line of lines) {
      if (line.includes(':')) {
        const [label, value] = line.split(':');
        fields.push({ label: label.trim(), value: value.trim() });
      }
    }

    return fields;
  },

  async importForm(filePath) {
    const pdfText = await this.extractTextFromPDF(filePath);
    const formText = await this.analyzeForm(filePath);
    const fields = await this.extractFormFields(formText);

    return {
      rawText: pdfText,
      analyzedText: formText,
      fields: fields,
    };
  }
};

module.exports = pdfService;