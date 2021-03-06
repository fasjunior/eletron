﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using WebAPI.Models;

namespace WebAPI.Controllers.ConsumoHora
{
    [RoutePrefix("eletron")]
    public class ConsumoHoraController : ApiController
    {
        [HttpGet]
        [Route("consumo-hora")]
        public JsonResult<DataTable> Get()
        {
            return Json<DataTable>(new ConsumoHoraModel().Obter());
        }
    }
}
