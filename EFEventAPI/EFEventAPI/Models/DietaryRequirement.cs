//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EFEventAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class DietaryRequirement
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public DietaryRequirement()
        {
            this.EventEmployees = new HashSet<EventEmployee>();
            this.EventGuests = new HashSet<EventGuest>();
        }
    
        public int DietaryRequirementID { get; set; }
        public string DietaryRequirementDesc { get; set; }
        public string DietaryRequirementName { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EventEmployee> EventEmployees { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<EventGuest> EventGuests { get; set; }
    }
}
