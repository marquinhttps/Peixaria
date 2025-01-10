async function novoCliente(obj) {
    const opcoes = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/cliente/cadastrar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}

async function getCliente() {
    const resposta = await fetch('http://localhost/cliente/listar');
    const clientes = await resposta.json();
    return clientes;
}

async function getUmCliente(id) {
    const resultado = await fetch('http://localhost/cliente/listar/' + id);
    const cliente = await resultado.json();
    return cliente;
}


async function excluirCliente(id) {
    const opcoes = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {"id":id})
    };

    const resposta = await fetch('http://localhost/cliente/excluir', opcoes);
    
    return resposta.json();
}


async function alterarCliente(obj) {
    const opcoes = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/cliente/alterar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}


export {novoCliente,  getCliente, excluirCliente, alterarCliente, getUmCliente};














