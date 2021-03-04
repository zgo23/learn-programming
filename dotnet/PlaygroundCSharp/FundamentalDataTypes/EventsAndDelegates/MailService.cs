using System;
namespace FundamentalDataTypes.EventsAndDelegates
{
    public class MailService
    {
        public void OnVideoEncoded(object source, EventArgs e)
        {
            Console.WriteLine("MailService: Sending an email..."); 
        }
    }
}
