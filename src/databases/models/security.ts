'use strict';

import {
    Model,
    Sequelize,
    DataTypes
} from 'sequelize';


export interface ISecurity {
    Id?: number;
    CreatedAt?: Date;
    UpdatedAt?: Date;
    Slug: string;
    UserId: number;
    Token: string;
    Policy: string;
    Privatecode: string;
    Origin: string;
    Expiretime: number;
}



// @ts-ignore
module.exports = (sequelize: Sequelize, DataTypes) => {
  class Security extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // @ts-ignore
        static associate(models) {
            // define association here
            models.Security.belongsTo(models.User, {
                foreignKey: "UserId",
                as: "User",
            });
        }
    }
  Security.init({
    Slug: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: true
        }
    },
      UserId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              notNull: true
          }
      },
      Token: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notNull: true
          }
      },
      Policy: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notNull: true
          }
      },
    Privatecode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Origin: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    Expiretime: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: true,
            min:30
        }
    }
  }, {
    sequelize,
    modelName: 'Security',
  });
  return Security;
};
