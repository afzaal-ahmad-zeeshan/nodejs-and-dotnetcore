using System;

namespace Types {
    public class SmsService : IService
    {
        public void Serve()
        {
            Console.WriteLine("SMS Service serving the request.");
        }
    }
}