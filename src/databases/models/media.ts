'use strict';
import {
    Model,
    Sequelize,
    DataTypes
} from 'sequelize';

export interface IMedia {
    Id?: number,
    CreatedAt?: Date,
    UpdatedAt?: Date,
    Name: string,
    Slug: string,
    Hashname: string,
    Extension: string,
    Size: number
}



// @ts-ignore
module.exports = (sequelize: Sequelize, DataTypes) => {
  class Media extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // @ts-ignore
        static associate(models) {
            // define association here
            // models.Media.hasMany(models.User, { as: "UserPhotos", onDelete: 'CASCADE' });
        }
    }
  Media.init({
      Slug: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
              notNull: true
          }
      },
      Name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notNull: true
          }
      },
    Hashname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Extension: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Size: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: true
        }
    }
  }, {
    sequelize,
    modelName: 'Media',
  });
  return Media;
};
