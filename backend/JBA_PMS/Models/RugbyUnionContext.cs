using System;
using Microsoft.EntityFrameworkCore;
namespace JBA_PMS.Models
{
    public class RugbyUnionContext : DbContext
    {
        public DbSet<Team> Teams { get; set; }
        public DbSet<Player> Players { get; set; }

        public RugbyUnionContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=tcp:mattzgg-practice.database.windows.net,1433;Initial Catalog=PracticeDB;Persist Security Info=False;User ID=jba_pms_user;Password=MgHc09100627;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        }
    }
}
