"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalizationsController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("../inversify.config");

var _types = require("../Services/types");

/***
 *
 */
var LocalizationsController = /*#__PURE__*/function () {
  function LocalizationsController() {
    (0, _classCallCheck2["default"])(this, LocalizationsController);
  }

  (0, _createClass2["default"])(LocalizationsController, [{
    key: "FindAll",

    /***
     *
     * @param req
     * @param res
     */
    value: function () {
      var _FindAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var localizations;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _inversify.diContainer.get(_types.TYPES.LocalizationService).FindAll();

              case 3:
                localizations = _context.sent;
                return _context.abrupt("return", res.json(localizations));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log('There was an error querying localizations', _context.t0);
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
        var localization;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _inversify.diContainer.get(_types.TYPES.LocalizationService).FindBySlug(req.params.slug);

              case 3:
                localization = _context2.sent;
                return _context2.abrupt("return", res.json(localization));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log('***There was an error getting a localization', _context2.t0);
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
    key: "FindById",
    value: function () {
      var _FindById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var localization;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _inversify.diContainer.get(_types.TYPES.LocalizationService).FindById(+req.params.id);

              case 3:
                localization = _context3.sent;
                return _context3.abrupt("return", res.json(localization));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log('***There was an error getting a localization', _context3.t0);
                return _context3.abrupt("return", res.status(400).json(_context3.t0));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 7]]);
      }));

      function FindById(_x5, _x6) {
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
      var _Create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var body, localization;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                body = req.body;
                _context4.next = 4;
                return _inversify.diContainer.get(_types.TYPES.LocalizationService).Create(body);

              case 4:
                localization = _context4.sent;
                return _context4.abrupt("return", res.json(localization));

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                console.log('***There was an error creating a localization', _context4.t0);
                return _context4.abrupt("return", res.status(500).json(_context4.t0));

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 8]]);
      }));

      function Create(_x7, _x8) {
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
      var _Put = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var body, localization;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                body = req.body;
                _context5.next = 4;
                return _inversify.diContainer.get(_types.TYPES.LocalizationService).Update(body, +req.params.id);

              case 4:
                localization = _context5.sent;
                return _context5.abrupt("return", res.json(localization));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                console.log('***There was an error updating a localization', _context5.t0);
                return _context5.abrupt("return", res.status(500).json(_context5.t0));

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 8]]);
      }));

      function Put(_x9, _x10) {
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
      var _Delete = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var localization;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _inversify.diContainer.get(_types.TYPES.LocalizationService).Delete(req.params.slug);

              case 3:
                localization = _context6.sent;
                return _context6.abrupt("return", res.json({
                  'message': 'deleted'
                }));

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                console.log('***Error deleting localization', _context6.t0);
                return _context6.abrupt("return", res.status(400).json(_context6.t0));

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 7]]);
      }));

      function Delete(_x11, _x12) {
        return _Delete.apply(this, arguments);
      }

      return Delete;
    }()
  }]);
  return LocalizationsController;
}();

exports.LocalizationsController = LocalizationsController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9sb2NhbGl6YXRpb25zLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiTG9jYWxpemF0aW9uc0NvbnRyb2xsZXIiLCJyZXEiLCJyZXMiLCJkaUNvbnRhaW5lciIsImdldCIsIlRZUEVTIiwiTG9jYWxpemF0aW9uU2VydmljZSIsIkZpbmRBbGwiLCJsb2NhbGl6YXRpb25zIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJGaW5kQnlTbHVnIiwicGFyYW1zIiwic2x1ZyIsImxvY2FsaXphdGlvbiIsIkZpbmRCeUlkIiwiaWQiLCJib2R5IiwiQ3JlYXRlIiwiVXBkYXRlIiwiRGVsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUVBOztBQUlBOzs7SUFHYUEsdUI7Ozs7Ozs7O0FBRVQ7Ozs7OztvSEFLY0MsRyxFQUFjQyxHOzs7Ozs7Ozt1QkFFUUMsdUJBQVlDLEdBQVosQ0FBc0NDLGFBQU1DLG1CQUE1QyxFQUFpRUMsT0FBakUsRTs7O0FBQXRCQyxnQkFBQUEsYTtpREFDQ04sR0FBRyxDQUFDTyxJQUFKLENBQVNELGFBQVQsQzs7Ozs7QUFFUEUsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJDQUFaO2lEQUNPVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCSCxJQUFoQixhOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7Ozs7Ozs7Ozt3SEFLaUJSLEcsRUFBY0MsRzs7Ozs7Ozs7dUJBRUlDLHVCQUFZQyxHQUFaLENBQXNDQyxhQUFNQyxtQkFBNUMsRUFBaUVPLFVBQWpFLENBQTRFWixHQUFHLENBQUNhLE1BQUosQ0FBV0MsSUFBdkYsQzs7O0FBQXJCQyxnQkFBQUEsWTtrREFDQ2QsR0FBRyxDQUFDTyxJQUFKLENBQVNPLFlBQVQsQzs7Ozs7QUFFUE4sZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhDQUFaO2tEQUNPVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCSCxJQUFoQixjOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7Ozs7Ozs7OztzSEFLZVIsRyxFQUFjQyxHOzs7Ozs7Ozt1QkFFTUMsdUJBQVlDLEdBQVosQ0FBc0NDLGFBQU1DLG1CQUE1QyxFQUFpRVcsUUFBakUsQ0FBMEUsQ0FBQ2hCLEdBQUcsQ0FBQ2EsTUFBSixDQUFXSSxFQUF0RixDOzs7QUFBckJGLGdCQUFBQSxZO2tEQUNDZCxHQUFHLENBQUNPLElBQUosQ0FBU08sWUFBVCxDOzs7OztBQUVQTixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksOENBQVo7a0RBQ09ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLGM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjs7Ozs7Ozs7O29IQUthUixHLEVBQWNDLEc7Ozs7Ozs7QUFFWmlCLGdCQUFBQSxJLEdBQXNCbEIsR0FBRyxDQUFDa0IsSTs7dUJBQ05oQix1QkFBWUMsR0FBWixDQUFzQ0MsYUFBTUMsbUJBQTVDLEVBQWlFYyxNQUFqRSxDQUF3RUQsSUFBeEUsQzs7O0FBQXJCSCxnQkFBQUEsWTtrREFDQ2QsR0FBRyxDQUFDTyxJQUFKLENBQVNPLFlBQVQsQzs7Ozs7QUFFUE4sZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtDQUFaO2tEQUNPVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCSCxJQUFoQixjOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7Ozs7Ozs7OztpSEFLVVIsRyxFQUFjQyxHOzs7Ozs7O0FBRVRpQixnQkFBQUEsSSxHQUFzQmxCLEdBQUcsQ0FBQ2tCLEk7O3VCQUNOaEIsdUJBQVlDLEdBQVosQ0FBc0NDLGFBQU1DLG1CQUE1QyxFQUFpRWUsTUFBakUsQ0FBd0VGLElBQXhFLEVBQThFLENBQUNsQixHQUFHLENBQUNhLE1BQUosQ0FBV0ksRUFBMUYsQzs7O0FBQXJCRixnQkFBQUEsWTtrREFDQ2QsR0FBRyxDQUFDTyxJQUFKLENBQVNPLFlBQVQsQzs7Ozs7QUFFUE4sZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtDQUFaO2tEQUNPVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCSCxJQUFoQixjOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7Ozs7Ozs7OztvSEFLYVIsRyxFQUFjQyxHOzs7Ozs7Ozt1QkFFUUMsdUJBQVlDLEdBQVosQ0FBc0NDLGFBQU1DLG1CQUE1QyxFQUFpRWdCLE1BQWpFLENBQXdFckIsR0FBRyxDQUFDYSxNQUFKLENBQVdDLElBQW5GLEM7OztBQUFyQkMsZ0JBQUFBLFk7a0RBQ0NkLEdBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUMsNkJBQVc7QUFBWixpQkFBVCxDOzs7OztBQUVQQyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVo7a0RBQ09ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG5cbmltcG9ydCB7IElMb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vZGF0YWJhc2VzL21vZGVscy9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7ZGlDb250YWluZXJ9IGZyb20gXCIuLi9pbnZlcnNpZnkuY29uZmlnXCI7XG5pbXBvcnQge0lMb2NhbGl6YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vU2VydmljZXMvbG9jYWxpemF0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7VFlQRVN9IGZyb20gXCIuLi9TZXJ2aWNlcy90eXBlc1wiO1xuXG5cblxuLyoqKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIExvY2FsaXphdGlvbnNDb250cm9sbGVyIHtcblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXFcbiAgICAgKiBAcGFyYW0gcmVzXG4gICAgICovXG4gICAgYXN5bmMgRmluZEFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SUxvY2FsaXphdGlvblNlcnZpY2U+KFRZUEVTLkxvY2FsaXphdGlvblNlcnZpY2UpLkZpbmRBbGwoKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihsb2NhbGl6YXRpb25zKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIHF1ZXJ5aW5nIGxvY2FsaXphdGlvbnMnLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKioqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVxXG4gICAgICogQHBhcmFtIHJlc1xuICAgICAqL1xuICAgIGFzeW5jIEZpbmRCeVNsdWcocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGl6YXRpb24gPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SUxvY2FsaXphdGlvblNlcnZpY2U+KFRZUEVTLkxvY2FsaXphdGlvblNlcnZpY2UpLkZpbmRCeVNsdWcocmVxLnBhcmFtcy5zbHVnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihsb2NhbGl6YXRpb24pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKipUaGVyZSB3YXMgYW4gZXJyb3IgZ2V0dGluZyBhIGxvY2FsaXphdGlvbicsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXFcbiAgICAgKiBAcGFyYW0gcmVzXG4gICAgICovXG4gICAgYXN5bmMgRmluZEJ5SWQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbGl6YXRpb24gPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SUxvY2FsaXphdGlvblNlcnZpY2U+KFRZUEVTLkxvY2FsaXphdGlvblNlcnZpY2UpLkZpbmRCeUlkKCtyZXEucGFyYW1zLmlkKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihsb2NhbGl6YXRpb24pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKipUaGVyZSB3YXMgYW4gZXJyb3IgZ2V0dGluZyBhIGxvY2FsaXphdGlvbicsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXFcbiAgICAgKiBAcGFyYW0gcmVzXG4gICAgICovXG4gICAgYXN5bmMgQ3JlYXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgIGJvZHk6IElMb2NhbGl6YXRpb24gPSByZXEuYm9keTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsaXphdGlvbiA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJTG9jYWxpemF0aW9uU2VydmljZT4oVFlQRVMuTG9jYWxpemF0aW9uU2VydmljZSkuQ3JlYXRlKGJvZHkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGxvY2FsaXphdGlvbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKlRoZXJlIHdhcyBhbiBlcnJvciBjcmVhdGluZyBhIGxvY2FsaXphdGlvbicsZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcVxuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKi9cbiAgICBhc3luYyBQdXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCAgYm9keTogSUxvY2FsaXphdGlvbiA9IHJlcS5ib2R5O1xuICAgICAgICAgICAgY29uc3QgbG9jYWxpemF0aW9uID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElMb2NhbGl6YXRpb25TZXJ2aWNlPihUWVBFUy5Mb2NhbGl6YXRpb25TZXJ2aWNlKS5VcGRhdGUoYm9keSwgK3JlcS5wYXJhbXMuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGxvY2FsaXphdGlvbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKlRoZXJlIHdhcyBhbiBlcnJvciB1cGRhdGluZyBhIGxvY2FsaXphdGlvbicsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXFcbiAgICAgKiBAcGFyYW0gcmVzXG4gICAgICovXG4gICAgYXN5bmMgRGVsZXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbG9jYWxpemF0aW9uID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElMb2NhbGl6YXRpb25TZXJ2aWNlPihUWVBFUy5Mb2NhbGl6YXRpb25TZXJ2aWNlKS5EZWxldGUocmVxLnBhcmFtcy5zbHVnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7J21lc3NhZ2UnOiAnZGVsZXRlZCd9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKioqRXJyb3IgZGVsZXRpbmcgbG9jYWxpemF0aW9uJyxlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=