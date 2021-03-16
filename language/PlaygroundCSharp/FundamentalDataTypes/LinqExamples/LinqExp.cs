using System;
using System.Linq.Expressions;
using System.Reflection;

namespace FundamentalDataTypes.LinqExamples
{
    public class Student
    {
        public int StudentId { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Phone { get; set; }
    }

    public class LinqExp
    {
        public static void Run()
        {
            Student student = new Student();
            Console.WriteLine(GetAttribute("StudentId"));
            Console.WriteLine(getPropertyName(() => student.StudentId));
            Console.ReadLine();
        }

        static string GetAttribute(string name)
        {
            return typeof(Student).GetProperty(name).Name;
        }

        static string getPropertyName<T>(Expression<Func<T>> lambdaExp)
        {
            MemberExpression me = lambdaExp.Body as MemberExpression;
            MemberInfo minfo = me.Member;
            return minfo.Name;
        }
    }
}
