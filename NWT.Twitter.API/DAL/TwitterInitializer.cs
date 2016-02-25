using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Metadata.Edm;
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
            {
                new Location { Name = "London",     GeoHeight = 51.3f,      GeoWidth = 0},
                new Location { Name = "New York",   GeoHeight = 40.42f,     GeoWidth = 74},
                new Location { Name = "Hong Kong",  GeoHeight = 22.12f,     GeoWidth = 114.09f},
                new Location { Name = "Rome",       GeoHeight = 41.53f,     GeoWidth = 12.3f}
            };
            locations.ForEach(l => context.Locations.Add(l));
            context.SaveChanges();

            var users = new List<User>
            {
                new User { UserName = "userNumber1", FirstName = "User", LastName = "NumberOne", ImageUrl = "http://i.imgur.com/T85KFa1.jpg", LocationID = 2, FollowedUsers = new List<User>()},
                new User { UserName = "someNumber2", FirstName = "Some", LastName = "NumberTwo", ImageUrl = "http://i.imgur.com/oDkZmVC.jpg", LocationID = 2, FollowedUsers = new List<User>()},
                new User { UserName = "useWords3", FirstName = "Usage", LastName = "WordsThree", ImageUrl = "http://i.imgur.com/BSa65e1.jpg", LocationID = 2, FollowedUsers = new List<User>()},
                new User { UserName = "doHomeWork4", FirstName = "Dohome", LastName = "WorkFour", ImageUrl = "http://images.wookmark.com/ffffound-this-guys-profile-pic-really-wookmark-177955.jpg", LocationID = 2, FollowedUsers = new List<User>()},
            };
            users.ForEach(u=> context.Users.Add(u));
            context.SaveChanges();

            var tweets = new List<Tweet>
            {
                new Tweet { Text = "Prvi tweet korsniku jedan", UserID = context.Users.First().Id, FavouritedByUsers = new List<User>()},
                new Tweet { Text = "Prvo korištenje #hastagRijec , jel valja?", UserID = context.Users.ToList()[2].Id, FavouritedByUsers = new List<User>()},
                new Tweet { Text = "Shareaj, lajkaj podijeli, ionako ne radi :D", UserID = context.Users.ToList()[3].Id, FavouritedByUsers = new List<User>()}
            };
            tweets.ForEach(t => context.Tweets.Add(t));
            context.SaveChanges();

            var hashtags = new List<Hashtag>
            {
                new Hashtag { Text = "hashtagRijec", Tweets = new List<Tweet>(context.Tweets.Where(t => t.Text.Equals("Prvo korištenje #hastagRijec , jel valja?")) ) }
            };
            hashtags.ForEach(h => context.Hashtags.Add(h));
            context.SaveChanges();

            var comments = new List<Comment>
            {
                new Comment {Text = "Jel ovo radi?", TweetID = 2, UserID = context.Users.First().Id}
            };
            comments.ForEach(c => context.Comments.Add(c));
            context.SaveChanges();

        }
    }
}