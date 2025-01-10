async function novoTipo(obj) {
    const opcoes = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/tipo/cadastrar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}

async function getTipo() {
    const resposta = await fetch('http://localhost/tipo/listar');
    const clientes = await resposta.json();
    return clientes;
}

async function getUmTipo(id) {
    const resultado = await fetch('http://localhost/tipo/listar/' + id);
    const cliente = await resultado.json();
    return cliente;
}


async function excluirTipo(id) {
    const opcoes = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {id})
    };

    const resposta = await fetch('http://localhost/tipo/excluir', opcoes);
    
    return resposta.json();
}


async function alterarTipo(obj) {
    const opcoes = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/tipo/alterar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}


export {novoTipo,  getTipo, excluirTipo, alterarTipo, getUmTipo};














