console.log("Running the test code...");
let container = require("./dependencyinjection/container").getContainer();

let instance = container.getInstance(require("./types/service"));
if(instance) {
    instance.serve();
    console.log("Type was registered correctly and was returned too.");
} else {
    console.log("Type was registered correctly in the container, perhaps an issue.");
}