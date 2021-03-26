using AsynchronousProgramming.Tasks;
using AsynchronousProgramming.Threads;

namespace AsynchronousProgramming
{
    class Program
    {
        static void Main(string[] args)
        {
            //ComputeBasedTask.Run();
            //DetectWhatTypeOfThreadAmI.Run();
            //DangerOfClosure.Run();
            //IoBasedTask.Run();
            //IoBasedTask.Run2();
            //IoBasedTask.Run3();
            //AsyncAwaitMechanics.RunAsync().Wait();
            AsyncAwaitMechanics.Run();
            //WaitingForEverAwaiterDemo.WaitingForEveryAsync();
            //Thread2JoinInThread1Example.Run();
        }

    }
}
