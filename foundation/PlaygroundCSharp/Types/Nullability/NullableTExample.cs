using System;
namespace Types.Nullability
{
    public static class NullableTExample
    {
        public static void Run()
        {
            string str = null; // string is reference type
            Nullable<int> len = str?.Length; // null-conditional operator
            Console.WriteLine("Item = {0}.", len);
        }
    }
}
