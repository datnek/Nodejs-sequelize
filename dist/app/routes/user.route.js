"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRoute = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _users = require("../../controllers/users.controller");

/***
 *
 */
var UserRoute = /*#__PURE__*/function () {
  function UserRoute() {
    (0, _classCallCheck2["default"])(this, UserRoute);
    (0, _defineProperty2["default"])(this, "usersController", void 0);
  }

  (0, _createClass2["default"])(UserRoute, [{
    key: "Run",

    /***
     *
     * @param routes
     * @param authGrade
     * @constructor
     */
    value: function Run(routes, authGrade) {
      this.usersController = new _users.UsersController();
      routes.get('/users', authGrade.AuthenticateToken, this.usersController.FindAll);
      routes.get('/users/username/:username', authGrade.AuthenticateToken, this.usersController.FindByUsername);
      routes.get('/users/:id', authGrade.AuthenticateToken, this.usersController.FindById);
      routes.get('/users/public/:slug', authGrade.AuthenticateToken, this.usersController.FindBySlug);
      routes.post('/users', this.usersController.Create);
      routes.post('/users/login', this.usersController.Login);
      routes["delete"]('/users/:slug', authGrade.AuthenticateToken, this.usersController.Delete);
      routes.put('/users/:id', authGrade.AuthenticateToken, this.usersController.Put);
    }
  }]);
  return UserRoute;
}();

exports.UserRoute = UserRoute;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvcm91dGVzL3VzZXIucm91dGUudHMiXSwibmFtZXMiOlsiVXNlclJvdXRlIiwicm91dGVzIiwiYXV0aEdyYWRlIiwidXNlcnNDb250cm9sbGVyIiwiVXNlcnNDb250cm9sbGVyIiwiZ2V0IiwiQXV0aGVudGljYXRlVG9rZW4iLCJGaW5kQWxsIiwiRmluZEJ5VXNlcm5hbWUiLCJGaW5kQnlJZCIsIkZpbmRCeVNsdWciLCJwb3N0IiwiQ3JlYXRlIiwiTG9naW4iLCJEZWxldGUiLCJwdXQiLCJQdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUdBOzs7SUFHYUEsUzs7Ozs7Ozs7O0FBR1Q7Ozs7Ozt3QkFNSUMsTSxFQUFpQkMsUyxFQUFzQjtBQUN2QyxXQUFLQyxlQUFMLEdBQXVCLElBQUlDLHNCQUFKLEVBQXZCO0FBQ0FILE1BQUFBLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFFBQVgsRUFBb0JILFNBQVMsQ0FBQ0ksaUJBQTlCLEVBQWlELEtBQUtILGVBQUwsQ0FBcUJJLE9BQXRFO0FBQ0FOLE1BQUFBLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLDJCQUFYLEVBQXVDSCxTQUFTLENBQUNJLGlCQUFqRCxFQUFvRSxLQUFLSCxlQUFMLENBQXFCSyxjQUF6RjtBQUNBUCxNQUFBQSxNQUFNLENBQUNJLEdBQVAsQ0FBVyxZQUFYLEVBQXdCSCxTQUFTLENBQUNJLGlCQUFsQyxFQUFxRCxLQUFLSCxlQUFMLENBQXFCTSxRQUExRTtBQUNBUixNQUFBQSxNQUFNLENBQUNJLEdBQVAsQ0FBVyxxQkFBWCxFQUFpQ0gsU0FBUyxDQUFDSSxpQkFBM0MsRUFBOEQsS0FBS0gsZUFBTCxDQUFxQk8sVUFBbkY7QUFDQVQsTUFBQUEsTUFBTSxDQUFDVSxJQUFQLENBQVksUUFBWixFQUFzQixLQUFLUixlQUFMLENBQXFCUyxNQUEzQztBQUNBWCxNQUFBQSxNQUFNLENBQUNVLElBQVAsQ0FBWSxjQUFaLEVBQTRCLEtBQUtSLGVBQUwsQ0FBcUJVLEtBQWpEO0FBQ0FaLE1BQUFBLE1BQU0sVUFBTixDQUFjLGNBQWQsRUFBNkJDLFNBQVMsQ0FBQ0ksaUJBQXZDLEVBQTBELEtBQUtILGVBQUwsQ0FBcUJXLE1BQS9FO0FBQ0FiLE1BQUFBLE1BQU0sQ0FBQ2MsR0FBUCxDQUFXLFlBQVgsRUFBd0JiLFNBQVMsQ0FBQ0ksaUJBQWxDLEVBQXFELEtBQUtILGVBQUwsQ0FBcUJhLEdBQTFFO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSVJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBVc2Vyc0NvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vY29udHJvbGxlcnMvdXNlcnMuY29udHJvbGxlclwiO1xuaW1wb3J0IHtBdXRoR3JhZGV9IGZyb20gXCIuLi9hdXRoLmdyYWRlXCI7XG5cbi8qKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyUm91dGUge1xuICAgIHVzZXJzQ29udHJvbGxlcjogVXNlcnNDb250cm9sbGVyO1xuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvdXRlc1xuICAgICAqIEBwYXJhbSBhdXRoR3JhZGVcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBSdW4ocm91dGVzOiBJUm91dGVyLCBhdXRoR3JhZGU6IEF1dGhHcmFkZSkge1xuICAgICAgICB0aGlzLnVzZXJzQ29udHJvbGxlciA9IG5ldyBVc2Vyc0NvbnRyb2xsZXIoKTtcbiAgICAgICAgcm91dGVzLmdldCgnL3VzZXJzJyxhdXRoR3JhZGUuQXV0aGVudGljYXRlVG9rZW4sIHRoaXMudXNlcnNDb250cm9sbGVyLkZpbmRBbGwpO1xuICAgICAgICByb3V0ZXMuZ2V0KCcvdXNlcnMvdXNlcm5hbWUvOnVzZXJuYW1lJyxhdXRoR3JhZGUuQXV0aGVudGljYXRlVG9rZW4sIHRoaXMudXNlcnNDb250cm9sbGVyLkZpbmRCeVVzZXJuYW1lKTtcbiAgICAgICAgcm91dGVzLmdldCgnL3VzZXJzLzppZCcsYXV0aEdyYWRlLkF1dGhlbnRpY2F0ZVRva2VuLCB0aGlzLnVzZXJzQ29udHJvbGxlci5GaW5kQnlJZCk7XG4gICAgICAgIHJvdXRlcy5nZXQoJy91c2Vycy9wdWJsaWMvOnNsdWcnLGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbiwgdGhpcy51c2Vyc0NvbnRyb2xsZXIuRmluZEJ5U2x1Zyk7XG4gICAgICAgIHJvdXRlcy5wb3N0KCcvdXNlcnMnLCB0aGlzLnVzZXJzQ29udHJvbGxlci5DcmVhdGUpO1xuICAgICAgICByb3V0ZXMucG9zdCgnL3VzZXJzL2xvZ2luJywgdGhpcy51c2Vyc0NvbnRyb2xsZXIuTG9naW4pO1xuICAgICAgICByb3V0ZXMuZGVsZXRlKCcvdXNlcnMvOnNsdWcnLGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbiwgdGhpcy51c2Vyc0NvbnRyb2xsZXIuRGVsZXRlKTtcbiAgICAgICAgcm91dGVzLnB1dCgnL3VzZXJzLzppZCcsYXV0aEdyYWRlLkF1dGhlbnRpY2F0ZVRva2VuLCB0aGlzLnVzZXJzQ29udHJvbGxlci5QdXQpO1xuICAgIH1cbn1cbiJdfQ==