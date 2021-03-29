using System;
using System.Linq;

namespace Practice.LINQ.WhatIsLINQ
{
    public class LINQQueryToArray
    {
        public static void Run()
        {
            string[] names = { "Bill", "Steve", "James", "Mohan" };
            var myLinqQuery = from name in names where name.Contains('a') select name;
            foreach (var name in myLinqQuery)
            {
                Console.WriteLine(name);
            }
        }
    }
}
