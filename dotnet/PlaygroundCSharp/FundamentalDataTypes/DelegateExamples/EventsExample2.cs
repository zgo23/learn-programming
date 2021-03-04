using System;
namespace FundamentalDataTypes.DelegateExamples
{
    public delegate void EventHandler(string a);

    public class Operation4
    {
        public event EventHandler xyz;

        public void Action(string a)
        {
            if (xyz != null)
            {
                xyz(a);
                Console.WriteLine(a);
            } else
            {
                Console.WriteLine("Not Registered");
            }
        }
    }

    public class EventsExample2
    {
        public static void CatchEvent(string s)
        {
            Console.WriteLine("Method Calling");
        }

        public static void Run()
        {
            Operation4 o = new Operation4();
            o.Action("Event Calling");
            o.xyz += new EventHandler(CatchEvent);
            o.Action("Method Calling");
        }
    }
}
