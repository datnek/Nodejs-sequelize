"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MailingService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _inversify = require("inversify");

require("reflect-metadata");

var dotenv = _interopRequireWildcard(require("dotenv"));

var _dec, _dec2, _dec3, _class, _temp;

var nodeMailer = require('nodemailer');

var MailingService = (_dec = (0, _inversify.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_temp = /*#__PURE__*/function () {
  function MailingService() {
    (0, _classCallCheck2["default"])(this, MailingService);
    (0, _defineProperty2["default"])(this, "transporter", void 0);
    dotenv.config();
    this.Build();
  }

  (0, _createClass2["default"])(MailingService, [{
    key: "Send",
    value: function () {
      var _Send = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body, recipients, subject) {
        var isHtml,
            mailOptions,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isHtml = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
                mailOptions = {
                  to: recipients,
                  subject: subject
                };

                if (!isHtml) {
                  mailOptions.text = body;
                } else {
                  mailOptions.html = body;
                }

                _context.next = 5;
                return this.transporter.sendMail(mailOptions);

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function Send(_x, _x2, _x3) {
        return _Send.apply(this, arguments);
      }

      return Send;
    }()
  }, {
    key: "Build",
    value: function Build() {
      this.transporter = nodeMailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE,
        auth: {
          // should be replaced with real sender's account
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD
        }
      });
    }
  }]);
  return MailingService;
}(), _temp)) || _class) || _class) || _class);
exports.MailingService = MailingService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZXJ2aWNlcy9tYWlsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOlsibm9kZU1haWxlciIsInJlcXVpcmUiLCJNYWlsaW5nU2VydmljZSIsImRvdGVudiIsImNvbmZpZyIsIkJ1aWxkIiwiYm9keSIsInJlY2lwaWVudHMiLCJzdWJqZWN0IiwiaXNIdG1sIiwibWFpbE9wdGlvbnMiLCJ0byIsInRleHQiLCJodG1sIiwidHJhbnNwb3J0ZXIiLCJzZW5kTWFpbCIsImNyZWF0ZVRyYW5zcG9ydCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiTUFJTF9IT1NUIiwicG9ydCIsIk1BSUxfUE9SVCIsInNlY3VyZSIsIk1BSUxfU0VDVVJFIiwiYXV0aCIsInVzZXIiLCJNQUlMX1VTRVJOQU1FIiwicGFzcyIsIk1BSUxfUEFTU1dPUkQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUExQjs7SUFRYUMsYyxXQURaLDRCO0FBS0csNEJBQWE7QUFBQTtBQUFBO0FBQ1RDLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUDtBQUNBLFNBQUtDLEtBQUw7QUFDSDs7Ozs7aUhBRVNDLEksRUFBY0MsVSxFQUFvQkMsTzs7Ozs7Ozs7QUFBaUJDLGdCQUFBQSxNLDJEQUFnQixLO0FBRXBFQyxnQkFBQUEsVyxHQUFtQjtBQUNyQkMsa0JBQUFBLEVBQUUsRUFBRUosVUFEaUI7QUFFckJDLGtCQUFBQSxPQUFPLEVBQUVBO0FBRlksaUI7O0FBS3pCLG9CQUFJLENBQUNDLE1BQUwsRUFBWTtBQUNSQyxrQkFBQUEsV0FBVyxDQUFDRSxJQUFaLEdBQW1CTixJQUFuQjtBQUNILGlCQUZELE1BRU87QUFDSEksa0JBQUFBLFdBQVcsQ0FBQ0csSUFBWixHQUFtQlAsSUFBbkI7QUFDSDs7O3VCQUVjLEtBQUtRLFdBQUwsQ0FBaUJDLFFBQWpCLENBQTBCTCxXQUExQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBTUU7QUFDaEIsV0FBS0ksV0FBTCxHQUFtQmQsVUFBVSxDQUFDZ0IsZUFBWCxDQUEyQjtBQUMxQ0MsUUFBQUEsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FEd0I7QUFFMUNDLFFBQUFBLElBQUksRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFNBRndCO0FBRzFDQyxRQUFBQSxNQUFNLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxXQUhzQjtBQUkxQ0MsUUFBQUEsSUFBSSxFQUFFO0FBQ0Y7QUFDQUMsVUFBQUEsSUFBSSxFQUFFUixPQUFPLENBQUNDLEdBQVIsQ0FBWVEsYUFGaEI7QUFHRkMsVUFBQUEsSUFBSSxFQUFFVixPQUFPLENBQUNDLEdBQVIsQ0FBWVU7QUFIaEI7QUFKb0MsT0FBM0IsQ0FBbkI7QUFVSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0YWJsZX0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmNvbnN0IG5vZGVNYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJyk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1haWxpbmdTZXJ2aWNlIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgU2VuZChib2R5OiBzdHJpbmcsIHJlY2VpdmVyOiBzdHJpbmcsIHN1YmplY3Q6IHN0cmluZywgaXNIdG1sOiBib29sZWFuKTtcbn1cblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1haWxpbmdTZXJ2aWNlIGltcGxlbWVudHMgSU1haWxpbmdTZXJ2aWNle1xuXG4gICAgcHJpdmF0ZSB0cmFuc3BvcnRlcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgZG90ZW52LmNvbmZpZygpO1xuICAgICAgICB0aGlzLkJ1aWxkKCk7XG4gICAgfVxuXG4gICBhc3luYyBTZW5kKGJvZHk6IHN0cmluZywgcmVjaXBpZW50czogc3RyaW5nLCBzdWJqZWN0OiBzdHJpbmcsIGlzSHRtbDogYm9vbGVhbj1mYWxzZSkge1xuXG4gICAgICAgY29uc3QgbWFpbE9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgICAgdG86IHJlY2lwaWVudHMsXG4gICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgfTtcblxuICAgICAgIGlmICghaXNIdG1sKXtcbiAgICAgICAgICAgbWFpbE9wdGlvbnMudGV4dCA9IGJvZHk7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgbWFpbE9wdGlvbnMuaHRtbCA9IGJvZHk7XG4gICAgICAgfVxuXG4gICAgICAgIHJldHVybiAgYXdhaXQgdGhpcy50cmFuc3BvcnRlci5zZW5kTWFpbChtYWlsT3B0aW9ucyk7XG5cbiAgICAgICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZygnTWVzc2FnZSAlcyBzZW50OiAlcycsIGluZm8ubWVzc2FnZUlkLCBpbmZvLnJlc3BvbnNlKTtcblxuICAgIH1cblxuICAgcHJpdmF0ZSBCdWlsZCgpOiB2b2lke1xuICAgICAgICB0aGlzLnRyYW5zcG9ydGVyID0gbm9kZU1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuTUFJTF9IT1NULFxuICAgICAgICAgICAgcG9ydDogcHJvY2Vzcy5lbnYuTUFJTF9QT1JULFxuICAgICAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5NQUlMX1NFQ1VSRSxcbiAgICAgICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgICAgICAvLyBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCByZWFsIHNlbmRlcidzIGFjY291bnRcbiAgICAgICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMX1VTRVJOQU1FLFxuICAgICAgICAgICAgICAgIHBhc3M6IHByb2Nlc3MuZW52Lk1BSUxfUEFTU1dPUkRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19