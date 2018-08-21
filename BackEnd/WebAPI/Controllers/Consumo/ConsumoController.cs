using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using WebAPI.Models;

namespace WebAPI.Controllers.Consumo
{
    [RoutePrefix("eletron")]
    public class ConsumoController : ApiController
    {
        [HttpPost]
        [Route("consumo")]
        public void Post([FromBody] Models.Consumo consumo)
        {
            if (ModelState.IsValid)
            {
                ConsumoModel consumoModel = new ConsumoModel();
                consumoModel.Incluir(consumo);
            }
            else
            {
                throw new Exception("Campos obrigatórios não informados.");
            }
        }

        [HttpGet]
        [Route("consumo")]
        public JsonResult<DataTable> Get()
        {
            return Json<DataTable>(new ConsumoModel().Obter());
        }
    }
}
