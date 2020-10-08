'use strict';
import {
    Model,
    Sequelize,
    DataTypes
} from 'sequelize';

export interface ILocalization {
    Id?: number,
    CreatedAt?: Date,
    UpdatedAt?: Date,
    Longitude: number,
    Slug: string,
    Latitude: number,
    Country: string,
    City: string,
    Region: string,
    Fullname: string,
    Street: string,
    Streetnumber: string
    Postalcode: string,
    Ip: string,
    Pcmacaddress: string,
    continent: string,
    Timezone: string
}


// @ts-ignore
module.exports = (sequelize: Sequelize, DataTypes: DataTypes) => {

    class Localization extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // @ts-ignore
        static associate(models) {
            // define association here
           // models.Localization.hasMany(models.User, { as: "UserAddress", onDelete: 'CASCADE' });
        }
    }

  Localization.init({
    Longitude: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Slug: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Latitude:{
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    City: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Region: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Street: DataTypes.STRING,
    Streetnumber: DataTypes.STRING,
    Postalcode: DataTypes.STRING,
    Ip: DataTypes.STRING,
    Pcmacaddress: DataTypes.STRING,
    continent: DataTypes.STRING,
    Timezone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Localization',
  });
  return Localization;
};
