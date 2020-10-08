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
              return queryInterface.createTable('Securities', {
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
                UserId: {
                  allowNull: false,
                  type: Sequelize.INTEGER
                },
                Token: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Policy: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Privatecode: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Origin: {
                  type: Sequelize.STRING
                },
                Expiretime: {
                  type: Sequelize.FLOAT
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
              return queryInterface.dropTable('Securities');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZXMvbWlncmF0aW9ucy8yMDIwMTAwMjE2NTcxNC1jcmVhdGUtc2VjdXJpdHkudHMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVwIiwicXVlcnlJbnRlcmZhY2UiLCJTZXF1ZWxpemUiLCJjcmVhdGVUYWJsZSIsIklkIiwiYWxsb3dOdWxsIiwiYXV0b0luY3JlbWVudCIsInByaW1hcnlLZXkiLCJ0eXBlIiwiSU5URUdFUiIsIlNsdWciLCJTVFJJTkciLCJVc2VySWQiLCJUb2tlbiIsIlBvbGljeSIsIlByaXZhdGVjb2RlIiwiT3JpZ2luIiwiRXhwaXJldGltZSIsIkZMT0FUIiwiQ3JlYXRlZEF0IiwiREFURSIsImRlZmF1bHRWYWx1ZSIsImxpdGVyYWwiLCJVcGRhdGVkQXQiLCJkb3duIiwiZHJvcFRhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFHQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2I7QUFDRkMsRUFBQUEsRUFBRTtBQUFBLDRGQUFFLGlCQUFPQyxjQUFQLEVBQXVCQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDSUQsY0FBYyxDQUFDRSxXQUFmLENBQTJCLFlBQTNCLEVBQXlDO0FBQzdDQyxnQkFBQUEsRUFBRSxFQUFFO0FBQ0ZDLGtCQUFBQSxTQUFTLEVBQUUsS0FEVDtBQUVGQyxrQkFBQUEsYUFBYSxFQUFFLElBRmI7QUFHRkMsa0JBQUFBLFVBQVUsRUFBRSxJQUhWO0FBSUZDLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ087QUFKZCxpQkFEeUM7QUFPM0NDLGdCQUFBQSxJQUFJLEVBQUU7QUFDRkwsa0JBQUFBLFNBQVMsRUFBRSxLQURUO0FBRUZHLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1M7QUFGZCxpQkFQcUM7QUFXM0NDLGdCQUFBQSxNQUFNLEVBQUM7QUFDSFAsa0JBQUFBLFNBQVMsRUFBRSxLQURSO0FBRUhHLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ087QUFGYixpQkFYb0M7QUFlN0NJLGdCQUFBQSxLQUFLLEVBQUU7QUFDSFIsa0JBQUFBLFNBQVMsRUFBRSxLQURSO0FBRUxHLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1M7QUFGWCxpQkFmc0M7QUFtQjdDRyxnQkFBQUEsTUFBTSxFQUFFO0FBQ0pULGtCQUFBQSxTQUFTLEVBQUUsS0FEUDtBQUVORyxrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNTO0FBRlYsaUJBbkJxQztBQXVCN0NJLGdCQUFBQSxXQUFXLEVBQUU7QUFDVFYsa0JBQUFBLFNBQVMsRUFBRSxLQURGO0FBRVhHLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1M7QUFGTCxpQkF2QmdDO0FBMkI3Q0ssZ0JBQUFBLE1BQU0sRUFBRTtBQUNOUixrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNTO0FBRFYsaUJBM0JxQztBQThCN0NNLGdCQUFBQSxVQUFVLEVBQUU7QUFDVlQsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDZ0I7QUFETixpQkE5QmlDO0FBaUMzQ0MsZ0JBQUFBLFNBQVMsRUFBRTtBQUNQZCxrQkFBQUEsU0FBUyxFQUFFLEtBREo7QUFFUEcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDa0IsSUFGVDtBQUdQQyxrQkFBQUEsWUFBWSxFQUFFbkIsU0FBUyxDQUFDb0IsT0FBVixDQUFrQixxQkFBbEI7QUFIUCxpQkFqQ2dDO0FBc0MzQ0MsZ0JBQUFBLFNBQVMsRUFBRTtBQUNQbEIsa0JBQUFBLFNBQVMsRUFBRSxLQURKO0FBRVBHLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ2tCLElBRlQ7QUFHUEMsa0JBQUFBLFlBQVksRUFBRW5CLFNBQVMsQ0FBQ29CLE9BQVYsQ0FBa0IsbURBQWxCO0FBSFA7QUF0Q2dDLGVBQXpDLENBREo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxLQUZhO0FBZ0RiO0FBQ0ZFLEVBQUFBLElBQUk7QUFBQSw4RkFBRSxrQkFBT3ZCLGNBQVAsRUFBdUJDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNFRCxjQUFjLENBQUN3QixTQUFmLENBQXlCLFlBQXpCLENBREY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWpEVyxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gIHVwOiBhc3luYyAocXVlcnlJbnRlcmZhY2UsIFNlcXVlbGl6ZSkgPT4ge1xuICAgIGF3YWl0IHF1ZXJ5SW50ZXJmYWNlLmNyZWF0ZVRhYmxlKCdTZWN1cml0aWVzJywge1xuICAgICAgSWQ6IHtcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcbiAgICAgIH0sXG4gICAgICAgIFNsdWc6IHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIFVzZXJJZDp7XG4gICAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcbiAgICAgICAgfSxcbiAgICAgIFRva2VuOiB7XG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgIFBvbGljeToge1xuICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBQcml2YXRlY29kZToge1xuICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5TVFJJTkdcbiAgICAgIH0sXG4gICAgICBPcmlnaW46IHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgIEV4cGlyZXRpbWU6IHtcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLkZMT0FUXG4gICAgICB9LFxuICAgICAgICBDcmVhdGVkQXQ6IHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLmxpdGVyYWwoJ0NVUlJFTlRfVElNRVNUQU1QKCknKVxuICAgICAgICB9LFxuICAgICAgICBVcGRhdGVkQXQ6IHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBTZXF1ZWxpemUuREFURSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogU2VxdWVsaXplLmxpdGVyYWwoJ0NVUlJFTlRfVElNRVNUQU1QKCkgT04gVVBEQVRFIENVUlJFTlRfVElNRVNUQU1QKCknKVxuICAgICAgICB9XG4gICAgfSk7XG4gIH0sXG4gICAgLy8gQHRzLWlnbm9yZVxuICBkb3duOiBhc3luYyAocXVlcnlJbnRlcmZhY2UsIFNlcXVlbGl6ZSkgPT4ge1xuICAgIGF3YWl0IHF1ZXJ5SW50ZXJmYWNlLmRyb3BUYWJsZSgnU2VjdXJpdGllcycpO1xuICB9XG59O1xuIl19