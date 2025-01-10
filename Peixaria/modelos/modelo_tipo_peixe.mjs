import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";


const Tipo = conexao.define('tipo',{
id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
tipo : DataTypes.STRING

});

Tipo.sync();

export default Tipo;