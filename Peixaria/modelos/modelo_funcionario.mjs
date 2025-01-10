import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";

const Funcionario = conexao.define('funcionario',{
id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
nome : DataTypes.STRING,
cargo : DataTypes.STRING,
telefone : DataTypes.STRING,
cpf : DataTypes.STRING,
rg : DataTypes.STRING,
email : DataTypes.STRING,
salario: DataTypes.INTEGER
});

Funcionario.sync();

export default Funcionario;