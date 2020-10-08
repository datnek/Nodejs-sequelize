'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

module.exports = {
  // @ts-ignore
  up: function () {
    var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryInterface, Sequelize) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return queryInterface.createTable('Localizations', {
                Id: {
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
                  type: Sequelize.INTEGER
                },
                Longitude: {
                  allowNull: false,
                  type: Sequelize.FLOAT
                },
                Slug: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Latitude: {
                  allowNull: false,
                  type: Sequelize.FLOAT
                },
                Country: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                City: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Region: {
                  type: Sequelize.STRING
                },
                Fullname: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Street: {
                  type: Sequelize.STRING
                },
                Streetnumber: {
                  type: Sequelize.STRING
                },
                Postalcode: {
                  type: Sequelize.STRING
                },
                Ip: {
                  type: Sequelize.STRING
                },
                Pcmacaddress: {
                  type: Sequelize.STRING
                },
                continent: {
                  type: Sequelize.STRING
                },
                Timezone: {
                  type: Sequelize.STRING
                },
                CreatedAt: {
                  allowNull: false,
                  type: Sequelize.DATE,
                  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
                },
                UpdatedAt: {
                  allowNull: false,
                  type: Sequelize.DATE,
                  defaultValue: Sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()')
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }

    return up;
  }(),
  // @ts-ignore
  down: function () {
    var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryInterface, Sequelize) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return queryInterface.dropTable('Localizations');

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function down(_x3, _x4) {
      return _down.apply(this, arguments);
    }

    return down;
  }()
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZXMvbWlncmF0aW9ucy8yMDIwMTAwMjE2NDk0Mi1jcmVhdGUtbG9jYWxpemF0aW9uLnRzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1cCIsInF1ZXJ5SW50ZXJmYWNlIiwiU2VxdWVsaXplIiwiY3JlYXRlVGFibGUiLCJJZCIsImFsbG93TnVsbCIsImF1dG9JbmNyZW1lbnQiLCJwcmltYXJ5S2V5IiwidHlwZSIsIklOVEVHRVIiLCJMb25naXR1ZGUiLCJGTE9BVCIsIlNsdWciLCJTVFJJTkciLCJMYXRpdHVkZSIsIkNvdW50cnkiLCJDaXR5IiwiUmVnaW9uIiwiRnVsbG5hbWUiLCJTdHJlZXQiLCJTdHJlZXRudW1iZXIiLCJQb3N0YWxjb2RlIiwiSXAiLCJQY21hY2FkZHJlc3MiLCJjb250aW5lbnQiLCJUaW1lem9uZSIsIkNyZWF0ZWRBdCIsIkRBVEUiLCJkZWZhdWx0VmFsdWUiLCJsaXRlcmFsIiwiVXBkYXRlZEF0IiwiZG93biIsImRyb3BUYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBR0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUViO0FBQ0FDLEVBQUFBLEVBQUU7QUFBQSw0RkFBRSxpQkFBT0MsY0FBUCxFQUF1QkMsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0VELGNBQWMsQ0FBQ0UsV0FBZixDQUEyQixlQUEzQixFQUE0QztBQUNoREMsZ0JBQUFBLEVBQUUsRUFBRTtBQUNGQyxrQkFBQUEsU0FBUyxFQUFFLEtBRFQ7QUFFRkMsa0JBQUFBLGFBQWEsRUFBRSxJQUZiO0FBR0ZDLGtCQUFBQSxVQUFVLEVBQUUsSUFIVjtBQUlGQyxrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNPO0FBSmQsaUJBRDRDO0FBT2hEQyxnQkFBQUEsU0FBUyxFQUFFO0FBQ1BMLGtCQUFBQSxTQUFTLEVBQUUsS0FESjtBQUVURyxrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNTO0FBRlAsaUJBUHFDO0FBV2hEQyxnQkFBQUEsSUFBSSxFQUFFO0FBQ0ZQLGtCQUFBQSxTQUFTLEVBQUUsS0FEVDtBQUVKRyxrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNXO0FBRlosaUJBWDBDO0FBZWhEQyxnQkFBQUEsUUFBUSxFQUFFO0FBQ05ULGtCQUFBQSxTQUFTLEVBQUUsS0FETDtBQUVSRyxrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNTO0FBRlIsaUJBZnNDO0FBbUJoREksZ0JBQUFBLE9BQU8sRUFBRTtBQUNMVixrQkFBQUEsU0FBUyxFQUFFLEtBRE47QUFFUEcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDVztBQUZULGlCQW5CdUM7QUF1QmhERyxnQkFBQUEsSUFBSSxFQUFFO0FBQ0ZYLGtCQUFBQSxTQUFTLEVBQUUsS0FEVDtBQUVKRyxrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNXO0FBRlosaUJBdkIwQztBQTJCaERJLGdCQUFBQSxNQUFNLEVBQUU7QUFDTlQsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDVztBQURWLGlCQTNCd0M7QUE4QmhESyxnQkFBQUEsUUFBUSxFQUFFO0FBQ05iLGtCQUFBQSxTQUFTLEVBQUUsS0FETDtBQUVSRyxrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNXO0FBRlIsaUJBOUJzQztBQWtDaERNLGdCQUFBQSxNQUFNLEVBQUU7QUFDTlgsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDVztBQURWLGlCQWxDd0M7QUFxQ2hETyxnQkFBQUEsWUFBWSxFQUFFO0FBQ1paLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1c7QUFESixpQkFyQ2tDO0FBd0NoRFEsZ0JBQUFBLFVBQVUsRUFBRTtBQUNWYixrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNXO0FBRE4saUJBeENvQztBQTJDaERTLGdCQUFBQSxFQUFFLEVBQUU7QUFDRmQsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDVztBQURkLGlCQTNDNEM7QUE4Q2hEVSxnQkFBQUEsWUFBWSxFQUFFO0FBQ1pmLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1c7QUFESixpQkE5Q2tDO0FBaURoRFcsZ0JBQUFBLFNBQVMsRUFBRTtBQUNUaEIsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDVztBQURQLGlCQWpEcUM7QUFvRGhEWSxnQkFBQUEsUUFBUSxFQUFFO0FBQ1JqQixrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNXO0FBRFIsaUJBcERzQztBQXVEOUNhLGdCQUFBQSxTQUFTLEVBQUU7QUFDUHJCLGtCQUFBQSxTQUFTLEVBQUUsS0FESjtBQUVQRyxrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUN5QixJQUZUO0FBR1BDLGtCQUFBQSxZQUFZLEVBQUUxQixTQUFTLENBQUMyQixPQUFWLENBQWtCLHFCQUFsQjtBQUhQLGlCQXZEbUM7QUE0RDlDQyxnQkFBQUEsU0FBUyxFQUFFO0FBQ1B6QixrQkFBQUEsU0FBUyxFQUFFLEtBREo7QUFFUEcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDeUIsSUFGVDtBQUdQQyxrQkFBQUEsWUFBWSxFQUFFMUIsU0FBUyxDQUFDMkIsT0FBVixDQUFrQixtREFBbEI7QUFIUDtBQTVEbUMsZUFBNUMsQ0FERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEtBSFc7QUF1RWI7QUFDRkUsRUFBQUEsSUFBSTtBQUFBLDhGQUFFLGtCQUFPOUIsY0FBUCxFQUF1QkMsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0VELGNBQWMsQ0FBQytCLFNBQWYsQ0FBeUIsZUFBekIsQ0FERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBeEVXLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHVwOiBhc3luYyAocXVlcnlJbnRlcmZhY2UsIFNlcXVlbGl6ZSkgPT4ge1xuICAgIGF3YWl0IHF1ZXJ5SW50ZXJmYWNlLmNyZWF0ZVRhYmxlKCdMb2NhbGl6YXRpb25zJywge1xuICAgICAgSWQ6IHtcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcbiAgICAgIH0sXG4gICAgICBMb25naXR1ZGU6IHtcbiAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuRkxPQVRcbiAgICAgIH0sXG4gICAgICBTbHVnOiB7XG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgIExhdGl0dWRlOiB7XG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLkZMT0FUXG4gICAgICB9LFxuICAgICAgQ291bnRyeToge1xuICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBDaXR5OiB7XG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgIFJlZ2lvbjoge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9LFxuICAgICAgRnVsbG5hbWU6IHtcbiAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9LFxuICAgICAgU3RyZWV0OiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBTdHJlZXRudW1iZXI6IHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgIFBvc3RhbGNvZGU6IHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgIElwOiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBQY21hY2FkZHJlc3M6IHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgIGNvbnRpbmVudDoge1xuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9LFxuICAgICAgVGltZXpvbmU6IHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgICAgQ3JlYXRlZEF0OiB7XG4gICAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEUsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5saXRlcmFsKCdDVVJSRU5UX1RJTUVTVEFNUCgpJylcbiAgICAgICAgfSxcbiAgICAgICAgVXBkYXRlZEF0OiB7XG4gICAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLkRBVEUsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5saXRlcmFsKCdDVVJSRU5UX1RJTUVTVEFNUCgpIE9OIFVQREFURSBDVVJSRU5UX1RJTUVTVEFNUCgpJylcbiAgICAgICAgfVxuICAgIH0pO1xuICB9LFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgZG93bjogYXN5bmMgKHF1ZXJ5SW50ZXJmYWNlLCBTZXF1ZWxpemUpID0+IHtcbiAgICBhd2FpdCBxdWVyeUludGVyZmFjZS5kcm9wVGFibGUoJ0xvY2FsaXphdGlvbnMnKTtcbiAgfVxufTtcbiJdfQ==