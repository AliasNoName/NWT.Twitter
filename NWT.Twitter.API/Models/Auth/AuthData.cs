using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NWT.Twitter.API.Models.Auth
{
    public class AuthData
    {
        public string Username { get; set; }
        public string UserId { get; set; }
        public string Token { get; set; }
        public DateTime IssuedDate { get; set; }
        public DateTime ExpiresDate { get; set; }
    }
}