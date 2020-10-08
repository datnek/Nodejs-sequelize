"use strict"; // @ts-ignore

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _compression = _interopRequireDefault(require("compression"));

var express = _interopRequireWildcard(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var cors = _interopRequireWildcard(require("cors"));

var _routes = require("./routes/routes");

/***
 *
 */
var App = /*#__PURE__*/function () {
  /***
   *
   */
  function App() {
    (0, _classCallCheck2["default"])(this, App);
    (0, _defineProperty2["default"])(this, "app", void 0);

    _dotenv["default"].config();

    this.app = express["default"]();
    this.middlewares();
    this.routes();
  }
  /***
   *
   */


  (0, _createClass2["default"])(App, [{
    key: "middlewares",
    value: function middlewares() {
      this.app.use(express["static"](__dirname + "/public"));
      this.app.use(express.json()); // same like this.express.use(bodyParser.json())

      this.app.use((0, _compression["default"])());
      this.app.use(cors["default"]());
    }
    /***
     *
     */

  }, {
    key: "routes",
    value: function routes() {
      var router = express.Router();
      new _routes.Routes().SetRoutes(router);
      this.app.use("/api", router);
    }
  }]);
  return App;
}();

var _default = new App().app;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvYXBwLnRzIl0sIm5hbWVzIjpbIkFwcCIsImRvdGVudiIsImNvbmZpZyIsImFwcCIsImV4cHJlc3MiLCJtaWRkbGV3YXJlcyIsInJvdXRlcyIsInVzZSIsIl9fZGlybmFtZSIsImpzb24iLCJjb3JzIiwicm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiU2V0Um91dGVzIl0sIm1hcHBpbmdzIjoiQUFBQSxhLENBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBSUE7OztJQUdNQSxHO0FBR0Y7OztBQUdBLGlCQUFjO0FBQUE7QUFBQTs7QUFDVkMsdUJBQU9DLE1BQVA7O0FBQ0EsU0FBS0MsR0FBTCxHQUFXQyxPQUFPLFdBQVAsRUFBWDtBQUNBLFNBQUtDLFdBQUw7QUFDQSxTQUFLQyxNQUFMO0FBQ0g7QUFHRDs7Ozs7OztrQ0FHc0I7QUFDbEIsV0FBS0gsR0FBTCxDQUFTSSxHQUFULENBQWFILE9BQU8sVUFBUCxDQUFlSSxTQUFTLEdBQUcsU0FBM0IsQ0FBYjtBQUNBLFdBQUtMLEdBQUwsQ0FBU0ksR0FBVCxDQUFhSCxPQUFPLENBQUNLLElBQVIsRUFBYixFQUZrQixDQUVZOztBQUM5QixXQUFLTixHQUFMLENBQVNJLEdBQVQsQ0FBYSw4QkFBYjtBQUNBLFdBQUtKLEdBQUwsQ0FBU0ksR0FBVCxDQUFhRyxJQUFJLFdBQUosRUFBYjtBQUNIO0FBRUQ7Ozs7Ozs2QkFHaUI7QUFDYixVQUFNQyxNQUFNLEdBQUdQLE9BQU8sQ0FBQ1EsTUFBUixFQUFmO0FBQ0EsVUFBSUMsY0FBSixHQUFhQyxTQUFiLENBQXVCSCxNQUF2QjtBQUNBLFdBQUtSLEdBQUwsQ0FBU0ksR0FBVCxDQUFhLE1BQWIsRUFBcUJJLE1BQXJCO0FBQ0g7Ozs7O2VBR1UsSUFBSVgsR0FBSixHQUFVRyxHIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSBcImNvbXByZXNzaW9uXCI7XG5cbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5cbmltcG9ydCAqIGFzIGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCIuL3JvdXRlcy9yb3V0ZXNcIjtcblxuXG5cbi8qKipcbiAqXG4gKi9cbmNsYXNzIEFwcCB7XG4gICAgcHVibGljIGFwcDogZXhwcmVzcy5BcHBsaWNhdGlvbjtcblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBkb3RlbnYuY29uZmlnKCk7XG4gICAgICAgIHRoaXMuYXBwID0gZXhwcmVzcy5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMubWlkZGxld2FyZXMoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXMoKTtcbiAgICB9XG5cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgbWlkZGxld2FyZXMoKSB7XG4gICAgICAgIHRoaXMuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyBcIi9wdWJsaWNcIikpO1xuICAgICAgICB0aGlzLmFwcC51c2UoZXhwcmVzcy5qc29uKCkpOyAvLyBzYW1lIGxpa2UgdGhpcy5leHByZXNzLnVzZShib2R5UGFyc2VyLmpzb24oKSlcbiAgICAgICAgdGhpcy5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xuICAgICAgICB0aGlzLmFwcC51c2UoY29ycy5kZWZhdWx0KCkpO1xuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgcm91dGVzKCkge1xuICAgICAgICBjb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuICAgICAgICBuZXcgUm91dGVzKCkuU2V0Um91dGVzKHJvdXRlcik7XG4gICAgICAgIHRoaXMuYXBwLnVzZShcIi9hcGlcIiwgcm91dGVyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHAoKS5hcHA7XG4iXX0=