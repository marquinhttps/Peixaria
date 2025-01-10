async function novaCompra(obj) {
    const opcoes = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/compra/cadastrar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}

async function getCompra() {
    const resposta = await fetch('http://localhost/compra/listar');
    const clientes = await resposta.json();
    return clientes;
}

async function getUmCompra(id) {
    const resultado = await fetch('http://localhost/compra/listar/' + id);
    const cliente = await resultado.json();
    return cliente;
}


async function excluirCompra(id) {
    const opcoes = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {id})
    };

    const resposta = await fetch('http://localhost/compra/excluir', opcoes);
    
    return resposta.json();
}


export {novaCompra,  getCompra, getUmCompra, excluirCompra};














