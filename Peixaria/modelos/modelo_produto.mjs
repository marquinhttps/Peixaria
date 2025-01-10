import { DataTypes } from "sequelize";
import conexao from "../database/mysql.mjs";
import Fornecedor from "./modelo_fornecedor.mjs";
import Tipo from "./modelo_tipo_peixe.mjs";

const Produto = conexao.define('produto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: DataTypes.STRING,
  preco: DataTypes.STRING,
  marca: DataTypes.STRING,
  cor: DataTypes.STRING,
  quantidade: DataTypes.INTEGER,
  idTipo: {
    type: DataTypes.INTEGER,
    references: {
      model: Tipo,
      key: 'id'
    }
  },
  idFornecedor: {
    type: DataTypes.INTEGER,
    references: {
      model: Fornecedor,
      key: 'id'
    }
  }
});

// Sincronizar os modelos na ordem correta
async function syncModels() {
  try {
    // Sincronizar tabelas dependentes primeiro
    await Fornecedor.sync();
    await Tipo.sync();
    
    // Sincronizar a tabela Produto
    await Produto.sync();
    console.log("Tabelas sincronizadas com sucesso!");
  } catch (error) {
    console.error("Erro ao sincronizar tabelas:", error);
  }
}

syncModels();

export default Produto;
