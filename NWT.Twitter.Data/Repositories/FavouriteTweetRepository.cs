using System.Linq;

namespace NWT.Twitter.Data.Repositories
{
    class FavouriteTweetRepository
    {
        public void Create(Tweet tweet, User user)
        {
            using (var context = new TwitterEntities())
            {
                var existingTweet   = context.Tweets.SingleOrDefault(x => x.ID == tweet.ID);
                var existingUser    = context.Users.SingleOrDefault(x => x.Id == user.Id);

                if(existingTweet != null && existingUser != null)
                {
                    var favourite = new FavouriteTweet { Tweet1 = existingTweet, User = existingUser };
                    context.FavouriteTweets.Add(favourite);

                    context.SaveChanges();
                }
            }
        }

        public void Delete(Tweet tweet, User user)
        {
            using (var context = new TwitterEntities())
            {
                var exisitngFavouriteTweet = (from favs in context.FavouriteTweets
                                             where (favs.Tweet1 == tweet && favs.User == user)
                                             select favs).SingleOrDefault();

                if (exisitngFavouriteTweet != null )
                {
                    context.FavouriteTweets.Remove(exisitngFavouriteTweet);
                    context.SaveChanges();
                }
            }
        }
    }
}
