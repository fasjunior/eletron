using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using WebAPI.Models;

namespace WebAPI.Controllers.ConsumoMes
{
    [RoutePrefix("eletron")]
    public class ConsumoMesController : ApiController
    {
        [HttpGet]
        [Route("consumo-mes")]
        public JsonResult<DataTable> Get()
        {
            return Json<DataTable>(new ConsumoMesModel().Obter());
        }
    }
}
