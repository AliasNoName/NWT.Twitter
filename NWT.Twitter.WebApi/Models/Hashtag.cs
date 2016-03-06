using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NWT.Twitter.WebApi.Models
{
    public class Hashtag
    {

        public int ID { get; set; }
        public string Text { get; set; }

        public virtual ICollection<Tweet> Tweets { get; set; }
    }
}