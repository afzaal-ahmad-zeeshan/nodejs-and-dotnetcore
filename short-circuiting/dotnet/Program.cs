using System;

namespace dotnet
{
    class Program
    {
        static void Main(string[] args)
        {
            int number = new Random().Next(0, 100);

            object param = null;
            object value = null;
            if(number > 70) {
                value = "People";
                param = "String value";
            } else {
                param = 15;
            }

            Console.WriteLine($"Number is {number}.");
            Console.WriteLine($"Hello, {value ?? "World"}!");
            typeAndValue(param);
        }

        static void typeAndValue(dynamic param) {
            if(param is string) {
                Console.WriteLine($"[String] {param}.");
            } else {
                Console.WriteLine($"[Number] {param}.");
            }
        }
    }
}
