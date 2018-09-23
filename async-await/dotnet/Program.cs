using System;
using System.Threading.Tasks;

namespace dotnet
{
    class Program
    {
        static void Main(string[] args)
        {
            callbackBased("Outer", () => callbackBased("Central", () => callbackBased("Inner", null)));

            try {
                var task = taskBased(1);
                    task.ContinueWith(operation => {
                        Console.WriteLine($"Operation finished successfully, returning the value {operation.Result}.");
                    }, TaskContinuationOptions.OnlyOnRanToCompletion);
                    task.ContinueWith(operation => {
                        Console.WriteLine($"Operation had some issues. Error says, {operation.Exception.Message}.");
                    }, TaskContinuationOptions.OnlyOnFaulted);
                task.Wait();
            } catch (Exception error) {
                Console.WriteLine(error.Message);
            }

            Console.WriteLine("Terminating...");
        }

        static void callbackBased(string name, Action callback) {
            Console.WriteLine($"Executed runner {name}, executing callback...");
            if(callback != null) {
                callback();
            } else {
                Console.WriteLine("Callback is either null, or not an Action function.");
            }
        }

        static Task<int> taskBased(int value) {
            Console.WriteLine(value);
            if(value > 1) {
                return Task.FromResult(--value);
            } else {
                throw new Exception("Value is subzero, execution froze.");
            }
        }
    }
}
