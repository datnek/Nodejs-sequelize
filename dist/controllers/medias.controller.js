"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediasController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("../inversify.config");

var _types = require("../Services/types");

// import * as database from '../databases/models';
var database = require('../databases/models');

var MediasController = /*#__PURE__*/function () {
  function MediasController() {
    (0, _classCallCheck2["default"])(this, MediasController);
  }

  (0, _createClass2["default"])(MediasController, [{
    key: "FindAll",

    /***
     *
     * @param req
     * @param res
     */
    value: function () {
      var _FindAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var medias;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _inversify.diContainer.get(_types.TYPES.MediaService).FindAll();

              case 3:
                medias = _context.sent;
                return _context.abrupt("return", res.json(medias));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log('There was an error querying medias', _context.t0);
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
        var media;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _inversify.diContainer.get(_types.TYPES.MediaService).FindBySlug(req.params.slug);

              case 3:
                media = _context2.sent;
                return _context2.abrupt("return", res.json(media));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log('***There was an error getting a media', _context2.t0);
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
        var media;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _inversify.diContainer.get(_types.TYPES.MediaService).FindById(+req.params.id);

              case 3:
                media = _context3.sent;
                return _context3.abrupt("return", res.json(media));

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                console.log('***There was an error getting a media', _context3.t0);
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
        var body, media;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                body = req.body;
                _context4.next = 4;
                return _inversify.diContainer.get(_types.TYPES.MediaService).Create(body);

              case 4:
                media = _context4.sent;
                return _context4.abrupt("return", res.json(media));

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                console.log('***There was an error creating a media', _context4.t0);
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
        var body, media;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                body = req.body;
                _context5.next = 4;
                return _inversify.diContainer.get(_types.TYPES.MediaService).Update(body, +req.params.id);

              case 4:
                media = _context5.sent;
                return _context5.abrupt("return", res.json(media));

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                console.log('***There was an error updating a media', _context5.t0);
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
        var media;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _inversify.diContainer.get(_types.TYPES.MediaService).Delete(req.params.slug);

              case 3:
                media = _context6.sent;
                return _context6.abrupt("return", res.json({
                  'message': 'deleted'
                }));

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                console.log('***Error deleting media', _context6.t0);
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
  return MediasController;
}();

exports.MediasController = MediasController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9tZWRpYXMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJkYXRhYmFzZSIsInJlcXVpcmUiLCJNZWRpYXNDb250cm9sbGVyIiwicmVxIiwicmVzIiwiZGlDb250YWluZXIiLCJnZXQiLCJUWVBFUyIsIk1lZGlhU2VydmljZSIsIkZpbmRBbGwiLCJtZWRpYXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIkZpbmRCeVNsdWciLCJwYXJhbXMiLCJzbHVnIiwibWVkaWEiLCJGaW5kQnlJZCIsImlkIiwiYm9keSIsIkNyZWF0ZSIsIlVwZGF0ZSIsIkRlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQTs7QUFFQTs7QUFOQTtBQUNBLElBQU9BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLHFCQUFELENBQXpCOztJQVNhQyxnQjs7Ozs7Ozs7QUFFVDs7Ozs7O29IQUtjQyxHLEVBQWNDLEc7Ozs7Ozs7O3VCQUVDQyx1QkFBWUMsR0FBWixDQUErQkMsYUFBTUMsWUFBckMsRUFBbURDLE9BQW5ELEU7OztBQUFmQyxnQkFBQUEsTTtpREFDQ04sR0FBRyxDQUFDTyxJQUFKLENBQVNELE1BQVQsQzs7Ozs7QUFFUEUsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUFaO2lEQUNPVCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCSCxJQUFoQixhOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWY7Ozs7Ozs7Ozt3SEFLaUJSLEcsRUFBY0MsRzs7Ozs7Ozs7dUJBRUhDLHVCQUFZQyxHQUFaLENBQStCQyxhQUFNQyxZQUFyQyxFQUFtRE8sVUFBbkQsQ0FBOERaLEdBQUcsQ0FBQ2EsTUFBSixDQUFXQyxJQUF6RSxDOzs7QUFBZEMsZ0JBQUFBLEs7a0RBQ0NkLEdBQUcsQ0FBQ08sSUFBSixDQUFTTyxLQUFULEM7Ozs7O0FBRVBOLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1Q0FBWjtrREFDT1QsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkgsSUFBaEIsYzs7Ozs7Ozs7Ozs7Ozs7OztBQUlmOzs7Ozs7Ozs7c0hBS2VSLEcsRUFBY0MsRzs7Ozs7Ozs7dUJBRURDLHVCQUFZQyxHQUFaLENBQStCQyxhQUFNQyxZQUFyQyxFQUFtRFcsUUFBbkQsQ0FBNEQsQ0FBQ2hCLEdBQUcsQ0FBQ2EsTUFBSixDQUFXSSxFQUF4RSxDOzs7QUFBZEYsZ0JBQUFBLEs7a0RBQ0NkLEdBQUcsQ0FBQ08sSUFBSixDQUFTTyxLQUFULEM7Ozs7O0FBRVBOLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1Q0FBWjtrREFDT1QsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkgsSUFBaEIsYzs7Ozs7Ozs7Ozs7Ozs7OztBQUlmOzs7Ozs7Ozs7b0hBS2FSLEcsRUFBY0MsRzs7Ozs7OztBQUVaaUIsZ0JBQUFBLEksR0FBZWxCLEdBQUcsQ0FBQ2tCLEk7O3VCQUNOaEIsdUJBQVlDLEdBQVosQ0FBK0JDLGFBQU1DLFlBQXJDLEVBQW1EYyxNQUFuRCxDQUEwREQsSUFBMUQsQzs7O0FBQWRILGdCQUFBQSxLO2tEQUNDZCxHQUFHLENBQUNPLElBQUosQ0FBU08sS0FBVCxDOzs7OztBQUVQTixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0NBQVo7a0RBQ09ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLGM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjs7Ozs7Ozs7O2lIQUtVUixHLEVBQWNDLEc7Ozs7Ozs7QUFFVGlCLGdCQUFBQSxJLEdBQWVsQixHQUFHLENBQUNrQixJOzt1QkFDTmhCLHVCQUFZQyxHQUFaLENBQStCQyxhQUFNQyxZQUFyQyxFQUFtRGUsTUFBbkQsQ0FBMERGLElBQTFELEVBQWdFLENBQUNsQixHQUFHLENBQUNhLE1BQUosQ0FBV0ksRUFBNUUsQzs7O0FBQWRGLGdCQUFBQSxLO2tEQUNDZCxHQUFHLENBQUNPLElBQUosQ0FBU08sS0FBVCxDOzs7OztBQUVQTixnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0NBQVo7a0RBQ09ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLGM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZjs7Ozs7Ozs7O29IQUthUixHLEVBQWNDLEc7Ozs7Ozs7O3VCQUVDQyx1QkFBWUMsR0FBWixDQUErQkMsYUFBTUMsWUFBckMsRUFBbURnQixNQUFuRCxDQUEwRHJCLEdBQUcsQ0FBQ2EsTUFBSixDQUFXQyxJQUFyRSxDOzs7QUFBZEMsZ0JBQUFBLEs7a0RBQ0NkLEdBQUcsQ0FBQ08sSUFBSixDQUFTO0FBQUMsNkJBQVc7QUFBWixpQkFBVCxDOzs7OztBQUVQQyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7a0RBQ09ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JILElBQWhCLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XG4vLyBpbXBvcnQgKiBhcyBkYXRhYmFzZSBmcm9tICcuLi9kYXRhYmFzZXMvbW9kZWxzJztcbmNvbnN0ICBkYXRhYmFzZSA9IHJlcXVpcmUoJy4uL2RhdGFiYXNlcy9tb2RlbHMnKTtcblxuaW1wb3J0IHt2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7ZGlDb250YWluZXJ9IGZyb20gXCIuLi9pbnZlcnNpZnkuY29uZmlnXCI7XG5pbXBvcnQge0lNZWRpYVNlcnZpY2V9IGZyb20gXCIuLi9TZXJ2aWNlcy9tZWRpYS5zZXJ2aWNlXCI7XG5pbXBvcnQge1RZUEVTfSBmcm9tIFwiLi4vU2VydmljZXMvdHlwZXNcIjtcbmltcG9ydCB7SU1lZGlhfSBmcm9tIFwiLi4vZGF0YWJhc2VzL21vZGVscy9tZWRpYVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBNZWRpYXNDb250cm9sbGVyIHtcblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXFcbiAgICAgKiBAcGFyYW0gcmVzXG4gICAgICovXG4gICAgYXN5bmMgRmluZEFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1lZGlhcyA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJTWVkaWFTZXJ2aWNlPihUWVBFUy5NZWRpYVNlcnZpY2UpLkZpbmRBbGwoKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbihtZWRpYXMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgcXVlcnlpbmcgbWVkaWFzJywgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcVxuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKi9cbiAgICBhc3luYyBGaW5kQnlTbHVnKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbWVkaWEgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SU1lZGlhU2VydmljZT4oVFlQRVMuTWVkaWFTZXJ2aWNlKS5GaW5kQnlTbHVnKHJlcS5wYXJhbXMuc2x1Zyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24obWVkaWEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKipUaGVyZSB3YXMgYW4gZXJyb3IgZ2V0dGluZyBhIG1lZGlhJywgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcVxuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKi9cbiAgICBhc3luYyBGaW5kQnlJZChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElNZWRpYVNlcnZpY2U+KFRZUEVTLk1lZGlhU2VydmljZSkuRmluZEJ5SWQoK3JlcS5wYXJhbXMuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKG1lZGlhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKioqVGhlcmUgd2FzIGFuIGVycm9yIGdldHRpbmcgYSBtZWRpYScsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXFcbiAgICAgKiBAcGFyYW0gcmVzXG4gICAgICovXG4gICAgYXN5bmMgQ3JlYXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgIGJvZHk6IElNZWRpYSA9IHJlcS5ib2R5O1xuICAgICAgICAgICAgY29uc3QgbWVkaWEgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SU1lZGlhU2VydmljZT4oVFlQRVMuTWVkaWFTZXJ2aWNlKS5DcmVhdGUoYm9keSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24obWVkaWEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKipUaGVyZSB3YXMgYW4gZXJyb3IgY3JlYXRpbmcgYSBtZWRpYScsZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcVxuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKi9cbiAgICBhc3luYyBQdXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCAgYm9keTogSU1lZGlhID0gcmVxLmJvZHk7XG4gICAgICAgICAgICBjb25zdCBtZWRpYSA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJTWVkaWFTZXJ2aWNlPihUWVBFUy5NZWRpYVNlcnZpY2UpLlVwZGF0ZShib2R5LCArcmVxLnBhcmFtcy5pZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24obWVkaWEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKipUaGVyZSB3YXMgYW4gZXJyb3IgdXBkYXRpbmcgYSBtZWRpYScsIGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXFcbiAgICAgKiBAcGFyYW0gcmVzXG4gICAgICovXG4gICAgYXN5bmMgRGVsZXRlKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbWVkaWEgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SU1lZGlhU2VydmljZT4oVFlQRVMuTWVkaWFTZXJ2aWNlKS5EZWxldGUocmVxLnBhcmFtcy5zbHVnKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7J21lc3NhZ2UnOiAnZGVsZXRlZCd9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnKioqRXJyb3IgZGVsZXRpbmcgbWVkaWEnLGVycik7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==