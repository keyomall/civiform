const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient();

const faceRecognitionService = {
  async detectFaces(filePath) {
    const [result] = await client.faceDetection(filePath);
    const faces = result.faceAnnotations;
    return faces.map(face => ({
      joy: face.joyLikelihood,
      anger: face.angerLikelihood,
      sorrow: face.sorrowLikelihood,
      surprise: face.surpriseLikelihood,
      boundingBox: face.boundingPoly,
    }));
  },

  async compareFaces(face1Path, face2Path) {
    const [face1] = await this.detectFaces(face1Path);
    const [face2] = await this.detectFaces(face2Path);

    // This is a simplified comparison. In a real-world scenario, you'd use more sophisticated techniques.
    const similarity = this.calculateSimilarity(face1, face2);

    return {
      similarity: similarity,
      match: similarity > 0.8, // Threshold for considering it a match
    };
  },

  calculateSimilarity(face1, face2) {
    // This is a very simplified similarity calculation.
    // In a real-world scenario, you'd use more sophisticated techniques.
    const attributes = ['joy', 'anger', 'sorrow', 'surprise'];
    let similarity = 0;

    for (const attr of attributes) {
      similarity += 1 - Math.abs(face1[attr] - face2[attr]);
    }

    return similarity / attributes.length;
  },
};

module.exports = faceRecognitionService;