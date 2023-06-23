const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('bookroom', 'postgres', '240895', {
    host: 'localhost',
    dialect:  'postgres'
  });

  try {
    sequelize.authenticate()
    console.log('Соединение с БД было успешно установлено')
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
  }

  
    module.exports = sequelize