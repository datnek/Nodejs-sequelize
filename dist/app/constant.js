"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constant = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inversify = require("inversify");

var _dec, _class;

var Constant = (_dec = (0, _inversify.injectable)(), _dec(_class = /*#__PURE__*/function () {
  function Constant() {
    (0, _classCallCheck2["default"])(this, Constant);
  }

  (0, _createClass2["default"])(Constant, [{
    key: "GetRoles",

    /***
     *
     * @constructor
     */
    value: function GetRoles() {
      return [{
        Title: "Access1",
        Id: 1
      }, {
        Title: "Access2",
        Id: 2
      }, {
        Title: "Access3",
        Id: 3
      }, {
        Title: "Access4",
        Id: 4
      }, {
        Title: "Access5",
        Id: 5
      }];
    }
  }]);
  return Constant;
}()) || _class);
exports.Constant = Constant;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvY29uc3RhbnQudHMiXSwibmFtZXMiOlsiQ29uc3RhbnQiLCJUaXRsZSIsIklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7SUFRYUEsUSxXQURaLDRCOzs7Ozs7OztBQUVHOzs7OytCQUkwQztBQUN0QyxhQUFPLENBQ0g7QUFDSUMsUUFBQUEsS0FBSyxFQUFFLFNBRFg7QUFFSUMsUUFBQUEsRUFBRSxFQUFHO0FBRlQsT0FERyxFQUtIO0FBQ0lELFFBQUFBLEtBQUssRUFBRSxTQURYO0FBRUlDLFFBQUFBLEVBQUUsRUFBRztBQUZULE9BTEcsRUFTSDtBQUNJRCxRQUFBQSxLQUFLLEVBQUUsU0FEWDtBQUVJQyxRQUFBQSxFQUFFLEVBQUc7QUFGVCxPQVRHLEVBYUg7QUFDSUQsUUFBQUEsS0FBSyxFQUFFLFNBRFg7QUFFSUMsUUFBQUEsRUFBRSxFQUFHO0FBRlQsT0FiRyxFQWlCSDtBQUNJRCxRQUFBQSxLQUFLLEVBQUUsU0FEWDtBQUVJQyxRQUFBQSxFQUFFLEVBQUc7QUFGVCxPQWpCRyxDQUFQO0FBc0JIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3RhYmxlfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5cbmV4cG9ydCAgaW50ZXJmYWNlIElDb25zdGFudCB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIEdldFJvbGVzKCk7XG59XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25zdGFudCB7XG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgR2V0Um9sZXMoKToge1RpdGxlOnN0cmluZywgSWQ6IG51bWJlciB9W10ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFRpdGxlOiBcIkFjY2VzczFcIixcbiAgICAgICAgICAgICAgICBJZCA6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVGl0bGU6IFwiQWNjZXNzMlwiLFxuICAgICAgICAgICAgICAgIElkIDogMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBUaXRsZTogXCJBY2Nlc3MzXCIsXG4gICAgICAgICAgICAgICAgSWQgOiAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFRpdGxlOiBcIkFjY2VzczRcIixcbiAgICAgICAgICAgICAgICBJZCA6IDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgVGl0bGU6IFwiQWNjZXNzNVwiLFxuICAgICAgICAgICAgICAgIElkIDogNVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH1cbn1cbiJdfQ==