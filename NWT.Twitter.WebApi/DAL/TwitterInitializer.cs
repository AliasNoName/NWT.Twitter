using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using NWT.Twitter.WebApi.Models;

namespace NWT.Twitter.WebApi.DAL
{
    public class TwitterInitializer : System.Data.Entity.DropCreateDatabaseAlways<TwitterContext>
    {
        protected override void Seed(TwitterContext context)
        {
            var userManager = new UserManager<User>(new UserStore<User>(context));

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
                new User { UserName = "userNumber1", FirstName = "User", LastName = "NumberOne", ImageUrl = "http://i.imgur.com/T85KFa1.jpg", LocationID = 2, FollowedUsers = new List<User>(), Tweets = new List<Tweet>(), Comments = new List<Comment>(), FavouritedTweets = new List<Tweet>()},
                new User { UserName = "someNumber2", FirstName = "Some", LastName = "NumberTwo", ImageUrl = "http://i.imgur.com/oDkZmVC.jpg", LocationID = 2, FollowedUsers = new List<User>(), Tweets = new List<Tweet>(), Comments = new List<Comment>(), FavouritedTweets = new List<Tweet>()},
                new User { UserName = "useWords3", FirstName = "Usage", LastName = "WordsThree", ImageUrl = "http://i.imgur.com/BSa65e1.jpg", LocationID = 2, FollowedUsers = new List<User>(), Tweets = new List<Tweet>(), Comments = new List<Comment>(), FavouritedTweets = new List<Tweet>()},
                new User { UserName = "doHomeWork4", FirstName = "Dohome", LastName = "WorkFour", ImageUrl = "http://images.wookmark.com/ffffound-this-guys-profile-pic-really-wookmark-177955.jpg", LocationID = 2, FollowedUsers = new List<User>(), Tweets = new List<Tweet>(), Comments = new List<Comment>(), FavouritedTweets = new List<Tweet>()},
            };
            users.ForEach(u => userManager.Create(u, "Password123."));

            var fUsers = context.Users.ToList();
            fUsers.Single(f => f.UserName == "userNumber1") .FollowedUsers.Add(fUsers.Single(f => f.UserName == "someNumber2"));
            fUsers.Single(f => f.UserName == "userNumber1") .FollowedUsers.Add(fUsers.Single(f => f.UserName == "useWords3"));
            fUsers.Single(f => f.UserName == "userNumber1") .FollowedUsers.Add(fUsers.Single(f => f.UserName == "doHomeWork4"));
            /*
            fUsers.Single(f => f.UserName == "someNumber2") .FollowedUsers.Add(fUsers.Single(f => f.UserName == "userNumber1"));
            fUsers.Single(f => f.UserName == "someNumber2") .FollowedUsers.Add(fUsers.Single(f => f.UserName == "useWords3"));
            fUsers.Single(f => f.UserName == "someNumber2") .FollowedUsers.Add(fUsers.Single(f => f.UserName == "doHomeWork4"));
            */
            fUsers.Single(f => f.UserName == "useWords3")   .FollowedUsers.Add(fUsers.Single(f => f.UserName == "userNumber1"));
            fUsers.Single(f => f.UserName == "useWords3")   .FollowedUsers.Add(fUsers.Single(f => f.UserName == "someNumber2"));
            fUsers.Single(f => f.UserName == "useWords3")   .FollowedUsers.Add(fUsers.Single(f => f.UserName == "doHomeWork4"));

            fUsers.Single(f => f.UserName == "doHomeWork4") .FollowedUsers.Add(fUsers.Single(f => f.UserName == "userNumber1"));
            fUsers.Single(f => f.UserName == "doHomeWork4") .FollowedUsers.Add(fUsers.Single(f => f.UserName == "useWords3"));
            fUsers.Single(f => f.UserName == "doHomeWork4") .FollowedUsers.Add(fUsers.Single(f => f.UserName == "someNumber2"));
            //fUsers[2].FollowedUsers.Add(fUsers[0]);
            //fUsers[2].FollowedUsers.Add(fUsers[3]);
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
                new Hashtag { Text = "hashtagRijec", Tweets = new List<Tweet>(context.Tweets.Where(t => t.Text.Contains("#hastagRijec")) ) },
                new Hashtag { Text = "hashtagRijec2", Tweets = new List<Tweet>(context.Tweets.Where(t => t.Text.Contains("#hastagRijec2")) ) }
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