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
        public IEnumerable<Team> Get()
        {
            return _rugbyUnionContext.Teams;
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
