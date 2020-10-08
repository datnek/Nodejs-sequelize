"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _supertest = _interopRequireDefault(require("supertest"));

var _server = _interopRequireDefault(require("../server"));

var _db = require("../tests/db.handle");

var _fake = require("../tests/fake.data");

// afterAll(async ()  => await dbHandle.drop());
describe('MediasController', function () {
  var dbHandle = new _db.DbHandle();
  var mediaComplete = new _fake.FakeData().Media;
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
  var url = "/api/medias";
  it('can be created correctly', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var response;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return request.post(url).set('Authorization', dbHandle.Header).send(mediaComplete);

          case 2:
            response = _context3.sent;
            //console.log('response', response);
            //console.log('response', response);
            expect(response.status).toBe(200);
            expect(response.body.Name).toBe(mediaComplete.Name);
            expect(response.body.Extension).toBe(mediaComplete.Extension);
            expect(response.body.Slug).toBeDefined();

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9tZWRpYXMuY29udHJvbGxlci5zcGVjLnRzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiZGJIYW5kbGUiLCJEYkhhbmRsZSIsIm1lZGlhQ29tcGxldGUiLCJGYWtlRGF0YSIsIk1lZGlhIiwiYmVmb3JlRWFjaCIsImNyZWF0ZSIsIm1pZ3JhdGUiLCJhZnRlckVhY2giLCJkcm9wIiwicmVxdWVzdCIsImFwcCIsInVybCIsIml0IiwicG9zdCIsInNldCIsIkhlYWRlciIsInNlbmQiLCJyZXNwb25zZSIsImV4cGVjdCIsInN0YXR1cyIsInRvQmUiLCJib2R5IiwiTmFtZSIsIkV4dGVuc2lvbiIsIlNsdWciLCJ0b0JlRGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFHQTtBQUVBQSxRQUFRLENBQUMsa0JBQUQsRUFBc0IsWUFBTTtBQUVoQyxNQUFNQyxRQUFRLEdBQUcsSUFBSUMsWUFBSixFQUFqQjtBQUVBLE1BQU1DLGFBQXFCLEdBQUcsSUFBSUMsY0FBSixHQUFlQyxLQUE3QztBQUVBQyxFQUFBQSxVQUFVLDZGQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVETCxRQUFRLENBQUNNLE1BQVQsRUFGQzs7QUFBQTtBQUFBO0FBQUEsbUJBR0ROLFFBQVEsQ0FBQ08sT0FBVCxFQUhDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsR0FBVjtBQU9BQyxFQUFBQSxTQUFTLDZGQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNBUixRQUFRLENBQUNNLE1BQVQsRUFEQTs7QUFBQTtBQUFBO0FBQUEsbUJBRUFOLFFBQVEsQ0FBQ1MsSUFBVCxFQUZBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsR0FBVDtBQUtBLE1BQU1DLE9BQU8sR0FBRywyQkFBVUMsa0JBQVYsQ0FBaEI7QUFDQSxNQUFNQyxHQUFHLEdBQUcsYUFBWjtBQUtBQyxFQUFBQSxFQUFFLENBQUMsMEJBQUQsNkZBQTZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRUpILE9BQU8sQ0FBQ0ksSUFBUixDQUFhRixHQUFiLEVBQ2xCRyxHQURrQixDQUNkLGVBRGMsRUFDR2YsUUFBUSxDQUFDZ0IsTUFEWixFQUVsQkMsSUFGa0IsQ0FFYmYsYUFGYSxDQUZJOztBQUFBO0FBRXJCZ0IsWUFBQUEsUUFGcUI7QUFNM0I7QUFDQTtBQUNBQyxZQUFBQSxNQUFNLENBQUNELFFBQVEsQ0FBQ0UsTUFBVixDQUFOLENBQXdCQyxJQUF4QixDQUE2QixHQUE3QjtBQUNBRixZQUFBQSxNQUFNLENBQUNELFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxJQUFmLENBQU4sQ0FBMkJGLElBQTNCLENBQWdDbkIsYUFBYSxDQUFDcUIsSUFBOUM7QUFDQUosWUFBQUEsTUFBTSxDQUFDRCxRQUFRLENBQUNJLElBQVQsQ0FBY0UsU0FBZixDQUFOLENBQWdDSCxJQUFoQyxDQUFxQ25CLGFBQWEsQ0FBQ3NCLFNBQW5EO0FBQ0FMLFlBQUFBLE1BQU0sQ0FBQ0QsUUFBUSxDQUFDSSxJQUFULENBQWNHLElBQWYsQ0FBTixDQUEyQkMsV0FBM0I7O0FBWDJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTdCLEdBQUY7QUFlSCxDQXZDTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN1cGVydGVzdCBmcm9tICdzdXBlcnRlc3QnO1xuaW1wb3J0IGFwcCBmcm9tICcuLi9zZXJ2ZXInO1xuaW1wb3J0IHtEYkhhbmRsZX0gZnJvbSAnLi4vdGVzdHMvZGIuaGFuZGxlJ1xuaW1wb3J0IHtJTWVkaWF9IGZyb20gXCIuLi9kYXRhYmFzZXMvbW9kZWxzL21lZGlhXCI7XG5pbXBvcnQge0Zha2VEYXRhfSBmcm9tIFwiLi4vdGVzdHMvZmFrZS5kYXRhXCI7XG5cblxuLy8gYWZ0ZXJBbGwoYXN5bmMgKCkgID0+IGF3YWl0IGRiSGFuZGxlLmRyb3AoKSk7XG5cbmRlc2NyaWJlKCdNZWRpYXNDb250cm9sbGVyJywgICgpID0+IHtcblxuICAgIGNvbnN0IGRiSGFuZGxlID0gbmV3IERiSGFuZGxlKCk7XG5cbiAgICBjb25zdCBtZWRpYUNvbXBsZXRlOiBJTWVkaWEgPSBuZXcgRmFrZURhdGEoKS5NZWRpYTtcblxuICAgIGJlZm9yZUVhY2goYXN5bmMgKCkgPT5cbiAgICB7XG4gICAgICAgIGF3YWl0IGRiSGFuZGxlLmNyZWF0ZSgpO1xuICAgICAgICBhd2FpdCBkYkhhbmRsZS5taWdyYXRlKCk7XG4gICAgfSk7XG5cblxuICAgIGFmdGVyRWFjaChhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGRiSGFuZGxlLmNyZWF0ZSgpO1xuICAgICAgICBhd2FpdCBkYkhhbmRsZS5kcm9wKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gc3VwZXJ0ZXN0KGFwcCk7XG4gICAgY29uc3QgdXJsID0gXCIvYXBpL21lZGlhc1wiO1xuXG5cblxuXG4gICAgaXQoJ2NhbiBiZSBjcmVhdGVkIGNvcnJlY3RseScsIGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QucG9zdCh1cmwpXG4gICAgICAgICAgICAuc2V0KCdBdXRob3JpemF0aW9uJywgZGJIYW5kbGUuSGVhZGVyKVxuICAgICAgICAgICAgLnNlbmQobWVkaWFDb21wbGV0ZSk7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZygncmVzcG9uc2UnLCByZXNwb25zZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgICAgICBleHBlY3QocmVzcG9uc2Uuc3RhdHVzKS50b0JlKDIwMCk7XG4gICAgICAgIGV4cGVjdChyZXNwb25zZS5ib2R5Lk5hbWUpLnRvQmUobWVkaWFDb21wbGV0ZS5OYW1lKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuRXh0ZW5zaW9uKS50b0JlKG1lZGlhQ29tcGxldGUuRXh0ZW5zaW9uKTtcbiAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmJvZHkuU2x1ZykudG9CZURlZmluZWQoKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==