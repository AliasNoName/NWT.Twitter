using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NWT.Twitter.WebApi.DAL;
using NWT.Twitter.WebApi.Models;

namespace NWT.Twitter.WebApi.Controllers
{
    [RoutePrefix("api/Master/Users")]
    public class MasterUsersController : ApiController
    {
        [HttpGet]
        [Route("Database")]
        public IHttpActionResult Database()
        {
            var masterCollection = new ArrayList();
            var context = new TwitterContext();
            var users = context.Users.ToList();
            foreach (var user in users)
            {
                user.Tweets = null;
                user.Comments = null;
                user.Location = null;
                user.FollowedUsers = null;
            }
            masterCollection.Add(users.AsReadOnly());
            return Ok(masterCollection);
        }
    }
}
