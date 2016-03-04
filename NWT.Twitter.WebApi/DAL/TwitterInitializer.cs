using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NWT.Twitter.WebApi.DAL
{
    public class TwitterInitializer : System.Data.Entity.DropCreateDatabaseAlways<TwitterContext>
    {
        protected override void Seed(TwitterContext context)
        {

        }
    }
}