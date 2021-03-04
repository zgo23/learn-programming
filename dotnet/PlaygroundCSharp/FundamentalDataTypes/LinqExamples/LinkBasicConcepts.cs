using System;
using System.Linq;

namespace FundamentalDataTypes.LinqExamples
{
    public class LinkBasicConcepts
    {
        public static void Run()
        {
            //RunExample1();
            //RunExample2();
            //RunExample3();
            RunExample4();
        }

        private static void RunExample1()
        {
            var objects = new Object[] { 8, 6L, 1.54, "Hello", 1, 3 };
            var result = objects.OfType<int>();
            foreach (var item in result)
            {
                Console.WriteLine(item);
            }
        }

        private static void RunExample2()
        {
            int[] listOfNumbers = new int[] { 1, 2, 3, 4, 5, 6 };
            var res = listOfNumbers.Where(n => n % 2 != 0);
            foreach(var item in res)
            {
                Console.WriteLine(item);
            }
        }

        private static void RunExample3()
        {
            int[] listOfNumbers = new int[] { 1, 2, 3, 4, 5, 6 };
            var res = from n in listOfNumbers where n % 2 != 0 select n;
            foreach(var item in res)
            {
                Console.WriteLine(item);
            }
        }

        private static void RunExample4()
        {
            int[] listOfNumbers = new int[] { 1, 2, 3, 4, 5, 6 };
            var res = listOfNumbers.All(n => n > 1);
            Console.WriteLine(res);
        }
    }
}
