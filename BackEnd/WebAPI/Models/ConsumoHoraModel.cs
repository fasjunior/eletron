using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class ConsumoHora
    {
        [Required]
        public int DtAno { get; set; }
        [Required]
        public int DtMes { get; set; }
        [Required]
        public int DtDia { get; set; }
        [Required]
        public decimal QtConsumoHora { get; set; }
        [Required]
        public DateTime DtConsumoHora { get; set; }
        [Required]
        public int NuHoraReferencia { get; set; }
    }
    public class ConsumoHoraModel
    {
        /// <summary>
        /// Retorna um DataTable com todas os consumos por hora
        /// </summary>
        /// <returns></returns>
        public DataTable Obter()
        {
            return null;
        }
    }
}