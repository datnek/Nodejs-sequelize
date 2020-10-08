"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatabaseService = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("inversify");

require("reflect-metadata");

var _dec, _class;

var DatabaseService = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function () {
  function DatabaseService() {
    (0, _classCallCheck2["default"])(this, DatabaseService);
  }

  (0, _createClass2["default"])(DatabaseService, [{
    key: "GetDatabase",
    // @ts-ignore
    value: function GetDatabase() {
      var model = require('../databases/models');

      return model;
    }
  }]);
  return DatabaseService;
}()) || _class);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZXJ2aWNlcy9kYXRhYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkRhdGFiYXNlU2VydmljZSIsIm1vZGVsIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7O0lBUWFBLGUsV0FEWiw0Qjs7Ozs7OztBQUVHO2tDQUNhO0FBQ1QsVUFBTUMsS0FBSyxHQUFJQyxPQUFPLENBQUMscUJBQUQsQ0FBdEI7O0FBQ0EsYUFBT0QsS0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3RhYmxlfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgU2VxdWVsaXplIGZyb20gXCJzZXF1ZWxpemVcIjtcbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YWJhc2VTZXJ2aWNlIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgR2V0RGF0YWJhc2UoKTtcbn1cblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFiYXNlU2VydmljZSBpbXBsZW1lbnRzIElEYXRhYmFzZVNlcnZpY2V7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEdldERhdGFiYXNlKCl7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gIHJlcXVpcmUoJy4uL2RhdGFiYXNlcy9tb2RlbHMnKTtcbiAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH1cbn1cbiJdfQ==