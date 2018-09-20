let service = require("./service");

// Functions
let emailService = function() {};

// Extend/inherit/implement/whatever
emailService.prototype = Object.create(service);

// Add body to the function, previous one had exception.
emailService.prototype.serve = function() {
    console.log("Email Service serving the request.");
}