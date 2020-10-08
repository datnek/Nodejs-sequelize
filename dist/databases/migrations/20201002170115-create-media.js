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
              return queryInterface.createTable('Media', {
                Id: {
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
                  type: Sequelize.INTEGER
                },
                Name: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Slug: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Hashname: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Extension: {
                  allowNull: false,
                  type: Sequelize.STRING
                },
                Size: {
                  allowNull: false,
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
              return queryInterface.dropTable('Media');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZXMvbWlncmF0aW9ucy8yMDIwMTAwMjE3MDExNS1jcmVhdGUtbWVkaWEudHMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVwIiwicXVlcnlJbnRlcmZhY2UiLCJTZXF1ZWxpemUiLCJjcmVhdGVUYWJsZSIsIklkIiwiYWxsb3dOdWxsIiwiYXV0b0luY3JlbWVudCIsInByaW1hcnlLZXkiLCJ0eXBlIiwiSU5URUdFUiIsIk5hbWUiLCJTVFJJTkciLCJTbHVnIiwiSGFzaG5hbWUiLCJFeHRlbnNpb24iLCJTaXplIiwiRkxPQVQiLCJDcmVhdGVkQXQiLCJEQVRFIiwiZGVmYXVsdFZhbHVlIiwibGl0ZXJhbCIsIlVwZGF0ZWRBdCIsImRvd24iLCJkcm9wVGFibGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUdBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYjtBQUNGQyxFQUFBQSxFQUFFO0FBQUEsNEZBQUUsaUJBQU9DLGNBQVAsRUFBdUJDLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNJRCxjQUFjLENBQUNFLFdBQWYsQ0FBMkIsT0FBM0IsRUFBb0M7QUFDeENDLGdCQUFBQSxFQUFFLEVBQUU7QUFDRkMsa0JBQUFBLFNBQVMsRUFBRSxLQURUO0FBRUZDLGtCQUFBQSxhQUFhLEVBQUUsSUFGYjtBQUdGQyxrQkFBQUEsVUFBVSxFQUFFLElBSFY7QUFJRkMsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDTztBQUpkLGlCQURvQztBQU94Q0MsZ0JBQUFBLElBQUksRUFBRTtBQUNGTCxrQkFBQUEsU0FBUyxFQUFFLEtBRFQ7QUFFSkcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDUztBQUZaLGlCQVBrQztBQVd4Q0MsZ0JBQUFBLElBQUksRUFBRTtBQUNGUCxrQkFBQUEsU0FBUyxFQUFFLEtBRFQ7QUFFSkcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDUztBQUZaLGlCQVhrQztBQWV4Q0UsZ0JBQUFBLFFBQVEsRUFBRTtBQUNOUixrQkFBQUEsU0FBUyxFQUFFLEtBREw7QUFFUkcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDUztBQUZSLGlCQWY4QjtBQW1CeENHLGdCQUFBQSxTQUFTLEVBQUU7QUFDUFQsa0JBQUFBLFNBQVMsRUFBRSxLQURKO0FBRVRHLGtCQUFBQSxJQUFJLEVBQUVOLFNBQVMsQ0FBQ1M7QUFGUCxpQkFuQjZCO0FBdUJ4Q0ksZ0JBQUFBLElBQUksRUFBRTtBQUNGVixrQkFBQUEsU0FBUyxFQUFFLEtBRFQ7QUFFSkcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDYztBQUZaLGlCQXZCa0M7QUEyQnRDQyxnQkFBQUEsU0FBUyxFQUFFO0FBQ1BaLGtCQUFBQSxTQUFTLEVBQUUsS0FESjtBQUVQRyxrQkFBQUEsSUFBSSxFQUFFTixTQUFTLENBQUNnQixJQUZUO0FBR1BDLGtCQUFBQSxZQUFZLEVBQUVqQixTQUFTLENBQUNrQixPQUFWLENBQWtCLHFCQUFsQjtBQUhQLGlCQTNCMkI7QUFnQ3RDQyxnQkFBQUEsU0FBUyxFQUFFO0FBQ1BoQixrQkFBQUEsU0FBUyxFQUFFLEtBREo7QUFFUEcsa0JBQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDZ0IsSUFGVDtBQUdQQyxrQkFBQUEsWUFBWSxFQUFFakIsU0FBUyxDQUFDa0IsT0FBVixDQUFrQixtREFBbEI7QUFIUDtBQWhDMkIsZUFBcEMsQ0FESjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEtBRmE7QUEwQ2I7QUFDRkUsRUFBQUEsSUFBSTtBQUFBLDhGQUFFLGtCQUFPckIsY0FBUCxFQUF1QkMsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0VELGNBQWMsQ0FBQ3NCLFNBQWYsQ0FBeUIsT0FBekIsQ0FERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBM0NXLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgdXA6IGFzeW5jIChxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKSA9PiB7XG4gICAgYXdhaXQgcXVlcnlJbnRlcmZhY2UuY3JlYXRlVGFibGUoJ01lZGlhJywge1xuICAgICAgSWQ6IHtcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLklOVEVHRVJcbiAgICAgIH0sXG4gICAgICBOYW1lOiB7XG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgIFNsdWc6IHtcbiAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9LFxuICAgICAgSGFzaG5hbWU6IHtcbiAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuU1RSSU5HXG4gICAgICB9LFxuICAgICAgRXh0ZW5zaW9uOiB7XG4gICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgdHlwZTogU2VxdWVsaXplLlNUUklOR1xuICAgICAgfSxcbiAgICAgIFNpemU6IHtcbiAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICB0eXBlOiBTZXF1ZWxpemUuRkxPQVRcbiAgICAgIH0sXG4gICAgICAgIENyZWF0ZWRBdDoge1xuICAgICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUubGl0ZXJhbCgnQ1VSUkVOVF9USU1FU1RBTVAoKScpXG4gICAgICAgIH0sXG4gICAgICAgIFVwZGF0ZWRBdDoge1xuICAgICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IFNlcXVlbGl6ZS5EQVRFLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBTZXF1ZWxpemUubGl0ZXJhbCgnQ1VSUkVOVF9USU1FU1RBTVAoKSBPTiBVUERBVEUgQ1VSUkVOVF9USU1FU1RBTVAoKScpXG4gICAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgICAvLyBAdHMtaWdub3JlXG4gIGRvd246IGFzeW5jIChxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKSA9PiB7XG4gICAgYXdhaXQgcXVlcnlJbnRlcmZhY2UuZHJvcFRhYmxlKCdNZWRpYScpO1xuICB9XG59O1xuIl19