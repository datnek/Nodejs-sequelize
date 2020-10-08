"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _home = require("./home.route");

var _security = require("./security.route");

var _user = require("./user.route");

var _media = require("./media.route");

var _localization = require("./localization.route");

var _auth = require("../auth.grade");

/***
 *
 */
var Routes = /*#__PURE__*/function () {
  function Routes() {
    (0, _classCallCheck2["default"])(this, Routes);
    (0, _defineProperty2["default"])(this, "authGrade", void 0);
    this.authGrade = new _auth.AuthGrade();
  }
  /***
   *
   * @param routes
   * @constructor
   */


  (0, _createClass2["default"])(Routes, [{
    key: "SetRoutes",
    value: function SetRoutes(routes) {
      new _home.HomeRoute().Run(routes);
      new _security.SecurityRoute().Run(routes, this.authGrade);
      new _user.UserRoute().Run(routes, this.authGrade);
      new _media.MediaRoute().Run(routes, this.authGrade);
      new _localization.LocalizationRoute().Run(routes, this.authGrade);
    }
  }]);
  return Routes;
}();

exports.Routes = Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvcm91dGVzL3JvdXRlcy50cyJdLCJuYW1lcyI6WyJSb3V0ZXMiLCJhdXRoR3JhZGUiLCJBdXRoR3JhZGUiLCJyb3V0ZXMiLCJIb21lUm91dGUiLCJSdW4iLCJTZWN1cml0eVJvdXRlIiwiVXNlclJvdXRlIiwiTWVkaWFSb3V0ZSIsIkxvY2FsaXphdGlvblJvdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7O0lBR2FBLE07QUFFVCxvQkFBYTtBQUFBO0FBQUE7QUFDVCxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLGVBQUosRUFBakI7QUFDSDtBQUNEOzs7Ozs7Ozs7OEJBS1VDLE0sRUFBdUI7QUFDN0IsVUFBSUMsZUFBSixHQUFnQkMsR0FBaEIsQ0FBb0JGLE1BQXBCO0FBQ0EsVUFBSUcsdUJBQUosR0FBb0JELEdBQXBCLENBQXdCRixNQUF4QixFQUFnQyxLQUFLRixTQUFyQztBQUNBLFVBQUlNLGVBQUosR0FBZ0JGLEdBQWhCLENBQW9CRixNQUFwQixFQUE0QixLQUFLRixTQUFqQztBQUNBLFVBQUlPLGlCQUFKLEdBQWlCSCxHQUFqQixDQUFxQkYsTUFBckIsRUFBNkIsS0FBS0YsU0FBbEM7QUFDQSxVQUFJUSwrQkFBSixHQUF3QkosR0FBeEIsQ0FBNEJGLE1BQTVCLEVBQW9DLEtBQUtGLFNBQXpDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lUm91dGUgfSBmcm9tIFwiLi9ob21lLnJvdXRlXCI7XG5pbXBvcnQgeyBJUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7U2VjdXJpdHlSb3V0ZX0gZnJvbSBcIi4vc2VjdXJpdHkucm91dGVcIjtcbmltcG9ydCB7VXNlclJvdXRlfSBmcm9tIFwiLi91c2VyLnJvdXRlXCI7XG5pbXBvcnQge01lZGlhUm91dGV9IGZyb20gXCIuL21lZGlhLnJvdXRlXCI7XG5pbXBvcnQge0xvY2FsaXphdGlvblJvdXRlfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24ucm91dGVcIjtcbmltcG9ydCB7QXV0aEdyYWRlfSBmcm9tIFwiLi4vYXV0aC5ncmFkZVwiO1xuXG4vKioqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgUm91dGVzIHtcbiAgICBwcml2YXRlIGF1dGhHcmFkZTogQXV0aEdyYWRlO1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuYXV0aEdyYWRlID0gbmV3IEF1dGhHcmFkZSgpO1xuICAgIH1cbiAgICAvKioqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcm91dGVzXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgU2V0Um91dGVzKHJvdXRlczogSVJvdXRlcik6IHZvaWQge1xuICAgICAgICBuZXcgSG9tZVJvdXRlKCkuUnVuKHJvdXRlcyk7XG4gICAgICAgIG5ldyBTZWN1cml0eVJvdXRlKCkuUnVuKHJvdXRlcywgdGhpcy5hdXRoR3JhZGUpO1xuICAgICAgICBuZXcgVXNlclJvdXRlKCkuUnVuKHJvdXRlcywgdGhpcy5hdXRoR3JhZGUpO1xuICAgICAgICBuZXcgTWVkaWFSb3V0ZSgpLlJ1bihyb3V0ZXMsIHRoaXMuYXV0aEdyYWRlKTtcbiAgICAgICAgbmV3IExvY2FsaXphdGlvblJvdXRlKCkuUnVuKHJvdXRlcywgdGhpcy5hdXRoR3JhZGUpO1xuICAgIH1cbn1cbiJdfQ==