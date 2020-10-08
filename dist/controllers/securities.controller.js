"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecuritiesController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("../inversify.config");

var _types = require("../Services/types");

/***
 *
 */
var SecuritiesController = /*#__PURE__*/function () {
  function SecuritiesController() {
    (0, _classCallCheck2["default"])(this, SecuritiesController);
  }

  (0, _createClass2["default"])(SecuritiesController, [{
    key: "FindAll",

    /***
     *
     * @param req
     * @param res
     */
    value: function () {
      var _FindAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var securities;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _inversify.diContainer.get(_types.TYPES.SecurityService).FindAll();

              case 3:
                securities = _context.sent;
                return _context.abrupt("return", res.json(securities));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log('There was an error querying securities', _context.t0);
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
    key: "InitUserApp",
    value: function () {
      var _InitUserApp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var security;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _inversify.diContainer.get(_types.TYPES.SecurityService).InitUserApp();

              case 3:
                security = _context2.sent;
                return _context2.abrupt("return", res.json(security));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log('There was an error init user and security', _context2.t0);
                return _context2.abrupt("return", res.status(500).json(_context2.t0));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function InitUserApp(_x3, _x4) {
        return _InitUserApp.apply(this, arguments);
      }

      return InitUserApp;
    }()
    /***
     *
     * @param req
     * @param res
     */

  }, {
    key: "FindBySlug",
    value: function () {
      var _FindBySlug = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var security;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _inversify.diContainer.get(_types.TYPES.SecurityService).FindBySlug(req.params.slug);

              case 3:
                security = _context3.sent;
                return _context3.abrupt("return", res.json(security));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log('***There was an error getting a security', _context3.t0);
                return _context3.abrupt("return", res.status(400).json(_context3.t0));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function FindBySlug(_x5, _x6) {
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
    key: "FindById",
    value: function () {
      var _FindById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var security;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _inversify.diContainer.get(_types.TYPES.SecurityService).FindById(+req.params.id);

              case 3:
                security = _context4.sent;
                return _context4.abrupt("return", res.json(security));

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                console.log('***There was an error getting a security', _context4.t0);
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
        var body, security;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                body = req.body;
                _context5.next = 4;
                return _inversify.diContainer.get(_types.TYPES.SecurityService).Create(body);

              case 4:
                security = _context5.sent;
                return _context5.abrupt("return", res.json(security));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                console.log('***There was an error creating a security', _context5.t0);
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
        var body, security;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                body = req.body;
                _context6.next = 4;
                return _inversify.diContainer.get(_types.TYPES.SecurityService).Update(body, +req.params.id);

              case 4:
                security = _context6.sent;
                return _context6.abrupt("return", res.json(security));

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                console.log('***There was an error updating a security', _context6.t0);
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
        var security;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _inversify.diContainer.get(_types.TYPES.SecurityService).Delete(req.params.slug);

              case 3:
                security = _context7.sent;
                return _context7.abrupt("return", res.json({
                  'message': 'deleted'
                }));

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                console.log('***Error deleting security', _context7.t0);
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
  }]);
  return SecuritiesController;
}();

exports.SecuritiesController = SecuritiesController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9zZWN1cml0aWVzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiU2VjdXJpdGllc0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJkaUNvbnRhaW5lciIsImdldCIsIlRZUEVTIiwiU2VjdXJpdHlTZXJ2aWNlIiwiRmluZEFsbCIsInNlY3VyaXRpZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIkluaXRVc2VyQXBwIiwic2VjdXJpdHkiLCJGaW5kQnlTbHVnIiwicGFyYW1zIiwic2x1ZyIsIkZpbmRCeUlkIiwiaWQiLCJib2R5IiwiQ3JlYXRlIiwiVXBkYXRlIiwiRGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7SUFHYUEsb0I7Ozs7Ozs7O0FBQ1Q7Ozs7OztvSEFLY0MsRyxFQUFjQyxHOzs7Ozs7Ozt1QkFFS0MsdUJBQVlDLEdBQVosQ0FBa0NDLGFBQU1DLGVBQXhDLEVBQXlEQyxPQUF6RCxFOzs7QUFBbkJDLGdCQUFBQSxVO2lEQUNDTixHQUFHLENBQUNPLElBQUosQ0FBU0QsVUFBVCxDOzs7OztBQUVQRSxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0NBQVo7aURBQ09ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLGE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjs7Ozs7Ozs7O3lIQUtrQlIsRyxFQUFjQyxHOzs7Ozs7Ozt1QkFFREMsdUJBQVlDLEdBQVosQ0FBa0NDLGFBQU1DLGVBQXhDLEVBQXlETyxXQUF6RCxFOzs7QUFBakJDLGdCQUFBQSxRO2tEQUNDWixHQUFHLENBQUNPLElBQUosQ0FBU0ssUUFBVCxDOzs7OztBQUVQSixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkNBQVo7a0RBQ09ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLGM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjs7Ozs7Ozs7O3dIQUtpQlIsRyxFQUFjQyxHOzs7Ozs7Ozt1QkFFQUMsdUJBQVlDLEdBQVosQ0FBa0NDLGFBQU1DLGVBQXhDLEVBQXlEUyxVQUF6RCxDQUFvRWQsR0FBRyxDQUFDZSxNQUFKLENBQVdDLElBQS9FLEM7OztBQUFqQkgsZ0JBQUFBLFE7a0RBQ0NaLEdBQUcsQ0FBQ08sSUFBSixDQUFTSyxRQUFULEM7Ozs7O0FBRVBKLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQ0FBWjtrREFDT1QsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkgsSUFBaEIsYzs7Ozs7Ozs7Ozs7Ozs7OztBQUlmOzs7Ozs7Ozs7c0hBS2VSLEcsRUFBY0MsRzs7Ozs7Ozs7dUJBRUVDLHVCQUFZQyxHQUFaLENBQWtDQyxhQUFNQyxlQUF4QyxFQUF5RFksUUFBekQsQ0FBa0UsQ0FBQ2pCLEdBQUcsQ0FBQ2UsTUFBSixDQUFXRyxFQUE5RSxDOzs7QUFBakJMLGdCQUFBQSxRO2tEQUNDWixHQUFHLENBQUNPLElBQUosQ0FBU0ssUUFBVCxDOzs7OztBQUVQSixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMENBQVo7a0RBQ09ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLGM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjs7Ozs7Ozs7O29IQUthUixHLEVBQWNDLEc7Ozs7Ozs7QUFFWmtCLGdCQUFBQSxJLEdBQWtCbkIsR0FBRyxDQUFDbUIsSTs7dUJBQ05qQix1QkFBWUMsR0FBWixDQUFrQ0MsYUFBTUMsZUFBeEMsRUFBeURlLE1BQXpELENBQWdFRCxJQUFoRSxDOzs7QUFBakJOLGdCQUFBQSxRO2tEQUNDWixHQUFHLENBQUNPLElBQUosQ0FBU0ssUUFBVCxDOzs7OztBQUVQSixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkNBQVo7a0RBQ09ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLGM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjs7Ozs7Ozs7O2lIQUtVUixHLEVBQWNDLEc7Ozs7Ozs7QUFFVGtCLGdCQUFBQSxJLEdBQWtCbkIsR0FBRyxDQUFDbUIsSTs7dUJBQ05qQix1QkFBWUMsR0FBWixDQUFrQ0MsYUFBTUMsZUFBeEMsRUFBeURnQixNQUF6RCxDQUFnRUYsSUFBaEUsRUFBc0UsQ0FBQ25CLEdBQUcsQ0FBQ2UsTUFBSixDQUFXRyxFQUFsRixDOzs7QUFBakJMLGdCQUFBQSxRO2tEQUNDWixHQUFHLENBQUNPLElBQUosQ0FBU0ssUUFBVCxDOzs7OztBQUVQSixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMkNBQVo7a0RBQ09ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLGM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjs7Ozs7Ozs7O29IQUthUixHLEVBQWNDLEc7Ozs7Ozs7O3VCQUVJQyx1QkFBWUMsR0FBWixDQUFrQ0MsYUFBTUMsZUFBeEMsRUFBeURpQixNQUF6RCxDQUFnRXRCLEdBQUcsQ0FBQ2UsTUFBSixDQUFXQyxJQUEzRSxDOzs7QUFBakJILGdCQUFBQSxRO2tEQUNDWixHQUFHLENBQUNPLElBQUosQ0FBUztBQUFDLDZCQUFXO0FBQVosaUJBQVQsQzs7Ozs7QUFFUEMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO2tEQUNPVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCSCxJQUFoQixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUm91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7SVNlY3VyaXR5fSBmcm9tIFwiLi4vZGF0YWJhc2VzL21vZGVscy9zZWN1cml0eVwiO1xuaW1wb3J0IHtkaUNvbnRhaW5lcn0gZnJvbSBcIi4uL2ludmVyc2lmeS5jb25maWdcIjtcbmltcG9ydCB7SVNlY3VyaXR5U2VydmljZX0gZnJvbSBcIi4uL1NlcnZpY2VzL3NlY3VyaXR5LnNlcnZpY2VcIjtcbmltcG9ydCB7VFlQRVN9IGZyb20gXCIuLi9TZXJ2aWNlcy90eXBlc1wiO1xuXG4vKioqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgU2VjdXJpdGllc0NvbnRyb2xsZXIge1xuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXFcbiAgICAgKiBAcGFyYW0gcmVzXG4gICAgICovXG4gICAgYXN5bmMgRmluZEFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHNlY3VyaXRpZXMgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SVNlY3VyaXR5U2VydmljZT4oVFlQRVMuU2VjdXJpdHlTZXJ2aWNlKS5GaW5kQWxsKCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oc2VjdXJpdGllcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBxdWVyeWluZyBzZWN1cml0aWVzJywgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcVxuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKi9cbiAgICBhc3luYyBJbml0VXNlckFwcChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHNlY3VyaXR5ID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElTZWN1cml0eVNlcnZpY2U+KFRZUEVTLlNlY3VyaXR5U2VydmljZSkuSW5pdFVzZXJBcHAoKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihzZWN1cml0eSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBpbml0IHVzZXIgYW5kIHNlY3VyaXR5JywgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcVxuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKi9cbiAgICBhc3luYyBGaW5kQnlTbHVnKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SVNlY3VyaXR5U2VydmljZT4oVFlQRVMuU2VjdXJpdHlTZXJ2aWNlKS5GaW5kQnlTbHVnKHJlcS5wYXJhbXMuc2x1Zyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oc2VjdXJpdHkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKipUaGVyZSB3YXMgYW4gZXJyb3IgZ2V0dGluZyBhIHNlY3VyaXR5JywgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcVxuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKi9cbiAgICBhc3luYyBGaW5kQnlJZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHNlY3VyaXR5ID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElTZWN1cml0eVNlcnZpY2U+KFRZUEVTLlNlY3VyaXR5U2VydmljZSkuRmluZEJ5SWQoK3JlcS5wYXJhbXMuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHNlY3VyaXR5KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKioqVGhlcmUgd2FzIGFuIGVycm9yIGdldHRpbmcgYSBzZWN1cml0eScsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXFcbiAgICAgKiBAcGFyYW0gcmVzXG4gICAgICovXG4gICAgYXN5bmMgQ3JlYXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgIGJvZHk6IElTZWN1cml0eSA9IHJlcS5ib2R5O1xuICAgICAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SVNlY3VyaXR5U2VydmljZT4oVFlQRVMuU2VjdXJpdHlTZXJ2aWNlKS5DcmVhdGUoYm9keSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oc2VjdXJpdHkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKipUaGVyZSB3YXMgYW4gZXJyb3IgY3JlYXRpbmcgYSBzZWN1cml0eScsZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcVxuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKi9cbiAgICBhc3luYyBQdXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCAgYm9keTogSVNlY3VyaXR5ID0gcmVxLmJvZHk7XG4gICAgICAgICAgICBjb25zdCBzZWN1cml0eSA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJU2VjdXJpdHlTZXJ2aWNlPihUWVBFUy5TZWN1cml0eVNlcnZpY2UpLlVwZGF0ZShib2R5LCArcmVxLnBhcmFtcy5pZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oc2VjdXJpdHkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKipUaGVyZSB3YXMgYW4gZXJyb3IgdXBkYXRpbmcgYSBzZWN1cml0eScsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXFcbiAgICAgKiBAcGFyYW0gcmVzXG4gICAgICovXG4gICAgYXN5bmMgRGVsZXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SVNlY3VyaXR5U2VydmljZT4oVFlQRVMuU2VjdXJpdHlTZXJ2aWNlKS5EZWxldGUocmVxLnBhcmFtcy5zbHVnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7J21lc3NhZ2UnOiAnZGVsZXRlZCd9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKioqRXJyb3IgZGVsZXRpbmcgc2VjdXJpdHknLGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==