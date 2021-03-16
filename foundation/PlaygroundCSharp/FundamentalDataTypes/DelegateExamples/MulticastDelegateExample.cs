using System;
namespace FundamentalDataTypes.DelegateExamples
{
    public class Operation2
    {
        public static void Add(int a)
        {
            Console.WriteLine("Addition={0}", a + 10);
        }

        public static void Square(int a)
        {
            Console.WriteLine("Multiple={0}", a * a);
        }
    }

    public class MulticastDelegateExample
    {
        delegate void DelOp(int x);

        public static void Run()
        {
            DelOp obj = Operation2.Add;
            obj += Operation2.Square;
            obj(2);
            obj(8);
        }
    }
}
