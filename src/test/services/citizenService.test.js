const mongoose = require('mongoose');
const citizenService = require('../../services/citizenService');
const Citizen = require('../../models/Citizen');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Citizen Service', () => {
  it('should create a new citizen', async () => {
    const citizenData = {
      firstName: 'John',
      lastName: 'Doe',
      curp: 'ABCD123456DEFGHIJK',
      dateOfBirth: new Date('1990-01-01'),
      gender: 'male',
    };

    const citizen = await citizenService.createCitizen(citizenData);

    expect(citizen.firstName).toBe(citizenData.firstName);
    expect(citizen.lastName).toBe(citizenData.lastName);
    expect(citizen.curp).toBe(citizenData.curp);
  });

  // ... más pruebas
});