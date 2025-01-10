import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Fornecedor = conexao.define('fornecedore',{
id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
nome : DataTypes.STRING,
endereco : DataTypes.STRING,
email : DataTypes.STRING,
cnpj : DataTypes.STRING,
telefone : DataTypes.STRING
});

Fornecedor.sync();

export default Fornecedor;