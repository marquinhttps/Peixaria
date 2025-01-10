import Produto from "../modelos/modelo_produto.mjs";
import Venda from "../modelos/modelo_venda.mjs";
import Compra from "../modelos/modelo_compra.mjs";

async function novo(req, res) {
    const criado = await Produto.create({
        nome : req.body.nome,
        idTipo : req.body.idTipo,
        preco : req.body.preco,
        marca : req.body.marca,
        cor : req.body.cor,
        quantidade : req.body.quantidade,
        idFornecedor : req.body.idFornecedor
    });
    res.json(criado);
}

async function um(req, res) {
    const cli = await Produto.findOne({
        where: { id: req.params.id }
    });
    res.json(cli);
}

async function todos(req, res) {
    const todos = await Produto.findAll();
    res.json(todos);
}

async function altera(req, res) {
    const cli = await Produto.findOne({
        where: { id: req.body.id }
    });
    cli.nome = req.body.nome;
    cli.idTipo = req.body.idTipo;
    cli.marca = req.body.marca;
    cli.preco = req.body.preco;
    cli.cor = req.body.cor;
    cli.quantidade = req.body.quantidade;
    cli.idFornecedor = req.body.idFornecedor;

    await cli.save();
    res.json(cli);
}

async function exclui(req, res) {
    const deletado2 = await Venda.findAll({
        where: { idProduto: req.body.id }
    });
    for(let i = 0; i<deletado2.length; i++){
    await deletado2[i].destroy();
    }

    const deletado3 = await Compra.findAll({
        where: { idProduto: req.body.id }
    });
    for(let i = 0; i<deletado3.length; i++){
    await deletado3[i].destroy();
    }

    const deletado = await Produto.findOne({
        where: { id: req.body.id }
    });
    await deletado.destroy();
    
    res.json(deletado);
}

export { novo, um, todos, altera, exclui };









