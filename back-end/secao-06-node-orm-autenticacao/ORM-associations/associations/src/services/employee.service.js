// src/services/employee.service.js
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuração correta para nosso ambiente
const sequelize = new Sequelize(config[env]);
const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
  });
  return employee;
}

const insert = async ({ firstName, lastName, age, city, street, number }) => {
  const employee = await Employee.create({ firstName, lastName, age });

  await Address.create({ city, street, number, employeeId: employee.id });
  return employee;
};

module.exports = { 
  getAll,
  getById,
  insert,
};