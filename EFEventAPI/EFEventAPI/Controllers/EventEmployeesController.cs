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
    public class EventEmployeesController : ApiController
    {
        private EpiFexEventEntities db = new EpiFexEventEntities();

        // GET: api/EventEmployees
        public IQueryable<EventEmployee> GetEventEmployees()
        {
            return db.EventEmployees;
        }

        // GET: api/EventEmployees/5
        [ResponseType(typeof(EventEmployee))]
        public async Task<IHttpActionResult> GetEventEmployee(int id)
        {
            EventEmployee eventEmployee = await db.EventEmployees.FindAsync(id);
            if (eventEmployee == null)
            {
                return NotFound();
            }

            return Ok(eventEmployee);
        }

        // PUT: api/EventEmployees/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutEventEmployee(int id, EventEmployee eventEmployee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != eventEmployee.EventEmployeeID)
            {
                return BadRequest();
            }

            db.Entry(eventEmployee).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EventEmployeeExists(id))
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

        // POST: api/EventEmployees
        [ResponseType(typeof(EventEmployee))]
        public async Task<IHttpActionResult> PostEventEmployee(EventEmployee eventEmployee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EventEmployees.Add(eventEmployee);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = eventEmployee.EventEmployeeID }, eventEmployee);
        }

        // DELETE: api/EventEmployees/5
        [ResponseType(typeof(EventEmployee))]
        public async Task<IHttpActionResult> DeleteEventEmployee(int id)
        {
            EventEmployee eventEmployee = await db.EventEmployees.FindAsync(id);
            if (eventEmployee == null)
            {
                return NotFound();
            }

            db.EventEmployees.Remove(eventEmployee);
            await db.SaveChangesAsync();

            return Ok(eventEmployee);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EventEmployeeExists(int id)
        {
            return db.EventEmployees.Count(e => e.EventEmployeeID == id) > 0;
        }
    }
}