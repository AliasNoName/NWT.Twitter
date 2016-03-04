using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using NWT.Twitter.WebApi.Models;
using NWT.Twitter.WebApi.Repositories;

namespace NWT.Twitter.WebApi.Controllers
{
    [RoutePrefix("api/Accounts")]
    public class AccountController : ApiController
    {
        private AuthRepository _repo;

        public AccountController()
        {
            _repo = new AuthRepository();
        }

        // POST api/Account/Register
        [AllowAnonymous]
        [HttpPost]
        [Route("Register")]
        public IHttpActionResult Register(RegisterDto registerDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newUser = new User()
            {
                UserName = registerDto.Username,
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                ImageUrl = registerDto.ImageUrl
            };

            var result = _repo.RegisterUser(newUser);

            return (result.Succeeded) ? (IHttpActionResult) Created("Register", newUser) : InternalServerError();
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _repo.Dispose();
            }

            base.Dispose(disposing);
        }
        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
                return InternalServerError();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        ModelState.AddModelError("", error);
                    }
                }

                if (ModelState.IsValid)
                {
                    // No ModelState errors are available to send, so just return an empty BadRequest.
                    return BadRequest();
                }

                return BadRequest(ModelState);
            }

            return null;
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
}

