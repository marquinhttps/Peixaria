import Fornecedor from "../modelos/modelo_fornecedor.mjs";
import Produto from "../modelos/modelo_produto.mjs";
import conexao from "../database/mysql.mjs";

async function novo(req, res) {
    const criado = await Fornecedor.create({
        nome : req.body.nome,
        endereco : req.body.endereco,
        email : req.body.email,
        cnpj : req.body.cnpj,
        telefone : req.body.telefone
    });
    res.json(criado);
}

async function um(req, res) {
    try {
        const resultados = await conexao.query('CALL getUmFornecedor(:id_parametro)', {
            replacements: { id_parametro: req.params.id } // Acessando diretamente a propriedade email
        });

        return res.json(resultados);

    } catch (error) {
        console.error('Erro ao chamar a procedure:', error);
    }
}

async function todos(req, res) {
    const todos = await Fornecedor.findAll();
    res.json(todos);
}

async function altera(req, res) {
    const cli = await Fornecedor.findOne({
        where: { id: req.body.id }
    });
    cli.nome = req.body.nome;
    cli.endereco = req.body.endereco;
    cli.email = req.body.email;
    cli.cnpj = req.body.cnpj;
    cli.telefone = req.body.telefone;

    await cli.save();
    res.json(cli);
}

async function exclui(req, res) {

    const deletado3 = await Produto.findAll({
        where: { idFornecedor: req.body.id }
    });
    for(let i = 0; i<deletado3.length; i++){
    await deletado3[i].destroy();
    }

    const deletado = await Fornecedor.findOne({
        where: { id: req.body.id }
    });
    await deletado.destroy();
    res.json(deletado);

}

export { novo, um, todos, altera, exclui };









