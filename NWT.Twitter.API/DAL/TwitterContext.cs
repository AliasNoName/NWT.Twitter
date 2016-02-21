using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NWT.Twitter.API.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace NWT.Twitter.API.DAL
{
    public class TwitterContext : DbContext
    {
        public TwitterContext() : base("TwitterContext")
        {
        }

        public DbSet<Location> Locations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Tweet> Tweets { get; set; }
        public DbSet<Hashtag> Hashtags { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}