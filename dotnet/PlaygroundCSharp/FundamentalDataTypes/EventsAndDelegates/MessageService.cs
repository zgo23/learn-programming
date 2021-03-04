using System;
namespace FundamentalDataTypes.EventsAndDelegates
{
    public class MessageService
    {
        public void OnVideoEncoded(object source, EventArgs args)
        {
            Console.WriteLine("MessageService: Sending a text message...");
        }
    }
}
