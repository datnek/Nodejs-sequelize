"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalizationRoute = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _localizations = require("../../controllers/localizations.controller");

/***
 *
 */
var LocalizationRoute = /*#__PURE__*/function () {
  function LocalizationRoute() {
    (0, _classCallCheck2["default"])(this, LocalizationRoute);
    (0, _defineProperty2["default"])(this, "localizationsController", new _localizations.LocalizationsController());
  }

  (0, _createClass2["default"])(LocalizationRoute, [{
    key: "Run",

    /***
     *
     * @param routes
     * @param authGrade
     * @constructor
     */
    value: function Run(routes, authGrade) {
      routes.get('/localizations', authGrade.AuthenticateToken, this.localizationsController.FindAll);
      routes.get('/localizations/:id', authGrade.AuthenticateToken, this.localizationsController.FindById);
      routes.get('/localizations/public/:slug', authGrade.AuthenticateToken, this.localizationsController.FindBySlug);
      routes.post('/localizations', authGrade.AuthenticateToken, this.localizationsController.Create);
      routes["delete"]('/localizations/:slug', authGrade.AuthenticateToken, this.localizationsController.Delete);
      routes.put('/localizations/:id', authGrade.AuthenticateToken, this.localizationsController.Put);
    }
  }]);
  return LocalizationRoute;
}();

exports.LocalizationRoute = LocalizationRoute;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvcm91dGVzL2xvY2FsaXphdGlvbi5yb3V0ZS50cyJdLCJuYW1lcyI6WyJMb2NhbGl6YXRpb25Sb3V0ZSIsIkxvY2FsaXphdGlvbnNDb250cm9sbGVyIiwicm91dGVzIiwiYXV0aEdyYWRlIiwiZ2V0IiwiQXV0aGVudGljYXRlVG9rZW4iLCJsb2NhbGl6YXRpb25zQ29udHJvbGxlciIsIkZpbmRBbGwiLCJGaW5kQnlJZCIsIkZpbmRCeVNsdWciLCJwb3N0IiwiQ3JlYXRlIiwiRGVsZXRlIiwicHV0IiwiUHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFHQTs7O0lBR2FBLGlCOzs7c0VBQzBDLElBQUlDLHNDQUFKLEU7Ozs7OztBQUVuRDs7Ozs7O3dCQU1JQyxNLEVBQWlCQyxTLEVBQXNCO0FBQ3ZDRCxNQUFBQSxNQUFNLENBQUNFLEdBQVAsQ0FBVyxnQkFBWCxFQUE0QkQsU0FBUyxDQUFDRSxpQkFBdEMsRUFBeUQsS0FBS0MsdUJBQUwsQ0FBNkJDLE9BQXRGO0FBQ0FMLE1BQUFBLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLG9CQUFYLEVBQWdDRCxTQUFTLENBQUNFLGlCQUExQyxFQUE2RCxLQUFLQyx1QkFBTCxDQUE2QkUsUUFBMUY7QUFDQU4sTUFBQUEsTUFBTSxDQUFDRSxHQUFQLENBQVcsNkJBQVgsRUFBeUNELFNBQVMsQ0FBQ0UsaUJBQW5ELEVBQXNFLEtBQUtDLHVCQUFMLENBQTZCRyxVQUFuRztBQUNBUCxNQUFBQSxNQUFNLENBQUNRLElBQVAsQ0FBWSxnQkFBWixFQUE2QlAsU0FBUyxDQUFDRSxpQkFBdkMsRUFBMEQsS0FBS0MsdUJBQUwsQ0FBNkJLLE1BQXZGO0FBQ0FULE1BQUFBLE1BQU0sVUFBTixDQUFjLHNCQUFkLEVBQXFDQyxTQUFTLENBQUNFLGlCQUEvQyxFQUFrRSxLQUFLQyx1QkFBTCxDQUE2Qk0sTUFBL0Y7QUFDQVYsTUFBQUEsTUFBTSxDQUFDVyxHQUFQLENBQVcsb0JBQVgsRUFBZ0NWLFNBQVMsQ0FBQ0UsaUJBQTFDLEVBQTZELEtBQUtDLHVCQUFMLENBQTZCUSxHQUExRjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIElSb3V0ZXIgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgTG9jYWxpemF0aW9uc0NvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vY29udHJvbGxlcnMvbG9jYWxpemF0aW9ucy5jb250cm9sbGVyXCI7XG5pbXBvcnQge0F1dGhHcmFkZX0gZnJvbSBcIi4uL2F1dGguZ3JhZGVcIjtcblxuLyoqKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIExvY2FsaXphdGlvblJvdXRlIHtcbiAgICBsb2NhbGl6YXRpb25zQ29udHJvbGxlcjogTG9jYWxpemF0aW9uc0NvbnRyb2xsZXIgPSBuZXcgTG9jYWxpemF0aW9uc0NvbnRyb2xsZXIoKTtcblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByb3V0ZXNcbiAgICAgKiBAcGFyYW0gYXV0aEdyYWRlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgUnVuKHJvdXRlczogSVJvdXRlciwgYXV0aEdyYWRlOiBBdXRoR3JhZGUpIHtcbiAgICAgICAgcm91dGVzLmdldCgnL2xvY2FsaXphdGlvbnMnLGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbiwgdGhpcy5sb2NhbGl6YXRpb25zQ29udHJvbGxlci5GaW5kQWxsKTtcbiAgICAgICAgcm91dGVzLmdldCgnL2xvY2FsaXphdGlvbnMvOmlkJyxhdXRoR3JhZGUuQXV0aGVudGljYXRlVG9rZW4sIHRoaXMubG9jYWxpemF0aW9uc0NvbnRyb2xsZXIuRmluZEJ5SWQpO1xuICAgICAgICByb3V0ZXMuZ2V0KCcvbG9jYWxpemF0aW9ucy9wdWJsaWMvOnNsdWcnLGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbiwgdGhpcy5sb2NhbGl6YXRpb25zQ29udHJvbGxlci5GaW5kQnlTbHVnKTtcbiAgICAgICAgcm91dGVzLnBvc3QoJy9sb2NhbGl6YXRpb25zJyxhdXRoR3JhZGUuQXV0aGVudGljYXRlVG9rZW4sIHRoaXMubG9jYWxpemF0aW9uc0NvbnRyb2xsZXIuQ3JlYXRlKTtcbiAgICAgICAgcm91dGVzLmRlbGV0ZSgnL2xvY2FsaXphdGlvbnMvOnNsdWcnLGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbiwgdGhpcy5sb2NhbGl6YXRpb25zQ29udHJvbGxlci5EZWxldGUpO1xuICAgICAgICByb3V0ZXMucHV0KCcvbG9jYWxpemF0aW9ucy86aWQnLGF1dGhHcmFkZS5BdXRoZW50aWNhdGVUb2tlbiwgdGhpcy5sb2NhbGl6YXRpb25zQ29udHJvbGxlci5QdXQpO1xuICAgIH1cbn1cbiJdfQ==