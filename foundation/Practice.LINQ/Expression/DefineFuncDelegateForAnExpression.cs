using System;
using System.Linq;
using System.Linq.Expressions;

namespace Practice.LINQ.Expression
{
    public class Student
    {
        public int StudentID { get; set; }
        public string StudentName { get; set; }
        public int Age { get; set; }
    }

    public class DefineFuncDelegateForAnExpression
    {
        public static void Run() {
            // Func<Student, bool> isTeenager = s => s.Age > 12 && s.Age < 20;
            Expression<Func<Student, bool>> isTeenagerExpr = s => s.Age > 12 && s.Age < 20;
            Func<Student, bool> isTeenager = isTeenagerExpr.Compile();
            bool result = isTeenager(new Student() {StudentID = 1, StudentName = "Steve", Age=20});
            Console.WriteLine("Is teenager: {0}", result);
        }
    }
}
