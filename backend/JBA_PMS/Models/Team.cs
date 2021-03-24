using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace JBA_PMS.Models
{
    public class Team
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Ground { get; set; }
        public string Coach { get; set; }
        public int FoundedYear { get; set; }
        public string Region { get; set; }
        public ICollection<Player> Players { get; set; }

        public Team()
        {
        }
    }
}
