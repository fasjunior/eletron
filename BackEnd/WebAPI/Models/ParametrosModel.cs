using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Parametros
    {
        [Required]
        public decimal VlKwh { get; set; }
        [Required]
        public decimal VlTensao { get; set; }
    }
    public class ParametrosModel
    {
        /// <summary>
        /// Retorna um DataTable com os parâmetros 
        /// </summary>
        /// <returns></returns>
        public DataTable Obter()
        {
            return null;
        }

        public void Salvar(Parametros parametros)
        {
            
        }
    }
}