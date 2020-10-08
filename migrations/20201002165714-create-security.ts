'use strict';


module.exports = {
    // @ts-ignore
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Securities', {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        Slug: {
            allowNull: false,
            type: Sequelize.STRING
        },
        UserId:{
            allowNull: false,
            type: Sequelize.INTEGER
        },
      Token: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Policy: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Privatecode: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Origin: {
        type: Sequelize.STRING
      },
      Expiretime: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Securities');
  }
};
