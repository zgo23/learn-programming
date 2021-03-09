using System;
namespace Types.Nullability
{
    public static class NullableWarningContextExample
    {
        public static void Run()
        {
#nullable enable
            string cannotBeNull = "Text";
            string? mayBeNull = null;
            //#nullable restore

            if (mayBeNull != null)
            {
                Console.WriteLine(mayBeNull.Length);
            }

            Console.WriteLine(mayBeNull?.Length ?? 0);
#nullable disable warnings
            Console.WriteLine(mayBeNull.Length);

        }
    }
}
