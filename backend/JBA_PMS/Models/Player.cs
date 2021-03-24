using System;
namespace JBA_PMS.Models
{
    public class Player
    {
        public int ID { get; set; }
        public int Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public string PlaceOfBirth { get; set; }
        public Team Team { get; set; }

        public Player()
        {
        }
    }
}
