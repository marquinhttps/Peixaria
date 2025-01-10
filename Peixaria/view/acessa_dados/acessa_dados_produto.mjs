async function novoProduto(obj) {
    const opcoes = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/produto/cadastrar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}

async function getProduto() {
    const resposta = await fetch('http://localhost/produto/listar');
    const clientes = await resposta.json();
    return clientes;
}

async function getUmProduto(id) {
    const resultado = await fetch('http://localhost/produto/listar/' + id);
    const cliente = await resultado.json();
    return cliente;
}


async function excluirProduto(id) {
    const opcoes = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {id})
    };

    const resposta = await fetch('http://localhost/produto/excluir', opcoes);
    
    return resposta.json();
}


async function alterarProduto(obj) {
    const opcoes = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/produto/alterar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}


export {novoProduto,  getProduto, excluirProduto, alterarProduto, getUmProduto};














