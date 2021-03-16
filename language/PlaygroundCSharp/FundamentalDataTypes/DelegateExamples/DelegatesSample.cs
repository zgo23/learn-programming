using System;
namespace FundamentalDataTypes.DelegateExamples
{
    public delegate int operation(int x, int y);

    public class DelegatesSample
    {
        static int Addition(int a, int b)
        {
            return a + b;
        }

        public static void Run()
        {
            //operation obj = new operation(DelegatesSample.Addition);
            operation obj = DelegatesSample.Addition;
            Console.WriteLine("Addtion is={0}", obj(23, 27));
        }
    }
}
