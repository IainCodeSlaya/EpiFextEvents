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
    public class EventActivitySpeakersController : ApiController
    {
        private EpiFexEventEntities db = new EpiFexEventEntities();

        // GET: api/EventActivitySpeakers
        public IQueryable<EventActivitySpeaker> GetEventActivitySpeakers()
        {
            return db.EventActivitySpeakers;
        }

        // GET: api/EventActivitySpeakers/5
        [ResponseType(typeof(EventActivitySpeaker))]
        public async Task<IHttpActionResult> GetEventActivitySpeaker(int id)
        {
            EventActivitySpeaker eventActivitySpeaker = await db.EventActivitySpeakers.FindAsync(id);
            if (eventActivitySpeaker == null)
            {
                return NotFound();
            }

            return Ok(eventActivitySpeaker);
        }

        // PUT: api/EventActivitySpeakers/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEventActivitySpeaker(int id, EventActivitySpeaker eventActivitySpeaker)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eventActivitySpeaker.SpeakerID)
            {
                return BadRequest();
            }

            db.Entry(eventActivitySpeaker).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventActivitySpeakerExists(id))
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

        // POST: api/EventActivitySpeakers
        [ResponseType(typeof(EventActivitySpeaker))]
        public async Task<IHttpActionResult> PostEventActivitySpeaker(EventActivitySpeaker eventActivitySpeaker)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EventActivitySpeakers.Add(eventActivitySpeaker);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eventActivitySpeaker.SpeakerID }, eventActivitySpeaker);
        }

        // DELETE: api/EventActivitySpeakers/5
        [ResponseType(typeof(EventActivitySpeaker))]
        public async Task<IHttpActionResult> DeleteEventActivitySpeaker(int id)
        {
            EventActivitySpeaker eventActivitySpeaker = await db.EventActivitySpeakers.FindAsync(id);
            if (eventActivitySpeaker == null)
            {
                return NotFound();
            }

            db.EventActivitySpeakers.Remove(eventActivitySpeaker);
            await db.SaveChangesAsync();

            return Ok(eventActivitySpeaker);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EventActivitySpeakerExists(int id)
        {
            return db.EventActivitySpeakers.Count(e => e.SpeakerID == id) > 0;
        }
    }
}