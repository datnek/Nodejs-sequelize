"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecurityService = void 0;

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

var _auth = require("../app/auth.grade");

var _md5Hex = _interopRequireDefault(require("md5-hex"));

var _constant = require("../app/constant");

var _user = require("./user.service");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _temp;

var SecurityService = (_dec = (0, _inversify.injectable)(), _dec2 = function _dec2(target, key) {
  return (0, _inversify.inject)(_types.TYPES.DatabaseService)(target, undefined, 0);
}, _dec3 = function _dec3(target, key) {
  return (0, _inversify.inject)(_types.TYPES.UserService)(target, undefined, 1);
}, _dec4 = function _dec4(target, key) {
  return (0, _inversify.inject)(_types.TYPES.Constant)(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _database.IDatabaseService === "undefined" ? Object : _database.IDatabaseService, typeof _user.IUserService === "undefined" ? Object : _user.IUserService, typeof _constant.IConstant === "undefined" ? Object : _constant.IConstant]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = (_temp = /*#__PURE__*/function () {
  function SecurityService(databaseService, userService, constant) {
    (0, _classCallCheck2["default"])(this, SecurityService);
    (0, _defineProperty2["default"])(this, "databaseService", void 0);
    (0, _defineProperty2["default"])(this, "userService", void 0);
    (0, _defineProperty2["default"])(this, "constant", void 0);
    this.userService = userService;
    this.constant = constant;
    this.databaseService = databaseService;
  }

  (0, _createClass2["default"])(SecurityService, [{
    key: "InitUserApp",
    value: function () {
      var _InitUserApp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var exitUser, user, security;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.userService.FindByUsername("brain-maker");

              case 2:
                exitUser = _context.sent;

                if (!(exitUser && exitUser.Id)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", exitUser);

              case 5:
                user = {
                  Username: "brain-maker",
                  Password: "datnek-brain-maker2020",
                  Firstname: "contact",
                  Lastname: "datnek",
                  Civility: 1,
                  Email: "contact@datnek.be",
                  Phone: "+32465806045",
                  UpdatedAt: null,
                  CreatedAt: null,
                  Sex: 3,
                  Slug: "123"
                };
                security = {
                  Policy: "1",
                  Origin: "http://localhost:4200",
                  UserId: 1,
                  Privatecode: 'exemple',
                  Slug: '1234',
                  Token: null,
                  Expiretime: 360 * 25
                }; // create user

                _context.next = 9;
                return this.userService.Create(user);

              case 9:
                user = _context.sent;
                // @ts-ignore
                security.UserId = user.id; // console.log('security : ', security);

                _context.next = 13;
                return this.Create(security);

              case 13:
                security = _context.sent;
                _context.next = 16;
                return this.FindById(security.id);

              case 16:
                return _context.abrupt("return", _context.sent);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function InitUserApp() {
        return _InitUserApp.apply(this, arguments);
      }

      return InitUserApp;
    }()
  }, {
    key: "Create",
    value: function () {
      var _Create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
        var security;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                body.Slug = (0, _uuid.v4)().replace('-', ''); // generate token

                body.Token = new _auth.AuthGrade().GenerateAccessToken({
                  Privatecode: body.Privatecode,
                  Origin: body.Origin,
                  Roles: body.Policy,
                  Expiretime: body.Expiretime
                });
                body.Privatecode = (0, _md5Hex["default"])(body.Slug);
                body.Policy = this.constant.GetRoles().find(function (f) {
                  return f.Id.toString() === body.Policy;
                }).Title; // @ts-ignore

                _context2.next = 6;
                return this.databaseService.GetDatabase().Security.create(body);

              case 6:
                security = _context2.sent;
                return _context2.abrupt("return", security);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function Create(_x) {
        return _Create.apply(this, arguments);
      }

      return Create;
    }()
  }, {
    key: "Delete",
    value: function () {
      var _Delete = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(slug) {
        var security;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.databaseService.GetDatabase().Security.findOne({
                  where: {
                    Slug: slug
                  }
                });

              case 2:
                security = _context3.sent;

                if (!security) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 6;
                return security.destroy({
                  force: true
                });

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function Delete(_x2) {
        return _Delete.apply(this, arguments);
      }

      return Delete;
    }()
  }, {
    key: "FindAll",
    value: function () {
      var _FindAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.databaseService.GetDatabase().Security.findAll({});

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function FindAll() {
        return _FindAll.apply(this, arguments);
      }

      return FindAll;
    }()
  }, {
    key: "FindById",
    value: function () {
      var _FindById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.databaseService.GetDatabase().Security.findOne({
                  where: {
                    Id: id
                  }
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

      function FindById(_x3) {
        return _FindById.apply(this, arguments);
      }

      return FindById;
    }()
  }, {
    key: "FindBySlug",
    value: function () {
      var _FindBySlug = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(slug) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.databaseService.GetDatabase().Security.findOne({
                  where: {
                    Slug: slug
                  }
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

      function FindBySlug(_x4) {
        return _FindBySlug.apply(this, arguments);
      }

      return FindBySlug;
    }()
  }, {
    key: "Update",
    value: function () {
      var _Update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(body, id) {
        var security;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.databaseService.GetDatabase().Security.findByPk(id);

              case 2:
                security = _context7.sent;
                _context7.next = 5;
                return security.update(body);

              case 5:
                return _context7.abrupt("return", security);

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function Update(_x5, _x6) {
        return _Update.apply(this, arguments);
      }

      return Update;
    }()
  }]);
  return SecurityService;
}(), _temp)) || _class) || _class) || _class) || _class) || _class) || _class);
exports.SecurityService = SecurityService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZXJ2aWNlcy9zZWN1cml0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIlNlY3VyaXR5U2VydmljZSIsIlRZUEVTIiwiRGF0YWJhc2VTZXJ2aWNlIiwiVXNlclNlcnZpY2UiLCJDb25zdGFudCIsImRhdGFiYXNlU2VydmljZSIsInVzZXJTZXJ2aWNlIiwiY29uc3RhbnQiLCJGaW5kQnlVc2VybmFtZSIsImV4aXRVc2VyIiwiSWQiLCJ1c2VyIiwiVXNlcm5hbWUiLCJQYXNzd29yZCIsIkZpcnN0bmFtZSIsIkxhc3RuYW1lIiwiQ2l2aWxpdHkiLCJFbWFpbCIsIlBob25lIiwiVXBkYXRlZEF0IiwiQ3JlYXRlZEF0IiwiU2V4IiwiU2x1ZyIsInNlY3VyaXR5IiwiUG9saWN5IiwiT3JpZ2luIiwiVXNlcklkIiwiUHJpdmF0ZWNvZGUiLCJUb2tlbiIsIkV4cGlyZXRpbWUiLCJDcmVhdGUiLCJpZCIsIkZpbmRCeUlkIiwiYm9keSIsInJlcGxhY2UiLCJBdXRoR3JhZGUiLCJHZW5lcmF0ZUFjY2Vzc1Rva2VuIiwiUm9sZXMiLCJHZXRSb2xlcyIsImZpbmQiLCJmIiwidG9TdHJpbmciLCJUaXRsZSIsIkdldERhdGFiYXNlIiwiU2VjdXJpdHkiLCJjcmVhdGUiLCJzbHVnIiwiZmluZE9uZSIsIndoZXJlIiwiZGVzdHJveSIsImZvcmNlIiwiZmluZEFsbCIsImZpbmRCeVBrIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7SUFRYUEsZSxXQURaLDRCO1NBTWdCLHVCQUFPQyxhQUFNQyxlQUFiLEM7O1NBQ0EsdUJBQU9ELGFBQU1FLFdBQWIsQzs7U0FDQSx1QkFBT0YsYUFBTUcsUUFBYixDOztBQUZiLDJCQUEyQ0MsZUFBM0MsRUFDdUNDLFdBRHZDLEVBRW9DQyxRQUZwQyxFQUV3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BE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Q0FBNENHLE9BQTVDLENBQW9EO0FBQUVDLGtCQUFBQSxLQUFLLEVBQUU7QUFBRTFCLG9CQUFBQSxJQUFJLEVBQUV3QjtBQUFSO0FBQVQsaUJBQXBELEM7OztBQUFqQnZCLGdCQUFBQSxROztxQkFDRkEsUTs7Ozs7O3VCQUNNQSxRQUFRLENBQUMwQixPQUFULENBQWlCO0FBQUNDLGtCQUFBQSxLQUFLLEVBQUU7QUFBUixpQkFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLSSxLQUFLN0MsZUFBTCxDQUFxQnNDLFdBQXJCLEdBQW1DQyxRQUFuQyxDQUE0Q08sT0FBNUMsQ0FBb0QsRUFBcEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzSEFHSHBCLEU7Ozs7Ozt1QkFDRSxLQUFLMUIsZUFBTCxDQUFxQnNDLFdBQXJCLEdBQW1DQyxRQUFuQyxDQUE0Q0csT0FBNUMsQ0FBb0Q7QUFBQ0Msa0JBQUFBLEtBQUssRUFBRTtBQUFDdEMsb0JBQUFBLEVBQUUsRUFBRXFCO0FBQUw7QUFBUixpQkFBcEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3SEFHQWUsSTs7Ozs7O3VCQUNBLEtBQUt6QyxlQUFMLENBQXFCc0MsV0FBckIsR0FBbUNDLFFBQW5DLENBQTRDRyxPQUE1QyxDQUFvRDtBQUFFQyxrQkFBQUEsS0FBSyxFQUFFO0FBQUUxQixvQkFBQUEsSUFBSSxFQUFFd0I7QUFBUjtBQUFULGlCQUFwRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29IQUdKYixJLEVBQWlCRixFOzs7Ozs7O3VCQUNILEtBQUsxQixlQUFMLENBQXFCc0MsV0FBckIsR0FBbUNDLFFBQW5DLENBQTRDUSxRQUE1QyxDQUFxRHJCLEVBQXJELEM7OztBQUFqQlIsZ0JBQUFBLFE7O3VCQUNBQSxRQUFRLENBQUM4QixNQUFULENBQWdCcEIsSUFBaEIsQzs7O2tEQUNDVixRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGluamVjdGFibGV9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7SURhdGFiYXNlU2VydmljZX0gZnJvbSBcIi4vZGF0YWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtDb250cm9sbGVyQmFzZVNlcnZpY2V9IGZyb20gXCIuL2NvbnRyb2xsZXIuYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0lTZWN1cml0eX0gZnJvbSBcIi4uL2RhdGFiYXNlcy9tb2RlbHMvc2VjdXJpdHlcIjtcbmltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHtBdXRoR3JhZGV9IGZyb20gXCIuLi9hcHAvYXV0aC5ncmFkZVwiO1xuaW1wb3J0IG1kNUhleCBmcm9tIFwibWQ1LWhleFwiO1xuaW1wb3J0IHtDb25zdGFudCwgSUNvbnN0YW50fSBmcm9tIFwiLi4vYXBwL2NvbnN0YW50XCI7XG5pbXBvcnQge0lVc2VyfSBmcm9tIFwiLi4vZGF0YWJhc2VzL21vZGVscy91c2VyXCI7XG5pbXBvcnQge0lVc2VyU2VydmljZX0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNlY3VyaXR5U2VydmljZSBleHRlbmRzIENvbnRyb2xsZXJCYXNlU2VydmljZTxJU2VjdXJpdHk+e1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBJbml0VXNlckFwcCgpO1xufVxuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VjdXJpdHlTZXJ2aWNlIGltcGxlbWVudHMgSVNlY3VyaXR5U2VydmljZXtcbiAgICBwcml2YXRlIGRhdGFiYXNlU2VydmljZTogSURhdGFiYXNlU2VydmljZTtcbiAgIHByaXZhdGUgdXNlclNlcnZpY2U6IElVc2VyU2VydmljZTtcbiAgICBwcml2YXRlIGNvbnN0YW50OiBJQ29uc3RhbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihAaW5qZWN0KFRZUEVTLkRhdGFiYXNlU2VydmljZSkgZGF0YWJhc2VTZXJ2aWNlOiBJRGF0YWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEBpbmplY3QoVFlQRVMuVXNlclNlcnZpY2UpIHVzZXJTZXJ2aWNlOiBJVXNlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgQGluamVjdChUWVBFUy5Db25zdGFudCkgY29uc3RhbnQ6IElDb25zdGFudCl7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UgPSB1c2VyU2VydmljZTtcbiAgICAgICAgdGhpcy5jb25zdGFudCA9IGNvbnN0YW50O1xuICAgICAgICB0aGlzLmRhdGFiYXNlU2VydmljZSA9IGRhdGFiYXNlU2VydmljZTtcbiAgICB9XG5cbiAgICBhc3luYyBJbml0VXNlckFwcCgpe1xuXG4gICAgICAgIGNvbnN0IGV4aXRVc2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5GaW5kQnlVc2VybmFtZShcImJyYWluLW1ha2VyXCIpO1xuXG4gICAgICAgIGlmKGV4aXRVc2VyICYmIGV4aXRVc2VyLklkKXtcbiAgICAgICAgICAgIHJldHVybiBleGl0VXNlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1c2VyOiBJVXNlciA9IHtVc2VybmFtZTpcImJyYWluLW1ha2VyXCIsXG4gICAgICAgICAgICBQYXNzd29yZDpcImRhdG5lay1icmFpbi1tYWtlcjIwMjBcIixcbiAgICAgICAgICAgIEZpcnN0bmFtZTpcImNvbnRhY3RcIixcbiAgICAgICAgICAgIExhc3RuYW1lOlwiZGF0bmVrXCIsXG4gICAgICAgICAgICBDaXZpbGl0eToxLFxuICAgICAgICAgICAgRW1haWw6XCJjb250YWN0QGRhdG5lay5iZVwiLFxuICAgICAgICAgICAgUGhvbmU6XCIrMzI0NjU4MDYwNDVcIixcbiAgICAgICAgICAgIFVwZGF0ZWRBdDogbnVsbCxcbiAgICAgICAgICAgIENyZWF0ZWRBdDogbnVsbCxcbiAgICAgICAgICAgIFNleDogMyxcbiAgICAgICAgICAgIFNsdWc6XCIxMjNcIn07XG5cbiAgICAgICAgbGV0IHNlY3VyaXR5OiBJU2VjdXJpdHkgPSB7XG4gICAgICAgICAgICBQb2xpY3kgOiBcIjFcIixcbiAgICAgICAgICAgIE9yaWdpbiA6IFwiaHR0cDovL2xvY2FsaG9zdDo0MjAwXCIsXG4gICAgICAgICAgICBVc2VySWQgOiAxLFxuICAgICAgICAgICAgUHJpdmF0ZWNvZGUgOiAnZXhlbXBsZScsXG4gICAgICAgICAgICBTbHVnIDogJzEyMzQnLFxuICAgICAgICAgICAgVG9rZW4gOiBudWxsLFxuICAgICAgICAgICAgRXhwaXJldGltZTogMzYwKjI1XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY3JlYXRlIHVzZXJcbiAgICAgICAgdXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuQ3JlYXRlKHVzZXIpO1xuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgc2VjdXJpdHkuVXNlcklkID0gdXNlci5pZDtcbiAgICAgICAvLyBjb25zb2xlLmxvZygnc2VjdXJpdHkgOiAnLCBzZWN1cml0eSk7XG4gICAgICAgIHNlY3VyaXR5ID0gYXdhaXQgdGhpcy5DcmVhdGUoc2VjdXJpdHkpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLkZpbmRCeUlkKHNlY3VyaXR5LmlkKTtcblxuICAgIH1cblxuICAgIGFzeW5jIENyZWF0ZShib2R5OiBJU2VjdXJpdHkpIHtcblxuICAgICAgICBib2R5LlNsdWcgPSB1dWlkdjQoKS5yZXBsYWNlKCctJywnJyk7XG4gICAgICAgIC8vIGdlbmVyYXRlIHRva2VuXG4gICAgICAgIGJvZHkuVG9rZW4gPSBuZXcgQXV0aEdyYWRlKCkuR2VuZXJhdGVBY2Nlc3NUb2tlbih7UHJpdmF0ZWNvZGU6IGJvZHkuUHJpdmF0ZWNvZGUsXG4gICAgICAgICAgICBPcmlnaW46IGJvZHkuT3JpZ2luLCBSb2xlczogYm9keS5Qb2xpY3ksIEV4cGlyZXRpbWU6IGJvZHkuRXhwaXJldGltZSB9KTtcbiAgICAgICAgYm9keS5Qcml2YXRlY29kZSA9ICBtZDVIZXgoYm9keS5TbHVnKTtcbiAgICAgICAgYm9keS5Qb2xpY3kgPSB0aGlzLmNvbnN0YW50LkdldFJvbGVzKCkuZmluZCgoZjogeyBJZDogc3RyaW5nLCBUaXRsZSA6IHN0cmluZyB9KSA9PiBmLklkLnRvU3RyaW5nKCkgPT09IGJvZHkuUG9saWN5KS5UaXRsZTtcblxuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSBhd2FpdCB0aGlzLmRhdGFiYXNlU2VydmljZS5HZXREYXRhYmFzZSgpLlNlY3VyaXR5LmNyZWF0ZShib2R5KTtcbiAgICAgICAgLy9jb25zdCBzZWN1cml0eSA9IG5ldyB0aGlzLmRhdGFiYXNlU2VydmljZS5HZXREYXRhYmFzZSgpLlNlY3VyaXR5KGJvZHkpO1xuXG4gICAgICAgLy8gYXdhaXQgc2VjdXJpdHkuc2F2ZSgpO1xuICAgICAgICByZXR1cm4gc2VjdXJpdHk7XG4gICAgfVxuXG4gICAgYXN5bmMgRGVsZXRlKHNsdWc6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzZWN1cml0eSA9IGF3YWl0IHRoaXMuZGF0YWJhc2VTZXJ2aWNlLkdldERhdGFiYXNlKCkuU2VjdXJpdHkuZmluZE9uZSh7IHdoZXJlOiB7IFNsdWc6IHNsdWcgfSB9KVxuICAgICAgICBpZiAoc2VjdXJpdHkpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlY3VyaXR5LmRlc3Ryb3koe2ZvcmNlOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBGaW5kQWxsKCl7XG4gICAgICAgIHJldHVybiAgYXdhaXQgdGhpcy5kYXRhYmFzZVNlcnZpY2UuR2V0RGF0YWJhc2UoKS5TZWN1cml0eS5maW5kQWxsKHsgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgRmluZEJ5SWQoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kYXRhYmFzZVNlcnZpY2UuR2V0RGF0YWJhc2UoKS5TZWN1cml0eS5maW5kT25lKHt3aGVyZToge0lkOiBpZH19KTtcbiAgICB9XG5cbiAgICBhc3luYyBGaW5kQnlTbHVnKHNsdWc6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kYXRhYmFzZVNlcnZpY2UuR2V0RGF0YWJhc2UoKS5TZWN1cml0eS5maW5kT25lKHsgd2hlcmU6IHsgU2x1Zzogc2x1Z30gfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgVXBkYXRlKGJvZHk6IElTZWN1cml0eSwgaWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBzZWN1cml0eSA9IGF3YWl0IHRoaXMuZGF0YWJhc2VTZXJ2aWNlLkdldERhdGFiYXNlKCkuU2VjdXJpdHkuZmluZEJ5UGsoaWQpO1xuICAgICAgICBhd2FpdCBzZWN1cml0eS51cGRhdGUoYm9keSk7XG4gICAgICAgIHJldHVybiBzZWN1cml0eTtcbiAgICB9XG5cbn1cbiJdfQ==