using System;
using System.Runtime.CompilerServices;

namespace AsynchronousProgramming.Tasks
{
    public class WaitingForEverAwaiter : INotifyCompletion
    {
        public bool IsCompleted { get { return false; } }
        public void OnCompleted(Action continuation)
        {
            return;
        }
        public int GetResult()
        {
            return 0;
        }
    }

    public class WaitingForEverAwaiterSource
    {
        public WaitingForEverAwaiter GetAwaiter()
        {
            return new WaitingForEverAwaiter();
        }
    }

    public class WaitingForEverAwaiterDemo
    {
        public static async void WaitingForEveryAsync()
        {
            int result = await new WaitingForEverAwaiterSource();
            Console.WriteLine("Result is {0}", result);
        }
    }
}
