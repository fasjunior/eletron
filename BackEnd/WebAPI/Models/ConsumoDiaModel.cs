using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class ConsumoDia
    {
        [Required]
        public int DtAno { get; set; }
        [Required]
        public int DtMes { get; set; }
        [Required]
        public int DtDia { get; set; }
        [Required]
        public decimal QtConsumoDia { get; set; }
        [Required]
        public DateTime DtConsumoDia { get; set; }
    }
    public class ConsumoDiaModel
    {
        /// <summary>
        /// Retorna um DataTable com todas os consumos por dia
        /// </summary>
        /// <returns></returns>
        public DataTable Obter()
        {
            return null;
        }
    }
}