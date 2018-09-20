using System;
using DependencyInjection;
using Types;

namespace dotnet
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Creating the puny DI container.");
            var diContainer = new Container();

            Console.WriteLine("Created container, adding the instances...");
            diContainer.AddInstance<IService, SmsService>();

            Console.WriteLine("Done, executing the service.");

            IService service = diContainer.GetInstance<IService>();
            if(service != null) {
                service.Serve();
            } else {
                // Typically should not happen, but for safe keeping.
                Console.WriteLine("Container returned a null object, perhaps an instance was not created.");
            }
            
            Console.WriteLine("Done. Bye bye!");
        }
    }
}
