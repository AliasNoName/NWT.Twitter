namespace NWT.Twitter.Models.Data
{
    public class Comment
    {
        public int Id { get; set; }
        public string Text { get; set; }

        public int TweetId { get; set; }
        public int UserId { get; set; }
    }
}