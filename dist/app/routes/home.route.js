"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeRoute = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _home = require("../../controllers/home.controller");

var _require = require('child-process-async'),
    exec = _require.exec,
    spawn = _require.spawn;
/***
 *
 */


var HomeRoute = /*#__PURE__*/function () {
  function HomeRoute() {
    (0, _classCallCheck2["default"])(this, HomeRoute);
    (0, _defineProperty2["default"])(this, "homeController", new _home.HomeController());
  }

  (0, _createClass2["default"])(HomeRoute, [{
    key: "Run",

    /***
     *
     * @param routes
     * @constructor
     */
    value: function Run(routes) {
      routes.get("/", this.homeController.Index);
      routes.get('/create', /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
          var _yield$exec, stdout, stderr;

          return _regenerator["default"].wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return exec("sequelize db:create --env test");

                case 2:
                  _yield$exec = _context.sent;
                  stdout = _yield$exec.stdout;
                  stderr = _yield$exec.stderr;
                  console.log('stdout', stdout);
                  console.log('stderr', stderr);
                  res.json({
                    message: "Create database use test env"
                  });

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      routes.get('/migrate', /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
          var _yield$exec2, stdout, stderr;

          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return exec("sequelize db:migrate --env test");

                case 2:
                  _yield$exec2 = _context2.sent;
                  stdout = _yield$exec2.stdout;
                  stderr = _yield$exec2.stderr;
                  console.log('stdout', stdout);
                  console.log('stderr', stderr);
                  res.json({
                    message: "update database use test env"
                  });

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }]);
  return HomeRoute;
}();

exports.HomeRoute = HomeRoute;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcHAvcm91dGVzL2hvbWUucm91dGUudHMiXSwibmFtZXMiOlsicmVxdWlyZSIsImV4ZWMiLCJzcGF3biIsIkhvbWVSb3V0ZSIsIkhvbWVDb250cm9sbGVyIiwicm91dGVzIiwiZ2V0IiwiaG9tZUNvbnRyb2xsZXIiLCJJbmRleCIsInJlcSIsInJlcyIsInN0ZG91dCIsInN0ZGVyciIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztlQUN3QkEsT0FBTyxDQUFDLHFCQUFELEM7SUFBdkJDLEksWUFBQUEsSTtJQUFNQyxLLFlBQUFBLEs7QUFFZDs7Ozs7SUFHYUMsUzs7OzZEQUN3QixJQUFJQyxvQkFBSixFOzs7Ozs7QUFFakM7Ozs7O3dCQUtJQyxNLEVBQWlCO0FBQ2pCQSxNQUFBQSxNQUFNLENBQUNDLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLEtBQUtDLGNBQUwsQ0FBb0JDLEtBQXBDO0FBQ0FILE1BQUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFNBQVg7QUFBQSxpR0FBd0IsaUJBQU9HLEdBQVAsRUFBWUMsR0FBWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDYVQsSUFBSSxDQUFDLGdDQUFELENBRGpCOztBQUFBO0FBQUE7QUFDWlUsa0JBQUFBLE1BRFksZUFDWkEsTUFEWTtBQUNKQyxrQkFBQUEsTUFESSxlQUNKQSxNQURJO0FBRXBCQyxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkgsTUFBdEI7QUFDQUUsa0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLE1BQXRCO0FBRUFGLGtCQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUztBQUNMQyxvQkFBQUEsT0FBTyxFQUFFO0FBREosbUJBQVQ7O0FBTG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0FYLE1BQUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQVg7QUFBQSxrR0FBeUIsa0JBQU9HLEdBQVAsRUFBWUMsR0FBWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDWVQsSUFBSSxDQUFDLGlDQUFELENBRGhCOztBQUFBO0FBQUE7QUFDYlUsa0JBQUFBLE1BRGEsZ0JBQ2JBLE1BRGE7QUFDTEMsa0JBQUFBLE1BREssZ0JBQ0xBLE1BREs7QUFFckJDLGtCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxNQUF0QjtBQUNBRSxrQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsTUFBdEI7QUFFQUYsa0JBQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTO0FBQ0xDLG9CQUFBQSxPQUFPLEVBQUU7QUFESixtQkFBVDs7QUFMcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlLCBJUm91dGVyIH0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IEhvbWVDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJzL2hvbWUuY29udHJvbGxlclwiO1xuY29uc3QgeyBleGVjLCBzcGF3biB9ID0gcmVxdWlyZSgnY2hpbGQtcHJvY2Vzcy1hc3luYycpO1xuXG4vKioqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRlIHtcbiAgICBob21lQ29udHJvbGxlcjogSG9tZUNvbnRyb2xsZXIgPSBuZXcgSG9tZUNvbnRyb2xsZXIoKTtcblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByb3V0ZXNcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBSdW4ocm91dGVzOiBJUm91dGVyKSB7XG4gICAgICAgIHJvdXRlcy5nZXQoXCIvXCIsIHRoaXMuaG9tZUNvbnRyb2xsZXIuSW5kZXgpO1xuICAgICAgICByb3V0ZXMuZ2V0KCcvY3JlYXRlJywgKCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3Rkb3V0LCBzdGRlcnIgfSA9IGF3YWl0IGV4ZWMoXCJzZXF1ZWxpemUgZGI6Y3JlYXRlIC0tZW52IHRlc3RcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3Rkb3V0Jywgc3Rkb3V0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGRlcnInLCBzdGRlcnIpO1xuXG4gICAgICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJDcmVhdGUgZGF0YWJhc2UgdXNlIHRlc3QgZW52XCIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICByb3V0ZXMuZ2V0KCcvbWlncmF0ZScsICggYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHN0ZG91dCwgc3RkZXJyIH0gPSBhd2FpdCBleGVjKFwic2VxdWVsaXplIGRiOm1pZ3JhdGUgLS1lbnYgdGVzdFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGRvdXQnLCBzdGRvdXQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0ZGVycicsIHN0ZGVycik7XG5cbiAgICAgICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcInVwZGF0ZSBkYXRhYmFzZSB1c2UgdGVzdCBlbnZcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSlcbiAgICB9XG59XG4iXX0=