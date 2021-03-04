using System;
namespace FundamentalDataTypes.DelegateExamples
{
    public class Operation
    {
        public static void Add(int a, int b)
        {
            Console.WriteLine("Addtion={0}", a + b);
        }

        public static void Multiple(int a, int b)
        {
            Console.WriteLine("Multiply={0}", a * b);
        }
    }

    public class ArrayOfDelegates
    {
        public delegate void DelOp(int x, int y);

        public static void Run()
        {
            DelOp[] obj =
            {
                new DelOp(Operation.Add),
                new DelOp(Operation.Multiple)
            };
            for (int i = 0; i < obj.Length; i++)
            {
                obj[i](2, 5);
                obj[i](8, 5);
                obj[i](4, 6);
            }
        }
    }
}
