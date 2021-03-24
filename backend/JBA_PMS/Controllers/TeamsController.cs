using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JBA_PMS.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JBA_PMS.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : Controller
    {
        private readonly RugbyUnionContext _rugbyUnionContext;

        public TeamsController(RugbyUnionContext rugbyUnionContext)
        {
            _rugbyUnionContext = rugbyUnionContext;
        }
    
        [HttpGet]
        public IEnumerable<Team> GetTeams()
        {
            return _rugbyUnionContext.Teams;
        }

        //[HttpGet("{teamID}")]
        //public ActionResult<Team> GetTeam(int teamID)
        //{

        //}

        [HttpPost]
        public ActionResult<Team> AddTeam(Team team)
        {
            // Check whether the name has been used.
            Team targetTeam = _rugbyUnionContext.Teams.Where(t => t.Name == team.Name).FirstOrDefault<Team>();
            if (targetTeam == null)
            {
                return 
            }

            _rugbyUnionContext.Teams.Add(team);
            _rugbyUnionContext.SaveChanges();
        }

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
