using System.Collections.Generic;

namespace NWT.Twitter.Models.Data
{
    public class Tweet
    {
        public int Id { get; set; }

        public string Text { get; set; }

        public int FavouriteNumber { get; set; }

        public User Author                { get; set; }
        public IList<Comment> Comments    { get; set; }
        public IList<FavouriteTweet> TweetFavouriteTweets { get; set; }
    }
}