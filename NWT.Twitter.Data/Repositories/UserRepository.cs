using System.Collections.Generic;
using System.Linq;

namespace NWT.Twitter.Data.Repositories
{
    class UserRepository
    {
        public User Get(int id)
        {
            using (var context = new TwitterEntities())
            {
                return context.Users
                    .SingleOrDefault(u => u.Id == id);
            }
        }

        public IList<User> GetAll()
        {
            using (var context = new TwitterEntities())
            {
                return context.Users.ToList();  
            }
        }

        public void Create(User user)
        {
            using (var context = new TwitterEntities())
            {
                context.Users.Add(user);
                context.SaveChanges();
            }
        }

        public void Update(User user)
        {
            using (var context = new TwitterEntities())
            {
                var existingUser = context.Users.SingleOrDefault(x => x.Id == user.Id);

                if(existingUser != null)
                {
                    existingUser.Nickname = user.Nickname;
                    existingUser.Location1 = user.Location1;
                    existingUser.Picture_URL = user.Picture_URL;
                    existingUser.FollowedBy = user.FollowedBy;
                    existingUser.Following = user.Following;

                    context.SaveChanges();
                }
            }
        }
    }
}
