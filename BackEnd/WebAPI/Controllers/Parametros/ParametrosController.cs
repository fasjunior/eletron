using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using WebAPI.Models;

namespace WebAPI.Controllers.Parametros
{
    [RoutePrefix("eletron")]
    public class ParametrosController : ApiController
    {
        [HttpGet]
        [Route("parametros")]
        public JsonResult<DataTable> Get()
        {
            return Json<DataTable>(new ParametrosModel().Obter());
        }

        [HttpPost]
        [Route("parametros")]
        public void Post([FromBody] Models.Parametros parametros)
        {
            if (parametros != null)
            {
                ParametrosModel parametrosModel = new ParametrosModel();
                parametrosModel.Salvar(parametros);
            }
            else
            {
                throw new Exception("Campos não informados.");
            }
        }
    }
}
