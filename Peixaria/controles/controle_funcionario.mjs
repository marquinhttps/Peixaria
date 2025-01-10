import Funcionario from "../modelos/modelo_funcionario.mjs";
import Venda from "../modelos/modelo_venda.mjs";

async function novo(req, res) {
    const criado = await Funcionario.create({
        nome : req.body.nome,
        cargo : req.body.cargo,
        telefone : req.body.telefone,
        cpf : req.body.cpf,
        rg : req.body.rg,
        email : req.body.email,
        salario: req.body.salario
    });
    res.json(criado);
}

async function um(req, res) {
    const cli = await Funcionario.findOne({
        where: { id: req.params.id }
    });
    res.json(cli);
}

async function todos(req, res) {
    const todos = await Funcionario.findAll();
    res.json(todos);
}

async function altera(req, res) {
    const cli = await Funcionario.findOne({
        where: { id: req.body.id }
    });
    cli.nome = req.body.nome;
    cli.cargo = req.body.cargo;
    cli.telefone = req.body.telefone;
    cli.cpf = req.body.cpf;
    cli.rg = req.body.rg;
    cli.email = req.body.email;
    cli.salario= req.body.salario;

    await cli.save();
    res.json(cli);
}

async function exclui(req, res) {
    const deletado = await Funcionario.findOne({
        where: { id: req.body.id }
    });
    await deletado.destroy();
    
    res.json(deletado);
}

export { novo, um, todos, altera, exclui };









