
using System.Linq;
using data = NWT.Twitter.Data;
using model = NWT.Twitter.Models.Data;

namespace NWT.Twitter.Mappers
{
    public class HashtagMapper
    {
        public static model::Hashtag Map(data::Hashtag hashtag)
        {
            return new model.Hashtag
            {
                Id  = hashtag.ID,
                Text = hashtag.Text,
                Tweets = hashtag.Tweets.ToList()
            };
        }

        public static data::Hashtag Map(model::Hashtag hashtag)
        {
            return new data.Hashtag
            {
                ID = hashtag.Id,
                Text = hashtag.Text,
                Tweets = hashtag.Tweets
            };
        }
    }
}