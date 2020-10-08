'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// @ts-ignore
module.exports = function (sequelize, DataTypes) {
  var User = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(User, _Model);

    var _super = _createSuper(User);

    function User() {
      (0, _classCallCheck2["default"])(this, User);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(User, null, [{
      key: "associate",

      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      // @ts-ignore
      value: function associate(models) {
        // define association here
        models.User.belongsTo(models.Localization, {
          foreignKey: "AddressId",
          as: "Address"
        });
        models.User.belongsTo(models.Media, {
          foreignKey: "PhotoId",
          as: "Photo"
        });
        models.User.belongsTo(models.Media, {
          foreignKey: "BackgroundId",
          as: "Background"
        });
        models.User.hasMany(models.Security, {
          as: "Securities",
          onDelete: 'CASCADE'
        });
      }
    }]);
    return User;
  }(_sequelize.Model);

  User.init({
    Slug: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    AddressId: DataTypes.INTEGER,
    PhotoId: DataTypes.INTEGER,
    BackgroundId: DataTypes.INTEGER,
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
    sequelize: sequelize,
    modelName: 'User'
  });
  return User;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZXMvbW9kZWxzL3VzZXIudHMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlcXVlbGl6ZSIsIkRhdGFUeXBlcyIsIlVzZXIiLCJtb2RlbHMiLCJiZWxvbmdzVG8iLCJMb2NhbGl6YXRpb24iLCJmb3JlaWduS2V5IiwiYXMiLCJNZWRpYSIsImhhc01hbnkiLCJTZWN1cml0eSIsIm9uRGVsZXRlIiwiTW9kZWwiLCJpbml0IiwiU2x1ZyIsInR5cGUiLCJTVFJJTkciLCJ1bmlxdWUiLCJhbGxvd051bGwiLCJ2YWxpZGF0ZSIsIm5vdE51bGwiLCJBZGRyZXNzSWQiLCJJTlRFR0VSIiwiUGhvdG9JZCIsIkJhY2tncm91bmRJZCIsIlVzZXJuYW1lIiwiRW1haWwiLCJpc0VtYWlsIiwiUGFzc3dvcmQiLCJGaXJzdG5hbWUiLCJMYXN0bmFtZSIsIlBob25lIiwiQ2l2aWxpdHkiLCJTZXgiLCJCaXJ0aGRhdGUiLCJEQVRFIiwibW9kZWxOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBNkJBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFDQyxTQUFELEVBQXVCQyxTQUF2QixFQUFxQztBQUFBLE1BRTlDQyxJQUY4QztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBRzlDOzs7OztBQUtBO0FBUjhDLGdDQVM3QkMsTUFUNkIsRUFTckI7QUFDckI7QUFDQUEsUUFBQUEsTUFBTSxDQUFDRCxJQUFQLENBQVlFLFNBQVosQ0FBc0JELE1BQU0sQ0FBQ0UsWUFBN0IsRUFBMkM7QUFDdkNDLFVBQUFBLFVBQVUsRUFBRSxXQUQyQjtBQUV2Q0MsVUFBQUEsRUFBRSxFQUFFO0FBRm1DLFNBQTNDO0FBSUFKLFFBQUFBLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZRSxTQUFaLENBQXNCRCxNQUFNLENBQUNLLEtBQTdCLEVBQW9DO0FBQ2hDRixVQUFBQSxVQUFVLEVB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REY7QUFnRVJhLElBQUFBLEdBQUcsRUFBRWhDLFNBQVMsQ0FBQ3FCLE9BaEVQO0FBaUVSWSxJQUFBQSxTQUFTLEVBQUVqQyxTQUFTLENBQUNrQztBQWpFYixHQUFWLEVBa0VHO0FBQ0RuQyxJQUFBQSxTQUFTLEVBQVRBLFNBREM7QUFFRG9DLElBQUFBLFNBQVMsRUFBRTtBQUZWLEdBbEVIO0FBdUVBLFNBQU9sQyxJQUFQO0FBQ0QsQ0FuR0QiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7XG4gICAgTW9kZWwsXG4gICAgU2VxdWVsaXplLFxuICAgIERhdGFUeXBlc1xufSBmcm9tICdzZXF1ZWxpemUnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXIge1xuICAgIElkPzogbnVtYmVyO1xuICAgIENyZWF0ZWRBdD86IERhdGU7XG4gICAgVXBkYXRlZEF0PzogRGF0ZTtcbiAgICBVc2VybmFtZTogc3RyaW5nO1xuICAgIFNsdWc6IHN0cmluZztcbiAgICBFbWFpbDogc3RyaW5nO1xuICAgIFBhc3N3b3JkOiBzdHJpbmc7XG4gICAgRmlyc3RuYW1lOiBzdHJpbmc7XG4gICAgTGFzdG5hbWU6IHN0cmluZztcbiAgICBQaG9uZTogc3RyaW5nO1xuICAgIENpdmlsaXR5OiBudW1iZXI7XG4gICAgU2V4OiBudW1iZXI7XG4gICAgQmlydGhkYXRlPzogRGF0ZTtcbiAgICBBZGRyZXNzSWQ/IDogbnVtYmVyO1xuICAgIFBob3RvSWQ/IDogbnVtYmVyO1xuICAgIEJhY2tncm91bmRJZD8gOiBudW1iZXI7XG59XG5cblxuXG5cbi8vIEB0cy1pZ25vcmVcbm1vZHVsZS5leHBvcnRzID0gKHNlcXVlbGl6ZTogU2VxdWVsaXplLCBEYXRhVHlwZXMpID0+IHtcblxuICBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCBmb3IgZGVmaW5pbmcgYXNzb2NpYXRpb25zLlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgYSBwYXJ0IG9mIFNlcXVlbGl6ZSBsaWZlY3ljbGUuXG4gICAgICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgICAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAgICAgICAgIG1vZGVscy5Vc2VyLmJlbG9uZ3NUbyhtb2RlbHMuTG9jYWxpemF0aW9uLCB7XG4gICAgICAgICAgICAgICAgZm9yZWlnbktleTogXCJBZGRyZXNzSWRcIixcbiAgICAgICAgICAgICAgICBhczogXCJBZGRyZXNzXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1vZGVscy5Vc2VyLmJlbG9uZ3NUbyhtb2RlbHMuTWVkaWEsIHtcbiAgICAgICAgICAgICAgICBmb3JlaWduS2V5OiBcIlBob3RvSWRcIixcbiAgICAgICAgICAgICAgICBhczogXCJQaG90b1wiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtb2RlbHMuVXNlci5iZWxvbmdzVG8obW9kZWxzLk1lZGlhLCB7XG4gICAgICAgICAgICAgICAgZm9yZWlnbktleTogXCJCYWNrZ3JvdW5kSWRcIixcbiAgICAgICAgICAgICAgICBhczogXCJCYWNrZ3JvdW5kXCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1vZGVscy5Vc2VyLmhhc01hbnkobW9kZWxzLlNlY3VyaXR5LCB7IGFzOiBcIlNlY3VyaXRpZXNcIiwgb25EZWxldGU6ICdDQVNDQURFJyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICBVc2VyLmluaXQoe1xuICAgIFNsdWc6IHtcbiAgICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICBub3ROdWxsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEFkZHJlc3NJZCA6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgIFBob3RvSWQgOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBCYWNrZ3JvdW5kSWQgOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBVc2VybmFtZToge1xuICAgICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICBub3ROdWxsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEVtYWlsOiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgIG5vdE51bGw6IHRydWUsXG4gICAgICAgICAgICBpc0VtYWlsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFBhc3N3b3JkOiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICBub3ROdWxsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEZpcnN0bmFtZToge1xuICAgICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgbm90TnVsbDogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBMYXN0bmFtZToge1xuICAgICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgbm90TnVsbDogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBQaG9uZToge1xuICAgICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgbm90TnVsbDogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBDaXZpbGl0eToge1xuICAgICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgIG5vdE51bGw6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgU2V4OiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICBCaXJ0aGRhdGU6IERhdGFUeXBlcy5EQVRFXG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgbW9kZWxOYW1lOiAnVXNlcicsXG4gIH0pO1xuXG4gIHJldHVybiBVc2VyO1xufTtcbiJdfQ==