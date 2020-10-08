"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DbHandle = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var dotenv = _interopRequireWildcard(require("dotenv"));

// import util from 'util';
var _require = require('child-process-async'),
    exec = _require.exec,
    spawn = _require.spawn;

var DbHandle = /*#__PURE__*/function () {
  // private  exec = util.promisify(require('child_process').exec);
  function DbHandle() {
    (0, _classCallCheck2["default"])(this, DbHandle);
    (0, _defineProperty2["default"])(this, "Header", void 0);
    dotenv.config();
    this.Header = process.env.ACCESS_TOKEN;
  }

  (0, _createClass2["default"])(DbHandle, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('hello world !!!!');
                _context.next = 3;
                return this.run("sequelize db:create");

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create() {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "drop",
    value: function () {
      var _drop = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.run("sequelize db:drop");

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function drop() {
        return _drop.apply(this, arguments);
      }

      return drop;
    }()
  }, {
    key: "migrate",
    value: function () {
      var _migrate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.run("sequelize db:migrate");

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function migrate() {
        return _migrate.apply(this, arguments);
      }

      return migrate;
    }()
  }, {
    key: "run",
    value: function () {
      var _run = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(command) {
        var _yield$exec, stdout, stderr;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return exec(command);

              case 3:
                _yield$exec = _context4.sent;
                stdout = _yield$exec.stdout;
                stderr = _yield$exec.stderr;

                if (stderr) {
                  console.error("error: ".concat(stderr));
                }

                console.log("stdout: ".concat(stdout));
                _context4.next = 12;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 10]]);
      }));

      function run(_x) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }]);
  return DbHandle;
}();

exports.DbHandle = DbHandle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9kYi5oYW5kbGUudHMiXSwibmFtZXMiOlsicmVxdWlyZSIsImV4ZWMiLCJzcGF3biIsIkRiSGFuZGxlIiwiZG90ZW52IiwiY29uZmlnIiwiSGVhZGVyIiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19UT0tFTiIsImNvbnNvbGUiLCJsb2ciLCJydW4iLCJjb21tYW5kIiwic3Rkb3V0Iiwic3RkZXJyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUZBO2VBSXdCQSxPQUFPLENBQUMscUJBQUQsQztJQUF2QkMsSSxZQUFBQSxJO0lBQU1DLEssWUFBQUEsSzs7SUFHQUMsUTtBQUVWO0FBQ0Esc0JBQWE7QUFBQTtBQUFBO0FBRVRDLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUDtBQUNBLFNBQUtDLE1BQUwsR0FBY0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFlBQTFCO0FBQ0g7Ozs7Ozs7Ozs7QUFFR0MsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaOzt1QkFDTSxLQUFLQyxHQUFMLENBQVMscUJBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJQSxLQUFLQSxHQUFMLENBQVMsbUJBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJQSxLQUFLQSxHQUFMLENBQVMsc0JBQVQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpSEFHQUMsTzs7Ozs7Ozs7O3VCQUUrQlosSUFBSSxDQUFDWSxPQUFELEM7Ozs7QUFBN0JDLGdCQUFBQSxNLGVBQUFBLE07QUFBUUMsZ0JBQUFBLE0sZUFBQUEsTTs7QUFFaEIsb0JBQUlBLE1BQUosRUFBWTtBQUNSTCxrQkFBQUEsT0FBTyxDQUFDTSxLQUFSLGtCQUF3QkQsTUFBeEI7QUFDSDs7QUFDREwsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixtQkFBdUJHLE1BQXZCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBpbXBvcnQgdXRpbCBmcm9tICd1dGlsJztcblxuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudic7XG5cbmNvbnN0IHsgZXhlYywgc3Bhd24gfSA9IHJlcXVpcmUoJ2NoaWxkLXByb2Nlc3MtYXN5bmMnKTtcblxuXG5leHBvcnQgIGNsYXNzIERiSGFuZGxle1xuICAgIEhlYWRlcjogc3RyaW5nO1xuICAgIC8vIHByaXZhdGUgIGV4ZWMgPSB1dGlsLnByb21pc2lmeShyZXF1aXJlKCdjaGlsZF9wcm9jZXNzJykuZXhlYyk7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICBkb3RlbnYuY29uZmlnKCk7XG4gICAgICAgIHRoaXMuSGVhZGVyID0gcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOO1xuICAgIH1cbiAgICBhc3luYyBjcmVhdGUoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvIHdvcmxkICEhISEnKTtcbiAgICAgICAgYXdhaXQgdGhpcy5ydW4oXCJzZXF1ZWxpemUgZGI6Y3JlYXRlXCIpO1xuICAgIH1cblxuICAgIGFzeW5jIGRyb3AoKXtcbiAgICAgICAgYXdhaXQgdGhpcy5ydW4oXCJzZXF1ZWxpemUgZGI6ZHJvcFwiKTtcbiAgICB9XG5cbiAgICBhc3luYyBtaWdyYXRlKCl7XG4gICAgICAgIGF3YWl0IHRoaXMucnVuKFwic2VxdWVsaXplIGRiOm1pZ3JhdGVcIik7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuKGNvbW1hbmQ6IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBzdGRvdXQsIHN0ZGVyciB9ID0gYXdhaXQgZXhlYyhjb21tYW5kKTtcblxuICAgICAgICAgICAgaWYgKHN0ZGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGVycm9yOiAke3N0ZGVycn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzdGRvdXQ6ICR7c3Rkb3V0fWApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19