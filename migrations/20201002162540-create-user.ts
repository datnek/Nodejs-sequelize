'use strict';


module.exports = {
    // @ts-ignore
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Slug: {
          allowNull: false,
        type: Sequelize.STRING,
          unique: true
      },
      AddressId:{
        allowNull: true,
        type: Sequelize.INTEGER
      },
      PhotoId:{
        allowNull: true,
        type: Sequelize.INTEGER
      },
      BackgroundId:{
        allowNull: true,
        type: Sequelize.INTEGER
      },
      Username: {
        type: Sequelize.STRING,
          unique: true,
          allowNull: false,
      },
      Email: {
          allowNull: false,
          unique: true,
        type: Sequelize.STRING
      },
      Password: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Firstname: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Lastname: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      Civility: {
          allowNull: false,
        type: Sequelize.INTEGER
      },
      Sex: {
        type: Sequelize.INTEGER
      },
      Birthdate: {
        type: Sequelize.DATE
      },
      CreatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
      },
      UpdatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()')
      }
    });
  },
    // @ts-ignore
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
