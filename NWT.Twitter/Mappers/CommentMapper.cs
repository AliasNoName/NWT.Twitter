using data = NWT.Twitter.Data;
using model = NWT.Twitter.Models.Data;

namespace NWT.Twitter.Mappers
{
    public class CommentMapper
    {
        public static model::Comment Map(data::Comment comment)
        {
            return new model::Comment
            {
                Id = comment.ID,
                Text = comment.Text,
                TweetId = comment.Tweet,
                UserId = UserMapper.Map(comment.User).Id
            };
        }

        public static data::Comment Map(model::Comment comment)
        {
            return new data::Comment
            {
                ID = comment.Id,
                Text = comment.Text,
                Tweet = comment.TweetId,
                Author = comment.UserId
            };
        }
    }
}