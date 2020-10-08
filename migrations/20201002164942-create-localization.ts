'use strict';


module.exports = {

    // @ts-ignore
    up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Localizations', {
      Id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Longitude: {
          allowNull: false,
        type: Sequelize.FLOAT
      },
      Slug: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Latitude: {
          allowNull: false,
        type: Sequelize.FLOAT
      },
      Country: {
          allowNull: false,
        type: Sequelize.STRING
      },
      City: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Region: {
        type: Sequelize.STRING
      },
      Fullname: {
          allowNull: false,
        type: Sequelize.STRING
      },
      Street: {
        type: Sequelize.STRING
      },
      Streetnumber: {
        type: Sequelize.STRING
      },
      Postalcode: {
        type: Sequelize.STRING
      },
      Ip: {
        type: Sequelize.STRING
      },
      Pcmacaddress: {
        type: Sequelize.STRING
      },
      continent: {
        type: Sequelize.STRING
      },
      Timezone: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Localizations');
  }
};
