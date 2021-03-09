﻿using System;
namespace Types.Structs
{
    public static class PointExample
    {
        public static void Run()
        {
            var p1 = new Point(40, 2);
            var p2 = p1;
            var p3 = new Point(40, 2);

            Console.WriteLine($"{p1.X}, {p1.Y}");
            Console.WriteLine($"{p2.X}, {p2.Y}");
            Console.WriteLine($"{p3.X}, {p3.Y}");
            Console.WriteLine(p1 == p2);
            Console.WriteLine(p1 == p3);
            Console.WriteLine(p2 == p3);
            Console.WriteLine(object.ReferenceEquals(p1, p2));
            Console.WriteLine(object.ReferenceEquals(p1, p3));
            Console.WriteLine(object.ReferenceEquals(p2, p3));
            Console.WriteLine(object.ReferenceEquals(p1, p1));

        }
    }
}
