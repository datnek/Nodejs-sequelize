"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UtilService = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _inversify = require("inversify");

require("reflect-metadata");

var dotenv = _interopRequireWildcard(require("dotenv"));

var _fs = _interopRequireDefault(require("fs"));

var path = _interopRequireWildcard(require("path"));

var _dec, _dec2, _dec3, _class, _temp;

var UtilService = (_dec = (0, _inversify.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_temp = /*#__PURE__*/function () {
  function UtilService() {
    (0, _classCallCheck2["default"])(this, UtilService);
    (0, _defineProperty2["default"])(this, "directory", void 0);
    dotenv.config();
    this.directory = path.join(__dirname, '/../public/upload');
  }
  /***
   *
   * @param base64Image
   * @param fileName
   * @constructor
   */


  (0, _createClass2["default"])(UtilService, [{
    key: "SaveFile",
    value: function SaveFile(base64Image, fileName) {
      var subDir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var dir = subDir ? path.join(this.directory, subDir) : this.directory; //create directory if not exist

      !_fs["default"].existsSync(dir) && _fs["default"].mkdirSync(dir);
      var pathFile = path.join(dir, fileName);

      _fs["default"].writeFileSync(pathFile, base64Image, {
        encoding: 'base64'
      });
    }
    /*
    let base64String = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA'; // Not a real image
    // Remove header
    let base64Image = base64String.split(';base64,').pop();
     */

  }]);
  return UtilService;
}(), _temp)) || _class) || _class) || _class);
exports.UtilService = UtilService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZXJ2aWNlcy91dGlsLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiVXRpbFNlcnZpY2UiLCJkb3RlbnYiLCJjb25maWciLCJkaXJlY3RvcnkiLCJwYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsImJhc2U2NEltYWdlIiwiZmlsZU5hbWUiLCJzdWJEaXIiLCJkaXIiLCJmcyIsImV4aXN0c1N5bmMiLCJta2RpclN5bmMiLCJwYXRoRmlsZSIsIndyaXRlRmlsZVN5bmMiLCJlbmNvZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztJQU9hQSxXLFdBRFosNEI7QUFHRyx5QkFBYTtBQUFBO0FBQUE7QUFDVEMsSUFBQUEsTUFBTSxDQUFDQyxNQUFQO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkMsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsbUJBQXJCLENBQWpCO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs2QkFNU0MsVyxFQUFxQkMsUSxFQUE2QztBQUFBLFVBQTNCQyxNQUEyQix1RUFBWixJQUFZO0FBQ3ZFLFVBQU1DLEdBQUcsR0FBR0QsTUFBTSxHQUFHTCxJQUFJLENBQUNDLElBQUwsQ0FBVSxLQUFLRixTQUFmLEVBQTBCTSxNQUExQixDQUFILEdBQXNDLEtBQUtOLFNBQTdELENBRHVFLENBRXhFOztBQUNDLE9BQUNRLGVBQUdDLFVBQUgsQ0FBY0YsR0FBZCxDQUFELElBQXVCQyxlQUFHRSxTQUFILENBQWFILEdBQWIsQ0FBdkI7QUFFQSxVQUFNSSxRQUFRLEdBQUdWLElBQUksQ0FBQ0MsSUFBTCxDQUFVSyxHQUFWLEVBQWNGLFFBQWQsQ0FBakI7O0FBQ0FHLHFCQUFHSSxhQUFILENBQWlCRCxRQUFqQixFQUEyQlAsV0FBM0IsRUFBd0M7QUFBQ1MsUUFBQUEsUUFBUSxFQUFFO0FBQVgsT0FBeEM7QUFDSDtBQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3RhYmxlfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJVXRpbFNlcnZpY2Uge1xuICAgIFNhdmVGaWxlKGJhc2U2NEltYWdlOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHN1YkRpcjogc3RyaW5nICk6IHZvaWQ7XG59XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVdGlsU2VydmljZSBpbXBsZW1lbnRzIElVdGlsU2VydmljZXtcbiAgICBwcml2YXRlIGRpcmVjdG9yeTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIGRvdGVudi5jb25maWcoKTtcbiAgICAgICAgdGhpcy5kaXJlY3RvcnkgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLy4uL3B1YmxpYy91cGxvYWQnKTtcbiAgICB9XG5cbiAgICAvKioqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmFzZTY0SW1hZ2VcbiAgICAgKiBAcGFyYW0gZmlsZU5hbWVcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBTYXZlRmlsZShiYXNlNjRJbWFnZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBzdWJEaXI6IHN0cmluZz1udWxsKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRpciA9IHN1YkRpciA/IHBhdGguam9pbih0aGlzLmRpcmVjdG9yeSwgc3ViRGlyKTogdGhpcy5kaXJlY3Rvcnk7XG4gICAgICAgLy9jcmVhdGUgZGlyZWN0b3J5IGlmIG5vdCBleGlzdFxuICAgICAgICAhZnMuZXhpc3RzU3luYyhkaXIpICYmIGZzLm1rZGlyU3luYyhkaXIpO1xuXG4gICAgICAgIGNvbnN0IHBhdGhGaWxlID0gcGF0aC5qb2luKGRpcixmaWxlTmFtZSk7XG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMocGF0aEZpbGUsIGJhc2U2NEltYWdlLCB7ZW5jb2Rpbmc6ICdiYXNlNjQnfSk7XG4gICAgfVxuXG4gICAgLypcbiAgICBsZXQgYmFzZTY0U3RyaW5nID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQSc7IC8vIE5vdCBhIHJlYWwgaW1hZ2Vcbi8vIFJlbW92ZSBoZWFkZXJcbmxldCBiYXNlNjRJbWFnZSA9IGJhc2U2NFN0cmluZy5zcGxpdCgnO2Jhc2U2NCwnKS5wb3AoKTtcbiAgICAgKi9cbn1cbiJdfQ==