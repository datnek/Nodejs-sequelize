'use strict';


module.exports = {
    // @ts-ignore
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Media', {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Slug: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Hashname: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Extension: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Size: {
          allowNull: false,
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
    await queryInterface.dropTable('Media');
  }
};
