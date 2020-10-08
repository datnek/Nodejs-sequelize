"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _supertest = _interopRequireDefault(require("supertest"));

var _server = _interopRequireDefault(require("../server"));

var _db = require("../tests/db.handle");

var _fake = require("../tests/fake.data");

// afterAll(async ()  => await dbHandle.drop());
describe('UsersController', function () {
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
  var url = "/api/users";
  var userComplete = new _fake.FakeData().User;
  it('can be created correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(userComplete);

          case 2:
            response = _context3.sent;
            //console.log('response', response);
            //console.log('response', response);
            expect(response.body.Username).toBe(userComplete.Username);
            expect(response.body.Email).toBe(userComplete.Email);
            expect(response.body.slug).toBeDefined();

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  it('can be edit correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var response, newUser, response2;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(userComplete);

          case 2:
            response = _context4.sent;
            expect(response.status).toBe(200);
            expect(response.body.Username).toBe(userComplete.Username);
            expect(response.body.Email).toBe(userComplete.Email);
            expect(response.body.slug).toBeDefined();
            newUser = response.body;
            newUser.Username = 'danick';
            newUser.Email = 'otis.takam@datnek.be';
            _context4.next = 12;
            return request.put("".concat(url, "/").concat(newUser.Id)).set('Authorization', dbHandle.Header).send(newUser);

          case 12:
            response2 = _context4.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.Username).toBe(newUser.Username);
            expect(response2.body.Email).toBe(newUser.Email);
            expect(response2.body.slug).toBeDefined();

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
            return request.post(url).set('Authorization', dbHandle.Header).send(userComplete);

          case 2:
            response = _context5.sent;
            expect(response.status).toBe(200);
            expect(response.body.Username).toBe(userComplete.Username);
            expect(response.body.Email).toBe(userComplete.Email);
            expect(response.body.slug).toBeDefined(); //const newUser = response.body;

            _context5.next = 9;
            return request.get(url).set('Authorization', dbHandle.Header).send();

          case 9:
            response2 = _context5.sent;
            expect(response2.status).toBe(200);
            expect(response2.body[0].Username).toBe(userComplete.Username);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('can be login correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    var response, newUser, response2;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(userComplete);

          case 2:
            response = _context6.sent;
            expect(response.status).toBe(200);
            expect(response.body.Username).toBe(userComplete.Username);
            expect(response.body.Email).toBe(userComplete.Email);
            expect(response.body.slug).toBeDefined();
            newUser = response.body;
            _context6.next = 10;
            return request.post("".concat(url, "/login")).set('Authorization', dbHandle.Header).send(userComplete);

          case 10:
            response2 = _context6.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.Username).toBe(userComplete.Username);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('can be find by Id correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
    var response, newUser, response2;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(userComplete);

          case 2:
            response = _context7.sent;
            expect(response.status).toBe(200);
            expect(response.body.Username).toBe(userComplete.Username);
            expect(response.body.Email).toBe(userComplete.Email);
            expect(response.body.slug).toBeDefined();
            newUser = response.body;
            _context7.next = 10;
            return request.get("".concat(url, "/").concat(newUser.Id)).set('Authorization', dbHandle.Header).send();

          case 10:
            response2 = _context7.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.Username).toBe(userComplete.Username);

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
  it('can be find by Slug correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
    var response, newUser, response2;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(userComplete);

          case 2:
            response = _context8.sent;
            expect(response.status).toBe(200);
            expect(response.body.Username).toBe(userComplete.Username);
            expect(response.body.Email).toBe(userComplete.Email);
            expect(response.body.slug).toBeDefined();
            newUser = response.body;
            _context8.next = 10;
            return request.get("".concat(url, "/public/").concat(newUser.Slug)).set('Authorization', dbHandle.Header).send();

          case 10:
            response2 = _context8.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.Username).toBe(userComplete.Username);

          case 13:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
  it('can be delete correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
    var response, newUser, response2;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(userComplete);

          case 2:
            response = _context9.sent;
            expect(response.status).toBe(200);
            expect(response.body.Username).toBe(userComplete.Username);
            newUser = response.body;
            _context9.next = 8;
            return request["delete"]("".concat(url, "/").concat(newUser.Slug)).set('Authorization', dbHandle.Header).send();

          case 8:
            response2 = _context9.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.message).toBe('deleted');

          case 11:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy91c2Vycy5jb250cm9sbGVyLnNwZWMudHMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJkYkhhbmRsZSIsIkRiSGFuZGxlIiwiYmVmb3JlRWFjaCIsImNyZWF0ZSIsIm1pZ3JhdGUiLCJhZnRlckVhY2giLCJkcm9wIiwicmVxdWVzdCIsImFwcCIsInVybCIsInVzZXJDb21wbGV0ZSIsIkZha2VEYXRhIiwiVXNlciIsIml0IiwicG9zdCIsInNldCIsIkhlYWRlciIsInNlbmQiLCJyZXNwb25zZSIsImV4cGVjdCIsImJvZHkiLCJVc2VybmFtZSIsInRvQmUiLCJFbWFpbCIsInNsdWciLCJ0b0JlRGVmaW5lZCIsInN0YXR1cyIsIm5ld1VzZXIiLCJwdXQiLCJJZCIsInJlc3BvbnNlMiIsImdldCIsIlNsdWciLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUlBO0FBRUFBLFFBQVEsQ0FBQyxpQkFBRCxFQUFxQixZQUFNO0FBRS9CLE1BQU1DLFFBQVEsR0FBRyxJQUFJQyxZQUFKLEVBQWpCO0FBQ0FDLEVBQUFBLFVBQVUsNkZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRURGLFFBQVEsQ0FBQ0csTUFBVCxFQUZDOztBQUFBO0FBQUE7QUFBQSxtQkFHREgsUUFBUSxDQUFDSSxPQUFULEVBSEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxHQUFWO0FBT0FDLEVBQUFBLFNBQVMsNkZBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0FMLFFBQVEsQ0FBQ0csTUFBVCxFQURBOztBQUFBO0FBQUE7QUFBQSxtQkFFQUgsUUFBUSxDQUFDTSxJQUFULEVBRkE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRCxHQUFUO0FBS0EsTUFBTUMsT0FBTyxHQUFHLDJCQUFVQyxrQkFBVixDQUFoQjtB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IHN1cGVydGVzdCBmcm9tICdzdXBlcnRlc3QnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi9zZXJ2ZXInO1xuaW1wb3J0IHtEYkhhbmRsZX0gZnJvbSAnLi4vdGVzdHMvZGIuaGFuZGxlJ1xuaW1wb3J0IHtJVXNlcn0gZnJvbSBcIi4uL2RhdGFiYXNlcy9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHtGYWtlRGF0YX0gZnJvbSBcIi4uL3Rlc3RzL2Zha2UuZGF0YVwiO1xuXG5cblxuLy8gYWZ0ZXJBbGwoYXN5bmMgKCkgID0+IGF3YWl0IGRiSGFuZGxlLmRyb3AoKSk7XG5cbmRlc2NyaWJlKCdVc2Vyc0NvbnRyb2xsZXInLCAgKCkgPT4ge1xuXG4gICAgY29uc3QgZGJIYW5kbGUgPSBuZXcgRGJIYW5kbGUoKTtcbiAgICBiZWZvcmVFYWNoKGFzeW5jICgpID0+XG4gICAge1xuICAgICAgICBhd2FpdCBkYkhhbmRsZS5jcmVhdGUoKTtcbiAgICAgICAgYXdhaXQgZGJIYW5kbGUubWlncmF0ZSgpO1xuICAgIH0pO1xuXG5cbiAgICBhZnRlckVhY2goYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBkYkhhbmRsZS5jcmVhdGUoKTtcbiAgICAgICAgYXdhaXQgZGJIYW5kbGUuZHJvcCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IHN1cGVydGVzdChhcHApO1xuICAgIGNvbnN0IHVybCA9IFwiL2FwaS91c2Vyc1wiO1xuICAgIGNvbnN0IHVzZXJDb21wbGV0ZTogSVVzZXIgPSBuZXcgRmFrZURhdGEoKS5Vc2VyO1xuXG5cblxuXG5cbiAgICBpdCgnY2FuIGJlIGNyZWF0ZWQgY29ycmVjdGx5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KHVybClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZCh1c2VyQ29tcGxldGUpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuVXNlcm5hbWUpLnRvQmUodXNlckNvbXBsZXRlLlVzZXJuYW1lKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuRW1haWwpLnRvQmUodXNlckNvbXBsZXRlLkVtYWlsKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuc2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ2NhbiBiZSBlZGl0IGNvcnJlY3RseScsIGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QucG9zdCh1cmwpXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQodXNlckNvbXBsZXRlKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2Uuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LlVzZXJuYW1lKS50b0JlKHVzZXJDb21wbGV0ZS5Vc2VybmFtZSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LkVtYWlsKS50b0JlKHVzZXJDb21wbGV0ZS5FbWFpbCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LnNsdWcpLnRvQmVEZWZpbmVkKCk7XG5cbiAgICAgICAgY29uc3QgbmV3VXNlciA9IHJlc3BvbnNlLmJvZHk7XG5cbiAgICAgICAgbmV3VXNlci5Vc2VybmFtZSA9ICdkYW5pY2snO1xuICAgICAgICBuZXdVc2VyLkVtYWlsID0gJ290aXMudGFrYW1AZGF0bmVrLmJlJztcblxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IHJlcXVlc3QucHV0KGAke3VybH0vJHtuZXdVc2VyLklkfWApXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQobmV3VXNlcik7XG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5zdGF0dXMpLnRvQmUoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5ib2R5LlVzZXJuYW1lKS50b0JlKG5ld1VzZXIuVXNlcm5hbWUpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuRW1haWwpLnRvQmUobmV3VXNlci5FbWFpbCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuYm9keS5zbHVnKS50b0JlRGVmaW5lZCgpO1xuICAgIH0pO1xuXG5cbiAgICBpdCgnY2FuIGJlIGdldCBhbGwgY29ycmVjdGx5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KHVybClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZCh1c2VyQ29tcGxldGUpO1xuXG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5zdGF0dXMpLnRvQmUoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuVXNlcm5hbWUpLnRvQmUodXNlckNvbXBsZXRlLlVzZXJuYW1lKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuRW1haWwpLnRvQmUodXNlckNvbXBsZXRlLkVtYWlsKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuc2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgICAgICAvL2NvbnN0IG5ld1VzZXIgPSByZXNwb25zZS5ib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IHJlcXVlc3QuZ2V0KHVybClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZCgpO1xuXG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuYm9keVswXS5Vc2VybmFtZSkudG9CZSh1c2VyQ29tcGxldGUuVXNlcm5hbWUpO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KCdjYW4gYmUgbG9naW4gY29ycmVjdGx5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KHVybClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZCh1c2VyQ29tcGxldGUpO1xuXG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5zdGF0dXMpLnRvQmUoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuVXNlcm5hbWUpLnRvQmUodXNlckNvbXBsZXRlLlVzZXJuYW1lKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuRW1haWwpLnRvQmUodXNlckNvbXBsZXRlLkVtYWlsKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuc2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgICAgICBjb25zdCBuZXdVc2VyID0gcmVzcG9uc2UuYm9keTtcblxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCByZXF1ZXN0LnBvc3QoYCR7dXJsfS9sb2dpbmApXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQodXNlckNvbXBsZXRlKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2UyLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuVXNlcm5hbWUpLnRvQmUodXNlckNvbXBsZXRlLlVzZXJuYW1lKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ2NhbiBiZSBmaW5kIGJ5IElkIGNvcnJlY3RseScsIGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QucG9zdCh1cmwpXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQodXNlckNvbXBsZXRlKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2Uuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LlVzZXJuYW1lKS50b0JlKHVzZXJDb21wbGV0ZS5Vc2VybmFtZSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LkVtYWlsKS50b0JlKHVzZXJDb21wbGV0ZS5FbWFpbCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LnNsdWcpLnRvQmVEZWZpbmVkKCk7XG5cbiAgICAgICAgY29uc3QgbmV3VXNlciA9IHJlc3BvbnNlLmJvZHk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgcmVxdWVzdC5nZXQoYCR7dXJsfS8ke25ld1VzZXIuSWR9YClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZCgpO1xuXG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuYm9keS5Vc2VybmFtZSkudG9CZSh1c2VyQ29tcGxldGUuVXNlcm5hbWUpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnY2FuIGJlIGZpbmQgYnkgU2x1ZyBjb3JyZWN0bHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LnBvc3QodXJsKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGRiSGFuZGxlLkhlYWRlcilcbiAgICAgICAgICAgIC5zZW5kKHVzZXJDb21wbGV0ZSk7XG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5Vc2VybmFtZSkudG9CZSh1c2VyQ29tcGxldGUuVXNlcm5hbWUpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5FbWFpbCkudG9CZSh1c2VyQ29tcGxldGUuRW1haWwpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5zbHVnKS50b0JlRGVmaW5lZCgpO1xuXG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSByZXNwb25zZS5ib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IHJlcXVlc3QuZ2V0KGAke3VybH0vcHVibGljLyR7bmV3VXNlci5TbHVnfWApXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQoKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2UyLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuVXNlcm5hbWUpLnRvQmUodXNlckNvbXBsZXRlLlVzZXJuYW1lKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ2NhbiBiZSBkZWxldGUgY29ycmVjdGx5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KHVybClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZCh1c2VyQ29tcGxldGUpO1xuXG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5zdGF0dXMpLnRvQmUoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuVXNlcm5hbWUpLnRvQmUodXNlckNvbXBsZXRlLlVzZXJuYW1lKTtcblxuICAgICAgICBjb25zdCBuZXdVc2VyID0gcmVzcG9uc2UuYm9keTtcblxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCByZXF1ZXN0LmRlbGV0ZShgJHt1cmx9LyR7bmV3VXNlci5TbHVnfWApXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5zdGF0dXMpLnRvQmUoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5ib2R5Lm1lc3NhZ2UpLnRvQmUoJ2RlbGV0ZWQnKTtcblxuICAgIH0pO1xufSk7XG4iXX0=