using System;
namespace FundamentalDataTypes.VirtualExample
{
    public class Vehicle
    {
        public double distance = 0.0;
        public double hour = 0.0;
        public double fuel = 0.0;

        public Vehicle(double distance, double hour, double fuel)
        {
            this.distance = distance;
            this.hour = hour;
            this.fuel = fuel;
        }

        public void Average()
        {
            double average = 0.0;
            average = distance / fuel;
            Console.WriteLine("Vehicle Average is {0:0.00}", average);
        }

        public virtual void Speed()
        {
            double speed = 0.0;
            speed = distance / hour;
            Console.WriteLine("Vehicle Speed is {0:0.00}", speed);
        }
    }

    class Car:Vehicle
    {
        public Car(double distance, double hour, double fuel): base(distance, hour, fuel)
        {

        }

        public void Average()
        {
            double average = 0.0;
            average = distance / fuel;
            Console.WriteLine("Car Average is {0:0.00}", average);
        }

        public override void Speed()
        {
            double speed = 0.0;
            speed = distance / hour;
            Console.WriteLine("Car Speed is {0:0.00}", speed);
        }
    }
}
