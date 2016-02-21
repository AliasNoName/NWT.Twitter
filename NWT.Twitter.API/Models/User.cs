using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NWT.Twitter.API.Models
{
    public class User
    {
        public int ID { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ImageUrl { get; set; }

        [ForeignKey("FK_User.Location")]
        public int LocationID { get; set; }


        public virtual Location Location { get; set; }
        public virtual ICollection<Tweet> Tweets { get; set; }
        public virtual ICollection<Comment> Comments { get; set; } 

        //Tweet favourited by User
        public virtual ICollection<Tweet> FavouritedTweets { get; set; } 
        //Users followed by User
        public virtual ICollection<User> FollowedUsers { get; set; } 
    }
}