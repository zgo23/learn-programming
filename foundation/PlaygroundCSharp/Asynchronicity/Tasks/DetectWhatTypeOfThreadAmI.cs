using System;
using System.Threading;
using System.Threading.Tasks;

namespace AsynchronousProgramming.Tasks
{
    public class DetectWhatTypeOfThreadAmI
    {
        public DetectWhatTypeOfThreadAmI()
        {
        }

        private static void WhatTypeOfThreadAmI()
        {
            Console.WriteLine("I'm a {0} thread", Thread.CurrentThread.IsThreadPoolThread ? "Thread Pool" : "Custom");
        }

        public static void Run()
        {
            Task.Factory.StartNew(WhatTypeOfThreadAmI).Wait();
            Task.Factory.StartNew(WhatTypeOfThreadAmI, TaskCreationOptions.LongRunning).Wait();
        }
    }
}
