using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace NWT.Twitter.API.Models
{
    public class Comment
    {
        public int ID { get; set; }
        public string Text { get; set; }

        [ForeignKey("Tweet")]
        public int TweetID { get; set; }
        [ForeignKey("User")]
        public int UserID { get; set; }

        public virtual User User { get; set; }
        public virtual Tweet Tweet { get; set; } 
    }
}