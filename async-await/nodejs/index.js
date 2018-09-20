let callbackBased = require("./callbacks");
let promiseBased = require("./promise");
let asyncBased = require("./promise");

// Calling and passing itself as a callback; simplicity.
callbackBased("Outer", () => callbackBased("Central", () => callbackBased("Inner", null)));

promiseBased(1)
    .then(value => promiseBased(value))
    .catch(er => console.log(er));

function runSync() {
    let value = 1;
    var promise = promiseBased(value);
    promise
        .then(value => promiseBased(value))
        .then(value => promiseBased(value))
        .catch(er => console.log(er));
}

async function runAsync() {
    let value = 3;
    try {
        while(true) {
            await asyncBased(value--);
        }
    } catch (error) {
        console.log(error);
    }
}

runSync();
runAsync();