using System;
using System.Collections.Generic;

namespace DependencyInjection {
    public class Container {
        private static Dictionary<Type, Type> instances { get; set; } = new Dictionary<Type, Type>();

        public static void AddInstance<TInterface, TInstance>() 
            where TInterface : class
            where TInstance : class
        {
            instances.Add(typeof(TInterface), typeof(TInstance));
        }

        public static TInterface GetInstance<TInterface> () 
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