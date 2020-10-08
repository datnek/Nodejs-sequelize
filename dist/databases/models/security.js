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
  var Security = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Security, _Model);

    var _super = _createSuper(Security);

    function Security() {
      (0, _classCallCheck2["default"])(this, Security);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(Security, null, [{
      key: "associate",

      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      // @ts-ignore
      value: function associate(models) {
        // define association here
        models.Security.belongsTo(models.User, {
          foreignKey: "UserId",
          as: "User"
        });
      }
    }]);
    return Security;
  }(_sequelize.Model);

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
        min: 30
      }
    }
  }, {
    sequelize: sequelize,
    modelName: 'Security'
  });
  return Security;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZXMvbW9kZWxzL3NlY3VyaXR5LnRzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZXF1ZWxpemUiLCJEYXRhVHlwZXMiLCJTZWN1cml0eSIsIm1vZGVscyIsImJlbG9uZ3NUbyIsIlVzZXIiLCJmb3JlaWduS2V5IiwiYXMiLCJNb2RlbCIsImluaXQiLCJTbHVnIiwidHlwZSIsIlNUUklORyIsImFsbG93TnVsbCIsInVuaXF1ZSIsInZhbGlkYXRlIiwibm90TnVsbCIsIlVzZXJJZCIsIklOVEVHRVIiLCJUb2tlbiIsIlBvbGljeSIsIlByaXZhdGVjb2RlIiwiT3JpZ2luIiwiRXhwaXJldGltZSIsIkZMT0FUIiwibWluIiwibW9kZWxOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0FBc0JBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFDQyxTQUFELEVBQXVCQyxTQUF2QixFQUFxQztBQUFBLE1BQzlDQyxRQUQ4QztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBRTlDOzs7OztBQUtBO0FBUDhDLGdDQVE3QkMsTUFSNkIsRUFRckI7QUFDckI7QUFDQUEsUUFBQUEsTUFBTSxDQUFDRCxRQUFQLENBQWdCRSxTQUFoQixDQUEwQkQsTUFBTSxDQUFDRSxJQUFqQyxFQUF1QztBQUNuQ0MsVUFBQUEsVUFBVSxFQUFFLFFBRHVCO0FBRW5DQyxVQUFBQSxFQUFFLEVBQUU7QUFGK0IsU0FBdkM7QUFJSDtBQWQ2QztBQUFBO0FBQUEsSUFDN0JDLGdCQUQ2Qjs7QUFnQnBETixFQUFBQSxRQUFRLENBQUNPLElBQVQsQ0FBYztBQUNaQyxJQUFBQSxJQUFJLEVBQUU7QUFDRkMsTUFBQUEsSUFBSSxFQUFFVixTQUFTLENBQUNXLE1BRGQ7QUFFRkMsTUFBQUEsU0FBUyxFQUFFLEtBRlQ7QUFHRkMsTUFBQUEsTUFBTSxFQUFFLElBSE47QUFJRkMsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLE9BQU8sRUFBRTtBQURIO0FBSlIsS0FETTtBQVNWQyxJQUFBQSxNQUFNLEVBQUU7QUFDSk4sTUFBQUEsSUFBSSxFQUFFVixTQUFTLENBQUNpQixPQURaO0FBRUpMLE1BQUFBLFNBQVMsRUFBRSxLQUZQO0FBR0pFLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxPQUFPLEVBQUU7QUFESDtBQUhOLEtBVEU7QUFnQlZHLElBQUFBLEtBQUssRUFBRTtBQUNIUixNQUFBQSxJQUFJLEVBQUVWLFNBQVMsQ0FBQ1csTUFEYjtBQUVIQyxNQUFBQSxTQUFTLEVBQUUsS0FGUjtBQUdIRSxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsT0FBTyxFQUFFO0FBREg7QUFIUCxLQWhCRztBQXVCVkksSUFBQUEsTUFBTSxFQUFFO0FBQ0pULE1BQUFBLElBQUksRUFBRVYsU0FBUyxDQUFDVyxNQURaO0FBRUpDLE1BQUFBLFNBQVMsRUFBRSxLQUZQO0FBR0pFLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxPQUFPLEVBQUU7QUFESDtBQUhOLEtBdkJFO0FBOEJaSyxJQUFBQSxXQUFXLEVBQUU7QUFDVFYsTUFBQUEsSUFBSSxFQUFFVixTQUFTLENBQUNXLE1BRFA7QUFFVEMsTUFBQUEsU0FBUyxFQUFFLEtBRkY7QUFHVEUsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLE9BQU8sRUFBRTtBQURIO0FBSEQsS0E5QkQ7QUFxQ1pNLElBQUFBLE1BQU0sRUFBRTtBQUNKWCxNQUFBQSxJQUFJLEVBQUVWLFNBQVMsQ0FBQ1csTUFEWjtBQUVKQyxNQUFBQSxTQUFTLEVBQUUsS0FGUDtBQUdKRSxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsT0FBTyxFQUFFO0FBREg7QUFITixLQXJDSTtBQTRDWk8sSUFBQUEsVUFBVSxFQUFFO0FBQ1JaLE1BQUFBLElBQUksRUFBRVYsU0FBUyxDQUFDdUIsS0FEUjtBQUVSWCxNQUFBQSxTQUFTLEVBQUUsS0FGSDtBQUdSRSxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsT0FBTyxFQUFFLElBREg7QUFFTlMsUUFBQUEsR0FBRyxFQUFDO0FBRkU7QUFIRjtBQTVDQSxHQUFkLEVBb0RHO0FBQ0R6QixJQUFBQSxTQUFTLEVBQVRBLFNBREM7QUFFRDBCLElBQUFBLFNBQVMsRUFBRTtBQUZWLEdBcERIO0FBd0RBLFNBQU94QixRQUFQO0FBQ0QsQ0F6RUQiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7XG4gICAgTW9kZWwsXG4gICAgU2VxdWVsaXplLFxuICAgIERhdGFUeXBlc1xufSBmcm9tICdzZXF1ZWxpemUnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlY3VyaXR5IHtcbiAgICBJZD86IG51bWJlcjtcbiAgICBDcmVhdGVkQXQ/OiBEYXRlO1xuICAgIFVwZGF0ZWRBdD86IERhdGU7XG4gICAgU2x1Zzogc3RyaW5nO1xuICAgIFVzZXJJZDogbnVtYmVyO1xuICAgIFRva2VuOiBzdHJpbmc7XG4gICAgUG9saWN5OiBzdHJpbmc7XG4gICAgUHJpdmF0ZWNvZGU6IHN0cmluZztcbiAgICBPcmlnaW46IHN0cmluZztcbiAgICBFeHBpcmV0aW1lOiBudW1iZXI7XG59XG5cblxuXG4vLyBAdHMtaWdub3JlXG5tb2R1bGUuZXhwb3J0cyA9IChzZXF1ZWxpemU6IFNlcXVlbGl6ZSwgRGF0YVR5cGVzKSA9PiB7XG4gIGNsYXNzIFNlY3VyaXR5IGV4dGVuZHMgTW9kZWwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCBmb3IgZGVmaW5pbmcgYXNzb2NpYXRpb25zLlxuICAgICAgICAgKiBUaGlzIG1ldGhvZCBpcyBub3QgYSBwYXJ0IG9mIFNlcXVlbGl6ZSBsaWZlY3ljbGUuXG4gICAgICAgICAqIFRoZSBgbW9kZWxzL2luZGV4YCBmaWxlIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBhdXRvbWF0aWNhbGx5LlxuICAgICAgICAgKi9cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzdGF0aWMgYXNzb2NpYXRlKG1vZGVscykge1xuICAgICAgICAgICAgLy8gZGVmaW5lIGFzc29jaWF0aW9uIGhlcmVcbiAgICAgICAgICAgIG1vZGVscy5TZWN1cml0eS5iZWxvbmdzVG8obW9kZWxzLlVzZXIsIHtcbiAgICAgICAgICAgICAgICBmb3JlaWduS2V5OiBcIlVzZXJJZFwiLFxuICAgICAgICAgICAgICAgIGFzOiBcIlVzZXJcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICBTZWN1cml0eS5pbml0KHtcbiAgICBTbHVnOiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgIG5vdE51bGw6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgICBVc2VySWQ6IHtcbiAgICAgICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgIG5vdE51bGw6IHRydWVcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgVG9rZW46IHtcbiAgICAgICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgbm90TnVsbDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBQb2xpY3k6IHtcbiAgICAgICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgbm90TnVsbDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgUHJpdmF0ZWNvZGU6IHtcbiAgICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgIG5vdE51bGw6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgT3JpZ2luOiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICBub3ROdWxsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEV4cGlyZXRpbWU6IHtcbiAgICAgICAgdHlwZTogRGF0YVR5cGVzLkZMT0FULFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgbm90TnVsbDogdHJ1ZSxcbiAgICAgICAgICAgIG1pbjozMFxuICAgICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIG1vZGVsTmFtZTogJ1NlY3VyaXR5JyxcbiAgfSk7XG4gIHJldHVybiBTZWN1cml0eTtcbn07XG4iXX0=