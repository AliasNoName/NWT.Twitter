using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.AspNet.Identity;
using NWT.Twitter.WebApi.DAL;
using NWT.Twitter.WebApi.Models;
using NWT.Twitter.WebApi.Repositories.Data;

namespace NWT.Twitter.WebApi.Controllers
{
    [Authorize]
    public class TweetsController : ApiController
    {
        private readonly TweetRepository _tweetRepository;
        public TweetsController()
        {
                _tweetRepository = new TweetRepository();
        }


        // GET: api/Tweets
        [ResponseType(typeof(List<Tweet>))]
        public IHttpActionResult GetTweets()
        {
            try
            {
                ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;
                var userName = principal.Claims.First().Value;

                var tweetDto = _tweetRepository.GetAllTweets(userName);
                return Ok(tweetDto.ToList());
            }
            catch (Exception exception)
            {
                return BadRequest("Error has occured. Exception: " + exception.Message);
            }
        }

        
        // GET: api/Tweets/5
        [ResponseType(typeof(Tweet))]
        public IHttpActionResult GetTweet(int tweetId)
        {
            try
            {
                ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;
                var userName = principal.Claims.First().Value;
                var tweet = _tweetRepository.GetSingleTweet(userName, tweetId);
                return Ok(tweet);
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);
            }
        }

        /*
        // POST: api/Tweets
        [ResponseType(typeof(Tweet))]
        public IHttpActionResult PostTweet(Tweet tweet)
        {            
            try
            {
                ClaimsPrincipal principal = Request.GetRequestContext().Principal as ClaimsPrincipal;
                var userName = principal.Claims.First().Value;
                tweet.UserID = userId;
            }
            catch (NullReferenceException exception)
            {
                return BadRequest(exception.Message);
            }
            

            db.Tweets.Add(tweet);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tweet.ID }, tweet);
        }

        // DELETE: api/Tweets/5
        [ResponseType(typeof(Tweet))]
        public IHttpActionResult DeleteTweet(int id)
        {
            Tweet tweet = db.Tweets.Find(id);
            if (tweet == null)
            {
                return NotFound();
            }

            db.Tweets.Remove(tweet);
            db.SaveChanges();

            return Ok(tweet);
        }
        

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TweetExists(int id)
        {
            return db.Tweets.Count(e => e.ID == id) > 0;
        }
        */
    }
}