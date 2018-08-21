using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class ConsumoMes
    {
        [Required]
        public int DtAno { get; set; }
        [Required]
        public int DtMes { get; set; }
        [Required]
        public decimal QtConsumoMes { get; set; }
        [Required]
        public DateTime DtConsumoMes { get; set; }
    }
    public class ConsumoMesModel
    {
        /// <summary>
        /// Retorna um DataTable com todas os consumos por mês
        /// </summary>
        /// <returns></returns>
        public DataTable Obter()
        {
            return null;
        }
    }
}