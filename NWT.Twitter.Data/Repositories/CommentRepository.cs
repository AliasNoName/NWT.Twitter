namespace NWT.Twitter.Data.Repositories
{
    class CommentRepository
    {
        //dohvaća komentare za t
        public void Create(Comment comment)
        {
            using (var context = new TwitterEntities())
            {
                context.Comments.Add(comment);
                context.SaveChanges();
            }
        }
    }
}
