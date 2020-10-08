"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("inversify");

require("reflect-metadata");

var dotenv = _interopRequireWildcard(require("dotenv"));

var _https = require("https");

var _dec, _dec2, _dec3, _class;

var SmsService = (_dec = (0, _inversify.injectable)(), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = /*#__PURE__*/function () {
  function SmsService() {
    (0, _classCallCheck2["default"])(this, SmsService);
    dotenv.config();
  }

  (0, _createClass2["default"])(SmsService, [{
    key: "Send",
    value: function () {
      var _Send = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(recipients, body) {
        var sender,
            options,
            _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sender = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;

                if (!sender) {
                  sender = process.env.MAIL_NAME;
                } // var request = require('request');


                options = {
                  'method': 'POST',
                  'url': process.env.SMS_HTTP,
                  'headers': {
                    'Accept': 'application/json',
                    'Authorization': "Bearer ".concat(process.env.SMS_API),
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    "body": body,
                    "encoding": "auto",
                    "originator": sender,
                    "recipients": recipients,
                    "route": "business"
                  })
                };
                _context.next = 5;
                return (0, _https.request)(options);

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function Send(_x, _x2) {
        return _Send.apply(this, arguments);
      }

      return Send;
    }()
  }]);
  return SmsService;
}()) || _class) || _class) || _class);
exports.SmsService = SmsService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZXJ2aWNlcy9zbXMuc2VydmljZS50cyJdLCJuYW1lcyI6WyJTbXNTZXJ2aWNlIiwiZG90ZW52IiwiY29uZmlnIiwicmVjaXBpZW50cyIsImJvZHkiLCJzZW5kZXIiLCJwcm9jZXNzIiwiZW52IiwiTUFJTF9OQU1FIiwib3B0aW9ucyIsIlNNU19IVFRQIiwiU01TX0FQSSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztJQVFhQSxVLFdBRFosNEI7QUFFRyx3QkFBYTtBQUFBO0FBQ1RDLElBQUFBLE1BQU0sQ0FBQ0MsTUFBUDtBQUNIOzs7OztpSEFDU0MsVSxFQUFzQkMsSTs7Ozs7Ozs7QUFBY0MsZ0JBQUFBLE0sMkRBQWlCLEk7O0FBQzNELG9CQUFHLENBQUNBLE1BQUosRUFBVztBQUNQQSxrQkFBQUEsTUFBTSxHQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsU0FBdEI7QUFDSCxpQixDQUNEOzs7QUFDSUMsZ0JBQUFBLE8sR0FBVTtBQUNWLDRCQUFVLE1BREE7QUFFVix5QkFBT0gsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFFBRlQ7QUFHViw2QkFBVztBQUNQLDhCQUFVLGtCQURIO0FBRVAsc0RBQTJCSixPQUFPLENBQUNDLEdBQVIsQ0FBWUksT0FBdkMsQ0FGTztBQUdQLG9DQUFnQjtBQUhULG1CQUhEO0FBUVZQLGtCQUFBQSxJQUFJLEVBQUVRLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUMsNEJBQU9ULElBQVI7QUFDakIsZ0NBQVcsTUFETTtBQUVqQixrQ0FBYUMsTUFGSTtBQUdqQixrQ0FBYUYsVUFISTtBQUlqQiw2QkFBUTtBQUpTLG1CQUFmO0FBUkksaUI7O3VCQWVELG9CQUFRTSxPQUFSLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdGFibGV9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5pbXBvcnQge3JlcXVlc3R9IGZyb20gXCJodHRwc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTbXNTZXJ2aWNlIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgU2VuZChyZWNpcGllbnRzOiBzdHJpbmdbXSwgYm9keTogc3RyaW5nLCBzZW5kZXI6IHN0cmluZyApO1xufVxuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU21zU2VydmljZSBpbXBsZW1lbnRzIElTbXNTZXJ2aWNle1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIGRvdGVudi5jb25maWcoKTtcbiAgICB9XG4gICBhc3luYyBTZW5kKHJlY2lwaWVudHM6IHN0cmluZ1tdLCBib2R5OiBzdHJpbmcsIHNlbmRlcjogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBpZighc2VuZGVyKXtcbiAgICAgICAgICAgIHNlbmRlciA9ICBwcm9jZXNzLmVudi5NQUlMX05BTUU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdmFyIHJlcXVlc3QgPSByZXF1aXJlKCdyZXF1ZXN0Jyk7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgJ21ldGhvZCc6ICdQT1NUJyxcbiAgICAgICAgICAgICd1cmwnOiBwcm9jZXNzLmVudi5TTVNfSFRUUCxcbiAgICAgICAgICAgICdoZWFkZXJzJzoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuU01TX0FQSX1gLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XCJib2R5XCI6Ym9keSxcbiAgICAgICAgICAgICAgICBcImVuY29kaW5nXCI6XCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgXCJvcmlnaW5hdG9yXCI6c2VuZGVyLFxuICAgICAgICAgICAgICAgIFwicmVjaXBpZW50c1wiOnJlY2lwaWVudHMsXG4gICAgICAgICAgICAgICAgXCJyb3V0ZVwiOlwiYnVzaW5lc3NcIn0pXG5cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3Qob3B0aW9ucyk7XG4gICAgfVxufVxuIl19