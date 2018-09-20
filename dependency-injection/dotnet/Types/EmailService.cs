using System;

namespace Types {
    public class EmailService : IService
    {
        public void Serve()
        {
            Console.WriteLine("Email Service serving the request.");
        }
    }
}