using System;
using System.Net;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace AsynchronousProgramming.Tasks
{
    public class IoBasedTask
    {
        public IoBasedTask()
        {
        }

        private static string DownloadWebPage(string url)
        {
            WebRequest request = WebRequest.Create(url);
            WebResponse response = request.GetResponse();
            using (var reader = new StreamReader(response.GetResponseStream()))
            {
                return reader.ReadToEnd();
            }
        }

        public static void Run()
        {
            string download = DownloadWebPage("https://docs.microsoft.com/en-us/dotnet/api/system.func-1?view=net-5.0");
            Console.WriteLine(download);
        }

        private static Task<string> DownloadWebPageAsync(string url)
        {
            return Task.Factory.StartNew(() => DownloadWebPage(url));
        }

        public static void Run2()
        {
            Task<string> downloadTask = DownloadWebPageAsync("https://docs.microsoft.com/en-us/dotnet/api/system.func-1?view=net-5.0");
            while (!downloadTask.IsCompleted)
            {
                Console.Write(".");
                Thread.Sleep(250);
            }
            Console.WriteLine(downloadTask.Result);
        }

        private static Task<string> BetterDownloadWebPageAsync(string url)
        {
            WebRequest request = WebRequest.Create(url);
            IAsyncResult ar = request.BeginGetResponse(null, null);

            Task<string> downloadTask = Task.Factory.FromAsync<string>(ar, iar => {
                using (WebResponse response = request.EndGetResponse(iar))
                {
                    using (var reader = new StreamReader(response.GetResponseStream()))
                    {
                        return reader.ReadToEnd();
                    }
                }
            });
            return downloadTask;
        }

        public static void Run3()
        {
            Task<string> downloadTask = BetterDownloadWebPageAsync("https://docs.microsoft.com/en-us/dotnet/api/system.func-1?view=net-5.0");
            while (!downloadTask.IsCompleted)
            {
                Console.Write(".");
                Thread.Sleep(250);
            }
            Console.WriteLine(downloadTask.Result);
        }
    }
}
