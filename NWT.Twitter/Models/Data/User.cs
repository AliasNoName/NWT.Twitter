using System.Collections.Generic;

namespace NWT.Twitter.Models.Data
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Nickname { get; set; }
        public string PictureUrl { get; set; }

        public Location Location      { get; set; }
        public IList<Tweet> Tweets    { get; set; }
    }
}