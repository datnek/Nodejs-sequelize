"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _supertest = _interopRequireDefault(require("supertest"));

var _server = _interopRequireDefault(require("../server"));

var _db = require("../tests/db.handle");

var _fake = require("../tests/fake.data");

// afterAll(async ()  => await dbHandle.drop());
describe('SecuritysController', function () {
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
  var url = "/api/securities";
  var securityComplete = new _fake.FakeData().Security;
  it('can be created correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(securityComplete);

          case 2:
            response = _context3.sent;
            //console.log('response', response);
            //console.log('response', response);
            expect(response.body.Policy).toBe(securityComplete.Policy);
            expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
            expect(response.body.Slug).toBeDefined();

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
  /*
      it('can be edit correctly', async () => {
  
          const response = await request.post(url)
              .set('Authorization', dbHandle.Header)
              .send(securityComplete);
  
          expect(response.status).toBe(200);
          expect(response.body.Policy).toBe(securityComplete.Policy);
          expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
          expect(response.body.Slug).toBeDefined();
  
          const newSecurity = response.body;
  
          newSecurity.Policy = 'Role4';
          newSecurity.Privatecode = 'ADMIS';
  
  
          const response2 = await request.put(`${url}/${newSecurity.Id}`)
              .set('Authorization', dbHandle.Header)
              .send(newSecurity);
  
  
          expect(response2.status).toBe(200);
          expect(response2.body.Policy).toBe(securityComplete.Policy);
          expect(response2.body.Privatecode).toBe(securityComplete.Privatecode);
          expect(response2.body.Slug).toBeDefined();
      });
  */

  it('can be get all correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var response, response2;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(securityComplete);

          case 2:
            response = _context4.sent;
            expect(response.status).toBe(200);
            expect(response.body.Policy).toBe(securityComplete.Policy);
            expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
            expect(response.body.Slug).toBeDefined(); //const newSecurity = response.body;

            _context4.next = 9;
            return request.get(url).set('Authorization', dbHandle.Header).send();

          case 9:
            response2 = _context4.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.Policy).toBe(securityComplete.Policy);
            expect(response2.body.Privatecode).toBe(securityComplete.Privatecode);
            expect(response2.body.Slug).toBeDefined();

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  it('can be find by Id correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
    var response, newSecurity, response2;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(securityComplete);

          case 2:
            response = _context5.sent;
            expect(response.status).toBe(200);
            expect(response.body.Policy).toBe(securityComplete.Policy);
            expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
            expect(response.body.Slug).toBeDefined();
            newSecurity = response.body;
            _context5.next = 10;
            return request.get("".concat(url, "/").concat(newSecurity.Id)).set('Authorization', dbHandle.Header).send();

          case 10:
            response2 = _context5.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.Policy).toBe(securityComplete.Policy);
            expect(response2.body.Privatecode).toBe(securityComplete.Privatecode);
            expect(response2.body.Slug).toBeDefined();

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })));
  it('can be find by Slug correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    var response, newSecurity, response2;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(securityComplete);

          case 2:
            response = _context6.sent;
            expect(response.status).toBe(200);
            expect(response.body.Policy).toBe(securityComplete.Policy);
            expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
            expect(response.body.Slug).toBeDefined();
            newSecurity = response.body;
            _context6.next = 10;
            return request.get("".concat(url, "/public/").concat(newSecurity.Slug)).set('Authorization', dbHandle.Header).send();

          case 10:
            response2 = _context6.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.Policy).toBe(securityComplete.Policy);
            expect(response2.body.Privatecode).toBe(securityComplete.Privatecode);
            expect(response2.body.Slug).toBeDefined();

          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  })));
  it('can be delete correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
    var response, newSecurity, response2;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(securityComplete);

          case 2:
            response = _context7.sent;
            expect(response.status).toBe(200);
            expect(response.body.Policy).toBe(securityComplete.Policy);
            expect(response.body.Privatecode).toBe(securityComplete.Privatecode);
            expect(response.body.Slug).toBeDefined();
            newSecurity = response.body;
            _context7.next = 10;
            return request["delete"]("".concat(url, "/").concat(newSecurity.Slug)).set('Authorization', dbHandle.Header).send();

          case 10:
            response2 = _context7.sent;
            expect(response2.status).toBe(200);
            expect(response2.body.message).toBe('deleted');

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9zZWN1cml0aWVzLmNvbnRyb2xsZXIuc3BlYy50cyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsImRiSGFuZGxlIiwiRGJIYW5kbGUiLCJiZWZvcmVFYWNoIiwiY3JlYXRlIiwibWlncmF0ZSIsImFmdGVyRWFjaCIsImRyb3AiLCJyZXF1ZXN0IiwiYXBwIiwidXJsIiwic2VjdXJpdHlDb21wbGV0ZSIsIkZha2VEYXRhIiwiU2VjdXJpdHkiLCJpdCIsInBvc3QiLCJzZXQiLCJIZWFkZXIiLCJzZW5kIiwicmVzcG9uc2UiLCJleHBlY3QiLCJib2R5IiwiUG9saWN5IiwidG9CZSIsIlByaXZhdGVjb2RlIiwiU2x1ZyIsInRvQmVEZWZpbmVkIiwic3RhdHVzIiwiZ2V0IiwicmVzcG9uc2UyIiwibmV3U2VjdXJpdHkiLCJJZCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBTUE7QUFFQUEsUUFBUSxDQUFDLHFCQUFELEVBQXlCLFlBQU07QUFDbkMsTUFBTUMsUUFBUSxHQUFHLElBQUlDLFlBQUosRUFBakI7QUFHQUMsRUFBQUEsVUFBVSw2RkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFREYsUUFBUSxDQUFDRyxNQUFULEVBRkM7O0FBQUE7QUFBQTtBQUFBLG1CQUdESCxRQUFRLENBQUNJLE9BQVQsRUFIQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELEdBQVY7QUFPQUMsRUFBQUEsU0FBUyw2RkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDQUwsUUFBUSxDQUFDRyxNQUFULEVBREE7O0FBQUE7QUFBQTtBQUFBLG1CQUVBSCxRQUFRLENBQUNNLElBQVQsRUFGQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELEdBQVQ7QUFLQSxNQUFNQyxPQUFPLEdBQUcsMkJBQVVDLGtCQUFW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bUJBYUZiLE9BQU8sVUFBUCxXQUFrQkUsR0FBbEIsY0FBeUJvQixXQUFXLENBQUNMLElBQXJDLEdBQ25CVCxHQURtQixDQUNmLGVBRGUsRUFDRWYsUUFBUSxDQUFDZ0IsTUFEWCxFQUVuQkMsSUFGbUIsRUFiRTs7QUFBQTtBQWFwQlcsWUFBQUEsU0Fib0I7QUFnQjFCVCxZQUFBQSxNQUFNLENBQUNTLFNBQVMsQ0FBQ0YsTUFBWCxDQUFOLENBQXlCSixJQUF6QixDQUE4QixHQUE5QjtBQUNBSCxZQUFBQSxNQUFNLENBQUNTLFNBQVMsQ0FBQ1IsSUFBVixDQUFlVyxPQUFoQixDQUFOLENBQStCVCxJQUEvQixDQUFvQyxTQUFwQzs7QUFqQjBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVCLEdBQUY7QUFvQkgsQ0E1Sk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdXBlcnRlc3QgZnJvbSAnc3VwZXJ0ZXN0JztcbmltcG9ydCBhcHAgZnJvbSAnLi4vc2VydmVyJztcbmltcG9ydCB7RGJIYW5kbGV9IGZyb20gJy4uL3Rlc3RzL2RiLmhhbmRsZSdcbmltcG9ydCB7SVNlY3VyaXR5fSBmcm9tIFwiLi4vZGF0YWJhc2VzL21vZGVscy9zZWN1cml0eVwiO1xuaW1wb3J0IHtGYWtlRGF0YX0gZnJvbSBcIi4uL3Rlc3RzL2Zha2UuZGF0YVwiO1xuXG5cblxuXG5cbi8vIGFmdGVyQWxsKGFzeW5jICgpICA9PiBhd2FpdCBkYkhhbmRsZS5kcm9wKCkpO1xuXG5kZXNjcmliZSgnU2VjdXJpdHlzQ29udHJvbGxlcicsICAoKSA9PiB7XG4gICAgY29uc3QgZGJIYW5kbGUgPSBuZXcgRGJIYW5kbGUoKTtcblxuXG4gICAgYmVmb3JlRWFjaChhc3luYyAoKSA9PlxuICAgIHtcbiAgICAgICAgYXdhaXQgZGJIYW5kbGUuY3JlYXRlKCk7XG4gICAgICAgIGF3YWl0IGRiSGFuZGxlLm1pZ3JhdGUoKTtcbiAgICB9KTtcblxuXG4gICAgYWZ0ZXJFYWNoKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgZGJIYW5kbGUuY3JlYXRlKCk7XG4gICAgICAgIGF3YWl0IGRiSGFuZGxlLmRyb3AoKTtcbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCByZXF1ZXN0ID0gc3VwZXJ0ZXN0KGFwcCk7XG4gICAgY29uc3QgdXJsID0gXCIvYXBpL3NlY3VyaXRpZXNcIjtcbiAgICBjb25zdCBzZWN1cml0eUNvbXBsZXRlOiBJU2VjdXJpdHkgPSAgbmV3IEZha2VEYXRhKCkuU2VjdXJpdHk7XG5cblxuICAgIGl0KCdjYW4gYmUgY3JlYXRlZCBjb3JyZWN0bHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LnBvc3QodXJsKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGRiSGFuZGxlLkhlYWRlcilcbiAgICAgICAgICAgIC5zZW5kKHNlY3VyaXR5Q29tcGxldGUpO1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdyZXNwb25zZScsIHJlc3BvbnNlKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuUG9saWN5KS50b0JlKHNlY3VyaXR5Q29tcGxldGUuUG9saWN5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuUHJpdmF0ZWNvZGUpLnRvQmUoc2VjdXJpdHlDb21wbGV0ZS5Qcml2YXRlY29kZSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LlNsdWcpLnRvQmVEZWZpbmVkKCk7XG5cbiAgICB9KTtcbi8qXG4gICAgaXQoJ2NhbiBiZSBlZGl0IGNvcnJlY3RseScsIGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QucG9zdCh1cmwpXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQoc2VjdXJpdHlDb21wbGV0ZSk7XG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5Qb2xpY3kpLnRvQmUoc2VjdXJpdHlDb21wbGV0ZS5Qb2xpY3kpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5Qcml2YXRlY29kZSkudG9CZShzZWN1cml0eUNvbXBsZXRlLlByaXZhdGVjb2RlKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgICAgICBjb25zdCBuZXdTZWN1cml0eSA9IHJlc3BvbnNlLmJvZHk7XG5cbiAgICAgICAgbmV3U2VjdXJpdHkuUG9saWN5ID0gJ1JvbGU0JztcbiAgICAgICAgbmV3U2VjdXJpdHkuUHJpdmF0ZWNvZGUgPSAnQURNSVMnO1xuXG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgcmVxdWVzdC5wdXQoYCR7dXJsfS8ke25ld1NlY3VyaXR5LklkfWApXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQobmV3U2VjdXJpdHkpO1xuXG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5zdGF0dXMpLnRvQmUoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5ib2R5LlBvbGljeSkudG9CZShzZWN1cml0eUNvbXBsZXRlLlBvbGljeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuYm9keS5Qcml2YXRlY29kZSkudG9CZShzZWN1cml0eUNvbXBsZXRlLlByaXZhdGVjb2RlKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5ib2R5LlNsdWcpLnRvQmVEZWZpbmVkKCk7XG4gICAgfSk7XG4qL1xuXG4gICAgaXQoJ2NhbiBiZSBnZXQgYWxsIGNvcnJlY3RseScsIGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QucG9zdCh1cmwpXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQoc2VjdXJpdHlDb21wbGV0ZSk7XG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5Qb2xpY3kpLnRvQmUoc2VjdXJpdHlDb21wbGV0ZS5Qb2xpY3kpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5Qcml2YXRlY29kZSkudG9CZShzZWN1cml0eUNvbXBsZXRlLlByaXZhdGVjb2RlKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgICAgICAvL2NvbnN0IG5ld1NlY3VyaXR5ID0gcmVzcG9uc2UuYm9keTtcblxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCByZXF1ZXN0LmdldCh1cmwpXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQoKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2UyLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuUG9saWN5KS50b0JlKHNlY3VyaXR5Q29tcGxldGUuUG9saWN5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5ib2R5LlByaXZhdGVjb2RlKS50b0JlKHNlY3VyaXR5Q29tcGxldGUuUHJpdmF0ZWNvZGUpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ2NhbiBiZSBmaW5kIGJ5IElkIGNvcnJlY3RseScsIGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QucG9zdCh1cmwpXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQoc2VjdXJpdHlDb21wbGV0ZSk7XG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5Qb2xpY3kpLnRvQmUoc2VjdXJpdHlDb21wbGV0ZS5Qb2xpY3kpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5Qcml2YXRlY29kZSkudG9CZShzZWN1cml0eUNvbXBsZXRlLlByaXZhdGVjb2RlKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgICAgICBjb25zdCBuZXdTZWN1cml0eSA9IHJlc3BvbnNlLmJvZHk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgcmVxdWVzdC5nZXQoYCR7dXJsfS8ke25ld1NlY3VyaXR5LklkfWApXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQoKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2UyLnN0YXR1cykudG9CZSgyMDApO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuUG9saWN5KS50b0JlKHNlY3VyaXR5Q29tcGxldGUuUG9saWN5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5ib2R5LlByaXZhdGVjb2RlKS50b0JlKHNlY3VyaXR5Q29tcGxldGUuUHJpdmF0ZWNvZGUpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ2NhbiBiZSBmaW5kIGJ5IFNsdWcgY29ycmVjdGx5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KHVybClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZChzZWN1cml0eUNvbXBsZXRlKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2Uuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LlBvbGljeSkudG9CZShzZWN1cml0eUNvbXBsZXRlLlBvbGljeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LlByaXZhdGVjb2RlKS50b0JlKHNlY3VyaXR5Q29tcGxldGUuUHJpdmF0ZWNvZGUpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuYm9keS5TbHVnKS50b0JlRGVmaW5lZCgpO1xuXG4gICAgICAgIGNvbnN0IG5ld1NlY3VyaXR5ID0gcmVzcG9uc2UuYm9keTtcblxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCByZXF1ZXN0LmdldChgJHt1cmx9L3B1YmxpYy8ke25ld1NlY3VyaXR5LlNsdWd9YClcbiAgICAgICAgICAgIC5zZXQoJ0F1dGhvcml6YXRpb24nLCBkYkhhbmRsZS5IZWFkZXIpXG4gICAgICAgICAgICAuc2VuZCgpO1xuXG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuYm9keS5Qb2xpY3kpLnRvQmUoc2VjdXJpdHlDb21wbGV0ZS5Qb2xpY3kpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLmJvZHkuUHJpdmF0ZWNvZGUpLnRvQmUoc2VjdXJpdHlDb21wbGV0ZS5Qcml2YXRlY29kZSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuYm9keS5TbHVnKS50b0JlRGVmaW5lZCgpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnY2FuIGJlIGRlbGV0ZSBjb3JyZWN0bHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LnBvc3QodXJsKVxuICAgICAgICAgICAgLnNldCgnQXV0aG9yaXphdGlvbicsIGRiSGFuZGxlLkhlYWRlcilcbiAgICAgICAgICAgIC5zZW5kKHNlY3VyaXR5Q29tcGxldGUpO1xuXG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5zdGF0dXMpLnRvQmUoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuUG9saWN5KS50b0JlKHNlY3VyaXR5Q29tcGxldGUuUG9saWN5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuUHJpdmF0ZWNvZGUpLnRvQmUoc2VjdXJpdHlDb21wbGV0ZS5Qcml2YXRlY29kZSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5LlNsdWcpLnRvQmVEZWZpbmVkKCk7XG5cbiAgICAgICAgY29uc3QgbmV3U2VjdXJpdHkgPSByZXNwb25zZS5ib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IHJlcXVlc3QuZGVsZXRlKGAke3VybH0vJHtuZXdTZWN1cml0eS5TbHVnfWApXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQoKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5zdGF0dXMpLnRvQmUoMjAwKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5ib2R5Lm1lc3NhZ2UpLnRvQmUoJ2RlbGV0ZWQnKTtcblxuICAgIH0pO1xufSk7XG4iXX0=