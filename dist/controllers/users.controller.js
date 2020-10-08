"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _md5Hex = _interopRequireDefault(require("md5-hex"));

var _inversify = require("../inversify.config");

var _types = require("../Services/types");

/***
 *
 */
var UsersController = /*#__PURE__*/function () {
  function UsersController() {
    (0, _classCallCheck2["default"])(this, UsersController);
  }

  (0, _createClass2["default"])(UsersController, [{
    key: "FindAll",

    /***
     *
     * @param req
     * @param res
     */
    value: function () {
      var _FindAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var users;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _inversify.diContainer.get(_types.TYPES.UserService).FindAll();

              case 3:
                users = _context.sent;
                return _context.abrupt("return", res.json(users));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log('There was an error querying users', _context.t0);
                return _context.abrupt("return", res.status(500).json(_context.t0));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function FindAll(_x, _x2) {
        return _FindAll.apply(this, arguments);
      }

      return FindAll;
    }()
    /***
     *
     * @param req
     * @param res
     */

  }, {
    key: "FindBySlug",
    value: function () {
      var _FindBySlug = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _inversify.diContainer.get(_types.TYPES.UserService).FindBySlug(req.params.slug);

              case 3:
                user = _context2.sent;
                return _context2.abrupt("return", res.json(user));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log('***There was an error getting a user', _context2.t0);
                return _context2.abrupt("return", res.status(400).json(_context2.t0));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function FindBySlug(_x3, _x4) {
        return _FindBySlug.apply(this, arguments);
      }

      return FindBySlug;
    }()
    /***
     *
     * @param req
     * @param res
     */

  }, {
    key: "FindByUsername",
    value: function () {
      var _FindByUsername = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _inversify.diContainer.get(_types.TYPES.UserService).FindByUsername(req.params.username);

              case 3:
                user = _context3.sent;
                return _context3.abrupt("return", res.json(user));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log('***There was an error getting a user', _context3.t0);
                return _context3.abrupt("return", res.status(400).json(_context3.t0));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function FindByUsername(_x5, _x6) {
        return _FindByUsername.apply(this, arguments);
      }

      return FindByUsername;
    }()
    /***
     *
     * @param req
     * @param res
     */

  }, {
    key: "FindById",
    value: function () {
      var _FindById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _inversify.diContainer.get(_types.TYPES.UserService).FindById(+req.params.id);

              case 3:
                user = _context4.sent;
                return _context4.abrupt("return", res.json(user));

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log('***There was an error getting a user', _context4.t0);
                return _context4.abrupt("return", res.status(400).json(_context4.t0));

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function FindById(_x7, _x8) {
        return _FindById.apply(this, arguments);
      }

      return FindById;
    }()
    /***
     *
     * @param req
     * @param res
     */

  }, {
    key: "Create",
    value: function () {
      var _Create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var body, user;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                body = req.body;
                _context5.next = 4;
                return _inversify.diContainer.get(_types.TYPES.UserService).Create(body);

              case 4:
                user = _context5.sent;
                return _context5.abrupt("return", res.json(user));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                console.log('***There was an error creating a user', _context5.t0);
                return _context5.abrupt("return", res.status(500).json(_context5.t0));

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      function Create(_x9, _x10) {
        return _Create.apply(this, arguments);
      }

      return Create;
    }()
    /***
     *
     * @param req
     * @param res
     */

  }, {
    key: "Put",
    value: function () {
      var _Put = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var body, user;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                body = req.body;
                _context6.next = 4;
                return _inversify.diContainer.get(_types.TYPES.UserService).Update(body, +req.params.id);

              case 4:
                user = _context6.sent;
                return _context6.abrupt("return", res.json(user));

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                console.log('***There was an error updating a user', _context6.t0);
                return _context6.abrupt("return", res.status(500).json(_context6.t0));

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 8]]);
      }));

      function Put(_x11, _x12) {
        return _Put.apply(this, arguments);
      }

      return Put;
    }()
    /***
     *
     * @param req
     * @param res
     */

  }, {
    key: "Delete",
    value: function () {
      var _Delete = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _inversify.diContainer.get(_types.TYPES.UserService).Delete(req.params.slug);

              case 3:
                user = _context7.sent;
                return _context7.abrupt("return", res.json({
                  'message': 'deleted'
                }));

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                console.log('***Error deleting user', _context7.t0);
                return _context7.abrupt("return", res.status(400).json(_context7.t0));

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 7]]);
      }));

      function Delete(_x13, _x14) {
        return _Delete.apply(this, arguments);
      }

      return Delete;
    }()
    /***
     *
     * @param req
     * @param res
     */

  }, {
    key: "Login",
    value: function () {
      var _Login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
        var body, user;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                body = req.body;
                body.Password = (0, _md5Hex["default"])(body.Password);
                _context8.next = 5;
                return _inversify.diContainer.get(_types.TYPES.UserService).Login(body);

              case 5:
                user = _context8.sent;
                return _context8.abrupt("return", res.json(user));

              case 9:
                _context8.prev = 9;
                _context8.t0 = _context8["catch"](0);
                console.log('***There was an error loging a user', _context8.t0);
                return _context8.abrupt("return", res.status(500).json(_context8.t0));

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[0, 9]]);
      }));

      function Login(_x15, _x16) {
        return _Login.apply(this, arguments);
      }

      return Login;
    }()
  }]);
  return UsersController;
}();

exports.UsersController = UsersController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2Vycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIlVzZXJzQ29udHJvbGxlciIsInJlcSIsInJlcyIsImRpQ29udGFpbmVyIiwiZ2V0IiwiVFlQRVMiLCJVc2VyU2VydmljZSIsIkZpbmRBbGwiLCJ1c2VycyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiRmluZEJ5U2x1ZyIsInBhcmFtcyIsInNsdWciLCJ1c2VyIiwiRmluZEJ5VXNlcm5hbWUiLCJ1c2VybmFtZSIsIkZpbmRCeUlkIiwiaWQiLCJib2R5IiwiQ3JlYXRlIiwiVXBkYXRlIiwiRGVsZXRlIiwiUGFzc3dvcmQiLCJMb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTs7QUFDQTs7QUFFQTs7QUFFQTs7O0lBR2FBLGU7Ozs7Ozs7O0FBRVQ7Ozs7OztvSEFLY0MsRyxFQUFjQyxHOzs7Ozs7Ozt1QkFFQUMsdUJBQVlDLEdBQVosQ0FBOEJDLGFBQU1DLFdBQXBDLEVBQWlEQyxPQUFqRCxFOzs7QUFBZEMsZ0JBQUFBLEs7aURBQ0NOLEdBQUcsQ0FBQ08sSUFBSixDQUFTRCxLQUFULEM7Ozs7O0FBRVBFLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWjtpREFDT1QsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkgsSUFBaEIsYTs7Ozs7Ozs7Ozs7Ozs7OztBQUlmOzs7Ozs7Ozs7d0hBS2lCUixHLEVBQWNDLEc7Ozs7Ozs7O3VCQUVKQyx1QkFBWUMsR0FBWixDQUE4QkMsYUFBTUMsV0FBcEMsRUFBaURPLFVBQWpELENBQTREWixHQUFHLENBQUNhLE1BQUosQ0FBV0MsSUFBdkUsQzs7O0FBQWJDLGdCQUFBQSxJO2tEQUNDZCxHQUFHLENBQUNPLElBQUosQ0FBU08sSUFBVCxDOzs7OztBQUVQTixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0NBQVo7a0RBQ09ULEdBQUcsQ0FBQ1UsTUFBSixDQUFX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Q0FBQ08sSUFBSixDQUFTTyxJQUFULEM7Ozs7O0FBRVBOLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBWjtrREFDT1QsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkgsSUFBaEIsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcblxuaW1wb3J0ICogYXMgZGF0YWJhc2UgZnJvbSAnLi4vZGF0YWJhc2VzL21vZGVscyc7XG5cbmltcG9ydCB7IElVc2VyIH0gZnJvbSBcIi4uL2RhdGFiYXNlcy9tb2RlbHMvdXNlclwiO1xuXG5pbXBvcnQge3Y0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5pbXBvcnQgbWQ1SGV4IGZyb20gJ21kNS1oZXgnO1xuaW1wb3J0IHtkaUNvbnRhaW5lcn0gZnJvbSBcIi4uL2ludmVyc2lmeS5jb25maWdcIjtcbmltcG9ydCB7SVVzZXJTZXJ2aWNlfSBmcm9tIFwiLi4vU2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQge1RZUEVTfSBmcm9tIFwiLi4vU2VydmljZXMvdHlwZXNcIjtcblxuLyoqKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXJzQ29udHJvbGxlciB7XG5cbiAgICAvKioqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxXG4gICAgICogQHBhcmFtIHJlc1xuICAgICAqL1xuICAgIGFzeW5jIEZpbmRBbGwocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJVXNlclNlcnZpY2U+KFRZUEVTLlVzZXJTZXJ2aWNlKS5GaW5kQWxsKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24odXNlcnMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgcXVlcnlpbmcgdXNlcnMnLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxXG4gICAgICogQHBhcmFtIHJlc1xuICAgICAqL1xuICAgIGFzeW5jIEZpbmRCeVNsdWcocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElVc2VyU2VydmljZT4oVFlQRVMuVXNlclNlcnZpY2UpLkZpbmRCeVNsdWcocmVxLnBhcmFtcy5zbHVnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih1c2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKioqVGhlcmUgd2FzIGFuIGVycm9yIGdldHRpbmcgYSB1c2VyJywgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcVxuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKi9cbiAgICBhc3luYyBGaW5kQnlVc2VybmFtZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SVVzZXJTZXJ2aWNlPihUWVBFUy5Vc2VyU2VydmljZSkuRmluZEJ5VXNlcm5hbWUocmVxLnBhcmFtcy51c2VybmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24odXNlcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKlRoZXJlIHdhcyBhbiBlcnJvciBnZXR0aW5nIGEgdXNlcicsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcVxuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKi9cbiAgICBhc3luYyBGaW5kQnlJZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SVVzZXJTZXJ2aWNlPihUWVBFUy5Vc2VyU2VydmljZSkuRmluZEJ5SWQoK3JlcS5wYXJhbXMuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHVzZXIpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKipUaGVyZSB3YXMgYW4gZXJyb3IgZ2V0dGluZyBhIHVzZXInLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxXG4gICAgICogQHBhcmFtIHJlc1xuICAgICAqL1xuICAgIGFzeW5jIENyZWF0ZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0ICBib2R5OiBJVXNlciA9IHJlcS5ib2R5O1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJVXNlclNlcnZpY2U+KFRZUEVTLlVzZXJTZXJ2aWNlKS5DcmVhdGUoYm9keSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24odXNlcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKlRoZXJlIHdhcyBhbiBlcnJvciBjcmVhdGluZyBhIHVzZXInLGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXFcbiAgICAgKiBAcGFyYW0gcmVzXG4gICAgICovXG4gICAgYXN5bmMgUHV0KHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgIGJvZHk6IElVc2VyID0gcmVxLmJvZHk7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElVc2VyU2VydmljZT4oVFlQRVMuVXNlclNlcnZpY2UpLlVwZGF0ZShib2R5LCArcmVxLnBhcmFtcy5pZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24odXNlcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKlRoZXJlIHdhcyBhbiBlcnJvciB1cGRhdGluZyBhIHVzZXInLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxXG4gICAgICogQHBhcmFtIHJlc1xuICAgICAqL1xuICAgIGFzeW5jIERlbGV0ZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SVVzZXJTZXJ2aWNlPihUWVBFUy5Vc2VyU2VydmljZSkuRGVsZXRlKHJlcS5wYXJhbXMuc2x1Zyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeydtZXNzYWdlJzogJ2RlbGV0ZWQnfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKkVycm9yIGRlbGV0aW5nIHVzZXInLGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKioqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxXG4gICAgICogQHBhcmFtIHJlc1xuICAgICAqL1xuICAgIGFzeW5jIExvZ2luKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgIGJvZHk6IHtVc2VybmFtZTogc3RyaW5nLCBQYXNzd29yZDogc3RyaW5nfSA9IHJlcS5ib2R5O1xuICAgICAgICAgICAgYm9keS5QYXNzd29yZCA9IG1kNUhleChib2R5LlBhc3N3b3JkKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJVXNlclNlcnZpY2U+KFRZUEVTLlVzZXJTZXJ2aWNlKS5Mb2dpbihib2R5KTtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih1c2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKioqVGhlcmUgd2FzIGFuIGVycm9yIGxvZ2luZyBhIHVzZXInLGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19