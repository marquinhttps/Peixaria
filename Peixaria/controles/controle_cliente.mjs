import Cliente from "../modelos/modelo_cliente.mjs";
import Venda from "../modelos/modelo_venda.mjs";

async function novo(req, res) {
    const criado = await Cliente.create({
        nome : req.body.nome,
        cpf_cnpj : req.body.cpf,
        endereco : req.body.endereco,
        telefone : req.body.telefone,
        email : req.body.email
    });
    res.json(criado);
}

async function um(req, res) {
    const cli = await Cliente.findOne({
        where: { id: req.params.id }
    });
    res.json(cli);
}

async function todos(req, res) {
    const todos = await Cliente.findAll();
    res.json(todos);
}

async function altera(req, res) {
    const cli = await Cliente.findOne({
        where: { id: req.body.id }
    });
    cli.nome = req.body.nome,
    cli.cpf_cnpj = req.body.cpf,
    cli.endereco = req.body.endereco,
    cli.telefone = req.body.telefone,
    cli.email = req.body.email

    await cli.save();
    res.json(cli);
}

async function exclui(req, res) {
    const deletado2 = await Venda.findAll({
        where: { idCliente: req.body.id }
    });
    for(let i = 0; i<deletado2.length; i++){
    await deletado2[i].destroy();
    }

    const deletado = await Cliente.findOne({
        where: { id: req.body.id }
    });
    await deletado.destroy();
    
    res.json(deletado);
}

export { novo, um, todos, altera, exclui };









