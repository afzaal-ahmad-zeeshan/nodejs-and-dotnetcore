let type = (function(){
    var instances = new Map();

    function addInstance(service, instance) {
        if(containerInstance) {
            instances.set(service, instance);
        }
    };

    function getInstance(service) {
        if(containerInstance) {
            return instances.get(service);
        }
    }

    function Container() {}

    var containerInstance;
    return {
        getContainer: function() {
            if (containerInstance == null) {
                containerInstance = new Container();

                // Attach the functions to this object.
                containerInstance.addInstance = addInstance;
                containerInstance.getInstance = getInstance;

                containerInstance.size = () => instances.size;
                containerInstance.printContainer = () => {
                    instances.forEach((value, key) => {
                        console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`);
                    });
                }
                
                // Hide the constructor so the returned objected can't be new'd...
                containerInstance.constructor = null;
            }
            return containerInstance;
        }
   };
})();

module.exports = type;