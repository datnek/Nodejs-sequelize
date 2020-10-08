"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _inversify = require("inversify");

require("reflect-metadata");

var _types = require("./types");

var _database = require("./database.service");

var _uuid = require("uuid");

var _util = require("./util.service");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _temp;

var MediaService = (_dec = (0, _inversify.injectable)(), _dec2 = function _dec2(target, key) {
  return (0, _inversify.inject)(_types.TYPES.DatabaseService)(target, undefined, 0);
}, _dec3 = function _dec3(target, key) {
  return (0, _inversify.inject)(_types.TYPES.UtilsService)(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _database.IDatabaseService === "undefined" ? Object : _database.IDatabaseService, typeof _util.IUtilService === "undefined" ? Object : _util.IUtilService]), _dec6 = (0, _inversify.inject)(_types.TYPES.UtilsService), _dec7 = Reflect.metadata("design:type", typeof _util.IUtilService === "undefined" ? Object : _util.IUtilService), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = (_temp = /*#__PURE__*/function () {
  function MediaService(databaseService, utilService) {
    (0, _classCallCheck2["default"])(this, MediaService);
    (0, _defineProperty2["default"])(this, "databaseService", void 0);
    (0, _initializerDefineProperty2["default"])(this, "utilService", _descriptor, this);
    this.utilService = utilService;
    this.databaseService = databaseService;
  }

  (0, _createClass2["default"])(MediaService, [{
    key: "Create",
    value: function () {
      var _Create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
        var name, media;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body.Slug = (0, _uuid.v4)().replace('-', '');
                name = "".concat((0, _uuid.v4)().replace('-', ''), "-").concat(body.Name);
                this.utilService.SaveFile(body.Hashname, name, null);
                body.Hashname = name; // @ts-ignore

                _context.next = 6;
                return this.databaseService.GetDatabase().Media.create(body);

              case 6:
                media = _context.sent;
                return _context.abrupt("return", media);

              case 8:
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
        var media;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.databaseService.GetDatabase().Media.findOne({
                  where: {
                    Slug: slug
                  }
                });

              case 2:
                media = _context2.sent;

                if (!media) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 6;
                return media.destroy({
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
                return this.databaseService.GetDatabase().Media.findAll({});

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
                return this.databaseService.GetDatabase().Media.findOne({
                  where: {
                    Id: id
                  }
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
                return this.databaseService.GetDatabase().Media.findOne({
                  where: {
                    Slug: slug
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

      function FindBySlug(_x4) {
        return _FindBySlug.apply(this, arguments);
      }

      return FindBySlug;
    }()
  }, {
    key: "Update",
    value: function () {
      var _Update = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(body, id) {
        var media;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.databaseService.GetDatabase().Media.findByPk(id);

              case 2:
                media = _context6.sent;
                _context6.next = 5;
                return media.update(body);

              case 5:
                return _context6.abrupt("return", media);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function Update(_x5, _x6) {
        return _Update.apply(this, arguments);
      }

      return Update;
    }()
  }]);
  return MediaService;
}(), _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "utilService", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class) || _class) || _class);
exports.MediaService = MediaService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZXJ2aWNlcy9tZWRpYS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIk1lZGlhU2VydmljZSIsIlRZUEVTIiwiRGF0YWJhc2VTZXJ2aWNlIiwiVXRpbHNTZXJ2aWNlIiwiZGF0YWJhc2VTZXJ2aWNlIiwidXRpbFNlcnZpY2UiLCJib2R5IiwiU2x1ZyIsInJlcGxhY2UiLCJuYW1lIiwiTmFtZSIsIlNhdmVGaWxlIiwiSGFzaG5hbWUiLCJHZXREYXRhYmFzZSIsIk1lZGlhIiwiY3JlYXRlIiwibWVkaWEiLCJzbHVnIiwiZmluZE9uZSIsIndoZXJlIiwiZGVzdHJveSIsImZvcmNlIiwiZmluZEFsbCIsImlkIiwiSWQiLCJmaW5kQnlQayIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUlBOztBQUNBOzs7O0lBUWFBLFksV0FEWiw0QjtTQUtnQix1QkFBT0MsYUFBTUMsZUFBYixDOztTQUNBLHVCQUFPRCxhQUFNRSxZQUFiLEM7aVJBSFosdUJBQU9GLGFBQU1FLFlBQWIsQztBQUVELHdCQUEyQ0MsZUFBM0MsRUFDd0NDLFdBRHhDLEVBQ3NFO0FBQUE7QUFBQTtBQUFBO0FBQ2xFLFNBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS0QsZUFBTCxHQUF1QkEsZUFBdkI7QUFDSDs7Ozs7bUhBRVlFLEk7Ozs7OztBQUVUQSxnQkFBQUEsSUFBSSxDQUFDQyxJQUFMLEdBQVksZ0JBQVNDLE9BQVQsQ0FBaUIsR0FBakIsRUFBcUIsRUFBckIsQ0FBWjtBQUdNQyxnQkFBQUEsSSxhQUFXLGdCQUFTRCxPQUFULENBQWlCLEdBQWpCLEVBQXFCLEVBQXJCLEMsY0FBNEJGLElBQUksQ0FBQ0ksSTtBQUNsRCxxQkFBS0wsV0FBTCxDQUFpQk0sUUFBakIsQ0FBMEJMLElBQUksQ0FBQ00sUUFBL0IsRUFBeUNILElBQXpDLEVBQStDLElBQS9DO0FBRUFILGdCQUFBQSxJQUFJLENBQUNNLFFBQUwsR0FBZ0JILElBQWhCLEMsQ0FFQTs7O3VCQUNvQixLQUFLTCxlQUFMLENBQXFCUyxXQUFyQixHQUFtQ0MsS0FBbkMsQ0FBeUNDLE1BQXpDLENBQWdEVCxJQUFoRCxDOzs7QUFBZFUsZ0JBQUFBLEs7aURBSUNBLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0hBR0VDLEk7Ozs7Ozs7dUJBQ1csS0FBS2IsZUFBTCxDQUFxQlMsV0FBckIsR0FBbUNDLEtBQW5DLENBQXlDSSxPQUF6QyxDQUFpRDtBQUFFQyxrQkFBQUEsS0FBSyxFQUFFO0FBQUVaLG9CQUFBQSxJQUFJLEVBQUVVO0FBQVI7QUFBVCxpQkFBakQsQzs7O0FBQWRELGdCQUFBQSxLOztxQkFDRkEsSzs7Ozs7O3VCQUNNQSxLQUFLLENBQUNJLE9BQU4sQ0FBYztBQUFDQyxrQkFBQUEsS0FBSyxFQUFFO0FBQVIsaUJBQWQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFPRyxLQUFLakIsZUFBTCxDQUFxQlMsV0FBckIsR0FBbUNDLEtBQW5DLENBQXlDUSxPQUF6QyxDQUFpRCxFQUFqRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NIQUdGQyxFOzs7Ozs7dUJBQ0UsS0FBS25CLGVBQUwsQ0FBcUJTLFdBQXJCLEdBQW1DQyxLQUFuQyxDQUF5Q0ksT0FBekMsQ0FBaUQ7QUFBQ0Msa0JBQUFBLEtBQUssRUFBRTtBQUFDSyxvQkFBQUEsRUFBRSxFQUFFRDtBQUFMO0FBQVIsaUJBQWpELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0hBR0FOLEk7Ozs7Ozt1QkFDQSxLQUFLYixlQUFMLENBQXFCUyxXQUFyQixHQUFtQ0MsS0FBbkMsQ0FBeUNJLE9BQXpDLENBQWlEO0FBQUVDLGtCQUFBQSxLQUFLLEVBQUU7QUFBRVosb0JBQUFBLElBQUksRUFBRVU7QUFBUjtBQUFULGlCQUFqRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29IQUdKWCxJLEVBQWNpQixFOzs7Ozs7O3VCQUNILEtBQUtuQixlQUFMLENBQXFCUyxXQUFyQixHQUFtQ0MsS0FBbkMsQ0FBeUNXLFFBQXpDLENBQWtERixFQUFsRCxDOzs7QUFBZFAsZ0JBQUFBLEs7O3VCQUNBQSxLQUFLLENBQUNVLE1BQU4sQ0FBYXBCLElBQWIsQzs7O2tEQUNDVSxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGluamVjdGFibGV9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7SURhdGFiYXNlU2VydmljZX0gZnJvbSBcIi4vZGF0YWJhc2Uuc2VydmljZVwiO1xuXG5pbXBvcnQge0lNZWRpYX0gZnJvbSBcIi4uL2RhdGFiYXNlcy9tb2RlbHMvbWVkaWFcIjtcbmltcG9ydCB7Q29udHJvbGxlckJhc2VTZXJ2aWNlfSBmcm9tIFwiLi9jb250cm9sbGVyLmJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQge0lVdGlsU2VydmljZX0gZnJvbSBcIi4vdXRpbC5zZXJ2aWNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1lZGlhU2VydmljZSBleHRlbmRzICBDb250cm9sbGVyQmFzZVNlcnZpY2U8SU1lZGlhPntcblxufVxuXG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2UgaW1wbGVtZW50cyBJTWVkaWFTZXJ2aWNle1xuICAgIHByaXZhdGUgZGF0YWJhc2VTZXJ2aWNlOiBJRGF0YWJhc2VTZXJ2aWNlO1xuICAgIEBpbmplY3QoVFlQRVMuVXRpbHNTZXJ2aWNlKSBwcml2YXRlIHV0aWxTZXJ2aWNlOiBJVXRpbFNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihAaW5qZWN0KFRZUEVTLkRhdGFiYXNlU2VydmljZSkgZGF0YWJhc2VTZXJ2aWNlOiBJRGF0YWJhc2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEBpbmplY3QoVFlQRVMuVXRpbHNTZXJ2aWNlKSB1dGlsU2VydmljZTogSVV0aWxTZXJ2aWNlICAgICl7XG4gICAgICAgIHRoaXMudXRpbFNlcnZpY2UgPSB1dGlsU2VydmljZTtcbiAgICAgICAgdGhpcy5kYXRhYmFzZVNlcnZpY2UgPSBkYXRhYmFzZVNlcnZpY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgQ3JlYXRlKGJvZHk6IElNZWRpYSkge1xuXG4gICAgICAgIGJvZHkuU2x1ZyA9IHV1aWR2NCgpLnJlcGxhY2UoJy0nLCcnKTtcblxuXG4gICAgICAgIGNvbnN0IG5hbWUgPSAgYCR7dXVpZHY0KCkucmVwbGFjZSgnLScsJycpfS0ke2JvZHkuTmFtZX1gO1xuICAgICAgICB0aGlzLnV0aWxTZXJ2aWNlLlNhdmVGaWxlKGJvZHkuSGFzaG5hbWUsIG5hbWUsIG51bGwgKTtcblxuICAgICAgICBib2R5Lkhhc2huYW1lID0gbmFtZTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IG1lZGlhID0gYXdhaXQgdGhpcy5kYXRhYmFzZVNlcnZpY2UuR2V0RGF0YWJhc2UoKS5NZWRpYS5jcmVhdGUoYm9keSk7XG4gICAgICAgIC8vY29uc3QgbWVkaWEgPSBuZXcgdGhpcy5kYXRhYmFzZVNlcnZpY2UuR2V0RGF0YWJhc2UoKS5NZWRpYShib2R5KTtcblxuICAgICAgICAvL2F3YWl0IG1lZGlhLnNhdmUoKTtcbiAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgIH1cblxuICAgIGFzeW5jIERlbGV0ZShzbHVnOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbWVkaWEgPSBhd2FpdCB0aGlzLmRhdGFiYXNlU2VydmljZS5HZXREYXRhYmFzZSgpLk1lZGlhLmZpbmRPbmUoeyB3aGVyZTogeyBTbHVnOiBzbHVnIH0gfSlcbiAgICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgICAgICBhd2FpdCBtZWRpYS5kZXN0cm95KHtmb3JjZTogdHJ1ZX0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgRmluZEFsbCgpe1xuICAgICAgIC8vIGNvbnN0IG1lZGlhcyA9ICBhd2FpdCB0aGlzLmRhdGFiYXNlU2VydmljZS5HZXREYXRhYmFzZSgpLk1lZGlhLmZpbmRBbGwoeyB9KTtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1lZGlhcyA6IFwiLCBtZWRpYXMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kYXRhYmFzZVNlcnZpY2UuR2V0RGF0YWJhc2UoKS5NZWRpYS5maW5kQWxsKHsgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgRmluZEJ5SWQoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kYXRhYmFzZVNlcnZpY2UuR2V0RGF0YWJhc2UoKS5NZWRpYS5maW5kT25lKHt3aGVyZToge0lkOiBpZH19KTtcbiAgICB9XG5cbiAgICBhc3luYyBGaW5kQnlTbHVnKHNsdWc6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kYXRhYmFzZVNlcnZpY2UuR2V0RGF0YWJhc2UoKS5NZWRpYS5maW5kT25lKHsgd2hlcmU6IHsgU2x1Zzogc2x1Z30gfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgVXBkYXRlKGJvZHk6IElNZWRpYSwgaWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBtZWRpYSA9IGF3YWl0IHRoaXMuZGF0YWJhc2VTZXJ2aWNlLkdldERhdGFiYXNlKCkuTWVkaWEuZmluZEJ5UGsoaWQpO1xuICAgICAgICBhd2FpdCBtZWRpYS51cGRhdGUoYm9keSk7XG4gICAgICAgIHJldHVybiBtZWRpYTtcbiAgICB9XG5cbn1cbiJdfQ==