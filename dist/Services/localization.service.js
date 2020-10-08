"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalizationService = void 0;

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

var _dec, _dec2, _dec3, _dec4, _class, _temp;

var LocalizationService = (_dec = (0, _inversify.injectable)(), _dec2 = function _dec2(target, key) {
  return (0, _inversify.inject)(_types.TYPES.DatabaseService)(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _database.IDatabaseService === "undefined" ? Object : _database.IDatabaseService]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_temp = /*#__PURE__*/function () {
  function LocalizationService(databaseService) {
    (0, _classCallCheck2["default"])(this, LocalizationService);
    (0, _defineProperty2["default"])(this, "databaseService", void 0);
    this.databaseService = databaseService;
  }

  (0, _createClass2["default"])(LocalizationService, [{
    key: "Create",
    value: function () {
      var _Create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
        var localization;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body.Slug = (0, _uuid.v4)().replace('-', '');
                console.log('database instance : ', this.databaseService.GetDatabase()); // @ts-ignore

                _context.next = 4;
                return this.databaseService.GetDatabase().Localization.create(body);

              case 4:
                localization = _context.sent;
                return _context.abrupt("return", localization);

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
        var localization;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.databaseService.GetDatabase().Localization.findOne({
                  where: {
                    Slug: slug
                  }
                });

              case 2:
                localization = _context2.sent;

                if (!localization) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 6;
                return localization.destroy({
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
                return this.databaseService.GetDatabase().Localization.findAll({});

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
                return this.databaseService.GetDatabase().Localization.findOne({
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
                return this.databaseService.GetDatabase().Localization.findOne({
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
        var localization;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.databaseService.GetDatabase().Localization.findByPk(id);

              case 2:
                localization = _context6.sent;
                _context6.next = 5;
                return localization.update(body);

              case 5:
                return _context6.abrupt("return", localization);

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
  return LocalizationService;
}(), _temp)) || _class) || _class) || _class) || _class);
exports.LocalizationService = LocalizationService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZXJ2aWNlcy9sb2NhbGl6YXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6WyJMb2NhbGl6YXRpb25TZXJ2aWNlIiwiVFlQRVMiLCJEYXRhYmFzZVNlcnZpY2UiLCJkYXRhYmFzZVNlcnZpY2UiLCJib2R5IiwiU2x1ZyIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiR2V0RGF0YWJhc2UiLCJMb2NhbGl6YXRpb24iLCJjcmVhdGUiLCJsb2NhbGl6YXRpb24iLCJzbHVnIiwiZmluZE9uZSIsIndoZXJlIiwiZGVzdHJveSIsImZvcmNlIiwiZmluZEFsbCIsImlkIiwiSWQiLCJmaW5kQnlQayIsInVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7O0lBUWFBLG1CLFdBRFosNEI7U0FJZ0IsdUJBQU9DLGFBQU1DLGVBQWIsQzs7QUFBYiwrQkFBMkNDLGVBQTNDLEVBQTZFO0FBQUE7QUFBQTtBQUN6RSxTQUFLQSxlQUFMLEdBQXVCQSxlQUF2QjtBQUNIOzs7OzttSEFFWUMsSTs7Ozs7O0FBRVRBLGdCQUFBQSxJQUFJLENBQUNDLElBQUwsR0FBWSxnQkFBU0MsT0FBVCxDQUFpQixHQUFqQixFQUFxQixFQUFyQixDQUFaO0FBRUFDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWixFQUFvQyxLQUFLTCxlQUFMLENBQXFCTSxXQUFyQixFQUFwQyxFLENBQ0E7Ozt1QkFDMkIsS0FBS04sZUFBTCxDQUFxQk0sV0FBckIsR0FBbUNDLFlBQW5DLENBQWdEQyxNQUFoRCxDQUF1RFAsSUFBdkQsQzs7O0FBQXJCUSxnQkFBQUEsWTtpREFHQ0EsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvSEFHQ0MsSTs7Ozs7Ozt1QkFDbUIsS0FBS1YsZUFBTCxDQUFxQk0sV0FBckIsR0FBbUNDLFlBQW5DLENBQWdESSxPQUFoRCxDQUF3RDtBQUFFQyxrQkFBQUEsS0FBSyxFQUFFO0FBQUVWLG9CQUFBQSxJQUFJLEVBQUVRO0FBQVI7QUFBVCxpQkFBeEQsQzs7O0FBQXJCRCxnQkFBQUEsWTs7cUJBQ0ZBLFk7Ozs7Ozt1QkFDTUEsWUFBWSxDQUFDSSxPQUFiLENBQXFCO0FBQUNDLGtCQUFBQSxLQUFLLEVBQUU7QUFBUixpQkFBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLSSxLQUFLZCxlQUFMLENBQXFCTSxXQUFyQixHQUFtQ0MsWUFBbkMsQ0FBZ0RRLE9BQWhELENBQXdELEVBQXhELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0hBR0hDLEU7Ozs7Ozt1QkFDRSxLQUFLaEIsZUFBTCxDQUFxQk0sV0FBckIsR0FBbUNDLFlBQW5DLENBQWdESSxPQUFoRCxDQUF3RDtBQUFDQyxrQkFBQUEsS0FBSyxFQUFFO0FBQUNLLG9CQUFBQSxFQUFFLEVBQUVEO0FBQUw7QUFBUixpQkFBeEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3SEFHRE4sSTs7Ozs7O3VCQUNDLEtBQUtWLGVBQUwsQ0FBcUJNLFdBQXJCLEdBQW1DQyxZQUFuQyxDQUFnREksT0FBaEQsQ0FBd0Q7QUFBRUMsa0JBQUFBLEtBQUssRUFBRTtBQUFFVixvQkFBQUEsSUFBSSxFQUFFUTtBQUFSO0FBQVQsaUJBQXhELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0hBR0pULEksRUFBcUJlLEU7Ozs7Ozs7dUJBQ0gsS0FBS2hCLGVBQUwsQ0FBcUJNLFdBQXJCLEdBQW1DQyxZQUFuQyxDQUFnRFcsUUFBaEQsQ0FBeURGLEVBQXpELEM7OztBQUFyQlAsZ0JBQUFBLFk7O3VCQUNBQSxZQUFZLENBQUNVLE1BQWIsQ0FBb0JsQixJQUFwQixDOzs7a0RBQ0NRLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgaW5qZWN0YWJsZX0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IHtJTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZGF0YWJhc2VzL21vZGVscy9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7SURhdGFiYXNlU2VydmljZX0gZnJvbSBcIi4vZGF0YWJhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHtDb250cm9sbGVyQmFzZVNlcnZpY2V9IGZyb20gXCIuL2NvbnRyb2xsZXIuYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQge3Y0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2FsaXphdGlvblNlcnZpY2UgZXh0ZW5kcyBDb250cm9sbGVyQmFzZVNlcnZpY2U8SUxvY2FsaXphdGlvbj57XG5cbn1cblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsaXphdGlvblNlcnZpY2UgaW1wbGVtZW50cyBJTG9jYWxpemF0aW9uU2VydmljZXtcbiAgICBwcml2YXRlIGRhdGFiYXNlU2VydmljZTogSURhdGFiYXNlU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKEBpbmplY3QoVFlQRVMuRGF0YWJhc2VTZXJ2aWNlKSBkYXRhYmFzZVNlcnZpY2U6IElEYXRhYmFzZVNlcnZpY2Upe1xuICAgICAgICB0aGlzLmRhdGFiYXNlU2VydmljZSA9IGRhdGFiYXNlU2VydmljZTtcbiAgICB9XG5cbiAgICBhc3luYyBDcmVhdGUoYm9keTogSUxvY2FsaXphdGlvbikge1xuXG4gICAgICAgIGJvZHkuU2x1ZyA9IHV1aWR2NCgpLnJlcGxhY2UoJy0nLCcnKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnZGF0YWJhc2UgaW5zdGFuY2UgOiAnLCB0aGlzLmRhdGFiYXNlU2VydmljZS5HZXREYXRhYmFzZSgpKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBsb2NhbGl6YXRpb24gPSBhd2FpdCB0aGlzLmRhdGFiYXNlU2VydmljZS5HZXREYXRhYmFzZSgpLkxvY2FsaXphdGlvbi5jcmVhdGUoYm9keSlcblxuICAgICAgIC8vIGF3YWl0IGxvY2FsaXphdGlvbi5zYXZlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGl6YXRpb247XG4gICAgfVxuXG4gICBhc3luYyBEZWxldGUoc2x1Zzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxvY2FsaXphdGlvbiA9IGF3YWl0IHRoaXMuZGF0YWJhc2VTZXJ2aWNlLkdldERhdGFiYXNlKCkuTG9jYWxpemF0aW9uLmZpbmRPbmUoeyB3aGVyZTogeyBTbHVnOiBzbHVnIH0gfSlcbiAgICAgICAgaWYgKGxvY2FsaXphdGlvbikge1xuICAgICAgICAgICAgYXdhaXQgbG9jYWxpemF0aW9uLmRlc3Ryb3koe2ZvcmNlOiB0cnVlfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBGaW5kQWxsKCl7XG4gICAgICAgIHJldHVybiAgYXdhaXQgdGhpcy5kYXRhYmFzZVNlcnZpY2UuR2V0RGF0YWJhc2UoKS5Mb2NhbGl6YXRpb24uZmluZEFsbCh7IH0pO1xuICAgIH1cblxuICAgIGFzeW5jIEZpbmRCeUlkKGlkOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGF0YWJhc2VTZXJ2aWNlLkdldERhdGFiYXNlKCkuTG9jYWxpemF0aW9uLmZpbmRPbmUoe3doZXJlOiB7SWQ6IGlkfX0pO1xuICAgIH1cblxuICAgYXN5bmMgRmluZEJ5U2x1ZyhzbHVnOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGF0YWJhc2VTZXJ2aWNlLkdldERhdGFiYXNlKCkuTG9jYWxpemF0aW9uLmZpbmRPbmUoeyB3aGVyZTogeyBTbHVnOiBzbHVnfSB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBVcGRhdGUoYm9keTogSUxvY2FsaXphdGlvbiwgaWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBsb2NhbGl6YXRpb24gPSBhd2FpdCB0aGlzLmRhdGFiYXNlU2VydmljZS5HZXREYXRhYmFzZSgpLkxvY2FsaXphdGlvbi5maW5kQnlQayhpZCk7XG4gICAgICAgIGF3YWl0IGxvY2FsaXphdGlvbi51cGRhdGUoYm9keSk7XG4gICAgICAgIHJldHVybiBsb2NhbGl6YXRpb247XG4gICAgfVxuXG59XG4iXX0=