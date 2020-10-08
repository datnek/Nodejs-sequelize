"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _app = _interopRequireDefault(require("./app/app"));

var PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  _app["default"].listen(PORT, function () {
    return console.log("Server is up on port ".concat(PORT));
  });
}

var _default = _app["default"];
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOlsiUE9SVCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImFwcCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosSUFBb0IsSUFBakM7O0FBR0EsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsTUFBN0IsRUFBcUM7QUFDakNDLGtCQUFJQyxNQUFKLENBQVdMLElBQVgsRUFBaUI7QUFBQSxXQUFNTSxPQUFPLENBQUNDLEdBQVIsZ0NBQW9DUCxJQUFwQyxFQUFOO0FBQUEsR0FBakI7QUFDSDs7ZUFFY0ksZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcHAgZnJvbSBcIi4vYXBwL2FwcFwiO1xuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMDtcblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGFwcC5saXN0ZW4oUE9SVCwgKCkgPT4gY29uc29sZS5sb2coYFNlcnZlciBpcyB1cCBvbiBwb3J0ICR7UE9SVH1gKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxuXG4iXX0=