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
    [RoutePrefix("api/Master/Tweets")]
    public class MasterTweetsController : ApiController
    {
        [HttpGet]
        [Route("Database")]
        public IHttpActionResult Database()
        {
            var masterCollection = new ArrayList();
            var context = new TwitterContext();
            
            var tweets = context.Tweets.ToList();
            foreach (var tweet in tweets)
            {
                tweet.User = null;
                tweet.Comments = null;
                tweet.FavouritedByUsers = null;
                tweet.Hashtags = null;
            }
            masterCollection.Add(tweets.AsReadOnly());
            return Ok(masterCollection);
        }
    }
}
