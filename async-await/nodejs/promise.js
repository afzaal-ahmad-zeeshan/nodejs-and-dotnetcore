module.exports = function(value) {
    return new Promise((resolve, reject) => {
        console.log(value);
        if(value > 1) {
            resolve(--value);
        } else {
            reject("Value is now subzero, execution froze.");
        }
    });
};