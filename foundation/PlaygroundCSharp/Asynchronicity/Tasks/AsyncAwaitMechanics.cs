using System;
using System.Threading;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;

namespace AsynchronousProgramming.Tasks
{
    public class AsyncAwaitMechanics
    {
        public AsyncAwaitMechanics()
        {
        }

        private static async Task TickTockAsync()
        {
            // State 1
            Console.WriteLine("Starting Clock");

            while (true)
            {
                // State 2
                Console.Write("Tick ");
                await Task.Delay(500);

                // State 3
                Console.WriteLine("Tock");
                await Task.Delay(500);
            }
        }

        public static async Task RunAsync()
        {
            await TickTockAsync();
        }

        private static void TickTock()
        {
            TickTockAsyncStateMachine sm = new TickTockAsyncStateMachine();
            sm.MoveNext();
        }

        public static void Run()
        {
            TickTock();
        }
    }

    public class TickTockAsyncStateMachine
    {
        private int state = 0;
        private TaskAwaiter awaiter;
        private readonly Thread currentThread;

        public TickTockAsyncStateMachine()
        {
            currentThread = Thread.CurrentThread;
        }

        public void MoveNext()
        {
        start:
            switch (state)
            {
                case 0:
                    {
                        goto firstState;
                    }
                case 1:
                    {
                        goto secondState;
                    }
                case 2:
                    {
                        goto thirdState;
                    }
            }

        firstState:
            Console.WriteLine("Starting Clock");
            goto secondAndHalfState;

        secondState:
            awaiter.GetResult();

        secondAndHalfState:
            Console.Write("Tick ");
            awaiter = Task.Delay(500).GetAwaiter();
            if (!awaiter.IsCompleted)
            {
                state = 2;
                awaiter.OnCompleted(() => { currentThread.Interrupt(); });
                try
                {
                    Thread.Sleep(Timeout.Infinite);
                }
                catch (ThreadInterruptedException)
                {
                    goto start;
                }
            }

        thirdState:
            awaiter.GetResult();
            Console.WriteLine("Tock");
            awaiter = Task.Delay(500).GetAwaiter();
            if (!awaiter.IsCompleted)
            {
                state = 1;
                awaiter.OnCompleted(() => { currentThread.Interrupt(); });
                try
                {
                    Thread.Sleep(Timeout.Infinite);
                }
                catch (ThreadInterruptedException)
                {
                    goto start;
                }
            }
            goto secondState;
        }
    }
}
