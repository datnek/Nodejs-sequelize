"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthGrade = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var dotenv = _interopRequireWildcard(require("dotenv"));

// get config vars
var AuthGrade = /*#__PURE__*/function () {
  function AuthGrade() {
    (0, _classCallCheck2["default"])(this, AuthGrade);
    dotenv.config();
  }
  /***
   *
   * @param req
   * @param res
   * @param next
   * @constructor
   */


  (0, _createClass2["default"])(AuthGrade, [{
    key: "AuthenticateToken",
    value: function AuthenticateToken(req, res, next) {
      // Gather the jwt access token from the request header
      var authHeader = req.headers['authorization'];
      var token = authHeader && authHeader.split(' ')[1]; // console.log(`the token is ${token}`);
      //we can private url here and do other with token

      if (token == null) return res.sendStatus(401); // if there isn't any token
      // console.log('debug', process.env.ACCESS_TOKEN_SECRET);

      _jsonwebtoken["default"].verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
        console.log(err);
        if (err) return res.sendStatus(403); // @ts-ignore

        req.user = user;
        next(); // pass the execution off to whatever request the client intended
      });
    }
    /***
        the above object structure is completely arbitrary
     * @param payload
     */

  }, {
    key: "GenerateAccessToken",
    value: function GenerateAccessToken(payload) {
      // expires after half and hour (1800 seconds = 30 minutes)
      var days = payload.Expiretime > 0 ? payload.Expiretime : process.env.ACCESS_TOKEN_LIFE;
      var daystr = "".concat(days, " days"); //, algorithm: "HS256"

      return _jsonwebtoken["default"].sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: daystr,
        algorithm: "HS256"
      });
    }
  }]);
  return AuthGrade;
}();

exports.AuthGrade = AuthGrade;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvYXV0aC5ncmFkZS50cyJdLCJuYW1lcyI6WyJBdXRoR3JhZGUiLCJkb3RlbnYiLCJjb25maWciLCJyZXEiLCJyZXMiLCJuZXh0IiwiYXV0aEhlYWRlciIsImhlYWRlcnMiLCJ0b2tlbiIsInNwbGl0Iiwic2VuZFN0YXR1cyIsImp3dCIsInZlcmlmeSIsInByb2Nlc3MiLCJlbnYiLCJBQ0NFU1NfVE9LRU5fU0VDUkVUIiwiZXJyIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiZGF5cyIsIkV4cGlyZXRpbWUiLCJBQ0NFU1NfVE9LRU5fTElGRSIsImRheXN0ciIsInNpZ24iLCJleHBpcmVzSW4iLCJhbGdvcml0aG0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFEQTtJQUlhQSxTO0FBQ1QsdUJBQWE7QUFBQTtBQUNUQyxJQUFBQSxNQUFNLENBQUNDLE1BQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7OztzQ0FPa0JDLEcsRUFBY0MsRyxFQUFlQyxJLEVBQWtCO0FBQzdEO0FBQ0EsVUFBTUMsVUFBVSxHQUFHSCxHQUFHLENBQUNJLE9BQUosQ0FBWSxlQUFaLENBQW5CO0FBQ0EsVUFBTUMsS0FBSyxHQUFHRixVQUFVLElBQUlBLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQixHQUFqQixFQUFzQixDQUF0QixDQUE1QixDQUg2RCxDQUk3RDtBQUNBOztBQUdBLFVBQUlELEtBQUssSUFBSSxJQUFiLEVBQW1CLE9BQU9KLEdBQUcsQ0FBQ00sVUFBSixDQUFlLEdBQWYsQ0FBUCxDQVIwQyxDQVFkO0FBQy9DOztBQUVBQywrQkFBSUMsTUFBSixDQUFXSixLQUFYLEVBQWtCSyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsbUJBQTlCLEVBQW9ELFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQy9EQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsR0FBWjtBQUNBLFlBQUlBLEdBQUosRUFBUyxPQUFPWixHQUFHLENBQUNNLFVBQUosQ0FBZSxHQUFmLENBQVAsQ0FGc0QsQ0FJL0Q7O0FBQ0FQLFFBQUFBLEdBQUcsQ0FBQ2MsSUFBSixHQUFXQSxJQUFYO0FBQ0FaLFFBQUFBLElBQUksR0FOMkQsQ0FNeEQ7QUFDVixPQVBEO0FBUUg7QUFFRDs7Ozs7Ozt3Q0FJb0JlLE8sRUFBb0Y7QUFDcEc7QUFDQSxVQUFNQyxJQUFJLEdBQUlELE9BQU8sQ0FBQ0UsVUFBUixHQUFxQixDQUFyQixHQUF5QkYsT0FBTyxDQUFDRSxVQUFqQyxHQUE4Q1QsT0FBTyxDQUFDQyxHQUFSLENBQVlTLGlCQUF4RTtBQUNBLFVBQU1DLE1BQU0sYUFBTUgsSUFBTixVQUFaLENBSG9HLENBSXBHOztBQUNBLGFBQU9WLHlCQUFJYyxJQUFKLENBQVNMLE9BQVQsRUFBa0JQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBOUIsRUFBbUQ7QUFBRVcsUUFBQUEsU0FBUyxFQUFFRixNQUFiO0FBQXFCRyxRQUFBQSxTQUFTLEVBQUU7QUFBaEMsT0FBbkQsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuLy8gZ2V0IGNvbmZpZyB2YXJzXG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuaW1wb3J0IHtSZXF1ZXN0LCBSZXNwb25zZX0gZnJvbSBcImV4cHJlc3NcIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhHcmFkZSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgZG90ZW52LmNvbmZpZygpXG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlcVxuICAgICAqIEBwYXJhbSByZXNcbiAgICAgKiBAcGFyYW0gbmV4dFxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIEF1dGhlbnRpY2F0ZVRva2VuKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogKCkgPT4gdm9pZCkge1xuICAgICAgICAvLyBHYXRoZXIgdGhlIGp3dCBhY2Nlc3MgdG9rZW4gZnJvbSB0aGUgcmVxdWVzdCBoZWFkZXJcbiAgICAgICAgY29uc3QgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJzWydhdXRob3JpemF0aW9uJ107XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXV0aEhlYWRlciAmJiBhdXRoSGVhZGVyLnNwbGl0KCcgJylbMV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGB0aGUgdG9rZW4gaXMgJHt0b2tlbn1gKTtcbiAgICAgICAgLy93ZSBjYW4gcHJpdmF0ZSB1cmwgaGVyZSBhbmQgZG8gb3RoZXIgd2l0aCB0b2tlblxuXG5cbiAgICAgICAgaWYgKHRva2VuID09IG51bGwpIHJldHVybiByZXMuc2VuZFN0YXR1cyg0MDEpOyAvLyBpZiB0aGVyZSBpc24ndCBhbnkgdG9rZW5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RlYnVnJywgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCk7XG5cbiAgICAgICAgand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCAsIChlcnIsIHVzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnNlbmRTdGF0dXMoNDAzKTtcblxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgcmVxLnVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgbmV4dCgpIC8vIHBhc3MgdGhlIGV4ZWN1dGlvbiBvZmYgdG8gd2hhdGV2ZXIgcmVxdWVzdCB0aGUgY2xpZW50IGludGVuZGVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKipcbiAgICAgICAgdGhlIGFib3ZlIG9iamVjdCBzdHJ1Y3R1cmUgaXMgY29tcGxldGVseSBhcmJpdHJhcnlcbiAgICAgKiBAcGFyYW0gcGF5bG9hZFxuICAgICAqL1xuICAgIEdlbmVyYXRlQWNjZXNzVG9rZW4ocGF5bG9hZDoge1ByaXZhdGVjb2RlOiBzdHJpbmcsIE9yaWdpbjogc3RyaW5nLCBSb2xlczogc3RyaW5nLCBFeHBpcmV0aW1lOiBudW1iZXIgfSkge1xuICAgICAgICAvLyBleHBpcmVzIGFmdGVyIGhhbGYgYW5kIGhvdXIgKDE4MDAgc2Vjb25kcyA9IDMwIG1pbnV0ZXMpXG4gICAgICAgIGNvbnN0IGRheXMgPSAocGF5bG9hZC5FeHBpcmV0aW1lID4gMCA/IHBheWxvYWQuRXhwaXJldGltZSA6IHByb2Nlc3MuZW52LkFDQ0VTU19UT0tFTl9MSUZFKTtcbiAgICAgICAgY29uc3QgZGF5c3RyID0gYCR7ZGF5c30gZGF5c2A7XG4gICAgICAgIC8vLCBhbGdvcml0aG06IFwiSFMyNTZcIlxuICAgICAgICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgcHJvY2Vzcy5lbnYuQUNDRVNTX1RPS0VOX1NFQ1JFVCwgeyBleHBpcmVzSW46IGRheXN0ciwgYWxnb3JpdGhtOiBcIkhTMjU2XCIgfSk7XG4gICAgfVxufVxuIl19