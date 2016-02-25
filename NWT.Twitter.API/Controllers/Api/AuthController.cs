using System;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using NWT.Twitter.API.DAL;
using NWT.Twitter.API.Models;
using NWT.Twitter.API.Models.Auth;

namespace NWT.Twitter.API.Controllers.Api
{
    [RoutePrefix("api/auth")]
    public class AuthController : ApiController
    {
        public AuthController()
        {
            _userManager = new UserManager<User>(new UserStore<User>(new TwitterContext()));
        }

        [Route("login")]
        [HttpPost]
        public IHttpActionResult Login(LoginDto loginDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var maybeUser = _userManager.FindByName(loginDto.Username);
            if (maybeUser != null)
            {
                ClaimsIdentity claimsIdentity = new ClaimsIdentity();
                claimsIdentity.AddClaim(new Claim(ClaimTypes.Name, maybeUser.UserName));
                claimsIdentity.AddClaim(new Claim(ClaimTypes.NameIdentifier, maybeUser.Id));

                DateTime currentDateTime = DateTime.Now.ToUniversalTime();
          
                AuthenticationTicket ticket = new AuthenticationTicket(claimsIdentity, new AuthenticationProperties())
                {
                    Properties =
                    {
                        ExpiresUtc = currentDateTime.Add(TimeSpan.FromDays(7)),
                        IssuedUtc = currentDateTime
                    }
                };

                string token = new OAuthBearerAuthenticationOptions().AccessTokenFormat.Protect(ticket);
                return Ok(new AuthData
                {
                    Token =  token,
                    Username = maybeUser.UserName,
                    UserId = maybeUser.Id,
                    IssuedDate = ticket.Properties.IssuedUtc.Value.DateTime,
                    ExpiresDate = ticket.Properties.ExpiresUtc.Value.DateTime
                });
            }
            return BadRequest();
        }

        [Route("register")]
        [HttpPost]
        public IHttpActionResult Register(RegisterDto registerDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var newUser = new User
            {
                UserName = registerDto.Username,
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                ImageUrl = registerDto.ImageUrl
            };

            var result = _userManager.Create(newUser, registerDto.Password);
            
            return (result.Succeeded) ? (IHttpActionResult) Created("register", newUser) : InternalServerError();
        }

        private readonly UserManager<User> _userManager;
    }

    public class LoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }

    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ImageUrl { get; set; }

    }
}
