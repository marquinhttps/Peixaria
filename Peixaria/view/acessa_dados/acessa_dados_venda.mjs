async function novaVenda(obj) {
    const opcoes = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/venda/cadastrar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}

async function getVenda() {
    const resposta = await fetch('http://localhost/venda/listar');
    const clientes = await resposta.json();
    return clientes;
}

async function getUmVenda(id) {
    const resultado = await fetch('http://localhost/venda/listar/' + id);
    const cliente = await resultado.json();
    return cliente;
}


async function excluirVenda(id) {
    const opcoes = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {id})
    };

    const resposta = await fetch('http://localhost/venda/excluir', opcoes);
    
    return resposta.json();
}


export {novaVenda,  getVenda, getUmVenda, excluirVenda};














