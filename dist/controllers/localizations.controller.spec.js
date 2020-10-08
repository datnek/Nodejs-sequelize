"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _supertest = _interopRequireDefault(require("supertest"));

var _server = _interopRequireDefault(require("../server"));

var _db = require("../tests/db.handle");

var _fake = require("../tests/fake.data");

// afterAll(async ()  => await dbHandle.drop());
describe('LocalizationsController', function () {
  var localizationComplete = new _fake.FakeData().Localization;
  var dbHandle = new _db.DbHandle();
  beforeEach( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return dbHandle.create();

          case 2:
            _context.next = 4;
            return dbHandle.migrate();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  afterEach( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return dbHandle.create();

          case 2:
            _context2.next = 4;
            return dbHandle.drop();

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  var request = (0, _supertest["default"])(_server["default"]);
  var url = "/api/localizations";
  it('can be created correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(localizationComplete);

          case 2:
            response = _context3.sent;
            //console.log('response', response);
            //console.log('response', response);
            expect(response.body.City).toBe(localizationComplete.City);
            expect(response.body.Country).toBe(localizationComplete.Country);
            expect(response.body.Slug).toBeDefined();

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('can be edit correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var response, newLocalization, response2;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(localizationComplete);

          case 2:
            response = _context4.sent;
            expect(response.status).toBe(200);
            expect(response.body.City).toBe(localizationComplete.City);
            expect(response.body.Country).toBe(localizationComplete.Country);
            expect(response.body.Slug).toBeDefined();
            newLocalization = response.body;
            newLocalization.Country = 'fr';
            newLocalization.City = 'Paris';
            _context4.next = 12;
            return request.put("".concat(url, "/").concat(newLocalization.Id)).set('Authorization', dbHandle.Header).send(newLocalization);

          case 12:
            response2 = _context4.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.City).toBe(localizationComplete.City);
            expect(response2.body.Country).toBe(localizationComplete.Country);
            expect(response2.body.Slug).toBeDefined();

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('can be get all correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var response, response2;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(localizationComplete);

          case 2:
            response = _context5.sent;
            expect(response.status).toBe(200);
            expect(response.body.City).toBe(localizationComplete.City);
            expect(response.body.Country).toBe(localizationComplete.Country);
            expect(response.body.Slug).toBeDefined(); //const newLocalization = response.body;

            _context5.next = 9;
            return request.get(url).set('Authorization', dbHandle.Header).send();

          case 9:
            response2 = _context5.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.City).toBe(localizationComplete.City);
            expect(response2.body.Country).toBe(localizationComplete.Country);
            expect(response2.body.Slug).toBeDefined();

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('can be find by Id correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    var response, newLocalization, response2;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(localizationComplete);

          case 2:
            response = _context6.sent;
            expect(response.status).toBe(200);
            expect(response.body.City).toBe(localizationComplete.City);
            expect(response.body.Country).toBe(localizationComplete.Country);
            expect(response.body.Slug).toBeDefined();
            newLocalization = response.body;
            _context6.next = 10;
            return request.get("".concat(url, "/").concat(newLocalization.Id)).set('Authorization', dbHandle.Header).send();

          case 10:
            response2 = _context6.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.City).toBe(localizationComplete.City);
            expect(response2.body.Country).toBe(localizationComplete.Country);
            expect(response2.body.Slug).toBeDefined();

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('can be find by Slug correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
    var response, newLocalization, response2;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(localizationComplete);

          case 2:
            response = _context7.sent;
            expect(response.status).toBe(200);
            expect(response.body.City).toBe(localizationComplete.City);
            expect(response.body.Country).toBe(localizationComplete.Country);
            expect(response.body.Slug).toBeDefined();
            newLocalization = response.body;
            _context7.next = 10;
            return request.get("".concat(url, "/public/").concat(newLocalization.Slug)).set('Authorization', dbHandle.Header).send();

          case 10:
            response2 = _context7.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.City).toBe(localizationComplete.City);
            expect(response2.body.Country).toBe(localizationComplete.Country);
            expect(response2.body.Slug).toBeDefined();

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
  it('can be delete correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
    var response, newLocalization, response2;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(localizationComplete);

          case 2:
            response = _context8.sent;
            expect(response.status).toBe(200);
            expect(response.body.City).toBe(localizationComplete.City);
            expect(response.body.Country).toBe(localizationComplete.Country);
            expect(response.body.Slug).toBeDefined();
            newLocalization = response.body;
            _context8.next = 10;
            return request["delete"]("".concat(url, "/").concat(newLocalization.Slug)).set('Authorization', dbHandle.Header).send();

          case 10:
            response2 = _context8.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.message).toBe('deleted');

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9sb2NhbGl6YXRpb25zLmNvbnRyb2xsZXIuc3BlYy50cyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsImxvY2FsaXphdGlvbkNvbXBsZXRlIiwiRmFrZURhdGEiLCJMb2NhbGl6YXRpb24iLCJkYkhhbmRsZSIsIkRiSGFuZGxlIiwiYmVmb3JlRWFjaCIsImNyZWF0ZSIsIm1pZ3JhdGUiLCJhZnRlckVhY2giLCJkcm9wIiwicmVxdWVzdCIsImFwcCIsInVybCIsIml0IiwicG9zdCIsInNldCIsIkhlYWRlciIsInNlbmQiLCJyZXNwb25zZSIsImV4cGVjdCIsImJvZHkiLCJDaXR5IiwidG9CZSIsIkNvdW50cnkiLCJTbHVnIiwidG9CZURlZmluZWQiLCJzdGF0dXMiLCJuZXdMb2NhbGl6YXRpb24iLCJwdXQiLCJJZCIsInJlc3BvbnNlMiIsImdldCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBT0E7QUFFQUEsUUFBUSxDQUFDLHlCQUFELEVBQTZCLFlBQU07QUFDdkMsTUFBTUMsb0JBQW1DLEdBQUksSUFBSUMsY0FBSixHQUFlQyxZQUE1RDtBQUNBLE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxZQUFKLEVBQWpCO0FBRUFDLEVBQUFBLFVBQVUsNkZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRURGLFFBQVEsQ0FBQ0csTUFBVCxFQUZDOztBQUFBO0FBQUE7QUFBQSxtQkFHREgsUUFBUSxDQUFDSSxPQUFULEVBSEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxHQUFWO0FBT0FDLEVBQUFBLFNBQVMsNkZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0FMLFFBQVEsQ0FBQ0csTUFBVCxFQURBOztBQUFBO0FBQUE7QUFBQSxtQkFFQUgsUUFBUSxDQUFDTSxJQUFULEVBRkE7O0FBQUE7QUFBQTtBQUFBO0FB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SUFBeEIsQ0FBNkIsR0FBN0I7QUFDQUgsWUFBQUEsTUFBTSxDQUFDRCxRQUFRLENBQUNFLElBQVQsQ0FBY0MsSUFBZixDQUFOLENBQTJCQyxJQUEzQixDQUFnQ3RCLG9CQUFvQixDQUFDcUIsSUFBckQ7QUFDQUYsWUFBQUEsTUFBTSxDQUFDRCxRQUFRLENBQUNFLElBQVQsQ0FBY0csT0FBZixDQUFOLENBQThCRCxJQUE5QixDQUFtQ3RCLG9CQUFvQixDQUFDdUIsT0FBeEQ7QUFDQUosWUFBQUEsTUFBTSxDQUFDRCxRQUFRLENBQUNFLElBQVQsQ0FBY0ksSUFBZixDQUFOLENBQTJCQyxXQUEzQjtBQUVNRSxZQUFBQSxlQVhvQixHQVdGVCxRQUFRLENBQUNFLElBWFA7QUFBQTtBQUFBLG1CQWFGVixPQUFPLFVBQVAsV0FBa0JFLEdBQWxCLGNBQXlCZSxlQUFlLENBQUNILElBQXpDLEdBQ25CVCxHQURtQixDQUNmLGVBRGUsRUFDRVosUUFBUSxDQUFDYSxNQURYLEVBRW5CQyxJQUZtQixFQWJFOztBQUFBO0FBYXBCYSxZQUFBQSxTQWJvQjtBQWdCMUJYLFlBQUFBLE1BQU0sQ0FBQ1csU0FBUyxDQUFDSixNQUFYLENBQU4sQ0FBeUJKLElBQXpCLENBQThCLEdBQTlCO0FBQ0FILFlBQUFBLE1BQU0sQ0FBQ1csU0FBUyxDQUFDVixJQUFWLENBQWVZLE9BQWhCLENBQU4sQ0FBK0JWLElBQS9CLENBQW9DLFNBQXBDOztBQWpCMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBNUIsR0FBRjtBQW9CSCxDQTNKTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1cGVydGVzdCBmcm9tICdzdXBlcnRlc3QnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi9zZXJ2ZXInO1xuaW1wb3J0IHtEYkhhbmRsZX0gZnJvbSAnLi4vdGVzdHMvZGIuaGFuZGxlJ1xuaW1wb3J0IHtJTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZGF0YWJhc2VzL21vZGVscy9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7RmFrZURhdGF9IGZyb20gXCIuLi90ZXN0cy9mYWtlLmRhdGFcIjtcblxuXG5cblxuXG5cbi8vIGFmdGVyQWxsKGFzeW5jICgpICA9PiBhd2FpdCBkYkhhbmRsZS5kcm9wKCkpO1xuXG5kZXNjcmliZSgnTG9jYWxpemF0aW9uc0NvbnRyb2xsZXInLCAgKCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbkNvbXBsZXRlOiBJTG9jYWxpemF0aW9uID0gIG5ldyBGYWtlRGF0YSgpLkxvY2FsaXphdGlvbjtcbiAgICBjb25zdCBkYkhhbmRsZSA9IG5ldyBEYkhhbmRsZSgpO1xuXG4gICAgYmVmb3JlRWFjaChhc3luYyAoKSA9PlxuICAgIHtcbiAgICAgICAgYXdhaXQgZGJIYW5kbGUuY3JlYXRlKCk7XG4gICAgICAgIGF3YWl0IGRiSGFuZGxlLm1pZ3JhdGUoKTtcbiAgICB9KTtcblxuXG4gICAgYWZ0ZXJFYWNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgZGJIYW5kbGUuY3JlYXRlKCk7XG4gICAgICAgIGF3YWl0IGRiSGFuZGxlLmRyb3AoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBzdXBlcnRlc3QoYXBwKTtcbiAgICBjb25zdCB1cmwgPSBcIi9hcGkvbG9jYWxpemF0aW9uc1wiO1xuXG5cbiAgICBpdCgnY2FuIGJlIGNyZWF0ZWQgY29ycmVjdGx5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KHVybClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZChsb2NhbGl6YXRpb25Db21wbGV0ZSk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5DaXR5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNpdHkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5Db3VudHJ5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNvdW50cnkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5TbHVnKS50b0JlRGVmaW5lZCgpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnY2FuIGJlIGVkaXQgY29ycmVjdGx5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KHVybClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZChsb2NhbGl6YXRpb25Db21wbGV0ZSk7XG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5DaXR5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNpdHkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5Db3VudHJ5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNvdW50cnkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5TbHVnKS50b0JlRGVmaW5lZCgpO1xuXG4gICAgICAgIGNvbnN0IG5ld0xvY2FsaXphdGlvbiA9IHJlc3BvbnNlLmJvZHk7XG5cbiAgICAgICAgbmV3TG9jYWxpemF0aW9uLkNvdW50cnkgPSAnZnInO1xuICAgICAgICBuZXdMb2NhbGl6YXRpb24uQ2l0eSA9ICdQYXJpcyc7XG5cblxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCByZXF1ZXN0LnB1dChgJHt1cmx9LyR7bmV3TG9jYWxpemF0aW9uLklkfWApXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQobmV3TG9jYWxpemF0aW9uKTtcblxuXG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuYm9keS5DaXR5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNpdHkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuQ291bnRyeSkudG9CZShsb2NhbGl6YXRpb25Db21wbGV0ZS5Db3VudHJ5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5ib2R5LlNsdWcpLnRvQmVEZWZpbmVkKCk7XG4gICAgfSk7XG5cblxuICAgIGl0KCdjYW4gYmUgZ2V0IGFsbCBjb3JyZWN0bHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LnBvc3QodXJsKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGRiSGFuZGxlLkhlYWRlcilcbiAgICAgICAgICAgIC5zZW5kKGxvY2FsaXphdGlvbkNvbXBsZXRlKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2Uuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LkNpdHkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ2l0eSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LkNvdW50cnkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ291bnRyeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LlNsdWcpLnRvQmVEZWZpbmVkKCk7XG5cbiAgICAgICAgLy9jb25zdCBuZXdMb2NhbGl6YXRpb24gPSByZXNwb25zZS5ib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IHJlcXVlc3QuZ2V0KHVybClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZCgpO1xuXG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuYm9keS5DaXR5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNpdHkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuQ291bnRyeSkudG9CZShsb2NhbGl6YXRpb25Db21wbGV0ZS5Db3VudHJ5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5ib2R5LlNsdWcpLnRvQmVEZWZpbmVkKCk7XG5cbiAgICB9KTtcblxuICAgIGl0KCdjYW4gYmUgZmluZCBieSBJZCBjb3JyZWN0bHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LnBvc3QodXJsKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGRiSGFuZGxlLkhlYWRlcilcbiAgICAgICAgICAgIC5zZW5kKGxvY2FsaXphdGlvbkNvbXBsZXRlKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2Uuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LkNpdHkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ2l0eSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LkNvdW50cnkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ291bnRyeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LlNsdWcpLnRvQmVEZWZpbmVkKCk7XG5cbiAgICAgICAgY29uc3QgbmV3TG9jYWxpemF0aW9uID0gcmVzcG9uc2UuYm9keTtcblxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCByZXF1ZXN0LmdldChgJHt1cmx9LyR7bmV3TG9jYWxpemF0aW9uLklkfWApXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQoKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2UyLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuQ2l0eSkudG9CZShsb2NhbGl6YXRpb25Db21wbGV0ZS5DaXR5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5ib2R5LkNvdW50cnkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ291bnRyeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuYm9keS5TbHVnKS50b0JlRGVmaW5lZCgpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnY2FuIGJlIGZpbmQgYnkgU2x1ZyBjb3JyZWN0bHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LnBvc3QodXJsKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGRiSGFuZGxlLkhlYWRlcilcbiAgICAgICAgICAgIC5zZW5kKGxvY2FsaXphdGlvbkNvbXBsZXRlKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2Uuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LkNpdHkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ2l0eSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LkNvdW50cnkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ291bnRyeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LlNsdWcpLnRvQmVEZWZpbmVkKCk7XG5cbiAgICAgICAgY29uc3QgbmV3TG9jYWxpemF0aW9uID0gcmVzcG9uc2UuYm9keTtcblxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCByZXF1ZXN0LmdldChgJHt1cmx9L3B1YmxpYy8ke25ld0xvY2FsaXphdGlvbi5TbHVnfWApXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQoKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2UyLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuQ2l0eSkudG9CZShsb2NhbGl6YXRpb25Db21wbGV0ZS5DaXR5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5ib2R5LkNvdW50cnkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ291bnRyeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuYm9keS5TbHVnKS50b0JlRGVmaW5lZCgpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnY2FuIGJlIGRlbGV0ZSBjb3JyZWN0bHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LnBvc3QodXJsKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGRiSGFuZGxlLkhlYWRlcilcbiAgICAgICAgICAgIC5zZW5kKGxvY2FsaXphdGlvbkNvbXBsZXRlKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2Uuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LkNpdHkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ2l0eSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LkNvdW50cnkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ291bnRyeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LlNsdWcpLnRvQmVEZWZpbmVkKCk7XG5cbiAgICAgICAgY29uc3QgbmV3TG9jYWxpemF0aW9uID0gcmVzcG9uc2UuYm9keTtcblxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCByZXF1ZXN0LmRlbGV0ZShgJHt1cmx9LyR7bmV3TG9jYWxpemF0aW9uLlNsdWd9YClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZCgpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkubWVzc2FnZSkudG9CZSgnZGVsZXRlZCcpO1xuXG4gICAgfSk7XG59KTtcbiJdfQ==