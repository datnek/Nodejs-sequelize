"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FakeData = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var FakeData = /*#__PURE__*/function () {
  /***
   *
   */
  function FakeData() {
    (0, _classCallCheck2["default"])(this, FakeData);
    (0, _defineProperty2["default"])(this, "User", void 0);
    (0, _defineProperty2["default"])(this, "Localization", void 0);
    (0, _defineProperty2["default"])(this, "Media", void 0);
    (0, _defineProperty2["default"])(this, "Security", void 0);
    this.SetLocalization();
    this.SetMedia();
    this.SetUser();
    this.SetSecurity();
  }
  /***
   *
   * @constructor
   */


  (0, _createClass2["default"])(FakeData, [{
    key: "SetUser",
    value: function SetUser() {
      this.User = {
        Email: "danick.takam@datnek.be",
        Username: "stratege",
        Password: "password",
        Slug: "113",
        AddressId: null,
        BackgroundId: null,
        Birthdate: null,
        Civility: 1,
        Firstname: "Danick",
        Lastname: "Takam",
        Phone: "+32465806045",
        Sex: 1,
        PhotoId: 1,
        CreatedAt: null,
        UpdatedAt: null
      };
    }
    /***
     *
     * @constructor
     */

  }, {
    key: "SetSecurity",
    value: function SetSecurity() {
      this.Security = {
        Slug: "7842",
        UserId: 1,
        Token: null,
        Policy: "ROLE1",
        Privatecode: "475G",
        Origin: "https://datnek.be",
        Expiretime: 365 * 5
      };
    }
    /***
     *
     * @constructor
     */

  }, {
    key: "SetMedia",
    value: function SetMedia() {
      this.Media = {
        Name: "file1.png",
        Slug: "4756",
        Hashname: "145fvcjdfjkfdrnf.png",
        Extension: "type/png",
        Size: 14200
      };
    }
    /***
     *
     * @constructor
     */

  }, {
    key: "SetLocalization",
    value: function SetLocalization() {
      this.Localization = {
        Longitude: 0,
        Slug: "147",
        Latitude: 0,
        Country: "be",
        City: "Borgerhout",
        Region: "Anvers",
        Fullname: "Te boelaarlei 41 anvers 2140 anvers",
        Street: "Te boelaarlei",
        Streetnumber: "41",
        Postalcode: "2140",
        Ip: "191.147.1.1",
        Pcmacaddress: null,
        continent: "eu",
        Timezone: null
      };
    }
  }]);
  return FakeData;
}();

exports.FakeData = FakeData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0cy9mYWtlLmRhdGEudHMiXSwibmFtZXMiOlsiRmFrZURhdGEiLCJTZXRMb2NhbGl6YXRpb24iLCJTZXRNZWRpYSIsIlNldFVzZXIiLCJTZXRTZWN1cml0eSIsIlVzZXIiLCJFbWFpbCIsIlVzZXJuYW1lIiwiUGFzc3dvcmQiLCJTbHVnIiwiQWRkcmVzc0lkIiwiQmFja2dyb3VuZElkIiwiQmlydGhkYXRlIiwiQ2l2aWxpdHkiLCJGaXJzdG5hbWUiLCJMYXN0bmFtZSIsIlBob25lIiwiU2V4IiwiUGhvdG9JZCIsIkNyZWF0ZWRBdCIsIlVwZGF0ZWRBdCIsIlNlY3VyaXR5IiwiVXNlcklkIiwiVG9rZW4iLCJQb2xpY3kiLCJQcml2YXRlY29kZSIsIk9yaWdpbiIsIkV4cGlyZXRpbWUiLCJNZWRpYSIsIk5hbWUiLCJIYXNobmFtZSIsIkV4dGVuc2lvbiIsIlNpemUiLCJMb2NhbGl6YXRpb24iLCJMb25naXR1ZGUiLCJMYXRpdHVkZSIsIkNvdW50cnkiLCJDaXR5IiwiUmVnaW9uIiwiRnVsbG5hbWUiLCJTdHJlZXQiLCJTdHJlZXRudW1iZXIiLCJQb3N0YWxjb2RlIiwiSXAiLCJQY21hY2FkZHJlc3MiLCJjb250aW5lbnQiLCJUaW1lem9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBS2FBLFE7QUFNVDs7O0FBR0Esc0JBQWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1QsU0FBS0MsZUFBTDtBQUNBLFNBQUtDLFFBQUw7QUFDQSxTQUFLQyxPQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNIO0FBRUQ7Ozs7Ozs7OzhCQUlzQjtBQUNsQixXQUFLQyxJQUFMLEdBQVk7QUFDUkMsUUFBQUEsS0FBSyxFQUFFLHdCQURDO0FBRVJDLFFBQUFBLFFBQVEsRUFBRSxVQUZGO0FBR1JDLFFBQUFBLFFBQVEsRUFBRSxVQUhGO0FBSVJDLFFBQUFBLElBQUksRUFBRSxLQUpFO0FBS1JDLFFBQUFBLFNBQVMsRUFBRyxJQUxKO0FBTVJDLFFBQUFBLFlBQVksRUFBRyxJQU5QO0FBT1JDLFFBQUFBLFNBQVMsRUFBRyxJQVBKO0FBUVJDLFFBQUFBLFFBQVEsRUFBRyxDQVJIO0FBU1JDLFFBQUFBLFNBQVMsRUFBRyxRQVRKO0FBVVJDLFFBQUFBLFFBQVEsRUFBRyxPQVZIO0FBV1JDLFFBQUFBLEtBQUssRUFBRyxjQVhBO0FBWVJDLFFBQUFBLEdBQUcsRUFBRyxDQVpFO0FBYVJDLFFBQUFBLE9BQU8sRUFBRyxDQWJGO0FBY1JDLFFBQUFBLFNBQVMsRUFBRyxJQWRKO0FBZVJDLFFBQUFBLFNBQVMsRUFBRztBQWZKLE9BQVo7QUFpQkg7QUFFRDs7Ozs7OztrQ0FJMkI7QUFDdkIsV0FBS0MsUUFBTCxHQUFnQjtBQUNaWixRQUFBQSxJQUFJLEVBQUUsTUFETTtBQUVaYSxRQUFBQSxNQUFNLEVBQUUsQ0FGSTtBQUdaQyxRQUFBQSxLQUFLLEVBQUUsSUFISztBQUlaQyxRQUFBQSxNQUFNLEVBQUUsT0FKSTtBQUtaQyxRQUFBQSxXQUFXLEVBQUUsTUFMRDtBQU1aQyxRQUFBQSxNQUFNLEVBQUUsbUJBTkk7QUFPWkMsUUFBQUEsVUFBVSxFQUFFLE1BQUk7QUFQSixPQUFoQjtBQVNIO0FBRUQ7Ozs7Ozs7K0JBSXdCO0FBQ3BCLFdBQUtDLEtBQUwsR0FBYTtBQUNUQyxRQUFBQSxJQUFJLEVBQUUsV0FERztBQUVUcEIsUUFBQUEsSUFBSSxFQUFFLE1BRkc7QUFHVHFCLFFBQUFBLFFBQVEsRUFBRSxzQkFIRDtBQUlUQyxRQUFBQSxTQUFTLEVBQUUsVUFKRjtBQUtUQyxRQUFBQSxJQUFJLEVBQUU7QUFMRyxPQUFiO0FBT0g7QUFFRDs7Ozs7OztzQ0FJK0I7QUFDM0IsV0FBS0MsWUFBTCxHQUFvQjtBQUNoQkMsUUFBQUEsU0FBUyxFQUFFLENBREs7QUFFaEJ6QixRQUFBQSxJQUFJLEVBQUUsS0FGVTtBQUdoQjBCLFFBQUFBLFFBQVEsRUFBRSxDQUhNO0FBSWhCQyxRQUFBQSxPQUFPLEVBQUUsSUFKTztBQUtoQkMsUUFBQUEsSUFBSSxFQUFFLFlBTFU7QUFNaEJDLFFBQUFBLE1BQU0sRUFBRSxRQU5RO0FBT2hCQyxRQUFBQSxRQUFRLEVBQUUscUNBUE07QUFRaEJDLFFBQUFBLE1BQU0sRUFBRSxlQVJRO0FBU2hCQyxRQUFBQSxZQUFZLEVBQUUsSUFURTtBQVVoQkMsUUFBQUEsVUFBVSxFQUFFLE1BVkk7QUFXaEJDLFFBQUFBLEVBQUUsRUFBRSxhQVhZO0FBWWhCQyxRQUFBQSxZQUFZLEVBQUUsSUFaRTtBQWFoQkMsUUFBQUEsU0FBUyxFQUFFLElBYks7QUFjaEJDLFFBQUFBLFFBQVEsRUFBRTtBQWRNLE9BQXBCO0FBZ0JIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVXNlcn0gZnJvbSBcIi4uL2RhdGFiYXNlcy9tb2RlbHMvdXNlclwiO1xuaW1wb3J0IHtJTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZGF0YWJhc2VzL21vZGVscy9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7SU1lZGlhfSBmcm9tIFwiLi4vZGF0YWJhc2VzL21vZGVscy9tZWRpYVwiO1xuaW1wb3J0IHtJU2VjdXJpdHl9IGZyb20gXCIuLi9kYXRhYmFzZXMvbW9kZWxzL3NlY3VyaXR5XCI7XG5cbmV4cG9ydCBjbGFzcyBGYWtlRGF0YSB7XG4gICAgVXNlcjogSVVzZXI7XG4gICAgTG9jYWxpemF0aW9uOiBJTG9jYWxpemF0aW9uO1xuICAgIE1lZGlhOiBJTWVkaWE7XG4gICAgU2VjdXJpdHk6IElTZWN1cml0eTtcblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuU2V0TG9jYWxpemF0aW9uKCk7XG4gICAgICAgIHRoaXMuU2V0TWVkaWEoKTtcbiAgICAgICAgdGhpcy5TZXRVc2VyKCk7XG4gICAgICAgIHRoaXMuU2V0U2VjdXJpdHkoKTtcbiAgICB9XG5cbiAgICAvKioqXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgIHByaXZhdGUgU2V0VXNlcigpOiB2b2lke1xuICAgICAgICB0aGlzLlVzZXIgPSB7XG4gICAgICAgICAgICBFbWFpbDogXCJkYW5pY2sudGFrYW1AZGF0bmVrLmJlXCIsXG4gICAgICAgICAgICBVc2VybmFtZTogXCJzdHJhdGVnZVwiLFxuICAgICAgICAgICAgUGFzc3dvcmQ6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgIFNsdWc6IFwiMTEzXCIsXG4gICAgICAgICAgICBBZGRyZXNzSWQgOiBudWxsLFxuICAgICAgICAgICAgQmFja2dyb3VuZElkIDogbnVsbCxcbiAgICAgICAgICAgIEJpcnRoZGF0ZSA6IG51bGwsXG4gICAgICAgICAgICBDaXZpbGl0eSA6IDEsXG4gICAgICAgICAgICBGaXJzdG5hbWUgOiBcIkRhbmlja1wiLFxuICAgICAgICAgICAgTGFzdG5hbWUgOiBcIlRha2FtXCIsXG4gICAgICAgICAgICBQaG9uZSA6IFwiKzMyNDY1ODA2MDQ1XCIsXG4gICAgICAgICAgICBTZXggOiAxLFxuICAgICAgICAgICAgUGhvdG9JZCA6IDEsXG4gICAgICAgICAgICBDcmVhdGVkQXQgOiBudWxsLFxuICAgICAgICAgICAgVXBkYXRlZEF0IDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHByaXZhdGUgU2V0U2VjdXJpdHkoKTogdm9pZHtcbiAgICAgICAgdGhpcy5TZWN1cml0eSA9IHtcbiAgICAgICAgICAgIFNsdWc6IFwiNzg0MlwiLFxuICAgICAgICAgICAgVXNlcklkOiAxLFxuICAgICAgICAgICAgVG9rZW46IG51bGwsXG4gICAgICAgICAgICBQb2xpY3k6IFwiUk9MRTFcIixcbiAgICAgICAgICAgIFByaXZhdGVjb2RlOiBcIjQ3NUdcIixcbiAgICAgICAgICAgIE9yaWdpbjogXCJodHRwczovL2RhdG5lay5iZVwiLFxuICAgICAgICAgICAgRXhwaXJldGltZTogMzY1KjVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKioqXG4gICAgICpcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBwcml2YXRlIFNldE1lZGlhKCk6IHZvaWR7XG4gICAgICAgIHRoaXMuTWVkaWEgPSB7XG4gICAgICAgICAgICBOYW1lOiBcImZpbGUxLnBuZ1wiLFxuICAgICAgICAgICAgU2x1ZzogXCI0NzU2XCIsXG4gICAgICAgICAgICBIYXNobmFtZTogXCIxNDVmdmNqZGZqa2Zkcm5mLnBuZ1wiLFxuICAgICAgICAgICAgRXh0ZW5zaW9uOiBcInR5cGUvcG5nXCIsXG4gICAgICAgICAgICBTaXplOiAxNDIwMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKipcbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIHByaXZhdGUgU2V0TG9jYWxpemF0aW9uKCk6IHZvaWR7XG4gICAgICAgIHRoaXMuTG9jYWxpemF0aW9uID0ge1xuICAgICAgICAgICAgTG9uZ2l0dWRlOiAwLFxuICAgICAgICAgICAgU2x1ZzogXCIxNDdcIixcbiAgICAgICAgICAgIExhdGl0dWRlOiAwLFxuICAgICAgICAgICAgQ291bnRyeTogXCJiZVwiLFxuICAgICAgICAgICAgQ2l0eTogXCJCb3JnZXJob3V0XCIsXG4gICAgICAgICAgICBSZWdpb246IFwiQW52ZXJzXCIsXG4gICAgICAgICAgICBGdWxsbmFtZTogXCJUZSBib2VsYWFybGVpIDQxIGFudmVycyAyMTQwIGFudmVyc1wiLFxuICAgICAgICAgICAgU3RyZWV0OiBcIlRlIGJvZWxhYXJsZWlcIixcbiAgICAgICAgICAgIFN0cmVldG51bWJlcjogXCI0MVwiLFxuICAgICAgICAgICAgUG9zdGFsY29kZTogXCIyMTQwXCIsXG4gICAgICAgICAgICBJcDogXCIxOTEuMTQ3LjEuMVwiLFxuICAgICAgICAgICAgUGNtYWNhZGRyZXNzOiBudWxsLFxuICAgICAgICAgICAgY29udGluZW50OiBcImV1XCIsXG4gICAgICAgICAgICBUaW1lem9uZTogbnVsbFxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==