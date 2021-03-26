using System;
namespace BasicSyntax.GoToStatements
{
    public class HowGoToExecutes
    {
        public HowGoToExecutes()
        {
        }

        public static void Run(int initialPart = 0)
        {
            if (initialPart == 0)
            {
                goto firstPart;
            } else
            {
                goto secondPart;
            }
            
        firstPart:
            Console.WriteLine("First part");
        secondPart:
            Console.WriteLine("Second part");
        }
    }
}
