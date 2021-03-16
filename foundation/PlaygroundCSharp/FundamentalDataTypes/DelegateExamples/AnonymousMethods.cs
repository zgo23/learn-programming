using System;
namespace FundamentalDataTypes.DelegateExamples
{
    
    public class AnonymousMethods
    {
        public delegate void operation(int a, int b);

        public static void Run()
        {
            operation obj = delegate (int a, int b)
            {
                Console.WriteLine("Addtion={0}", a + b);
                Console.WriteLine("Anonymous method");
            };
            obj(1, 2);
        }
    }
}
