"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../../controllers/utils.controller");

/***
 *
 */
var UtilRoute = /*#__PURE__*/function () {
  function UtilRoute() {
    (0, _classCallCheck2["default"])(this, UtilRoute);
    (0, _defineProperty2["default"])(this, "utilsController", new _utils.UtilsController());
  }

  (0, _createClass2["default"])(UtilRoute, [{
    key: "Run",

    /***
     *
     * @param routes
     * @constructor
     */
    value: function Run(routes) {
      routes.get("/utils/savefile", this.utilsController.SaveFile);
      routes.get("/utils/sendmail", this.utilsController.SendMail);
      routes.get("/utils/sendsms", this.utilsController.SendSms);
    }
  }]);
  return UtilRoute;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvcm91dGVzL3V0aWwucm91dGUudHMiXSwibmFtZXMiOlsiVXRpbFJvdXRlIiwiVXRpbHNDb250cm9sbGVyIiwicm91dGVzIiwiZ2V0IiwidXRpbHNDb250cm9sbGVyIiwiU2F2ZUZpbGUiLCJTZW5kTWFpbCIsIlNlbmRTbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTs7O0lBR01BLFM7Ozs4REFDaUMsSUFBSUMsc0JBQUosRTs7Ozs7O0FBRW5DOzs7Ozt3QkFLSUMsTSxFQUFpQjtBQUNqQkEsTUFBQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsaUJBQVgsRUFBOEIsS0FBS0MsZUFBTCxDQUFxQkMsUUFBbkQ7QUFDQUgsTUFBQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsaUJBQVgsRUFBOEIsS0FBS0MsZUFBTCxDQUFxQkUsUUFBbkQ7QUFDQUosTUFBQUEsTUFBTSxDQUFDQyxHQUFQLENBQVcsZ0JBQVgsRUFBNkIsS0FBS0MsZUFBTCxDQUFxQkcsT0FBbEQ7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVJvdXRlcn0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7VXRpbHNDb250cm9sbGVyfSBmcm9tIFwiLi4vLi4vY29udHJvbGxlcnMvdXRpbHMuY29udHJvbGxlclwiO1xuXG4vKioqXG4gKlxuICovXG5jbGFzcyBVdGlsUm91dGUge1xuICAgIHV0aWxzQ29udHJvbGxlcjogVXRpbHNDb250cm9sbGVyID0gbmV3IFV0aWxzQ29udHJvbGxlcigpO1xuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvdXRlc1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIFJ1bihyb3V0ZXM6IElSb3V0ZXIpIHtcbiAgICAgICAgcm91dGVzLmdldChcIi91dGlscy9zYXZlZmlsZVwiLCB0aGlzLnV0aWxzQ29udHJvbGxlci5TYXZlRmlsZSk7XG4gICAgICAgIHJvdXRlcy5nZXQoXCIvdXRpbHMvc2VuZG1haWxcIiwgdGhpcy51dGlsc0NvbnRyb2xsZXIuU2VuZE1haWwpO1xuICAgICAgICByb3V0ZXMuZ2V0KFwiL3V0aWxzL3NlbmRzbXNcIiwgdGhpcy51dGlsc0NvbnRyb2xsZXIuU2VuZFNtcyk7XG4gICAgfVxufVxuIl19