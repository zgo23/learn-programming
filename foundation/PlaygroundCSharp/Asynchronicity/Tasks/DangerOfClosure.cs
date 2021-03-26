using System;
using System.Threading.Tasks;

namespace AsynchronousProgramming.Tasks
{
    public class DangerOfClosure
    {
        public DangerOfClosure()
        {
        }

        public static void Run()
        {
            for (int i = 0; i < 10; i++)
            {
                int toCaptureI = i;
                Task.Factory.StartNew(() => Console.WriteLine(toCaptureI));
            }
            Console.ReadLine();
        }
    }
}
