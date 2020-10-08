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
  var Media = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Media, _Model);

    var _super = _createSuper(Media);

    function Media() {
      (0, _classCallCheck2["default"])(this, Media);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(Media, null, [{
      key: "associate",

      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      // @ts-ignore
      value: function associate(models) {// define association here
        // models.Media.hasMany(models.User, { as: "UserPhotos", onDelete: 'CASCADE' });
      }
    }]);
    return Media;
  }(_sequelize.Model);

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
    sequelize: sequelize,
    modelName: 'Media'
  });
  return Media;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZXMvbW9kZWxzL21lZGlhLnRzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZXF1ZWxpemUiLCJEYXRhVHlwZXMiLCJNZWRpYSIsIm1vZGVscyIsIk1vZGVsIiwiaW5pdCIsIlNsdWciLCJ0eXBlIiwiU1RSSU5HIiwiYWxsb3dOdWxsIiwidW5pcXVlIiwidmFsaWRhdGUiLCJub3ROdWxsIiwiTmFtZSIsIkhhc2huYW1lIiwiRXh0ZW5zaW9uIiwiU2l6ZSIsIkZMT0FUIiwibW9kZWxOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0FBbUJBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFDQyxTQUFELEVBQXVCQyxTQUF2QixFQUFxQztBQUFBLE1BQzlDQyxLQUQ4QztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBRTlDOzs7OztBQUtBO0FBUDhDLGdDQVE3QkMsTUFSNkIsRUFRckIsQ0FDckI7QUFDQTtBQUNIO0FBWDZDO0FBQUE7QUFBQSxJQUNoQ0MsZ0JBRGdDOztBQWFwREYsRUFBQUEsS0FBSyxDQUFDRyxJQUFOLENBQVc7QUFDUEMsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLE1BQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTyxNQURkO0FBRUZDLE1BQUFBLFNBQVMsRUFBRSxLQUZUO0FBR0ZDLE1BQUFBLE1BQU0sRUFBRSxJQUhOO0FBSUZDLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxPQUFPLEVBQUU7QUFESDtBQUpSLEtBREM7QUFTUEMsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZOLE1BQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTyxNQURkO0FBRUZDLE1BQUFBLFNBQVMsRUFBRSxLQUZUO0FBR0ZFLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxPQUFPLEVBQUU7QUFESDtBQUhSLEtBVEM7QUFnQlRFLElBQUFBLFFBQVEsRUFBRTtBQUNOUCxNQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ08sTUFEVjtBQUVOQyxNQUFBQSxTQUFTLEVBQUUsS0FGTDtBQUdORSxNQUFBQSxRQUFRLEVBQUU7QUFDTkMsUUFBQUEsT0FBTyxFQUFFO0FBREg7QUFISixLQWhCRDtBQXVCVEcsSUFBQUEsU0FBUyxFQUFFO0FBQ1BSLE1BQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTyxNQURUO0FBRVBDLE1BQUFBLFNBQVMsRUFBRSxLQUZKO0FBR1BFLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxPQUFPLEVBQUU7QUFESDtBQUhILEtBdkJGO0FBOEJUSSxJQUFBQSxJQUFJLEVBQUU7QUFDRlQsTUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNnQixLQURkO0FBRUZSLE1BQUFBLFNBQVMsRUFBRSxLQUZUO0FBR0ZFLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxPQUFPLEVBQUU7QUFESDtBQUhSO0FBOUJHLEdBQVgsRUFxQ0c7QUFDRFosSUFBQUEsU0FBUyxFQUFUQSxTQURDO0FBRURrQixJQUFBQSxTQUFTLEVBQUU7QUFGVixHQXJDSDtBQXlDQSxTQUFPaEIsS0FBUDtBQUNELENBdkREIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHtcbiAgICBNb2RlbCxcbiAgICBTZXF1ZWxpemUsXG4gICAgRGF0YVR5cGVzXG59IGZyb20gJ3NlcXVlbGl6ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lZGlhIHtcbiAgICBJZD86IG51bWJlcixcbiAgICBDcmVhdGVkQXQ/OiBEYXRlLFxuICAgIFVwZGF0ZWRBdD86IERhdGUsXG4gICAgTmFtZTogc3RyaW5nLFxuICAgIFNsdWc6IHN0cmluZyxcbiAgICBIYXNobmFtZTogc3RyaW5nLFxuICAgIEV4dGVuc2lvbjogc3RyaW5nLFxuICAgIFNpemU6IG51bWJlclxufVxuXG5cblxuLy8gQHRzLWlnbm9yZVxubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplOiBTZXF1ZWxpemUsIERhdGFUeXBlcykgPT4ge1xuICBjbGFzcyBNZWRpYSBleHRlbmRzIE1vZGVsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgZm9yIGRlZmluaW5nIGFzc29jaWF0aW9ucy5cbiAgICAgICAgICogVGhpcyBtZXRob2QgaXMgbm90IGEgcGFydCBvZiBTZXF1ZWxpemUgbGlmZWN5Y2xlLlxuICAgICAgICAgKiBUaGUgYG1vZGVscy9pbmRleGAgZmlsZSB3aWxsIGNhbGwgdGhpcyBtZXRob2QgYXV0b21hdGljYWxseS5cbiAgICAgICAgICovXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc3RhdGljIGFzc29jaWF0ZShtb2RlbHMpIHtcbiAgICAgICAgICAgIC8vIGRlZmluZSBhc3NvY2lhdGlvbiBoZXJlXG4gICAgICAgICAgICAvLyBtb2RlbHMuTWVkaWEuaGFzTWFueShtb2RlbHMuVXNlciwgeyBhczogXCJVc2VyUGhvdG9zXCIsIG9uRGVsZXRlOiAnQ0FTQ0FERScgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gIE1lZGlhLmluaXQoe1xuICAgICAgU2x1Zzoge1xuICAgICAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgbm90TnVsbDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBOYW1lOiB7XG4gICAgICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgIG5vdE51bGw6IHRydWVcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgIEhhc2huYW1lOiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICBub3ROdWxsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEV4dGVuc2lvbjoge1xuICAgICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgbm90TnVsbDogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBTaXplOiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5GTE9BVCxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgIG5vdE51bGw6IHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICBtb2RlbE5hbWU6ICdNZWRpYScsXG4gIH0pO1xuICByZXR1cm4gTWVkaWE7XG59O1xuIl19