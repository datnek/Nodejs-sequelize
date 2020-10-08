"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("../tests/db.handle");

var _fake = require("../tests/fake.data");

var _inversify = require("../inversify.config");

var _types = require("./types");

// afterAll(async ()  => await dbHandle.drop());
describe('LocalizationService', function () {
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
  it('can be created correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _inversify.diContainer.get(_types.TYPES.LocalizationService).Create(localizationComplete);

          case 2:
            response = _context3.sent;
            //console.log('response', response);
            //console.log('response', response);
            expect(response.City).toBe(localizationComplete.City);
            expect(response.Country).toBe(localizationComplete.Country);
            expect(response.Slug).toBeDefined();

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
            return _inversify.diContainer.get(_types.TYPES.LocalizationService).Create(localizationComplete);

          case 2:
            response = _context4.sent;
            expect(response.City).toBe(localizationComplete.City);
            expect(response.Country).toBe(localizationComplete.Country);
            expect(response.Slug).toBeDefined();
            newLocalization = response.body;
            newLocalization.Country = 'fr';
            newLocalization.City = 'Paris';
            _context4.next = 11;
            return _inversify.diContainer.get(_types.TYPES.LocalizationService).Update(newLocalization, newLocalization.Id);

          case 11:
            response2 = _context4.sent;
            expect(response2.City).toBe(localizationComplete.City);
            expect(response2.Country).toBe(localizationComplete.Country);
            expect(response2.Slug).toBeDefined();

          case 15:
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
            return _inversify.diContainer.get(_types.TYPES.LocalizationService).Create(localizationComplete);

          case 2:
            response = _context5.sent;
            expect(response.status).toBe(200);
            expect(response.City).toBe(localizationComplete.City);
            expect(response.Country).toBe(localizationComplete.Country);
            expect(response.Slug).toBeDefined(); //const newLocalization = response.body;

            _context5.next = 9;
            return _inversify.diContainer.get(_types.TYPES.LocalizationService).FindAll();

          case 9:
            response2 = _context5.sent;
            expect(response2.City).toBe(localizationComplete.City);
            expect(response2.Country).toBe(localizationComplete.Country);
            expect(response2.Slug).toBeDefined();

          case 13:
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
            return _inversify.diContainer.get(_types.TYPES.LocalizationService).Create(localizationComplete);

          case 2:
            response = _context6.sent;
            expect(response.City).toBe(localizationComplete.City);
            expect(response.Country).toBe(localizationComplete.Country);
            expect(response.Slug).toBeDefined();
            newLocalization = response.body;
            _context6.next = 9;
            return _inversify.diContainer.get(_types.TYPES.LocalizationService).FindById(newLocalization.Id);

          case 9:
            response2 = _context6.sent;
            expect(response2.City).toBe(localizationComplete.City);
            expect(response2.Country).toBe(localizationComplete.Country);
            expect(response2.Slug).toBeDefined();

          case 13:
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
            return _inversify.diContainer.get(_types.TYPES.LocalizationService).Create(localizationComplete);

          case 2:
            response = _context7.sent;
            expect(response.City).toBe(localizationComplete.City);
            expect(response.Country).toBe(localizationComplete.Country);
            expect(response.Slug).toBeDefined();
            newLocalization = response.body;
            _context7.next = 9;
            return _inversify.diContainer.get(_types.TYPES.LocalizationService).FindBySlug(newLocalization.Slug);

          case 9:
            response2 = _context7.sent;
            expect(response2.City).toBe(localizationComplete.City);
            expect(response2.Country).toBe(localizationComplete.Country);
            expect(response2.Slug).toBeDefined();

          case 13:
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
            return _inversify.diContainer.get(_types.TYPES.LocalizationService).Create(localizationComplete);

          case 2:
            response = _context8.sent;
            expect(response.City).toBe(localizationComplete.City);
            expect(response.Country).toBe(localizationComplete.Country);
            expect(response.Slug).toBeDefined();
            newLocalization = response.body;
            _context8.next = 9;
            return _inversify.diContainer.get(_types.TYPES.LocalizationService).Delete(newLocalization.Slug);

          case 9:
            response2 = _context8.sent;
            expect(response2.message).toBe('deleted');

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZXJ2aWNlcy9sb2NhbGl6YXRpb24uc2VydmljZS5zcGVjLnRzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwibG9jYWxpemF0aW9uQ29tcGxldGUiLCJGYWtlRGF0YSIsIkxvY2FsaXphdGlvbiIsImRiSGFuZGxlIiwiRGJIYW5kbGUiLCJiZWZvcmVFYWNoIiwiY3JlYXRlIiwibWlncmF0ZSIsImFmdGVyRWFjaCIsImRyb3AiLCJpdCIsImRpQ29udGFpbmVyIiwiZ2V0IiwiVFlQRVMiLCJMb2NhbGl6YXRpb25TZXJ2aWNlIiwiQ3JlYXRlIiwicmVzcG9uc2UiLCJleHBlY3QiLCJDaXR5IiwidG9CZSIsIkNvdW50cnkiLCJTbHVnIiwidG9CZURlZmluZWQiLCJuZXdMb2NhbGl6YXRpb24iLCJib2R5IiwiVXBkYXRlIiwiSWQiLCJyZXNwb25zZTIiLCJzdGF0dXMiLCJGaW5kQWxsIiwiRmluZEJ5SWQiLCJGaW5kQnlTbHVnIiwiRGVsZXRlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFPQTtBQUVBQSxRQUFRLENBQUMscUJBQUQsRUFBeUIsWUFBTTtBQUNuQyxNQUFNQyxvQkFBbUMsR0FBSSxJQUFJQyxjQUFKLEdBQWVDLFlBQTVEO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlDLFlBQUosRUFBakI7QUFFQUMsRUFBQUEsVUFBVSw2RkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFREYsUUFBUSxDQUFDRyxNQUFULEVBRkM7O0FBQUE7QUFBQTtBQUFBLG1CQUdESCxRQUFRLENBQUNJLE9BQVQsRUFIQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELEdBQVY7QUFPQUMsRUFBQUEsU0FBUyw2RkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDQUwsUUFBUSxDQUFDRyxNQUFULEVBREE7O0FBQUE7QUFBQTtBQUFBLG1CQUVB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LFNBWG9CO0FBYTFCVixZQUFBQSxNQUFNLENBQUNVLFNBQVMsQ0FBQ00sT0FBWCxDQUFOLENBQTBCZCxJQUExQixDQUErQixTQUEvQjs7QUFiMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBNUIsR0FBRjtBQWdCSCxDQWhJTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwcCBmcm9tICcuLi9zZXJ2ZXInO1xuaW1wb3J0IHtEYkhhbmRsZX0gZnJvbSAnLi4vdGVzdHMvZGIuaGFuZGxlJ1xuaW1wb3J0IHtJTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZGF0YWJhc2VzL21vZGVscy9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7RmFrZURhdGF9IGZyb20gXCIuLi90ZXN0cy9mYWtlLmRhdGFcIjtcbmltcG9ydCB7ZGlDb250YWluZXJ9IGZyb20gXCIuLi9pbnZlcnNpZnkuY29uZmlnXCI7XG5pbXBvcnQge0lMb2NhbGl6YXRpb25TZXJ2aWNlfSBmcm9tIFwiLi9sb2NhbGl6YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHtUWVBFU30gZnJvbSBcIi4vdHlwZXNcIjtcblxuXG5cblxuXG5cbi8vIGFmdGVyQWxsKGFzeW5jICgpICA9PiBhd2FpdCBkYkhhbmRsZS5kcm9wKCkpO1xuXG5kZXNjcmliZSgnTG9jYWxpemF0aW9uU2VydmljZScsICAoKSA9PiB7XG4gICAgY29uc3QgbG9jYWxpemF0aW9uQ29tcGxldGU6IElMb2NhbGl6YXRpb24gPSAgbmV3IEZha2VEYXRhKCkuTG9jYWxpemF0aW9uO1xuICAgIGNvbnN0IGRiSGFuZGxlID0gbmV3IERiSGFuZGxlKCk7XG5cbiAgICBiZWZvcmVFYWNoKGFzeW5jICgpID0+XG4gICAge1xuICAgICAgICBhd2FpdCBkYkhhbmRsZS5jcmVhdGUoKTtcbiAgICAgICAgYXdhaXQgZGJIYW5kbGUubWlncmF0ZSgpO1xuICAgIH0pO1xuXG5cbiAgICBhZnRlckVhY2goYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBkYkhhbmRsZS5jcmVhdGUoKTtcbiAgICAgICAgYXdhaXQgZGJIYW5kbGUuZHJvcCgpO1xuICAgIH0pO1xuXG5cblxuICAgIGl0KCdjYW4gYmUgY3JlYXRlZCBjb3JyZWN0bHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SUxvY2FsaXphdGlvblNlcnZpY2U+KFRZUEVTLkxvY2FsaXphdGlvblNlcnZpY2UpLkNyZWF0ZShsb2NhbGl6YXRpb25Db21wbGV0ZSk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuQ2l0eSkudG9CZShsb2NhbGl6YXRpb25Db21wbGV0ZS5DaXR5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLkNvdW50cnkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ291bnRyeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5TbHVnKS50b0JlRGVmaW5lZCgpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnY2FuIGJlIGVkaXQgY29ycmVjdGx5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElMb2NhbGl6YXRpb25TZXJ2aWNlPihUWVBFUy5Mb2NhbGl6YXRpb25TZXJ2aWNlKS5DcmVhdGUobG9jYWxpemF0aW9uQ29tcGxldGUpO1xuXG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLkNpdHkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ2l0eSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5Db3VudHJ5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNvdW50cnkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgICAgICBjb25zdCBuZXdMb2NhbGl6YXRpb24gPSByZXNwb25zZS5ib2R5O1xuXG4gICAgICAgIG5ld0xvY2FsaXphdGlvbi5Db3VudHJ5ID0gJ2ZyJztcbiAgICAgICAgbmV3TG9jYWxpemF0aW9uLkNpdHkgPSAnUGFyaXMnO1xuXG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElMb2NhbGl6YXRpb25TZXJ2aWNlPihUWVBFUy5Mb2NhbGl6YXRpb25TZXJ2aWNlKS5VcGRhdGUobmV3TG9jYWxpemF0aW9uLCBuZXdMb2NhbGl6YXRpb24uSWQpO1xuXG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuQ2l0eSkudG9CZShsb2NhbGl6YXRpb25Db21wbGV0ZS5DaXR5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5Db3VudHJ5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNvdW50cnkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLlNsdWcpLnRvQmVEZWZpbmVkKCk7XG4gICAgfSk7XG5cblxuICAgIGl0KCdjYW4gYmUgZ2V0IGFsbCBjb3JyZWN0bHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SUxvY2FsaXphdGlvblNlcnZpY2U+KFRZUEVTLkxvY2FsaXphdGlvblNlcnZpY2UpLkNyZWF0ZShsb2NhbGl6YXRpb25Db21wbGV0ZSk7XG5cblxuICAgICAgICBleHBlY3QocmVzcG9uc2Uuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5DaXR5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNpdHkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuQ291bnRyeSkudG9CZShsb2NhbGl6YXRpb25Db21wbGV0ZS5Db3VudHJ5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLlNsdWcpLnRvQmVEZWZpbmVkKCk7XG5cbiAgICAgICAgLy9jb25zdCBuZXdMb2NhbGl6YXRpb24gPSByZXNwb25zZS5ib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJTG9jYWxpemF0aW9uU2VydmljZT4oVFlQRVMuTG9jYWxpemF0aW9uU2VydmljZSkuRmluZEFsbCgpO1xuXG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5DaXR5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNpdHkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLkNvdW50cnkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ291bnRyeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ2NhbiBiZSBmaW5kIGJ5IElkIGNvcnJlY3RseScsIGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJTG9jYWxpemF0aW9uU2VydmljZT4oVFlQRVMuTG9jYWxpemF0aW9uU2VydmljZSkuQ3JlYXRlKGxvY2FsaXphdGlvbkNvbXBsZXRlKTtcblxuXG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5DaXR5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNpdHkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuQ291bnRyeSkudG9CZShsb2NhbGl6YXRpb25Db21wbGV0ZS5Db3VudHJ5KTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLlNsdWcpLnRvQmVEZWZpbmVkKCk7XG5cbiAgICAgICAgY29uc3QgbmV3TG9jYWxpemF0aW9uID0gcmVzcG9uc2UuYm9keTtcblxuICAgICAgICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBkaUNvbnRhaW5lci5nZXQ8SUxvY2FsaXphdGlvblNlcnZpY2U+KFRZUEVTLkxvY2FsaXphdGlvblNlcnZpY2UpLkZpbmRCeUlkKG5ld0xvY2FsaXphdGlvbi5JZCk7XG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5DaXR5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNpdHkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLkNvdW50cnkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ291bnRyeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ2NhbiBiZSBmaW5kIGJ5IFNsdWcgY29ycmVjdGx5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElMb2NhbGl6YXRpb25TZXJ2aWNlPihUWVBFUy5Mb2NhbGl6YXRpb25TZXJ2aWNlKS5DcmVhdGUobG9jYWxpemF0aW9uQ29tcGxldGUpO1xuXG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLkNpdHkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ2l0eSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5Db3VudHJ5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNvdW50cnkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgICAgICBjb25zdCBuZXdMb2NhbGl6YXRpb24gPSByZXNwb25zZS5ib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJTG9jYWxpemF0aW9uU2VydmljZT4oVFlQRVMuTG9jYWxpemF0aW9uU2VydmljZSkuRmluZEJ5U2x1ZyhuZXdMb2NhbGl6YXRpb24uU2x1Zyk7XG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlMi5DaXR5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNpdHkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UyLkNvdW50cnkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ291bnRyeSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZTIuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ2NhbiBiZSBkZWxldGUgY29ycmVjdGx5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZGlDb250YWluZXIuZ2V0PElMb2NhbGl6YXRpb25TZXJ2aWNlPihUWVBFUy5Mb2NhbGl6YXRpb25TZXJ2aWNlKS5DcmVhdGUobG9jYWxpemF0aW9uQ29tcGxldGUpO1xuXG5cbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLkNpdHkpLnRvQmUobG9jYWxpemF0aW9uQ29tcGxldGUuQ2l0eSk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5Db3VudHJ5KS50b0JlKGxvY2FsaXphdGlvbkNvbXBsZXRlLkNvdW50cnkpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2UuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgICAgICBjb25zdCBuZXdMb2NhbGl6YXRpb24gPSByZXNwb25zZS5ib2R5O1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGRpQ29udGFpbmVyLmdldDxJTG9jYWxpemF0aW9uU2VydmljZT4oVFlQRVMuTG9jYWxpemF0aW9uU2VydmljZSkuRGVsZXRlKG5ld0xvY2FsaXphdGlvbi5TbHVnKTtcblxuICAgICAgICBleHBlY3QocmVzcG9uc2UyLm1lc3NhZ2UpLnRvQmUoJ2RlbGV0ZWQnKTtcblxuICAgIH0pO1xufSk7XG4iXX0=