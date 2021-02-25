using System;
using FundamentalDataTypes.VirtualExample;

namespace FundamentalDataTypes
{
    class Program
    {
        static void Main(string[] args)
        {
            //AnalyzeFloat();
            //LearnTuple();
            LearnVirtualKeyword1();
        }

        static void AnalyzeFloat()
        {
            Console.WriteLine(BitConverter.IsLittleEndian);

            byte[] bytes = BitConverter.GetBytes(97F);
            foreach (byte b in bytes)
            {
                Console.WriteLine(Convert.ToString(b, 2).PadLeft(8, '0'));
            }

            Console.WriteLine(2_999_999_999F.ToString("F99").TrimEnd('0'));
            Console.WriteLine(Single.MaxValue.ToString("F99").TrimEnd('0'));
        }

        static void LearnTuple()
        {
            (int X, int Y) point = (46, 3);
            (int X, int Y) = point;
            (int Width, int Height) dimensions = point;
            Console.WriteLine($"X = {point.X}, Y = {point.Y}");
            Console.WriteLine($"X = {X}, Y = {Y}");
            Console.WriteLine($"X = {point.Item1}, Y = {point.Item2}");
            Console.WriteLine($"Width = {dimensions.Width}, Height = {dimensions.Height}");
        }

        static void LearnVirtualKeyword1()
        {
            double distance, hour, fuel = 0.0;
            Console.WriteLine("Enter the distance");
            distance = Double.Parse(Console.ReadLine());
            Console.WriteLine("Enter the hours");
            hour = Double.Parse(Console.ReadLine());
            Console.WriteLine("Enter the fuel");
            fuel = Double.Parse(Console.ReadLine());

            Car objCar = new Car(distance, hour, fuel);
            Vehicle objVeh = objCar;

            objCar.Average();
            objCar.Speed();

            objVeh.Average();
            objVeh.Speed();
        }
    }
}
