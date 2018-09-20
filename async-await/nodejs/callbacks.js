var runner = function(name, callback) {
    console.log(`Executed runner ${name}, executing callback...`);
    if(callback) {
        callback();
    } else {
        console.log("Callback is either null, or not a function.");
    }
}

module.exports = runner;