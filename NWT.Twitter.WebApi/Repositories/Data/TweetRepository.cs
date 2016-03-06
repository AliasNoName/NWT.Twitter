using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Security.Cryptography;
using System.Web;
using NWT.Twitter.WebApi.DAL;
using NWT.Twitter.WebApi.Models;

namespace NWT.Twitter.WebApi.Repositories.Data
{
    public class TweetRepository
    {
        public IList<Tweet> GetAllTweets(string userName)
        {
            using (var context = new TwitterContext())
            {
                try
                {
                    var user = context.Users.SingleOrDefault(u => u.UserName == userName);
                    var sql_followedUsers = @"Select [FollowedUserId] from [UserFollowsUser] 
                                                Where [UserId] = {0}";
                    var usersFollowingId = context.Database
                        .SqlQuery<string>(sql_followedUsers, user.Id).ToList();
                    
                    usersFollowingId.Add(user.Id);

                    if (usersFollowingId.Count == 0)
                    {
                        throw new NullReferenceException("Error when getting followed users");
                    }
                    var tweets = context.Tweets.Where(t => usersFollowingId.Contains(t.UserID)).ToList();
                    return tweets;
                }
                catch (Exception e)
                {
                    throw new Exception("Followed users is null. Exception: " + e.Message);
                }
            }
        }

        public Tweet GetSingleTweet(string userName, int tweetId)
        {
            using (var context = new TwitterContext())
            {
                var tweet = context.Tweets.Single
                    (t => t.ID == tweetId);
                try
                {
                    var user = context.Users.Single(u => u.UserName == userName);
                    var usersFollowing = user.FollowedUsers.ToList();
                    usersFollowing.Add(user);

                    if (usersFollowing.Any(u => u.Id == tweet.UserID))
                    {
                        return tweet;
                    }
                    else
                    {
                        throw new NullReferenceException("Tweet is null");
                    }
                }
                catch (Exception e)
                {
                    throw new NullReferenceException("List of Followed users is null. Exception: " + e.Message);
                }
            }
        }
    }
}