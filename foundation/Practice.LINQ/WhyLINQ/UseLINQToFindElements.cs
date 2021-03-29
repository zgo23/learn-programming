using System;
using System.Linq;

namespace Practice.LINQ.WhyLINQ
{
    public class UseLINQToFindElements
    {
        public static void Run()
        {
            Student[] studentArray = {
                    new Student() { StudentID = 1, StudentName = "John", Age = 18 } ,
                    new Student() { StudentID = 2, StudentName = "Steve",  Age = 21 } ,
                    new Student() { StudentID = 3, StudentName = "Bill",  Age = 25 } ,
                    new Student() { StudentID = 4, StudentName = "Ram" , Age = 20 } ,
                    new Student() { StudentID = 5, StudentName = "Ron" , Age = 31 } ,
                    new Student() { StudentID = 6, StudentName = "Chris",  Age = 17 } ,
                    new Student() { StudentID = 7, StudentName = "Rob",Age = 19  } ,
                };

            Student[] teenagerStudents = studentArray.Where(s => s.Age > 12 && s.Age < 20).ToArray();
            Student bill = studentArray.Where(s => s.StudentName == "Bill").FirstOrDefault();
            Student student5 = studentArray.Where(s => s.StudentID == 5).FirstOrDefault();
        }
    }
}
