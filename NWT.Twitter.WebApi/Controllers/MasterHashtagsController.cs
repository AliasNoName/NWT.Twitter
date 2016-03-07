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
    [RoutePrefix("api/Master/Hashtags")]
    public class MasterHashtagsController : ApiController
    {
        [HttpGet]
        [Route("Database")]
        public IHttpActionResult Database()
        {
            var masterCollection = new ArrayList();
            var context = new TwitterContext();

            var hashtags = context.Hashtags.ToList();
            masterCollection.Add(hashtags.AsReadOnly());

            return Ok(masterCollection);
        }
    }
}
