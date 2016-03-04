using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity.EntityFramework;
using NWT.Twitter.WebApi.Models;

namespace NWT.Twitter.WebApi.DAL
{
    public class TwitterContext : IdentityDbContext
    {
        public TwitterContext() : base("TwitterContext")
        {
        }

        public DbSet<Location> Locations { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Tweet> Tweets { get; set; }
        public DbSet<Hashtag> Hashtags { get; set; }
        public DbSet<Comment> Comments { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<IdentityUserRole>()
            .HasKey(r => new { r.UserId, r.RoleId })
            .ToTable("AspNetUserRoles");

            modelBuilder.Entity<IdentityUserLogin>()
                .HasKey(l => new { l.LoginProvider, l.ProviderKey, l.UserId })
                .ToTable("AspNetUserLogins");

            modelBuilder.Entity<Tweet>()
                .HasMany(tweets => tweets.FavouritedByUsers)
                .WithMany(users => users.FavouritedTweets)
                .Map(favouritedtweets => favouritedtweets
                    .MapLeftKey("TweetId")
                    .MapRightKey("UserId")
                    .ToTable("TweetsFavouritedByUsers"));

            modelBuilder.Entity<Tweet>()
                .HasRequired(tweet => tweet.User)
                .WithMany(user => user.Tweets)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Hashtag>()
                .HasMany(h => h.Tweets)
                .WithMany(t => t.Hashtags)
                .Map(hashtagTweets => hashtagTweets
                    .MapLeftKey("HashtagId")
                    .MapRightKey("TweetId")
                    .ToTable("HashtagTweets"));


        }
    }
}