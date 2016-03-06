using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using NWT.Twitter.WebApi.DAL;
using NWT.Twitter.WebApi.Models;

namespace NWT.Twitter.WebApi.Controllers
{
    public class LocationsController : ApiController
    {
        private readonly TwitterContext _context = new TwitterContext();

        // GET: api/Locations
        [Authorize]
        public IQueryable<Location> GetLocations()
        {
            return _context.Locations;
        }

        // GET: api/Locations/5
        [Authorize]
        [ResponseType(typeof(Location))]
        public IHttpActionResult GetLocation(int id)
        {
            Location location = _context.Locations.Find(id);
            if (location == null)
            {
                return NotFound();
            }

            return Ok(location);
        }

        // POST: api/Locations
        [Authorize]
        [ResponseType(typeof(Location))]
        public IHttpActionResult PostLocation(Location location)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Locations.Add(location);
            _context.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = location.ID }, location);
        }



        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _context.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool LocationExists(int id)
        {
            return _context.Locations.Count(e => e.ID == id) > 0;
        }
    }
}