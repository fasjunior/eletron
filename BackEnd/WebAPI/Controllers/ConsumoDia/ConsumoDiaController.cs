using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using WebAPI.Models;

namespace WebAPI.Controllers.ConsumoDia
{
    [RoutePrefix("eletron")]
    public class ConsumoDiaController : ApiController
    {
        [HttpGet]
        [Route("consumo-dia")]
        public JsonResult<DataTable> Get()
        {
            return Json<DataTable>(new ConsumoDiaModel().Obter());
        }
    }
}
