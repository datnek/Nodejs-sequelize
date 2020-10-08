"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigDatabase = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var dotenv = _interopRequireWildcard(require("dotenv"));

var ConfigDatabase = /*#__PURE__*/function () {
  function ConfigDatabase() {
    (0, _classCallCheck2["default"])(this, ConfigDatabase);
    dotenv.config();
  }
  /***
   *
   * @constructor
   */


  (0, _createClass2["default"])(ConfigDatabase, [{
    key: "GetConfig",
    value: function GetConfig() {
      return {
        development: {
          username: process.env.DEV_DB_USERNAME,
          password: process.env.DEV_DB_PASSWORD,
          database: process.env.DEV_DB_NAME,
          host: process.env.DEV_DB_HOSTNAME,
          dialect: process.env.DEV_DB_DIALECT
        },
        test: {
          username: process.env.TEST_DB_USERNAME,
          password: process.env.TEST_DB_PASSWORD,
          database: process.env.TEST_DB_NAME,
          host: process.env.TEST_DB_HOSTNAME,
          dialect: process.env.TEST_DB_DIALECT
        },
        production: {
          username: process.env.PROD_DB_USERNAME,
          password: process.env.PROD_DB_PASSWORD,
          database: process.env.PROD_DB_NAME,
          host: process.env.PROD_DB_HOSTNAME,
          dialect: process.env.PROD_DB_DIALECT
        }
      };
    }
  }, {
    key: "GetEnv",
    value: function GetEnv(env) {
      switch (env) {
        case 'development':
          return this.GetConfig().development;

        case 'test':
          return this.GetConfig().test;

        case 'production':
          return this.GetConfig().production;
      }
    }
  }]);
  return ConfigDatabase;
}();

exports.ConfigDatabase = ConfigDatabase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZXMvY29uZmlnL2NvbmZpZy5kYXRhYmFzZS50cyJdLCJuYW1lcyI6WyJDb25maWdEYXRhYmFzZSIsImRvdGVudiIsImNvbmZpZyIsImRldmVsb3BtZW50IiwidXNlcm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiREVWX0RCX1VTRVJOQU1FIiwicGFzc3dvcmQiLCJERVZfREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRFVl9EQl9OQU1FIiwiaG9zdCIsIkRFVl9EQl9IT1NUTkFNRSIsImRpYWxlY3QiLCJERVZfREJfRElBTEVDVCIsInRlc3QiLCJURVNUX0RCX1VTRVJOQU1FIiwiVEVTVF9EQl9QQVNTV09SRCIsIlRFU1RfREJfTkFNRSIsIlRFU1RfREJfSE9TVE5BTUUiLCJURVNUX0RCX0RJQUxFQ1QiLCJwcm9kdWN0aW9uIiwiUFJPRF9EQl9VU0VSTkFNRSIsIlBST0RfREJfUEFTU1dPUkQiLCJQUk9EX0RCX05BTUUiLCJQUk9EX0RCX0hPU1ROQU1FIiwiUFJPRF9EQl9ESUFMRUNUIiwiR2V0Q29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFYUEsYztBQUVULDRCQUFhO0FBQUE7QUFDVEMsSUFBQUEsTUFBTSxDQUFDQyxNQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7Z0NBSVk7QUFDUixhQUFPO0FBQ0hDLFFBQUFBLFdBQVcsRUFBRTtBQUNUQyxVQUFBQSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQURiO0FBRVRDLFVBQUFBLFFBQVEsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGVBRmI7QUFHVEMsVUFBQUEsUUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssV0FIYjtBQUlUQyxVQUFBQSxJQUFJLEVBQUdQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxlQUpWO0FBS1RDLFVBQUFBLE9BQU8sRUFBRVQsT0FBTyxDQUFDQyxHQUFSLENBQVlTO0FBTFosU0FEVjtBQVFIQyxRQUFBQSxJQUFJLEVBQUU7QUFDRlosVUFBQUEsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVcsZ0JBRHBCO0FBRUZULFVBQUFBLFFBQVEsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlZLGdCQUZwQjtBQUdGUixVQUFBQSxRQUFRLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYSxZQUhwQjtBQUlGUCxVQUFBQSxJQUFJLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZYyxnQkFKaEI7QUFLRk4sVUFBQUEsT0FBTyxFQUFFVCxPQUFPLENBQUNDLEdBQVIsQ0FBWWU7QUFMbkIsU0FSSDtBQWVIQyxRQUFBQSxVQUFVLEVBQUU7QUFDUmxCLFVBQUFBLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlpQixnQkFEZDtBQUVSZixVQUFBQSxRQUFRLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZa0IsZ0JBRmQ7QUFHUmQsVUFBQUEsUUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWW1CLFlBSGQ7QUFJUmIsVUFBQUEsSUFBSSxFQUFFUCxPQUFPLENBQUNDLEdBQVIsQ0FBWW9CLGdCQUpWO0FBS1JaLFVBQUFBLE9BQU8sRUFBRVQsT0FBTyxDQUFDQyxHQUFSLENBQVlxQjtBQUxiO0FBZlQsT0FBUDtBQXVCSDs7OzJCQUVNckIsRyxFQUFZO0FBQ2YsY0FBUUEsR0FBUjtBQUNJLGFBQUssYUFBTDtBQUFvQixpQkFBTyxLQUFLc0IsU0FBTCxHQUFpQnpCLFdBQXhCOztBQUNwQixhQUFLLE1BQUw7QUFBYSxpQkFBTyxLQUFLeUIsU0FBTCxHQUFpQlosSUFBeEI7O0FBQ2IsYUFBSyxZQUFMO0FBQW1CLGlCQUFPLEtBQUtZLFNBQUwsR0FBaUJOLFVBQXhCO0FBSHZCO0FBS0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JztcblxuZXhwb3J0IGNsYXNzIENvbmZpZ0RhdGFiYXNle1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgZG90ZW52LmNvbmZpZygpO1xuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIEdldENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRldmVsb3BtZW50OiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRFVl9EQl9VU0VSTkFNRSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREVWX0RCX1BBU1NXT1JELFxuICAgICAgICAgICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5ERVZfREJfTkFNRSxcbiAgICAgICAgICAgICAgICBob3N0OiAgcHJvY2Vzcy5lbnYuREVWX0RCX0hPU1ROQU1FLFxuICAgICAgICAgICAgICAgIGRpYWxlY3Q6IHByb2Nlc3MuZW52LkRFVl9EQl9ESUFMRUNUXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVzdDoge1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5URVNUX0RCX1VTRVJOQU1FLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5URVNUX0RCX1BBU1NXT1JELFxuICAgICAgICAgICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5URVNUX0RCX05BTUUsXG4gICAgICAgICAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuVEVTVF9EQl9IT1NUTkFNRSxcbiAgICAgICAgICAgICAgICBkaWFsZWN0OiBwcm9jZXNzLmVudi5URVNUX0RCX0RJQUxFQ1RcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9kdWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LlBST0RfREJfVVNFUk5BTUUsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBST0RfREJfUEFTU1dPUkQsXG4gICAgICAgICAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBST0RfREJfTkFNRSxcbiAgICAgICAgICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5QUk9EX0RCX0hPU1ROQU1FLFxuICAgICAgICAgICAgICAgIGRpYWxlY3Q6IHByb2Nlc3MuZW52LlBST0RfREJfRElBTEVDVFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIEdldEVudihlbnY6IHN0cmluZyl7XG4gICAgICAgIHN3aXRjaCAoZW52KSB7XG4gICAgICAgICAgICBjYXNlICdkZXZlbG9wbWVudCc6IHJldHVybiB0aGlzLkdldENvbmZpZygpLmRldmVsb3BtZW50O1xuICAgICAgICAgICAgY2FzZSAndGVzdCc6IHJldHVybiB0aGlzLkdldENvbmZpZygpLnRlc3Q7XG4gICAgICAgICAgICBjYXNlICdwcm9kdWN0aW9uJzogcmV0dXJuIHRoaXMuR2V0Q29uZmlnKCkucHJvZHVjdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXX0=