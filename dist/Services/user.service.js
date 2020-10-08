"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _inversify = require("inversify");

require("reflect-metadata");

var _types = require("./types");

var _database = require("./database.service");

var _uuid = require("uuid");

var _md5Hex = _interopRequireDefault(require("md5-hex"));

var database = _interopRequireWildcard(require("../databases/models"));

var _sequelize = require("sequelize");

var _dec, _dec2, _dec3, _dec4, _class, _temp;

var UserService = (_dec = (0, _inversify.injectable)(), _dec2 = function _dec2(target, key) {
  return (0, _inversify.inject)(_types.TYPES.DatabaseService)(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _database.IDatabaseService === "undefined" ? Object : _database.IDatabaseService]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_temp = /*#__PURE__*/function () {
  function UserService(databaseService) {
    (0, _classCallCheck2["default"])(this, UserService);
    (0, _defineProperty2["default"])(this, "databaseService", void 0);
    this.databaseService = databaseService;
  }

  (0, _createClass2["default"])(UserService, [{
    key: "Create",
    value: function () {
      var _Create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body.Slug = (0, _uuid.v4)().replace('-', '');
                body.Password = (0, _md5Hex["default"])(body.Password); // @ts-ignore

                _context.next = 4;
                return this.databaseService.GetDatabase().User.create(body);

              case 4:
                user = _context.sent;
                return _context.abrupt("return", user);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function Create(_x) {
        return _Create.apply(this, arguments);
      }

      return Create;
    }()
  }, {
    key: "Delete",
    value: function () {
      var _Delete = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(slug) {
        var user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.databaseService.GetDatabase().User.findOne({
                  where: {
                    Slug: slug,
                    include: ["Address", "Photo", "Background", "Securities"]
                  }
                });

              case 2:
                user = _context2.sent;

                if (!user) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 6;
                return user.destroy({
                  force: true
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function Delete(_x2) {
        return _Delete.apply(this, arguments);
      }

      return Delete;
    }()
  }, {
    key: "FindAll",
    value: function () {
      var _FindAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.databaseService.GetDatabase().User.findAll({
                  include: ["Address", "Photo", "Background", "Securities"]
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function FindAll() {
        return _FindAll.apply(this, arguments);
      }

      return FindAll;
    }()
  }, {
    key: "FindById",
    value: function () {
      var _FindById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.databaseService.GetDatabase().User.findOne({
                  where: {
                    Id: id
                  },
                  include: ["Address", "Photo", "Background", "Securities"]
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function FindById(_x3) {
        return _FindById.apply(this, arguments);
      }

      return FindById;
    }()
  }, {
    key: "FindBySlug",
    value: function () {
      var _FindBySlug = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(slug) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.databaseService.GetDatabase().User.findOne({
                  where: {
                    Slug: slug
                  },
                  include: ["Address", "Photo", "Background", "Securities"]
                });

              case 2:
                return _context5.abrupt("return", _context5.sent);

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function FindBySlug(_x4) {
        return _FindBySlug.apply(this, arguments);
      }

      return FindBySlug;
    }()
  }, {
    key: "FindByUsername",
    value: function () {
      var _FindByUsername = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(username) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.databaseService.GetDatabase().User.findOne({
                  where: {
                    Username: username
                  },
                  include: ["Address", "Photo", "Background", "Securities"]
                });

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function FindByUsername(_x5) {
        return _FindByUsername.apply(this, arguments);
      }

      return FindByUsername;
    }()
  }, {
    key: "Update",
    value: function () {
      var _Update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(body, id) {
        var user, lastPassword;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.databaseService.GetDatabase().User.findByPk(id);

              case 2:
                user = _context7.sent;
                // If password is the same
                // @ts-ignore
                lastPassword = user.Password;
                body.Password = !body.Password || body.Password === lastPassword ? lastPassword : (0, _md5Hex["default"])(body.Password);
                _context7.next = 7;
                return user.update(body);

              case 7:
                return _context7.abrupt("return", user);

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function Update(_x6, _x7) {
        return _Update.apply(this, arguments);
      }

      return Update;
    }()
  }, {
    key: "Login",
    value: function () {
      var _Login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(body) {
        var user;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                body.Password = (0, _md5Hex["default"])(body.Password);
                console.log('new password : ', body.Password); // @ts-ignore

                _context8.next = 4;
                return database.User.findOne({
                  where: (0, _defineProperty2["default"])({
                    Password: body.Password
                  }, _sequelize.Op.or, [{
                    Username: body.Username
                  }, {
                    Email: body.Username
                  }, {
                    Phone: body.Username
                  }]),
                  include: ["Address", "Photo", "Background", "Securities"]
                });

              case 4:
                user = _context8.sent;
                console.log('user is : ', user);
                return _context8.abrupt("return", user);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function Login(_x8) {
        return _Login.apply(this, arguments);
      }

      return Login;
    }()
  }]);
  return UserService;
}(), _temp)) || _class) || _class) || _class) || _class);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiVXNlclNlcnZpY2UiLCJUWVBFUyIsIkRhdGFiYXNlU2VydmljZSIsImRhdGFiYXNlU2VydmljZSIsImJvZHkiLCJTbHVnIiwicmVwbGFjZSIsIlBhc3N3b3JkIiwiR2V0RGF0YWJhc2UiLCJVc2VyIiwiY3JlYXRlIiwidXNlciIsInNsdWciLCJmaW5kT25lIiwid2hlcmUiLCJpbmNsdWRlIiwiZGVzdHJveSIsImZvcmNlIiwiZmluZEFsbCIsImlkIiwiSWQiLCJ1c2VybmFtZSIsIlVzZXJuYW1lIiwiZmluZEJ5UGsiLCJsYXN0UGFzc3dvcmQiLCJ1cGRhdGUiLCJjb25zb2xlIiwibG9nIiwiZGF0YWJhc2UiLCJPcCIsIm9yIiwiRW1haWwiLCJQaG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7SUFZYUEsVyxXQURaLDRCO1NBSWdCLHVCQUFPQyxhQUFNQyxlQUFiLEM7O0FBQWIsdUJBQTJDQyxlQUEzQyxFQUE2RTtBQUFBO0FBQUE7QUFDekUsU0FBS0EsZUFBTCxHQUF1QkEsZUFBdkI7QUFDSDs7Ozs7bUhBRVlDLEk7Ozs7OztBQUVUQSxnQkFBQUEsSUFBSSxDQUFDQyxJQUFMLEdBQVksZ0JBQVNDLE9BQVQsQ0FBaUIsR0FBakIsRUFBcUIsRUFBckIsQ0FBWjtBQUNBRixnQkFBQUEsSUFBSSxDQUFDRyxRQUFMLEdBQWdCLHdCQUFPSCxJQUFJLENBQUNHLFFBQVosQ0FBaEIsQyxDQUVBOzs7dUJBQ29CLEtBQUtKLGVBQUwsQ0FBcUJLLFdBQXJCLEdBQW1DQyxJQUFuQyxDQUF3Q0MsTUFBeEMsQ0FBK0NOLElBQS9DLEM7OztBQUFkTyxnQkFBQUEsSTtpREFDQ0EsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvSEFHRUMsSTs7Ozs7Ozt1QkFDVSxLQUFLVCxlQUFMLENBQXFC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bkIscUJBQ3hDc0IsY0FBR0MsRUFEcUMsRUFDaEMsQ0FDTDtBQUFFUixvQkFBQUEsUUFBUSxFQUFFbEIsSUFBSSxDQUFDa0I7QUFBakIsbUJBREssRUFFTDtBQUFFUyxvQkFBQUEsS0FBSyxFQUFFM0IsSUFBSSxDQUFDa0I7QUFBZCxtQkFGSyxFQUdMO0FBQUVVLG9CQUFBQSxLQUFLLEVBQUU1QixJQUFJLENBQUNrQjtBQUFkLG1CQUhLLENBRGdDLENBQVA7QUFPdENQLGtCQUFBQSxPQUFPLEVBQUUsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixZQUFyQixFQUFtQyxZQUFuQztBQVA2QixpQkFBdEIsQzs7O0FBQWRKLGdCQUFBQSxJO0FBU05lLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCaEIsSUFBMUI7a0RBRU9BLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgaW5qZWN0YWJsZX0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgVFlQRVMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHtJRGF0YWJhc2VTZXJ2aWNlfSBmcm9tIFwiLi9kYXRhYmFzZS5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7Q29udHJvbGxlckJhc2VTZXJ2aWNlfSBmcm9tIFwiLi9jb250cm9sbGVyLmJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtJVXNlcn0gZnJvbSBcIi4uL2RhdGFiYXNlcy9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgbWQ1SGV4IGZyb20gXCJtZDUtaGV4XCI7XG5pbXBvcnQgKiBhcyBkYXRhYmFzZSBmcm9tIFwiLi4vZGF0YWJhc2VzL21vZGVsc1wiO1xuaW1wb3J0IHtPcH0gZnJvbSBcInNlcXVlbGl6ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyU2VydmljZSBleHRlbmRzIENvbnRyb2xsZXJCYXNlU2VydmljZTxJVXNlcj4ge1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIExvZ2luKHVzZXI6IHtVc2VybmFtZTogc3RyaW5nLCBQYXNzd29yZDogc3RyaW5nfSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgRmluZEJ5VXNlcm5hbWUodXNlcm5hbWU6IHN0cmluZyk7XG59XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSBpbXBsZW1lbnRzIElVc2VyU2VydmljZXtcbiAgICBwcml2YXRlIGRhdGFiYXNlU2VydmljZTogSURhdGFiYXNlU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKEBpbmplY3QoVFlQRVMuRGF0YWJhc2VTZXJ2aWNlKSBkYXRhYmFzZVNlcnZpY2U6IElEYXRhYmFzZVNlcnZpY2Upe1xuICAgICAgICB0aGlzLmRhdGFiYXNlU2VydmljZSA9IGRhdGFiYXNlU2VydmljZTtcbiAgICB9XG5cbiAgICBhc3luYyBDcmVhdGUoYm9keTogSVVzZXIpIHtcblxuICAgICAgICBib2R5LlNsdWcgPSB1dWlkdjQoKS5yZXBsYWNlKCctJywnJyk7XG4gICAgICAgIGJvZHkuUGFzc3dvcmQgPSBtZDVIZXgoYm9keS5QYXNzd29yZCk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgIHRoaXMuZGF0YWJhc2VTZXJ2aWNlLkdldERhdGFiYXNlKCkuVXNlci5jcmVhdGUoYm9keSlcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgRGVsZXRlKHNsdWc6IHN0cmluZykge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5kYXRhYmFzZVNlcnZpY2UuR2V0RGF0YWJhc2UoKS5Vc2VyLmZpbmRPbmUoeyB3aGVyZTogeyBTbHVnOiBzbHVnLCBpbmNsdWRlOiBbXCJBZGRyZXNzXCIsIFwiUGhvdG9cIiwgXCJCYWNrZ3JvdW5kXCIsIFwiU2VjdXJpdGllc1wiXX19KTtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIGF3YWl0IHVzZXIuZGVzdHJveSh7Zm9yY2U6IHRydWV9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIEZpbmRBbGwoKXtcbiAgICAgICAgcmV0dXJuICBhd2FpdCB0aGlzLmRhdGFiYXNlU2VydmljZS5HZXREYXRhYmFzZSgpLlVzZXIuZmluZEFsbCh7aW5jbHVkZTogW1wiQWRkcmVzc1wiLCBcIlBob3RvXCIsIFwiQmFja2dyb3VuZFwiLCBcIlNlY3VyaXRpZXNcIl19KTtcbiAgICB9XG5cbiAgICBhc3luYyBGaW5kQnlJZChpZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRhdGFiYXNlU2VydmljZS5HZXREYXRhYmFzZSgpLlVzZXIuZmluZE9uZSh7d2hlcmU6IHtJZDogaWR9LCBpbmNsdWRlOiBbXCJBZGRyZXNzXCIsIFwiUGhvdG9cIiwgXCJCYWNrZ3JvdW5kXCIsIFwiU2VjdXJpdGllc1wiXX0pO1xuICAgIH1cblxuICAgIGFzeW5jIEZpbmRCeVNsdWcoc2x1Zzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRhdGFiYXNlU2VydmljZS5HZXREYXRhYmFzZSgpLlVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IFNsdWc6IHNsdWd9ICwgaW5jbHVkZTogW1wiQWRkcmVzc1wiLCBcIlBob3RvXCIsIFwiQmFja2dyb3VuZFwiLCBcIlNlY3VyaXRpZXNcIl19KTtcbiAgICB9XG5cbiAgICBhc3luYyBGaW5kQnlVc2VybmFtZSh1c2VybmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRhdGFiYXNlU2VydmljZS5HZXREYXRhYmFzZSgpLlVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IFVzZXJuYW1lOiB1c2VybmFtZX0gLCBpbmNsdWRlOiBbXCJBZGRyZXNzXCIsIFwiUGhvdG9cIiwgXCJCYWNrZ3JvdW5kXCIsIFwiU2VjdXJpdGllc1wiXX0pO1xuICAgIH1cblxuICAgIGFzeW5jIFVwZGF0ZShib2R5OiBJVXNlciwgaWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5kYXRhYmFzZVNlcnZpY2UuR2V0RGF0YWJhc2UoKS5Vc2VyLmZpbmRCeVBrKGlkKTtcbiAgICAgICAgLy8gSWYgcGFzc3dvcmQgaXMgdGhlIHNhbWVcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBsYXN0UGFzc3dvcmQgID0gKHVzZXIgYXMgSVVzZXIpLlBhc3N3b3JkO1xuICAgICAgICBib2R5LlBhc3N3b3JkID0gIWJvZHkuUGFzc3dvcmQgfHwgYm9keS5QYXNzd29yZCA9PT0gbGFzdFBhc3N3b3JkPyBsYXN0UGFzc3dvcmQgOm1kNUhleChib2R5LlBhc3N3b3JkKTtcblxuXG4gICAgICAgIGF3YWl0IHVzZXIudXBkYXRlKGJvZHkpO1xuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG5cbiAgICBhc3luYyBMb2dpbihib2R5OiB7VXNlcm5hbWU6IHN0cmluZywgUGFzc3dvcmQ6IHN0cmluZ30pIHtcbiAgICAgICAgYm9keS5QYXNzd29yZCA9IG1kNUhleChib2R5LlBhc3N3b3JkKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbmV3IHBhc3N3b3JkIDogJywgYm9keS5QYXNzd29yZCk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgIGRhdGFiYXNlLlVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IFBhc3N3b3JkOiBib2R5LlBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIFtPcC5vcl06IFtcbiAgICAgICAgICAgICAgICAgICAgeyBVc2VybmFtZTogYm9keS5Vc2VybmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICB7IEVtYWlsOiBib2R5LlVzZXJuYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgUGhvbmU6IGJvZHkuVXNlcm5hbWUgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiBbXCJBZGRyZXNzXCIsIFwiUGhvdG9cIiwgXCJCYWNrZ3JvdW5kXCIsIFwiU2VjdXJpdGllc1wiXSB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygndXNlciBpcyA6ICcsIHVzZXIpO1xuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cblxufVxuIl19