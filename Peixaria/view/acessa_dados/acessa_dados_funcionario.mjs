async function novoFuncionario(obj) {
    const opcoes = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/funcionario/cadastrar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}

async function getFuncionario() {
    const resposta = await fetch('http://localhost/funcionario/listar');
    const clientes = await resposta.json();
    return clientes;
}

async function getUmFuncionario(id) {
    const resultado = await fetch('http://localhost/funcionario/listar/' + id);
    const cliente = await resultado.json();
    return cliente;
}


async function excluirFuncionario(id) {
    const opcoes = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {id})
    };

    const resposta = await fetch('http://localhost/funcionario/excluir', opcoes);
    
    return resposta.json();
}


async function alterarFuncionario(obj) {
    const opcoes = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/funcionario/alterar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}


export {novoFuncionario,  getFuncionario, excluirFuncionario, alterarFuncionario, getUmFuncionario};














