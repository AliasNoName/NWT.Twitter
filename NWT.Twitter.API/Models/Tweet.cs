using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NWT.Twitter.API.Models
{
    public class Tweet
    {
        public int ID { get; set; }
        public string Text { get; set; }
        [ForeignKey("FK_Tweet.Author")]
        public int UserID { get; set; }

        public virtual User User { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        
        //Users that have favourited tweet
        public virtual ICollection<User> FavouritedByUsers { get; set; }
    }
}