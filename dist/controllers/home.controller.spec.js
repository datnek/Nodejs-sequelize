"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _supertest = _interopRequireDefault(require("supertest"));

var _server = _interopRequireDefault(require("../server"));

var _db = require("../tests/db.handle");

var request = (0, _supertest["default"])(_server["default"]);
var url = "/api";
describe('HomeController', function () {
  var dbHandle = new _db.DbHandle();
  it('can be get first page', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var response2;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return request.get(url).send();

          case 2:
            response2 = _context.sent;
            expect(response2.status).toBe(200);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9ob21lLmNvbnRyb2xsZXIuc3BlYy50cyJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwiYXBwIiwidXJsIiwiZGVzY3JpYmUiLCJkYkhhbmRsZSIsIkRiSGFuZGxlIiwiaXQiLCJnZXQiLCJzZW5kIiwicmVzcG9uc2UyIiwiZXhwZWN0Iiwic3RhdHVzIiwidG9CZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsMkJBQVVDLGtCQUFWLENBQWhCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLE1BQVo7QUFFQUMsUUFBUSxDQUFDLGdCQUFELEVBQW9CLFlBQU07QUFFOUIsTUFBTUMsUUFBUSxHQUFHLElBQUlDLFlBQUosRUFBakI7QUFFQUMsRUFBQUEsRUFBRSxDQUFDLHVCQUFELDZGQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVBTixPQUFPLENBQUNPLEdBQVIsQ0FBWUwsR0FBWixFQUNuQk0sSUFEbUIsRUFGQTs7QUFBQTtBQUVsQkMsWUFBQUEsU0FGa0I7QUFLeEJDLFlBQUFBLE1BQU0sQ0FBQ0QsU0FBUyxDQUFDRSxNQUFYLENBQU4sQ0FBeUJDLElBQXpCLENBQThCLEdBQTlCOztBQUx3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUExQixHQUFGO0FBU0gsQ0FiTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1cGVydGVzdCBmcm9tICdzdXBlcnRlc3QnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi9zZXJ2ZXInO1xuaW1wb3J0IHtEYkhhbmRsZX0gZnJvbSAnLi4vdGVzdHMvZGIuaGFuZGxlJ1xuXG5cbmNvbnN0IHJlcXVlc3QgPSBzdXBlcnRlc3QoYXBwKTtcbmNvbnN0IHVybCA9IFwiL2FwaVwiO1xuXG5kZXNjcmliZSgnSG9tZUNvbnRyb2xsZXInLCAgKCkgPT4ge1xuXG4gICAgY29uc3QgZGJIYW5kbGUgPSBuZXcgRGJIYW5kbGUoKTtcblxuICAgIGl0KCdjYW4gYmUgZ2V0IGZpcnN0IHBhZ2UnLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgcmVxdWVzdC5nZXQodXJsKVxuICAgICAgICAgICAgLnNlbmQoKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2UyLnN0YXR1cykudG9CZSgyMDApO1xuICAgIH0pO1xuXG5cbn0pO1xuIl19