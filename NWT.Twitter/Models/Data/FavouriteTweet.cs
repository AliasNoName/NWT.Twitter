namespace NWT.Twitter.Models.Data
{
    public class FavouriteTweet
    {
        public int Id { get; set; }
        public Tweet Tweet { get; set; }
        public User User { get; set; }
    }
}