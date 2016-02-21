using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NWT.Twitter.API.Models;

namespace NWT.Twitter.API.DAL
{
    public class TwitterInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<TwitterContext>
    {
        protected override void Seed(TwitterContext context)
        {
            var locations = new List<Location>
            {};
            var users = new List<User>
            {};
            var tweets = new List<Tweet>
            {};
            var hashtags = new List<Hashtag>
            {};
            var comments = new List<Comment>
            {};

        }
    }
}