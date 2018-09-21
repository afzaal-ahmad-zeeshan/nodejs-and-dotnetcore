var SingletonClass = (function(){
    var name;

    function setName(n) {
        name = n;
    };

    function getName() {
        return name;
    }

    function SingletonClass() {
        //do stuff
    }

    var instance;
    return {
        getInstance: function(){
            if (instance == null) {
                instance = new SingletonClass();
                instance.getName = getName;
                instance.setName = setName;

                // Hide the constructor so the returned objected can't be new'd...
                instance.constructor = null;
            }
            return instance;
        }
   };
})();

module.exports = SingletonClass;