using System;
using System.Text;
using ClassLibExtMethod;

namespace FundamentalDataTypes.ExtensionMethod1
{
    public static class XX
    {
        public static void NewMethod(this Class1 ob)
        {
            Console.WriteLine("Hello I am an extended method.");
        }
    }

    public class XXMain
    {
        public static void Run()
        {
            Class1 ob = new Class1();
            ob.Display();
            ob.Print();
            ob.NewMethod();
        }
    }
}
