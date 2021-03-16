using System;
namespace FundamentalDataTypes.DelegateExamples
{
    public class Operation3
    {
        public static void One()
        {
            Console.WriteLine("one display");
            throw new Exception("Error");
        }

        public static void Two()
        {
            Console.WriteLine("Two display");
        }
    }

    public class MulticastDelegateWithExceptionThrown
    {
        delegate void DelOp();

        public static void Run()
        {
            DelOp obj = Operation3.One;
            obj += Operation3.Two;

            Delegate[] del = obj.GetInvocationList();
            foreach(DelOp d in del)
            {
                try
                {
                    d();
                } catch (Exception)
                {
                    Console.WriteLine("Error caught");
                }
            }
        }
    }
}
