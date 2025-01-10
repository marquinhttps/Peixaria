import Venda from "../modelos/modelo_venda.mjs";

async function novo(req, res) {
    const criado = await Venda.create({
        idProduto : req.body.idProduto,
        idCliente : req.body.idCliente,
        quantidade : req.body.quantidade,
        data: req.body.data
    });
    res.json(criado);
}

async function um(req, res) {
    const cli = await Venda.findOne({
        where: { id: req.params.id }
    });
    res.json(cli);
}

async function todos(req, res) {
    const todos = await Venda.findAll();
    res.json(todos);
}

async function exclui(req, res) {
    const deletado = await Venda.findOne({
        where: { id: req.body.id }
    });
    await deletado.destroy();
    res.json(deletado);

}

export { novo, um, todos, exclui};

