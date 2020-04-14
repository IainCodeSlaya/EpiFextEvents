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
    public class GuestStatusController : ApiController
    {
        private EpiFexEventEntities db = new EpiFexEventEntities();

        // GET: api/GuestStatus
        public IQueryable<GuestStatu> GetGuestStatus()
        {
            return db.GuestStatus;
        }

        // GET: api/GuestStatus/5
        [ResponseType(typeof(GuestStatu))]
        public async Task<IHttpActionResult> GetGuestStatu(int id)
        {
            GuestStatu guestStatu = await db.GuestStatus.FindAsync(id);
            if (guestStatu == null)
            {
                return NotFound();
            }

            return Ok(guestStatu);
        }

        // PUT: api/GuestStatus/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutGuestStatu(int id, GuestStatu guestStatu)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != guestStatu.GuestStatusID)
            {
                return BadRequest();
            }

            db.Entry(guestStatu).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GuestStatuExists(id))
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

        // POST: api/GuestStatus
        [ResponseType(typeof(GuestStatu))]
        public async Task<IHttpActionResult> PostGuestStatu(GuestStatu guestStatu)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.GuestStatus.Add(guestStatu);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = guestStatu.GuestStatusID }, guestStatu);
        }

        // DELETE: api/GuestStatus/5
        [ResponseType(typeof(GuestStatu))]
        public async Task<IHttpActionResult> DeleteGuestStatu(int id)
        {
            GuestStatu guestStatu = await db.GuestStatus.FindAsync(id);
            if (guestStatu == null)
            {
                return NotFound();
            }

            db.GuestStatus.Remove(guestStatu);
            await db.SaveChangesAsync();

            return Ok(guestStatu);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GuestStatuExists(int id)
        {
            return db.GuestStatus.Count(e => e.GuestStatusID == id) > 0;
        }
    }
}