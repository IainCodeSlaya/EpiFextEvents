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
    public class DietaryRequirementsController : ApiController
    {
        private EpiFexEventEntities db = new EpiFexEventEntities();

        // GET: api/DietaryRequirements
        public IQueryable<DietaryRequirement> GetDietaryRequirements()
        {
            return db.DietaryRequirements;
        }

        // GET: api/DietaryRequirements/5
        [ResponseType(typeof(DietaryRequirement))]
        public async Task<IHttpActionResult> GetDietaryRequirement(int id)
        {
            DietaryRequirement dietaryRequirement = await db.DietaryRequirements.FindAsync(id);
            if (dietaryRequirement == null)
            {
                return NotFound();
            }

            return Ok(dietaryRequirement);
        }

        // PUT: api/DietaryRequirements/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutDietaryRequirement(int id, DietaryRequirement dietaryRequirement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != dietaryRequirement.DietaryRequirementID)
            {
                return BadRequest();
            }

            db.Entry(dietaryRequirement).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DietaryRequirementExists(id))
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

        // POST: api/DietaryRequirements
        [ResponseType(typeof(DietaryRequirement))]
        public async Task<IHttpActionResult> PostDietaryRequirement(DietaryRequirement dietaryRequirement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.DietaryRequirements.Add(dietaryRequirement);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = dietaryRequirement.DietaryRequirementID }, dietaryRequirement);
        }

        // DELETE: api/DietaryRequirements/5
        [ResponseType(typeof(DietaryRequirement))]
        public async Task<IHttpActionResult> DeleteDietaryRequirement(int id)
        {
            DietaryRequirement dietaryRequirement = await db.DietaryRequirements.FindAsync(id);
            if (dietaryRequirement == null)
            {
                return NotFound();
            }

            db.DietaryRequirements.Remove(dietaryRequirement);
            await db.SaveChangesAsync();

            return Ok(dietaryRequirement);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DietaryRequirementExists(int id)
        {
            return db.DietaryRequirements.Count(e => e.DietaryRequirementID == id) > 0;
        }
    }
}