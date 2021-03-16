using System;
namespace FundamentalDataTypes.DelegateExamples
{
    public delegate void DelEventHandler();

    public class EventsExample
    {
        public static event DelEventHandler add;

        static void USA()
        {
            Console.WriteLine("USA");
        }

        static void India()
        {
            Console.WriteLine("India");
        }

        static void England()
        {
            Console.WriteLine("England");
        }

        public static void Run()
        {
            //add += new DelEventHandler(USA);
            //add += new DelEventHandler(India);
            //add += new DelEventHandler(England);
            //add.Invoke();
            add += USA;
            add += India;
            add += England;
            add();
        }
    }
}
