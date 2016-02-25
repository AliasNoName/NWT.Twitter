using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.DataHandler;
using Microsoft.Owin.Security.DataProtection;
using Microsoft.Owin.Security.Infrastructure;
using Microsoft.Owin.Security.OAuth;
using NWT.Twitter.API.DAL;
using NWT.Twitter.API.Models;
using Owin;

[assembly: OwinStartup(typeof(NWT.Twitter.API.Startup))]

namespace NWT.Twitter.API
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            PublicClientId = "self";
            OAuthOptions = new OAuthBearerAuthenticationOptions()
            {        
                Provider = new OAuthBearerAuthenticationProvider(),
            };
            app.UseOAuthBearerAuthentication(OAuthOptions);

        }
        public class SimpleAuthorizationServerProvider : OAuthAuthorizationServerProvider
        {
            public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
            {
                context.Validated();
            }

            public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
            {

                context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

                UserManager<User> userManager = new UserManager<User>(new UserStore<User>(new TwitterContext()));
                {
                    IdentityUser user = await userManager.FindByNameAsync(context.UserName);

                    if (user == null)
                    {
                        context.SetError("invalid_grant", "The user name or password is incorrect.");
                        return;
                    }
                }

                var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                identity.AddClaim(new Claim(ClaimTypes.Name, context.UserName));
                identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, context.UserName));

                context.Validated(identity);

            }
        }
        public static string PublicClientId { get; set; }
        public static OAuthBearerAuthenticationOptions OAuthOptions { get; set; }
    }
}
