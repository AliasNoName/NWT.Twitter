using System.Collections.Generic;

namespace NWT.Twitter.Models.Data
{
    public class Hashtag
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public List<Twitter.Data.Tweet> Tweets { get; set; }
    }
}