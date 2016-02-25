using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using NWT.Twitter.API.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
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
        public DbSet<Comment> Comments { get; set; } 
        //public class TweetConfig : EntityTypeConfiguration<Tweet> 
        //{
        //    public TweetConfig()
        //    {
           
        //    }
        //}
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
         
            modelBuilder.Entity<Tweet>()
                .HasMany(t => t.FavouritedByUsers)
                .WithMany(u => u.FavouritedTweets)
                .Map(f => f.MapLeftKey("TweetId").MapRightKey("UserId")
                    .ToTable("TweetFavouritedByUsers"));

            modelBuilder.Entity<Tweet>()
                .HasRequired(t => t.User)
                .WithMany(u => u.Tweets)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Hashtag>()
                .HasMany(hashtag => hashtag.Tweets)
                .WithRequired()
                .WillCascadeOnDelete(false);
        }
    }
}