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
  var Localization = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Localization, _Model);

    var _super = _createSuper(Localization);

    function Localization() {
      (0, _classCallCheck2["default"])(this, Localization);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(Localization, null, [{
      key: "associate",

      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      // @ts-ignore
      value: function associate(models) {// define association here
        // models.Localization.hasMany(models.User, { as: "UserAddress", onDelete: 'CASCADE' });
      }
    }]);
    return Localization;
  }(_sequelize.Model);

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
    Latitude: {
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
    sequelize: sequelize,
    modelName: 'Localization'
  });
  return Localization;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZXMvbW9kZWxzL2xvY2FsaXphdGlvbi50cyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiRGF0YVR5cGVzIiwiTG9jYWxpemF0aW9uIiwibW9kZWxzIiwiTW9kZWwiLCJpbml0IiwiTG9uZ2l0dWRlIiwidHlwZSIsIkZMT0FUIiwiYWxsb3dOdWxsIiwidmFsaWRhdGUiLCJub3ROdWxsIiwiU2x1ZyIsIlNUUklORyIsInVuaXF1ZSIsIkxhdGl0dWRlIiwiQ291bnRyeSIsIkNpdHkiLCJSZWdpb24iLCJGdWxsbmFtZSIsIlN0cmVldCIsIlN0cmVldG51bWJlciIsIlBvc3RhbGNvZGUiLCJJcCIsIlBjbWFjYWRkcmVzcyIsImNvbnRpbmVudCIsIlRpbWV6b25lIiwibW9kZWxOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0FBMkJBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFDQyxTQUFELEVBQXVCQyxTQUF2QixFQUFnRDtBQUFBLE1BRXZEQyxZQUZ1RDtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBR3pEOzs7OztBQUtBO0FBUnlELGdDQVN4Q0MsTUFUd0MsRUFTaEMsQ0FDckI7QUFDRDtBQUNGO0FBWndEO0FBQUE7QUFBQSxJQUVsQ0MsZ0JBRmtDOztBQWUvREYsRUFBQUEsWUFBWSxDQUFDRyxJQUFiLENBQWtCO0FBQ2hCQyxJQUFBQSxTQUFTLEVBQUU7QUFDUEMsTUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNPLEtBRFQ7QUFFUEMsTUFBQUEsU0FBUyxFQUFFLEtBRko7QUFHUEMsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLE9BQU8sRUFBRTtBQURIO0FBSEgsS0FESztBQVFoQkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZMLE1BQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDWSxNQURkO0FBRUZDLE1BQUFBLE1BQU0sRUFBRSxJQUZOO0FBR0ZMLE1BQUFBLFNBQVMsRUFBRSxLQUhUO0FBSUZDLE1BQUFBLFFBQVEsRUFBRTtBQUNOQyxRQUFBQSxPQUFPLEVBQUU7QUFESDtBQUpSLEtBUlU7QUFnQmhCSSxJQUFBQSxRQUFRLEVBQUM7QUFDTFIsTUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNPLEtBRFg7QUFFTEMsTUFBQUEsU0FBUyxFQUFFLEtBRk47QUFHTEMsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLE9BQU8sRUFBRTtBQURIO0FBSEwsS0FoQk87QUF1QmhCSyxJQUFBQSxPQUFPLEVBQUU7QUFDTFQsTUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNZLE1BRFg7QUFFTEosTUFBQUEsU0FBUyxFQUFFLEtBRk47QUFHTEMsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLE9BQU8sRUFBRTtBQURIO0FBSEwsS0F2Qk87QUE4QmhCTSxJQUFBQSxJQUFJLEVBQUU7QUFDRlYsTUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNZLE1BRGQ7QUFFRkosTUFBQUEsU0FBUyxFQUFFLEtBRlQ7QUFHRkMsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLE9BQU8sRUFBRTtBQURIO0FBSFIsS0E5QlU7QUFxQ2hCTyxJQUFBQSxNQUFNLEVBQUU7QUFDSlgsTUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNZLE1BRFo7QUFFSkosTUFBQUEsU0FBUyxFQUFFLEtBRlA7QUFHSkMsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLE9BQU8sRUFBRTtBQURIO0FBSE4sS0FyQ1E7QUE0Q2hCUSxJQUFBQSxRQUFRLEVBQUU7QUFDTlosTUFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNZLE1BRFY7QUFFTkosTUFBQUEsU0FBUyxFQUFFLEtBRkw7QUFHTkMsTUFBQUEsUUFBUSxFQUFFO0FBQ05DLFFBQUFBLE9BQU8sRUFBRTtBQURIO0FBSEosS0E1Q007QUFtRGhCUyxJQUFBQSxNQUFNLEVBQUVuQixTQUFTLENBQUNZLE1BbkRGO0FBb0RoQlEsSUFBQUEsWUFBWSxFQUFFcEIsU0FBUyxDQUFDWSxNQXBEUjtBQXFEaEJTLElBQUFBLFVBQVUsRUFBRXJCLFNBQVMsQ0FBQ1ksTUFyRE47QUFzRGhCVSxJQUFBQSxFQUFFLEVBQUV0QixTQUFTLENBQUNZLE1BdERFO0FBdURoQlcsSUFBQUEsWUFBWSxFQUFFdkIsU0FBUyxDQUFDWSxNQXZEUjtBQXdEaEJZLElBQUFBLFNBQVMsRUFBRXhCLFNBQVMsQ0FBQ1ksTUF4REw7QUF5RGhCYSxJQUFBQSxRQUFRLEVBQUV6QixTQUFTLENBQUNZO0FBekRKLEdBQWxCLEVBMERHO0FBQ0RiLElBQUFBLFNBQVMsRUFBVEEsU0FEQztBQUVEMkIsSUFBQUEsU0FBUyxFQUFFO0FBRlYsR0ExREg7QUE4REEsU0FBT3pCLFlBQVA7QUFDRCxDQTlFRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmltcG9ydCB7XG4gICAgTW9kZWwsXG4gICAgU2VxdWVsaXplLFxuICAgIERhdGFUeXBlc1xufSBmcm9tICdzZXF1ZWxpemUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbGl6YXRpb24ge1xuICAgIElkPzogbnVtYmVyLFxuICAgIENyZWF0ZWRBdD86IERhdGUsXG4gICAgVXBkYXRlZEF0PzogRGF0ZSxcbiAgICBMb25naXR1ZGU6IG51bWJlcixcbiAgICBTbHVnOiBzdHJpbmcsXG4gICAgTGF0aXR1ZGU6IG51bWJlcixcbiAgICBDb3VudHJ5OiBzdHJpbmcsXG4gICAgQ2l0eTogc3RyaW5nLFxuICAgIFJlZ2lvbjogc3RyaW5nLFxuICAgIEZ1bGxuYW1lOiBzdHJpbmcsXG4gICAgU3RyZWV0OiBzdHJpbmcsXG4gICAgU3RyZWV0bnVtYmVyOiBzdHJpbmdcbiAgICBQb3N0YWxjb2RlOiBzdHJpbmcsXG4gICAgSXA6IHN0cmluZyxcbiAgICBQY21hY2FkZHJlc3M6IHN0cmluZyxcbiAgICBjb250aW5lbnQ6IHN0cmluZyxcbiAgICBUaW1lem9uZTogc3RyaW5nXG59XG5cblxuLy8gQHRzLWlnbm9yZVxubW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplOiBTZXF1ZWxpemUsIERhdGFUeXBlczogRGF0YVR5cGVzKSA9PiB7XG5cbiAgICBjbGFzcyBMb2NhbGl6YXRpb24gZXh0ZW5kcyBNb2RlbCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGZvciBkZWZpbmluZyBhc3NvY2lhdGlvbnMuXG4gICAgICAgICAqIFRoaXMgbWV0aG9kIGlzIG5vdCBhIHBhcnQgb2YgU2VxdWVsaXplIGxpZmVjeWNsZS5cbiAgICAgICAgICogVGhlIGBtb2RlbHMvaW5kZXhgIGZpbGUgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIGF1dG9tYXRpY2FsbHkuXG4gICAgICAgICAqL1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHN0YXRpYyBhc3NvY2lhdGUobW9kZWxzKSB7XG4gICAgICAgICAgICAvLyBkZWZpbmUgYXNzb2NpYXRpb24gaGVyZVxuICAgICAgICAgICAvLyBtb2RlbHMuTG9jYWxpemF0aW9uLmhhc01hbnkobW9kZWxzLlVzZXIsIHsgYXM6IFwiVXNlckFkZHJlc3NcIiwgb25EZWxldGU6ICdDQVNDQURFJyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICBMb2NhbGl6YXRpb24uaW5pdCh7XG4gICAgTG9uZ2l0dWRlOiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5GTE9BVCxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgIG5vdE51bGw6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgU2x1Zzoge1xuICAgICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICBub3ROdWxsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIExhdGl0dWRlOntcbiAgICAgICAgdHlwZTogRGF0YVR5cGVzLkZMT0FULFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgbm90TnVsbDogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBDb3VudHJ5OiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICBub3ROdWxsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIENpdHk6IHtcbiAgICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgIG5vdE51bGw6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgUmVnaW9uOiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICBub3ROdWxsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIEZ1bGxuYW1lOiB7XG4gICAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICBub3ROdWxsOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFN0cmVldDogRGF0YVR5cGVzLlNUUklORyxcbiAgICBTdHJlZXRudW1iZXI6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgUG9zdGFsY29kZTogRGF0YVR5cGVzLlNUUklORyxcbiAgICBJcDogRGF0YVR5cGVzLlNUUklORyxcbiAgICBQY21hY2FkZHJlc3M6IERhdGFUeXBlcy5TVFJJTkcsXG4gICAgY29udGluZW50OiBEYXRhVHlwZXMuU1RSSU5HLFxuICAgIFRpbWV6b25lOiBEYXRhVHlwZXMuU1RSSU5HXG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgbW9kZWxOYW1lOiAnTG9jYWxpemF0aW9uJyxcbiAgfSk7XG4gIHJldHVybiBMb2NhbGl6YXRpb247XG59O1xuIl19