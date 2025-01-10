import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Cliente = conexao.define('cliente',{
id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
nome : DataTypes.STRING,
cpf_cnpj : DataTypes.STRING,
endereco : DataTypes.STRING,
telefone : DataTypes.STRING,
email : DataTypes.STRING
});

Cliente.sync();

export default Cliente;