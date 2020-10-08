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
              return queryInterface.createTable('Users', {
                Id: {
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
                  type: Sequelize.INTEGER
                },
                Slug: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                AddressId: {
                  allowNull: false,
                  type: Sequelize.INTEGER
                },
                PhotoId: {
                  allowNull: true,
                  type: Sequelize.INTEGER
                },
                BackgroundId: {
                  allowNull: true,
                  type: Sequelize.INTEGER
                },
                Username: {
                  type: Sequelize.STRING
                },
                Email: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Password: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Firstname: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Lastname: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Phone: {
                  type: Sequelize.STRING
                },
                Civility: {
                  type: Sequelize.INTEGER
                },
                Sex: {
                  type: Sequelize.INTEGER
                },
                Birthdate: {
                  type: Sequelize.DATE
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
              return queryInterface.dropTable('Users');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZXMvbWlncmF0aW9ucy8yMDIwMTAwMjE2MjU0MC1jcmVhdGUtdXNlci50cyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXAiLCJxdWVyeUludGVyZmFjZSIsIlNlcXVlbGl6ZSIsImNyZWF0ZVRhYmxlIiwiSWQiLCJhbGxvd051bGwiLCJhdXRvSW5jcmVtZW50IiwicHJpbWFyeUtleSIsInR5cGUiLCJJTlRFR0VSIiwiU2x1ZyIsIlNUUklORyIsIkFkZHJlc3NJZCIsIlBob3RvSWQiLCJCYWNrZ3JvdW5kSWQiLCJVc2VybmFtZSIsIkVtYWlsIiwiUGFzc3dvcmQiLCJGaXJzdG5hbWUiLCJMYXN0bmFtZSIsIlBob25lIiwiQ2l2aWxpdHkiLCJTZXgiLCJCaXJ0aGRhdGUiLCJEQVRFIiwiQ3JlYXRlZEF0IiwiZGVmYXVsdFZhbHVlIiwibGl0ZXJhbCIsIlVwZGF0ZWRBdCIsImRvd24iLCJkcm9wVGFibGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUdBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYjtBQUNGQyxFQUFBQSxFQUFFO0FBQUEsNEZBQUUsaUJBQU9DLGNBQVAsRUFBdUJDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNJRCxjQUFjLENBQUNFLFdBQWYsQ0FBMkIsT0FBM0IsRUFBb0M7QUFDeENDLGdCQUFBQSxFQUFFLEVBQUU7QUFDRkMsa0JBQUFBLFNBQVMsRUFBRSxLQURUO0FBRUZDLGtCQUFBQSxhQUFhLEVBQUUsSUFGYjtBQUdGQyxrQkFBQUEsVUFBVSxFQUFFLElBSFY7QUFJRkMsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTztBQUpkLGlCQURvQztBQU94Q0MsZ0JBQUFBLElBQUksRUFBRTtBQUNGTCxrQkFBQUEsU0FBUyxFQUFFLEtBRFQ7QUFFSkcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDUztBQUZaLGlCQVBrQztBQVd4Q0MsZ0JBQUFBLFNBQVMsRUFBQztBQUNSUCxrQkFBQUEsU0FBUyxFQUFFLEtBREg7QUFFUkcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTztBQUZSLGlCQVg4QjtBQWV4Q0ksZ0JBQUFBLE9BQU8sRUFBQztBQUNOUixrQkFBQUEsU0FBUyxFQUFFLElBREw7QUFFTkcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTztBQUZWLGlCQWZnQztBQW1CeENLLGdCQUFBQSxZQUFZLEVBQUM7QUFDWFQsa0JBQUFBLFNBQVMsRUFBRSxJQURBO0FBRVhHLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ087QUFGTCxpQkFuQjJCO0FBdUJ4Q00sZ0JBQUFBLFFBQVEsRUFBRTtBQUNSUCxrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNTO0FBRFIsaUJBdkI4QjtBQTBCeENLLGdCQUFBQSxLQUFLLEVBQUU7QUFDSFgsa0JBQUFBLFNBQVMsRUFBRSxLQURSO0FBRUxHLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1M7QUFGWCxpQkExQmlDO0FBOEJ4Q00sZ0JBQUFBLFFBQVEsRUFBRTtBQUNOWixrQkFBQUEsU0FBUyxFQUFFLEtBREw7QUFFUkcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDUztBQUZSLGlCQTlCOEI7QUFrQ3hDTyxnQkFBQUEsU0FBUyxFQUFFO0FBQ1BiLGtCQUFBQSxTQUFTLEVBQUUsS0FESjtBQUVURyxrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNTO0FBRlAsaUJBbEM2QjtBQXNDeENRLGdCQUFBQSxRQUFRLEVBQUU7QUFDTmQsa0JBQUFBLFNBQVMsRUFBRSxLQURMO0FBRVJHLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1M7QUFGUixpQkF0QzhCO0FBMEN4Q1MsZ0JBQUFBLEtBQUssRUFBRTtBQUNMWixrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNTO0FBRFgsaUJBMUNpQztBQTZDeENVLGdCQUFBQSxRQUFRLEVBQUU7QUFDUmIsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTztBQURSLGlCQTdDOEI7QUFnRHhDYSxnQkFBQUEsR0FBRyxFQUFFO0FBQ0hkLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ087QUFEYixpQkFoRG1DO0FBbUR4Q2MsZ0JBQUFBLFNBQVMsRUFBRTtBQUNUZixrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNzQjtBQURQLGlCQW5ENkI7QUFzRHhDQyxnQkFBQUEsU0FBUyxFQUFFO0FBQ1RwQixrQkFBQUEsU0FBUyxFQUFFLEtBREY7QUFFVEcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDc0IsSUFGUDtBQUdQRSxrQkFBQUEsWUFBWSxFQUFFeEIsU0FBUyxDQUFDeUIsT0FBVixDQUFrQixxQkFBbEI7QUFIUCxpQkF0RDZCO0FBMkR4Q0MsZ0JBQUFBLFNBQVMsRUFBRTtBQUNUdkIsa0JBQUFBLFNBQVMsRUFBRSxLQURGO0FBRVRHLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ3NCLElBRlA7QUFHUEUsa0JBQUFBLFlBQVksRUFBRXhCLFNBQVMsQ0FBQ3lCLE9BQVYsQ0FBa0IsbURBQWxCO0FBSFA7QUEzRDZCLGVBQXBDLENBREo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxLQUZhO0FBcUViO0FBQ0ZFLEVBQUFBLElBQUk7QUFBQSw4RkFBRSxrQkFBTzVCLGNBQVAsRUFBdUJDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNFRCxjQUFjLENBQUM2QixTQUFmLENBQXlCLE9BQXpCLENBREY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQXRFVyxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gIHVwOiBhc3luYyAocXVlcnlJbnRlcmZhY2UsIFNlcXVlbGl6ZSkgPT4ge1xuICAgIGF3YWl0IHF1ZXJ5SW50ZXJmYWNlLmNyZWF0ZVRhYmxlKCdVc2VycycsIHtcbiAgICAgIElkOiB7XG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICAgIHByaW1hcnlLZXk6IHRydWUsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgICB9LFxuICAgICAgU2x1Zzoge1xuICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBBZGRyZXNzSWQ6e1xuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUlxuICAgICAgfSxcbiAgICAgIFBob3RvSWQ6e1xuICAgICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgICB9LFxuICAgICAgQmFja2dyb3VuZElkOntcbiAgICAgICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuSU5URUdFUlxuICAgICAgfSxcbiAgICAgIFVzZXJuYW1lOiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBFbWFpbDoge1xuICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBQYXNzd29yZDoge1xuICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBGaXJzdG5hbWU6IHtcbiAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9LFxuICAgICAgTGFzdG5hbWU6IHtcbiAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9LFxuICAgICAgUGhvbmU6IHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgIENpdmlsaXR5OiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgICB9LFxuICAgICAgU2V4OiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5JTlRFR0VSXG4gICAgICB9LFxuICAgICAgQmlydGhkYXRlOiB7XG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFXG4gICAgICB9LFxuICAgICAgQ3JlYXRlZEF0OiB7XG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLmxpdGVyYWwoJ0NVUlJFTlRfVElNRVNUQU1QKCknKVxuICAgICAgfSxcbiAgICAgIFVwZGF0ZWRBdDoge1xuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURSxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IFNlcXVlbGl6ZS5saXRlcmFsKCdDVVJSRU5UX1RJTUVTVEFNUCgpIE9OIFVQREFURSBDVVJSRU5UX1RJTUVTVEFNUCgpJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgICAvLyBAdHMtaWdub3JlXG4gIGRvd246IGFzeW5jIChxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKSA9PiB7XG4gICAgYXdhaXQgcXVlcnlJbnRlcmZhY2UuZHJvcFRhYmxlKCdVc2VycycpO1xuICB9XG59O1xuIl19