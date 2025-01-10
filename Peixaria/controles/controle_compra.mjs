import Compra from "../modelos/modelo_compra.mjs";

async function novo(req, res) {
    const criado = await Compra.create({
        idProduto : req.body.idProduto,
        valorTotal : req.body.valorTotal,
        quantidade : req.body.quantidade,
        data: req.body.data
    });
    res.json(criado);
}

async function um(req, res) {
    const cli = await Compra.findOne({
        where: { id: req.params.id }
    });
    res.json(cli);
}

async function todos(req, res) {
    const todos = await Compra.findAll();
    res.json(todos);
}

async function exclui(req, res) {
    const deletado = await Compra.findOne({
        where: { id: req.body.id }
    });
    await deletado.destroy();
    res.json(deletado);

}

export { novo, um, todos, exclui};

