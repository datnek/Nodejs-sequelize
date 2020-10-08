"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaRoute = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _medias = require("../../controllers/medias.controller");

/***
 *
 */
var MediaRoute = /*#__PURE__*/function () {
  function MediaRoute() {
    (0, _classCallCheck2["default"])(this, MediaRoute);
    (0, _defineProperty2["default"])(this, "mediasController", new _medias.MediasController());
  }

  (0, _createClass2["default"])(MediaRoute, [{
    key: "Run",

    /***
     *
     * @param routes
     * @param authGrade
     * @constructor
     */
    value: function Run(routes, authGrade) {
      routes.get('/medias', authGrade.AuthenticateToken, this.mediasController.FindAll);
      routes.get('/medias/:id', authGrade.AuthenticateToken, this.mediasController.FindById);
      routes.get('/medias/public/:slug', authGrade.AuthenticateToken, this.mediasController.FindBySlug);
      routes.post('/medias', authGrade.AuthenticateToken, this.mediasController.Create);
      routes["delete"]('/medias/:slug', authGrade.AuthenticateToken, this.mediasController.Delete);
      routes.put('/medias/:id', authGrade.AuthenticateToken, this.mediasController.Put);
    }
  }]);
  return MediaRoute;
}();

exports.MediaRoute = MediaRoute;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvcm91dGVzL21lZGlhLnJvdXRlLnRzIl0sIm5hbWVzIjpbIk1lZGlhUm91dGUiLCJNZWRpYXNDb250cm9sbGVyIiwicm91dGVzIiwiYXV0aEdyYWRlIiwiZ2V0IiwiQXV0aGVudGljYXRlVG9rZW4iLCJtZWRpYXNDb250cm9sbGVyIiwiRmluZEFsbCIsIkZpbmRCeUlkIiwiRmluZEJ5U2x1ZyIsInBvc3QiLCJDcmVhdGUiLCJEZWxldGUiLCJwdXQiLCJQdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUdBOzs7SUFHYUEsVTs7OytEQUM0QixJQUFJQyx3QkFBSixFOzs7Ozs7QUFFckM7Ozs7Ozt3QkFNSUMsTSxFQUFpQkMsUyxFQUFzQjtBQUN2Q0QsTUFBQUEsTUFBTSxDQUFDRSxHQUFQLENBQVcsU0FBWCxFQUFxQkQsU0FBUyxDQUFDRSxpQkFBL0IsRUFBa0QsS0FBS0MsZ0JBQUwsQ0FBc0JDLE9BQXhFO0FBQ0FMLE1BQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLGFBQVgsRUFBeUJELFNBQVMsQ0FBQ0UsaUJBQW5DLEVBQXFELEtBQUtDLGdCQUFMLENBQXNCRSxRQUEzRTtBQUNBTixNQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxzQkFBWCxFQUFrQ0QsU0FBUyxDQUFDRSxpQkFBNUMsRUFBOEQsS0FBS0MsZ0JBQUwsQ0FBc0JHLFVBQXBGO0FBQ0FQLE1BQUFBLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZLFNBQVosRUFBc0JQLFNBQVMsQ0FBQ0UsaUJBQWhDLEVBQW1ELEtBQUtDLGdCQUFMLENBQXNCSyxNQUF6RTtBQUNBVCxNQUFBQSxNQUFNLFVBQU4sQ0FBYyxlQUFkLEVBQThCQyxTQUFTLENBQUNFLGlCQUF4QyxFQUEyRCxLQUFLQyxnQkFBTCxDQUFzQk0sTUFBakY7QUFDQVYsTUFBQUEsTUFBTSxDQUFDVyxHQUFQLENBQVcsYUFBWCxFQUF5QlYsU0FBUyxDQUFDRSxpQkFBbkMsRUFBc0QsS0FBS0MsZ0JBQUwsQ0FBc0JRLEdBQTVFO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgSVJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBNZWRpYXNDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL21lZGlhcy5jb250cm9sbGVyXCI7XG5pbXBvcnQge0F1dGhHcmFkZX0gZnJvbSBcIi4uL2F1dGguZ3JhZGVcIjtcblxuLyoqKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIE1lZGlhUm91dGUge1xuICAgIG1lZGlhc0NvbnRyb2xsZXI6IE1lZGlhc0NvbnRyb2xsZXIgPSBuZXcgTWVkaWFzQ29udHJvbGxlcigpO1xuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJvdXRlc1xuICAgICAqIEBwYXJhbSBhdXRoR3JhZGVcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBSdW4ocm91dGVzOiBJUm91dGVyLCBhdXRoR3JhZGU6IEF1dGhHcmFkZSkge1xuICAgICAgICByb3V0ZXMuZ2V0KCcvbWVkaWFzJyxhdXRoR3JhZGUuQXV0aGVudGljYXRlVG9rZW4sIHRoaXMubWVkaWFzQ29udHJvbGxlci5GaW5kQWxsKTtcbiAgICAgICAgcm91dGVzLmdldCgnL21lZGlhcy86aWQnLGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbix0aGlzLm1lZGlhc0NvbnRyb2xsZXIuRmluZEJ5SWQpO1xuICAgICAgICByb3V0ZXMuZ2V0KCcvbWVkaWFzL3B1YmxpYy86c2x1ZycsYXV0aEdyYWRlLkF1dGhlbnRpY2F0ZVRva2VuLHRoaXMubWVkaWFzQ29udHJvbGxlci5GaW5kQnlTbHVnKTtcbiAgICAgICAgcm91dGVzLnBvc3QoJy9tZWRpYXMnLGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbiwgdGhpcy5tZWRpYXNDb250cm9sbGVyLkNyZWF0ZSk7XG4gICAgICAgIHJvdXRlcy5kZWxldGUoJy9tZWRpYXMvOnNsdWcnLGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbiwgdGhpcy5tZWRpYXNDb250cm9sbGVyLkRlbGV0ZSk7XG4gICAgICAgIHJvdXRlcy5wdXQoJy9tZWRpYXMvOmlkJyxhdXRoR3JhZGUuQXV0aGVudGljYXRlVG9rZW4sIHRoaXMubWVkaWFzQ29udHJvbGxlci5QdXQpO1xuICAgIH1cbn1cbiJdfQ==