console.log("Creating the puny DI container.");
let diContainer = require("./dependencyinjection/container")("primary");

// Pulling the instances
let service = require("./types/service");
let smsService = require("./types/smsservice");

console.log("Created container, adding the instances...");
diContainer.addInstance(service, smsService);

console.log("Done, executing the service.");

var instance = diContainer.getInstance(service);
if(instance != null) {
    instance.prototype.serve();
} else {
    // Typically should not happen, but for safe keeping.
    console.log("Container returned a null object, perhaps an instance was not created.");
}

console.log("Done. Bye bye!");