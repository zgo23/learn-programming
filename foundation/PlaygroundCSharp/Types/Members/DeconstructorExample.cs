using System;
using static System.Console;

namespace Types.Members
{
    public readonly struct Size
    {
        public Size(double w, double h)
        {
            W = w;
            H = h;
        }

        public void Deconstruct(out double w, out double h)
        {
            w = W;
            h = H;
        }

        public double W { get; }
        public double H { get; }
    }

    public static class DeconstructorExample
    {
        public static void Run()
        {
            //WriteLine(DiagonalLength(new Size(6, 8)));
            //WriteLine(DescribeSize(new Size(0, 0)));
            //WriteLine(DescribeSize(new Size(0, 10)));
            //WriteLine(DescribeSize(new Size(10, 0)));
            //WriteLine(DescribeSize(new Size(10, 10)));
            WriteLine(Describe(new Size(0, 0)));
        }

        static double DiagonalLength(Size s)
        {
            (double w, double h) = s;
            return Math.Sqrt(w * w + h * h);
        }

        static string DescribeSize(Size s) => s switch
        {
            (0, 0) => "Empty",
            (0, _) => "Extremely narrow",
            (double w, 0) => $"Extremely short, and this wide: {w}",
            _ => "Normal"
        };

        static string Describe(object o) => o switch
        {
            Size (0, 0) => "Empty",
            _ => "Not a shape"
        };

    }
}
