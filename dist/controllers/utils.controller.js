"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UtilsController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("../inversify.config");

var _types = require("../Services/types");

var UtilsController = /*#__PURE__*/function () {
  function UtilsController() {
    (0, _classCallCheck2["default"])(this, UtilsController);
  }

  (0, _createClass2["default"])(UtilsController, [{
    key: "SendMail",
    value: function () {
      var _SendMail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var info;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _inversify.diContainer.get(_types.TYPES.MailingService).Send(req.body.Body, req.body.Recipients, req.body.Subject, req.body.IsHtml);

              case 3:
                info = _context.sent;
                return _context.abrupt("return", res.json({
                  message: "Message ".concat(info.messageId, " sent: ").concat(info.response)
                }));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.log('There was an error sending an email', _context.t0);
                return _context.abrupt("return", res.status(500).json(_context.t0));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function SendMail(_x, _x2) {
        return _SendMail.apply(this, arguments);
      }

      return SendMail;
    }()
  }, {
    key: "SendSms",
    value: function () {
      var _SendSms = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var info;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _inversify.diContainer.get(_types.TYPES.SmsService).Send(req.body.Recipients, req.body.Body, req.body.Subject);

              case 3:
                info = _context2.sent;
                return _context2.abrupt("return", res.json({
                  message: "Message ".concat(info.messageId, " sent: ").concat(info.response)
                }));

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log('There was an error sending a sms', _context2.t0);
                return _context2.abrupt("return", res.status(500).json(_context2.t0));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      function SendSms(_x3, _x4) {
        return _SendSms.apply(this, arguments);
      }

      return SendSms;
    }()
  }, {
    key: "SaveFile",
    value: function () {
      var _SaveFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _inversify.diContainer.get(_types.TYPES.UtilsService).SaveFile(req.body.File, req.body.Filename, req.body.SubDir);

                return _context3.abrupt("return", res.json({
                  message: "Uploaded image successfull"
                }));

              case 5:
                _context3.prev = 5;
                _context3.t0 = _context3["catch"](0);
                console.log('There was an error saving file', _context3.t0);
                return _context3.abrupt("return", res.status(500).json(_context3.t0));

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 5]]);
      }));

      function SaveFile(_x5, _x6) {
        return _SaveFile.apply(this, arguments);
      }

      return SaveFile;
    }()
  }]);
  return UtilsController;
}();

exports.UtilsController = UtilsController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91dGlscy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbIlV0aWxzQ29udHJvbGxlciIsInJlcSIsInJlcyIsImRpQ29udGFpbmVyIiwiZ2V0IiwiVFlQRVMiLCJNYWlsaW5nU2VydmljZSIsIlNlbmQiLCJib2R5IiwiQm9keSIsIlJlY2lwaWVudHMiLCJTdWJqZWN0IiwiSXNIdG1sIiwiaW5mbyIsImpzb24iLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiU21zU2VydmljZSIsIlV0aWxzU2VydmljZSIsIlNhdmVGaWxlIiwiRmlsZSIsIkZpbGVuYW1lIiwiU3ViRGlyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztJQUthQSxlOzs7Ozs7OztxSEFHTUMsRyxFQUFjQyxHOzs7Ozs7Ozt1QkFHRkMsdUJBQVlDLEdBQVosQ0FBaUNDLGFBQU1DLGNBQXZDLEVBQXVEQyxJQUF2RCxDQUE0RE4sR0FBRyxDQUFDTyxJQUFKLENBQVNDLElBQXJFLEVBQ2ZSLEdBQUcsQ0FBQ08sSUFBSixDQUFTRSxVQURNLEVBQ01ULEdBQUcsQ0FBQ08sSUFBSixDQUFTRyxPQURmLEVBQ3dCVixHQUFHLENBQUNPLElBQUosQ0FBU0ksTUFEakMsQzs7O0FBQWJDLGdCQUFBQSxJO2lEQUdDWCxHQUFHLENBQUNZLElBQUosQ0FBUztBQUNaQyxrQkFBQUEsT0FBTyxvQkFBYUYsSUFBSSxDQUFDRyxTQUFsQixvQkFBcUNILElBQUksQ0FBQ0ksUUFBMUM7QUFESyxpQkFBVCxDOzs7OztBQUlQQyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUNBQVo7aURBQ09qQixHQUFHLENBQUNrQixNQUFKLENBQVcsR0FBWCxFQUFnQk4sSUFBaEIsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxSEFJRGIsRyxFQUFjQyxHOzs7Ozs7Ozt1QkFHREMsdUJBQVlDLEdBQVosQ0FBNkJDLGFBQU1nQixVQUFuQyxFQUErQ2QsSUFBL0MsQ0FDZk4sR0FBRyxDQUFDTyxJQUFKLENBQVNFLFVBRE0sRUFFZlQsR0FBRyxDQUFDTyxJQUFKLENBQVNDLElBRk0sRUFHZlIsR0FBRyxDQUFDTyxJQUFKLENBQVNHLE9BSE0sQzs7O0FBQWJFLGdCQUFBQSxJO2tEQUtDWCxHQUFHLENBQUNZLElBQUosQ0FBUztBQUNaQyxrQkFBQUEsT0FBTyxvQkFBYUYsSUFBSSxDQUFDRyxTQUFsQixvQkFBcUNILElBQUksQ0FBQ0ksUUFBMUM7QUFESyxpQkFBVCxDOzs7OztBQUlQQyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0NBQVo7a0RBQ09qQixHQUFHLENBQUNrQixNQUFKLENBQVcsR0FBWCxFQUFnQk4sSUFBaEIsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzSEFJQWIsRyxFQUFjQyxHOzs7Ozs7O0FBR3JCQyx1Q0FBWUMsR0FBWixDQUE4QkMsYUFBTWlCLFlBQXBDLEVBQWtEQyxRQUFsRCxDQUEyRHRCLEdBQUcsQ0FBQ08sSUFBSixDQUFTZ0IsSUFBcEUsRUFDSXZCLEdBQUcsQ0FBQ08sSUFBSixDQUFTaUIsUUFEYixFQUN1QnhCLEdBQUcsQ0FBQ08sSUFBSixDQUFTa0IsTUFEaEM7O2tEQUdPeEIsR0FBRyxDQUFDWSxJQUFKLENBQVM7QUFDWkMsa0JBQUFBLE9BQU87QUFESyxpQkFBVCxDOzs7OztBQUlQRyxnQkFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVo7a0RBQ09qQixHQUFHLENBQUNrQixNQUFKLENBQVcsR0FBWCxFQUFnQk4sSUFBaEIsYyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHtkaUNvbnRhaW5lcn0gZnJvbSBcIi4uL2ludmVyc2lmeS5jb25maWdcIjtcbmltcG9ydCB7VFlQRVN9IGZyb20gXCIuLi9TZXJ2aWNlcy90eXBlc1wiO1xuaW1wb3J0IHtJTWFpbGluZ1NlcnZpY2V9IGZyb20gXCIuLi9TZXJ2aWNlcy9tYWlsaW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7SVNtc1NlcnZpY2V9IGZyb20gXCIuLi9TZXJ2aWNlcy9zbXMuc2VydmljZVwiO1xuaW1wb3J0IHtJVXRpbFNlcnZpY2V9IGZyb20gXCIuLi9TZXJ2aWNlcy91dGlsLnNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFV0aWxzQ29udHJvbGxlciB7XG5cblxuICAgIGFzeW5jIFNlbmRNYWlsKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElNYWlsaW5nU2VydmljZT4oVFlQRVMuTWFpbGluZ1NlcnZpY2UpLlNlbmQocmVxLmJvZHkuQm9keSxcbiAgICAgICAgICAgICAgICByZXEuYm9keS5SZWNpcGllbnRzLCByZXEuYm9keS5TdWJqZWN0LCByZXEuYm9keS5Jc0h0bWwpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBNZXNzYWdlICR7aW5mby5tZXNzYWdlSWR9IHNlbnQ6ICR7aW5mby5yZXNwb25zZX1gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBzZW5kaW5nIGFuIGVtYWlsJywgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgU2VuZFNtcyhyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJU21zU2VydmljZT4oVFlQRVMuU21zU2VydmljZSkuU2VuZChcbiAgICAgICAgICAgICAgICByZXEuYm9keS5SZWNpcGllbnRzLFxuICAgICAgICAgICAgICAgIHJlcS5ib2R5LkJvZHksXG4gICAgICAgICAgICAgICAgcmVxLmJvZHkuU3ViamVjdCk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYE1lc3NhZ2UgJHtpbmZvLm1lc3NhZ2VJZH0gc2VudDogJHtpbmZvLnJlc3BvbnNlfWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIHNlbmRpbmcgYSBzbXMnLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBTYXZlRmlsZShyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UpIHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGlDb250YWluZXIuZ2V0PElVdGlsU2VydmljZT4oVFlQRVMuVXRpbHNTZXJ2aWNlKS5TYXZlRmlsZShyZXEuYm9keS5GaWxlLFxuICAgICAgICAgICAgICAgIHJlcS5ib2R5LkZpbGVuYW1lLCByZXEuYm9keS5TdWJEaXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBVcGxvYWRlZCBpbWFnZSBzdWNjZXNzZnVsbGAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIHNhdmluZyBmaWxlJywgZXJyKTtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19