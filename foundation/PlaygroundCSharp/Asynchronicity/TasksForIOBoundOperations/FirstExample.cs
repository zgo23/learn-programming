using System.Threading.Tasks;
using System.Net.Http;
using static System.Console;
namespace Asynchronicity.TasksForIOBoundOperations
{
    public class FirstExample
    {
        public FirstExample()
        {
        }

        public Task<string> GetHtmlAsync()
        {
            var client = new HttpClient();
            return client.GetStringAsync("https://www.dotnetfoundation.org");
        }

        public static void Run()
        {
            FirstExample fe = new FirstExample();
            Task<string> t = fe.GetHtmlAsync();
            WriteLine(t.Result);   
        }
    }
}
