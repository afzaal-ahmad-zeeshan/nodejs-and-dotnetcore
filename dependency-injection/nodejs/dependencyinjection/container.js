module.exports = function(name) {
    this.name = name;
    instances = new Map();

    return {
        addInstance: function(service, instance) {
            instances.set(service, instance);
        }, 
        getInstance: function(name) {
            return instances.get(name);
        }
    };
}