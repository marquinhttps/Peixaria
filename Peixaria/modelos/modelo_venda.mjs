import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";
import Cliente from "./modelo_cliente.mjs";
import Produto from "./modelo_produto.mjs";

  const Venda = conexao.define('venda', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    idProduto: {
        type: DataTypes.INTEGER,
        references: {
          model: Produto,
          key: 'id'
        }
      },
      idCliente: {
        type: DataTypes.INTEGER,
        references: {
          model: Cliente,
          key: 'id'
        }
      },

      quantidade: DataTypes.INTEGER,
      data: DataTypes.DATEONLY
  });
  
  
  Venda.sync()

export default Venda;



