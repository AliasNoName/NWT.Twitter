using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NWT.Twitter.WebApi.DAL;
using NWT.Twitter.WebApi.Models;

namespace NWT.Twitter.WebApi.Controllers
{
    [RoutePrefix("api/Master")]
    public class MasterController : ApiController
    {
        [HttpGet]
        [Route("Database")]
        public IHttpActionResult Database()
        {
            var masterCollection = new ArrayList();
            var context = new TwitterContext();
            var users = context.Users.ToList();
            foreach (var user in users)
            {
                user.Tweets = null;
                user.Comments = null;
                user.Location = null;
                user.FollowedUsers = null;
            }
            masterCollection.Add(users.AsReadOnly());

            var tweets = context.Tweets.ToList();
            foreach (var tweet in tweets)
            {
                tweet.User = null;
                tweet.Comments = null;
                tweet.FavouritedByUsers = null;
                tweet.Hashtags = null;
            }
            masterCollection.Add(tweets.AsReadOnly());

            var hashtags = context.Hashtags.ToList();
            masterCollection.Add(hashtags.AsReadOnly());

            var comments = context.Comments.ToList();
            foreach (var comment in comments)
            {
                comment.User = null;
                comment.Tweet = null;
            }
            masterCollection.Add(comments.AsReadOnly());

            var locations = context.Locations.ToList();
            masterCollection.Add(locations.AsReadOnly());


            return Ok(masterCollection);
        }
    }
}
