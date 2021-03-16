using System;

namespace BindingExtensionMethodsAtCompileTime
{
    namespace DefineMyInterface
    {
        using System;

        public interface IMyInterface
        {
            void MethodB();
        }
    }

    namespace Extensions
    {
        using System;
        using DefineMyInterface;
        public static class Extension
        {
            public static void MethodA(this IMyInterface myInterface, int i)
            {
                Console.WriteLine("Extension.MethodA(this IMyInterface myInterface, int i)");
            }

            public static void MethodA(this IMyInterface myInterface, string s)
            {
                Console.WriteLine("Extension.MethodA(this IMyInterface myInterface, string s)");
            }

            public static void MethodB(this IMyInterface myInterface)
            {
                Console.WriteLine("Extension.MethodB(this IMyInterface myInterface)");
            }
        }
    }

    namespace ExtensionMethodsDemo1
    {
        using System;
        using Extensions;
        using DefineMyInterface;

        class A : IMyInterface
        {
            public void MethodB()
            {
                Console.WriteLine("A.MethodB()");
            }
        }

        class B : IMyInterface
        {
            public void MethodB()
            {
                Console.WriteLine("B.MethodB()");
            }
            public void MethodA(int i)
            {
                Console.WriteLine("B.MethodA(int i)");
            }
        }

        class C : IMyInterface
        {
            public void MethodB()
            {
                Console.WriteLine("C.MethodB()");
            }

            public void MethodA(object obj)
            {
                Console.WriteLine("C.MethodA(object obj)");
            }
        }
        class ExtMethodDemo
        {
            static void Main(string[] args)
            {
                A a = new A();
                B b = new B();
                C c = new C();

                a.MethodA(1);
                a.MethodA("hello");
                a.MethodB();

                b.MethodA(1);
                b.MethodB();
                b.MethodA("Hello");

                c.MethodA(1);
                c.MethodA("hello");
                c.MethodB();

            }
        }
    }

}
