using System;
using System.Threading;

namespace FundamentalDataTypes.EventsAndDelegates
{
    public class VideoEncoder
    {
        public delegate void VideoEncodedEventHandler(object source, EventArgs e);
        public event VideoEncodedEventHandler VideoEncoded;

        public void Encode(Video video)
        {
            Console.WriteLine("Encoding video...");
            Thread.Sleep(3000);

            OnVideoEncoded();
        }

        protected virtual void OnVideoEncoded()
        {
            if (VideoEncoded != null)
            {
                VideoEncoded(this, EventArgs.Empty);
            }
        }
    }
}
