using System;
using System.Collections.Generic;
using static System.Console;

namespace Types.Members
{
    public static class MethodExample
    {
        public static void Run()
        {
            //int quotient = Divide(5, 3, out int remainder);
            //WriteLine($"{quotient}, {remainder}");
            //WriteLine($"{Divide(5, 3, out _)}");

            //WriteLine(IntTryParse("123"));
            //WriteLine(IntTryParse("abc"));
            //ALocalRefVariable();
            //UseReferable();
            //Blame(problem: "everything");
            //WriteLine(GetAverageDistanceFrom((1, 1), new (double X, double Y)[] { (2, 2), (3, 3) }));
            //"Benjamin is a good boy.".Show();

            //Indexed indexed = new Indexed();
            //WriteLine(indexed[2]);
            //WriteLine(indexed[6]);

            //UseAnIndexerInAnObjectInitializer();

            Counter c1 = new Counter(1);
            Counter c2 = new Counter(2);
            Counter c3 = c1 + c2;
            //WriteLine(c3.Count);
            Counter c4 = c1 + 8;
            //WriteLine(c4.Count);
            Counter c5 = 8 + c1;
            //WriteLine(c5.Count);
            c1 += 10;
            //WriteLine(c1.Count);
            int v1 = (int)c1;
            //WriteLine(v1);
            Counter c6 = (Counter)12;
            //WriteLine(c6.Count);
            //Counter c7 = 13; // If the implicit keyword is used
            //WriteLine(c7.Count);

            //DoStuff ds = new DoStuff();
            //IDoStuff ds2 = ds;
            //ds2.SomeMethod("abc");

            //WriteLine(Ingredients.Bacon);
            //WriteLine(Ingredients.Eggs | Ingredients.Bacon);
            //WriteLine(Ingredients.Eggs | Ingredients.Bacon | Ingredients.Sausages | Ingredients.Mushrooms | Ingredients.Tomato | Ingredients.BlackPudding | Ingredients.BakedBeans);

            //UseAnonymousType();

            //WriteLine(default(int));
            //WriteLine(default(bool));
            //WriteLine(default(string));
            //ShowDefault<int>();
            //ShowDefault<bool>();
            //ShowDefault<string>();

            WriteLine(GetLast<int>(new int[] { 1, 3, 5 }));
        }

        public static int Divide(int x, int y, out int remainder)
        {
            remainder = x % y;
            return x / y;
        }

        public static int IntTryParse(string value)
        {
            return int.TryParse(value, out int intValue) ? intValue : 0;
        }

        public static void ALocalRefVariable()
        {
            string rose = null;
            ref string rosaIndica = ref rose;
            rosaIndica = "smell as sweet";
            WriteLine($"A rose by any other name would {rose}");
        }

        public static void UseReferable()
        {
            Referable r = new Referable();
            //r.i = 10;
            r.FieldRef = 10;
            WriteLine(r.FieldRef);
        }

        public static void Blame(string perperator = "the youth of today", string problem = "the downfall of society")
        {
            WriteLine($"I blame {perperator} for {problem}");
        }

        public static double GetAverageDistanceFrom((double X, double Y) referencePoint, (double X, double Y)[] points)
        {
            double total = 0;
            for (int i = 0; i < points.Length; ++i)
            {
                total += GetDistanceFromReference(points[i]);
            }
            return total / points.Length;

            double GetDistanceFromReference((double X, double Y) p)
            {
                return GetDistance(p, referencePoint);
            }

            static double GetDistance((double X, double Y) p1, (double X, double Y) p2)
            {
                double dx = p1.X - p2.X;
                double dy = p1.Y - p2.Y;
                return Math.Sqrt(dx * dx + dy * dy);
            }
        }

        public static void UseAnIndexerInAnObjectInitializer()
        {
            var d = new Dictionary<string, int> {
                ["One"] = 1,
                ["Two"] = 2,
                ["Three"] = 3
            };
            Write($"{d["One"]}, {d["Two"]}, {d["Three"]}");
        }

        public static void UseAnonymousType()
        {
            var x = new { Title = "Lord", Surname = "Voldemort" };
            WriteLine($"Welcome, {x.Title} {x.Surname}");
        }

        public static void ShowDefault<T>()
        {
            WriteLine(default(T));
        }

        public static T GetDefault<T>() => default;

        public static T GetLast<T>(T[] items) => items[items.Length - 1];

    }

    public class Referable
    {
        private int i;
        private int[] items = new int[10];

        public ref int FieldRef => ref i;

        public ref int GetArrayElementRef(int index) => ref items[index];

        public ref int GetBackSameRef(ref int arg) => ref arg;

        //public ref int WillNotCompile()
        //{
        //    int v = 42;
        //    return ref v;
        //}

        //public ref int WillAlsoNotCompile()
        //{
        //    int i = 42;
        //    return ref GetBackSameRef(ref i);
        //}

        public ref int WillCompile(ref int i)
        {
            return ref GetBackSameRef(ref i);
        }
    }

    public static class StringExtensions
    {
        public static void Show(this string s)
        {
            WriteLine(s);
        }
    }

    public class Indexed
    {
        public string this[int index]
        {
            get => index < 5 ? "Foo" : "Bar";
        }
    }

    public class Counter
    {
        private int _count;

        public int Count => _count;

        public Counter(int count)
        {
            _count = count;
        }

        public static Counter operator +(Counter c1, Counter c2)
        {
            return new Counter(c1.Count + c2.Count);
        }

        public static Counter operator +(Counter c, int y)
        {
            return new Counter(c.Count + y);
        }

        public static Counter operator +(int y, Counter c)
        {
            return new Counter(y + c.Count);
        }

        public static explicit operator int(Counter value)
        {
            return value.Count;
        }

        public static explicit operator Counter(int value)
        {
            return new Counter(value);
        }
    }

    public interface IDoStuff
    {
        string this[int i] { get; set; }
        string Name { get; set; }
        int Id { get; }
        int SomeMethod(string arg);
        event EventHandler Click;
    }

    public class DoStuff : IDoStuff
    {
        public string this[int i] { get => i.ToString(); set { } }

        public string Name { get; set; }

        public int Id { get; }

        public event EventHandler Click;

        int IDoStuff.SomeMethod(string arg)
        {
            throw new NotImplementedException();
        }
    }

    public enum PorridgeTemperature
    {
        TooHot,
        TooCold,
        JustRight
    }

    [System.Flags]
    public enum Ingredients
    {
        Eggs = 0b1,
        Bacon = 0b10,
        Sausages = 0b100,
        Mushrooms = 0b1000,
        Tomato = 0b10000,
        BlackPudding = 0b100000,
        BakedBeans = 0b100_0000,
        TheFullEnglish = 0b111_1111
    }

    public class NamedContainer<T>
    {
        public T Item { get; }
        public string Name { get; }
        public NamedContainer(T item, string name)
        {
            Item = item;
            Name = name;
        }
    }

    public static class Deferred<T> where T : new()
    {
        private static T _instance;

        public static T Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new T();
                }
                return _instance;
            }
        }
    }

}

