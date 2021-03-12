using System;
using static System.Console;

namespace Types.Members
{
    public static class MethodExample
    {
        public static void Run()
        {
            //int quotient = Divide(5, 3, out int remainder);
            //WriteLine($"{quotient}, {remainder}");
            WriteLine($"{Divide(5, 3, out _)}");

            //WriteLine(IntTryParse("123"));
            //WriteLine(IntTryParse("abc"));
        }

        public static int Divide(int x, int y, out int remainder)
        {
            remainder = x % y;
            return x / y;
        }

        public static int IntTryParse(string value)
        {
            return int.TryParse(value, out int intValue) ? intValue : 0;
        }
    }
}
