import Tipo from "../modelos/modelo_tipo_peixe.mjs";
import Produto from "../modelos/modelo_produto.mjs";

async function novo(req, res) {
    const criado = await Tipo.create({
        tipo : req.body.tipo
    });
    res.json(criado);
}

async function um(req, res) {
    const cli = await Tipo.findOne({
        where: { id: req.params.id }
    });
    res.json(cli);
}

async function todos(req, res) {
    const todos = await Tipo.findAll();
    res.json(todos);
}

async function altera(req, res) {
    const cli = await Tipo.findOne({
        where: { id: req.body.id }
    });
    cli.tipo = req.body.tipo;

    await cli.save();
    res.json(cli);
}

async function exclui(req, res) {
    const deletado2 = await Produto.findAll({
        where: { idProduto: req.body.id }
    });
    for(let i = 0; i<deletado2.length; i++){
    await deletado2[i].destroy();
    }


    const deletado = await Tipo.findOne({
        where: { id: req.body.id }
    });
    await deletado.destroy();
    
    res.json(deletado);
}

export { novo, um, todos, altera, exclui };









