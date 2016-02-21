using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NWT.Twitter.Startup))]
namespace NWT.Twitter
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
