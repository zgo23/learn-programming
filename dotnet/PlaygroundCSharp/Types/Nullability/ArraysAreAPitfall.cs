using System;

#nullable enable
namespace Types.Nullability
{
    public static class ArraysAreAPitfall
    {
        public static void Run()
        {
            string[] values = new string[10];
            string s = values[0];
            Console.WriteLine(s.ToUpper());
        }
    }
}
