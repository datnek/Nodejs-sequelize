'use strict';

import {
    Model,
    Sequelize,
    DataTypes
} from 'sequelize';


export interface IUser {
    Id?: number;
    CreatedAt?: Date;
    UpdatedAt?: Date;
    Username: string;
    Slug: string;
    Email: string;
    Password: string;
    Firstname: string;
    Lastname: string;
    Phone: string;
    Civility: number;
    Sex: number;
    Birthdate?: Date;
    AddressId? : number;
    PhotoId? : number;
    BackgroundId? : number;
}




// @ts-ignore
module.exports = (sequelize: Sequelize, DataTypes) => {

  class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // @ts-ignore
        static associate(models) {
            // define association here
            models.User.belongsTo(models.Localization, {
                foreignKey: "AddressId",
                as: "Address",
            });
            models.User.belongsTo(models.Media, {
                foreignKey: "PhotoId",
                as: "Photo",
            });
            models.User.belongsTo(models.Media, {
                foreignKey: "BackgroundId",
                as: "Background",
            });
            models.User.hasMany(models.Security, { as: "Securities", onDelete: 'CASCADE' });
        }
    }

  User.init({
    Slug: {
       type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    AddressId : DataTypes.INTEGER,
    PhotoId : DataTypes.INTEGER,
    BackgroundId : DataTypes.INTEGER,
    Username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: true
        }
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: true,
            isEmail: true
        }
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Civility: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Sex: DataTypes.INTEGER,
    Birthdate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
