import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";
import Fornecedor from "./modelo_fornecedor.mjs";
import Produto from "./modelo_produto.mjs";

const Compra = conexao.define('compra',{
id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
quantidade : DataTypes.INTEGER,
valorTotal: DataTypes.INTEGER,
data: DataTypes.DATEONLY,

idProduto: {
    type: DataTypes.INTEGER,
    references: {
      model: Produto,
      key: 'id'
    }
  }
});

Compra.sync();

export default Compra;