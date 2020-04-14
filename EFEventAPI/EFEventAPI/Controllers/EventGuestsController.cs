using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using EFEventAPI.Models;

namespace EFEventAPI.Controllers
{
    public class EventGuestsController : ApiController
    {
        private EpiFexEventEntities db = new EpiFexEventEntities();

        // GET: api/EventGuests
        public IQueryable<EventGuest> GetEventGuests()
        {
            return db.EventGuests;
        }

        // GET: api/EventGuests/5
        [ResponseType(typeof(EventGuest))]
        public async Task<IHttpActionResult> GetEventGuest(int id)
        {
            EventGuest eventGuest = await db.EventGuests.FindAsync(id);
            if (eventGuest == null)
            {
                return NotFound();
            }

            return Ok(eventGuest);
        }

        // PUT: api/EventGuests/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEventGuest(int id, EventGuest eventGuest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eventGuest.EventGuestID)
            {
                return BadRequest();
            }

            db.Entry(eventGuest).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventGuestExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/EventGuests
        [ResponseType(typeof(EventGuest))]
        public async Task<IHttpActionResult> PostEventGuest(EventGuest eventGuest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EventGuests.Add(eventGuest);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eventGuest.EventGuestID }, eventGuest);
        }

        // DELETE: api/EventGuests/5
        [ResponseType(typeof(EventGuest))]
        public async Task<IHttpActionResult> DeleteEventGuest(int id)
        {
            EventGuest eventGuest = await db.EventGuests.FindAsync(id);
            if (eventGuest == null)
            {
                return NotFound();
            }

            db.EventGuests.Remove(eventGuest);
            await db.SaveChangesAsync();

            return Ok(eventGuest);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EventGuestExists(int id)
        {
            return db.EventGuests.Count(e => e.EventGuestID == id) > 0;
        }
    }
}