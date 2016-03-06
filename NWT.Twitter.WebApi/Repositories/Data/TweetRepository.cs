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
                    var usersFollowingId = GetAllFollowedUsers(userName);
                    if (usersFollowingId.Count == 0)
                    {
                        throw new NullReferenceException("Error when getting followed users");
                    }
                    var tweets = context.Tweets.Where(t => usersFollowingId.Any(u => u == t.UserID)).ToList();
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
                try
                {
                    var tweet = context.Tweets.SingleOrDefault(t => t.ID == tweetId);
                    var usersFollowing = GetAllFollowedUsers(userName);
                    if (usersFollowing.Contains(tweet.UserID))
                    {
                        return tweet;
                    }
                    else
                    {
                        throw new NullReferenceException("User not allowed to see Tweet - please follow user to see!");
                    }
                }
                catch (Exception e)
                {
                    throw new NullReferenceException("Tweet single throw error. Exception: " + e.Message);
                }
            }
        }

        public IList<string> GetAllFollowedUsers(string userName)
        {

            using (var context = new TwitterContext())
            {
                var user = context.Users.SingleOrDefault(u => u.UserName == userName);
                
                var sql_followedUsers = @"Select [FollowedUserId] from [UserFollowsUser] 
                                                Where [UserFollowsUser].[FollowedByUserId] = {0}";
                var usersFollowingId = context.Database
                    .SqlQuery<string>(sql_followedUsers, user.Id).ToList();

                usersFollowingId.Add(user.Id);

                return usersFollowingId;
            }
            
        }
}
}