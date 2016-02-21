using System.Linq;
using data = NWT.Twitter.Data;
using model = NWT.Twitter.Models.Data;

namespace NWT.Twitter.Mappers
{
    public class TweetMapper
    {
        public static model::Tweet Map(data::Tweet tweet)
        {
            return new model.Tweet
            {
                Id              = tweet.ID,
                Text            = tweet.Text,
                Author          = UserMapper.Map(tweet.User),
                FavouriteNumber = tweet.FavouriteTweets.Count()
            };
        }

        public static data::Tweet Map(model::Tweet tweet)
        {
            return new data.Tweet
            {
                ID = tweet.Id,
                Text = tweet.Text,
                User = UserMapper.Map(tweet.Author)
            };
        }
    }
}