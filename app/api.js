"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = require("./config");
var http = require("http");
function getCoins() {
    return http.request({
        url: config.url,
        method: 'GET'
    });
}
exports.getCoins = getCoins;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU3QjtJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hCLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztRQUNmLE1BQU0sRUFBRSxLQUFLO0tBQ2hCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFMRCw0QkFLQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoXCIuL2NvbmZpZ1wiKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvaW5zKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogY29uZmlnLnVybCxcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pO1xufSJdfQ==