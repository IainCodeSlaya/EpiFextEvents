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
    public class EventActivitiesController : ApiController
    {
        private EpiFexEventEntities db = new EpiFexEventEntities();

        // GET: api/EventActivities
        public IQueryable<EventActivity> GetEventActivities()
        {
            return db.EventActivities;
        }

        // GET: api/EventActivities/5
        [ResponseType(typeof(EventActivity))]
        public async Task<IHttpActionResult> GetEventActivity(int id)
        {
            EventActivity eventActivity = await db.EventActivities.FindAsync(id);
            if (eventActivity == null)
            {
                return NotFound();
            }

            return Ok(eventActivity);
        }

        // PUT: api/EventActivities/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEventActivity(int id, EventActivity eventActivity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eventActivity.EventActivityID)
            {
                return BadRequest();
            }

            db.Entry(eventActivity).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventActivityExists(id))
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

        // POST: api/EventActivities
        [ResponseType(typeof(EventActivity))]
        public async Task<IHttpActionResult> PostEventActivity(EventActivity eventActivity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EventActivities.Add(eventActivity);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eventActivity.EventActivityID }, eventActivity);
        }

        // DELETE: api/EventActivities/5
        [ResponseType(typeof(EventActivity))]
        public async Task<IHttpActionResult> DeleteEventActivity(int id)
        {
            EventActivity eventActivity = await db.EventActivities.FindAsync(id);
            if (eventActivity == null)
            {
                return NotFound();
            }

            db.EventActivities.Remove(eventActivity);
            await db.SaveChangesAsync();

            return Ok(eventActivity);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EventActivityExists(int id)
        {
            return db.EventActivities.Count(e => e.EventActivityID == id) > 0;
        }
    }
}