let service = require("./service");

// Object
let smsService = {};

// Extend/inherit/implement/whatever
smsService.prototype = Object.create(service);

// Add body to the function, previous one had exception.
smsService.prototype.serve = function() {
    console.log("SMS Service serving the request.");
}

smsService = smsService.prototype;
module.exports = smsService;