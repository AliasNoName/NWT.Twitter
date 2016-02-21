namespace NWT.Twitter.Data.Repositories
{
    class HashtagRepository
    {
        public void Create(Hashtag hashtag)
        {
            using (var context = new TwitterEntities())
            {
                context.Hashtags.Add(hashtag);
                context.SaveChanges();
            }
        }
    }
}
