using _3tn.Dados;
using _3tn.Tauro.Utils;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Consumo
    {
        public int IdConsumo { get; set; }
        [Required]
        public decimal QtConsumo { get; set; }
        public DateTime DtConsumo { get; set; }
    }
    public class ConsumoModel
    {
        public void Incluir(Consumo consumo)
        {
            clsAcessoDados D = new clsAcessoDados(clsAcessoDados.Conexao.ABERTA);
            try
            {
                D.IniciarTransacao();

                #region Parametros 
                D.Parametros.Clear();
                D._3tnAddParametro("@qt_consumo", SqlDbType.Decimal, consumo.QtConsumo);
                #endregion

                D._3tnExecProcedure("dbo.pd_WebApi_Consumo_Inserir");

                D.FinalizarTransacao();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                D.FecharConexao();
            }
        }

        /// <summary>
        /// Retorna um DataTable com os últimos consumos
        /// </summary>
        /// <returns></returns>
        public DataTable Obter()
        {
            clsAcessoDados D = new clsAcessoDados();

            DataTable dt = D._3tnGetDataTable("dbo.pd_WebApi_Consumo_Obter");
            dt.RenameColumnsToCamelCase();
            return dt;
        }
    }
}
