using System;
using System.Collections.Generic;

namespace DependencyInjection {
    public class Container {
        private Dictionary<Type, Type> instances { get; set; }

        public Container() {
            // I find this a bit more easier to read and understand, than an in-place initialization.
            // Gives a sense of ownership to the object; as needed.
            instances = new Dictionary<Type, Type>();
        }

        public void AddInstance<TInterface, TInstance>() 
            where TInterface : class
            where TInstance : class
        {
            instances.Add(typeof(TInterface), typeof(TInstance));
        }

        public TInterface GetInstance<TInterface> () 
            where TInterface : class
        {
            Type instance = null;
            if(instances.TryGetValue(typeof(TInterface), out instance)) {
                return Activator.CreateInstance(instance) as TInterface; // Always creates a new instance.
            } else {
                throw new Exception("Container does not contain an instance definition for this type.");
            }
        }
    }
}