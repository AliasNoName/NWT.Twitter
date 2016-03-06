using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using NWT.Twitter.WebApi.DAL;
using NWT.Twitter.WebApi.Models;

namespace NWT.Twitter.WebApi.Repositories
{
    public class AuthRepository : IDisposable
    {
        private TwitterContext _context;
        private UserManager<User> _userManager;

        public AuthRepository()
        {
            _context = new TwitterContext();
            _userManager = new UserManager<User>(new UserStore<User>(_context));
        }

        public IdentityResult RegisterUser(User user, string password)
        {
            var result = _userManager.Create(user, password);
            return result;
        }

        public void Dispose()
        {
            _context.Dispose();
            _userManager.Dispose();
        }
    }
}