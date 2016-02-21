using System.Collections.Generic;
using System.Linq;

namespace NWT.Twitter.Data.Repositories
{
    class TweetRepository
    {
        public Tweet Get(int id)
        {
            using (var context = new TwitterEntities())
            {
                return context.Tweets
                    .Include("Author")
                    .Include("Comments")
                    .Include("Comments.User")
                    .Include("FavouriteTweets")
                    .Include("FavouriteTweets.User")
                    .SingleOrDefault(t => t.ID == id);
            }
        }

        public IList<Tweet> GetAll()
        {
            using (var context = new TwitterEntities())
            {
                return context.Tweets
                    .Include("Author")
                    .Include("Comments")
                    .Include("Comments.User")
                    .Include("FavouriteTweets")
                    .Include("FavouriteTweets.User")
                    .ToList();
            }
        }

        public void Create(Tweet tweet)
        {
            using (var context = new TwitterEntities())
            {
                context.Tweets.Add(tweet);
                context.SaveChanges();
            }
        }

        public void Update(int id)
        {
            using (var context = new TwitterEntities())
            {
                var tweet = context.Tweets.SingleOrDefault(t => t.ID == id);
                if(tweet != null)
                {
                    context.FavouriteTweets.RemoveRange(tweet.FavouriteTweets);
                    context.Comments.RemoveRange(tweet.Comments);
                    context.Tweets.Remove(tweet);

                    context.SaveChanges();
                }
            }
        }

        public void Delete(int id)
        {
            using (var context = new TwitterEntities())
            {
                var tweet = context.Tweets.SingleOrDefault(t => t.ID == id);
                if (tweet != null)
                {
                    context.Comments.RemoveRange(tweet.Comments);
                    context.FavouriteTweets.RemoveRange(tweet.FavouriteTweets);
                    context.Tweets.Remove(tweet);

                    context.SaveChanges();
                }
            }
        }
    }
}
