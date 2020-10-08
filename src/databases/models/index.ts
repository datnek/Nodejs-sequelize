'use strict';

import Sequelize from "sequelize";

import * as fs  from 'fs';
import * as path  from 'path';
import {ConfigDatabase} from "../config/config.database";

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = new ConfigDatabase().GetEnv(env);
const db = {};

// @ts-ignore
let sequelize: Sequelize;

// @ts-ignore
sequelize = new Sequelize(config.config, config.username, config.password, config);

console.log(`Running in ${env}`);

fs
  .readdirSync(__dirname)
  .filter((file: { indexOf: (arg0: string) => number; slice: (arg0: number) => string; }) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    // @ts-ignore
      db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  // @ts-ignore
    if (db[modelName].associate) {
    // @ts-ignore
      db[modelName].associate(db);
  }
});

// @ts-ignore
db.sequelize = sequelize;
// @ts-ignore
db.Sequelize = Sequelize;

module.exports = db;
