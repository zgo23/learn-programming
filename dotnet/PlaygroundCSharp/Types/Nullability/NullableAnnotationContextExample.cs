using System;
namespace Types.Nullability
{
    public static class NullableAnnotationContextExample
    {
        public static void Run()
        {
#nullable enable
            string cannotBeNull = "Text";
            string? maybeNull = null;
#nullable restore
            string str1 = "abc";
        }
    }
}
