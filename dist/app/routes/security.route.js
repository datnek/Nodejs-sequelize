"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityRoute = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _securities = require("../../controllers/securities.controller");

/***
 *
 */
var SecurityRoute = /*#__PURE__*/function () {
  function SecurityRoute() {
    (0, _classCallCheck2["default"])(this, SecurityRoute);
    (0, _defineProperty2["default"])(this, "securitiesController", new _securities.SecuritiesController());
  }

  (0, _createClass2["default"])(SecurityRoute, [{
    key: "Run",

    /***
     *
     * @param routes
     * @param authGrade
     * @constructor
     */
    value: function Run(routes, authGrade) {
      routes.get('/securities', authGrade.AuthenticateToken, this.securitiesController.FindAll);
      routes.get('/securities/:id', authGrade.AuthenticateToken, this.securitiesController.FindById);
      routes.get('/securities/app/init', this.securitiesController.InitUserApp);
      routes.get('/securities/public/:slug', authGrade.AuthenticateToken, this.securitiesController.FindBySlug);
      routes.post('/securities', this.securitiesController.Create);
      routes["delete"]('/securities/:slug', authGrade.AuthenticateToken, this.securitiesController.Delete); // routes.put('/securities/:id', authGrade.AuthenticateToken, this.securitiesController.Put);
    }
  }]);
  return SecurityRoute;
}();

exports.SecurityRoute = SecurityRoute;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvcm91dGVzL3NlY3VyaXR5LnJvdXRlLnRzIl0sIm5hbWVzIjpbIlNlY3VyaXR5Um91dGUiLCJTZWN1cml0aWVzQ29udHJvbGxlciIsInJvdXRlcyIsImF1dGhHcmFkZSIsImdldCIsIkF1dGhlbnRpY2F0ZVRva2VuIiwic2VjdXJpdGllc0NvbnRyb2xsZXIiLCJGaW5kQWxsIiwiRmluZEJ5SWQiLCJJbml0VXNlckFwcCIsIkZpbmRCeVNsdWciLCJwb3N0IiwiQ3JlYXRlIiwiRGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFHQTs7O0lBR2FBLGE7OzttRUFDc0MsSUFBSUMsZ0NBQUosRTs7Ozs7O0FBRW5EOzs7Ozs7d0JBTUlDLE0sRUFBaUJDLFMsRUFBc0I7QUFDdkNELE1BQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLGFBQVgsRUFBMEJELFNBQVMsQ0FBQ0UsaUJBQXBDLEVBQXVELEtBQUtDLG9CQUFMLENBQTBCQyxPQUFqRjtBQUNBTCxNQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxpQkFBWCxFQUE4QkQsU0FBUyxDQUFDRSxpQkFBeEMsRUFBMEQsS0FBS0Msb0JBQUwsQ0FBMEJFLFFBQXBGO0FBQ0FOLE1BQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLHNCQUFYLEVBQW1DLEtBQUtFLG9CQUFMLENBQTBCRyxXQUE3RDtBQUNBUCxNQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVywwQkFBWCxFQUF1Q0QsU0FBUyxDQUFDRSxpQkFBakQsRUFBbUUsS0FBS0Msb0JBQUwsQ0FBMEJJLFVBQTdGO0FBQ0FSLE1BQUFBLE1BQU0sQ0FBQ1MsSUFBUCxDQUFZLGFBQVosRUFBMkIsS0FBS0wsb0JBQUwsQ0FBMEJNLE1BQXJEO0FBQ0FWLE1BQUFBLE1BQU0sVUFBTixDQUFjLG1CQUFkLEVBQW1DQyxTQUFTLENBQUNFLGlCQUE3QyxFQUFnRSxLQUFLQyxvQkFBTCxDQUEwQk8sTUFBMUYsRUFOdUMsQ0FPeEM7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBJUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7U2VjdXJpdGllc0NvbnRyb2xsZXJ9IGZyb20gXCIuLi8uLi9jb250cm9sbGVycy9zZWN1cml0aWVzLmNvbnRyb2xsZXJcIjtcbmltcG9ydCB7QXV0aEdyYWRlfSBmcm9tIFwiLi4vYXV0aC5ncmFkZVwiO1xuXG4vKioqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlSb3V0ZSB7XG4gICAgc2VjdXJpdGllc0NvbnRyb2xsZXI6IFNlY3VyaXRpZXNDb250cm9sbGVyICA9ICBuZXcgU2VjdXJpdGllc0NvbnRyb2xsZXIoKTtcblxuLyoqKlxuICpcbiAqIEBwYXJhbSByb3V0ZXNcbiAqIEBwYXJhbSBhdXRoR3JhZGVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5SdW4ocm91dGVzOiBJUm91dGVyLCBhdXRoR3JhZGU6IEF1dGhHcmFkZSkge1xuICAgIHJvdXRlcy5nZXQoJy9zZWN1cml0aWVzJywgYXV0aEdyYWRlLkF1dGhlbnRpY2F0ZVRva2VuLCB0aGlzLnNlY3VyaXRpZXNDb250cm9sbGVyLkZpbmRBbGwpO1xuICAgIHJvdXRlcy5nZXQoJy9zZWN1cml0aWVzLzppZCcsIGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbix0aGlzLnNlY3VyaXRpZXNDb250cm9sbGVyLkZpbmRCeUlkKTtcbiAgICByb3V0ZXMuZ2V0KCcvc2VjdXJpdGllcy9hcHAvaW5pdCcsIHRoaXMuc2VjdXJpdGllc0NvbnRyb2xsZXIuSW5pdFVzZXJBcHApO1xuICAgIHJvdXRlcy5nZXQoJy9zZWN1cml0aWVzL3B1YmxpYy86c2x1ZycsIGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbix0aGlzLnNlY3VyaXRpZXNDb250cm9sbGVyLkZpbmRCeVNsdWcpO1xuICAgIHJvdXRlcy5wb3N0KCcvc2VjdXJpdGllcycsIHRoaXMuc2VjdXJpdGllc0NvbnRyb2xsZXIuQ3JlYXRlKTtcbiAgICByb3V0ZXMuZGVsZXRlKCcvc2VjdXJpdGllcy86c2x1ZycsIGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbiwgdGhpcy5zZWN1cml0aWVzQ29udHJvbGxlci5EZWxldGUpO1xuICAgLy8gcm91dGVzLnB1dCgnL3NlY3VyaXRpZXMvOmlkJywgYXV0aEdyYWRlLkF1dGhlbnRpY2F0ZVRva2VuLCB0aGlzLnNlY3VyaXRpZXNDb250cm9sbGVyLlB1dCk7XG59XG59XG4iXX0=