"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var port = process.env.PORT || 3000;
App_1["default"].listen(port, function (err) {
    if (err) {
        // eslint-disable-next-line no-console
        return console.log(err);
    }
    return "server is listening on " + port;
});
