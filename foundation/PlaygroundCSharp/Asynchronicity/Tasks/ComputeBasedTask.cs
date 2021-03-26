using System;
using System.Threading.Tasks;
namespace AsynchronousProgramming.Tasks
{
    public class ComputeBasedTask
    {
        public ComputeBasedTask()
        {
        }

        private static void Speak()
        {
            Console.WriteLine("Hello World");
        }

        public static void Run()
        {
            //Task t = new Task(Speak);
            //t.Start();
            Task t = Task.Factory.StartNew(Speak);
            Console.WriteLine("Waiting for completion");
            t.Wait();
            Console.WriteLine("All Done");
        }
    }
}
