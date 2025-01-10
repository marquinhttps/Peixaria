import conexao from "./database/postgres.mjs";
import Produto from "./models/modelo_produto.mjs"; // Certifique-se que o modelo Produto está definido corretamente
import Venda from "./models/modelo_venda.mjs"; // Inclua os demais modelos
import Cliente from "./models/modelo_cliente.mjs";

async function sincronizarModelos() {
  try {
    await conexao.authenticate();
    console.log("Conexão com o banco de dados estabelecida!");

    // Sincronize na ordem correta
    await Produto.sync();
    await Cliente.sync();
    await Venda.sync();

    console.log("Tabelas sincronizadas com sucesso!");
  } catch (error) {
    console.error("Erro ao sincronizar tabelas:", error);
  }
}

sincronizarModelos();
