async function novoFornecedor(obj) {
    const opcoes = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/fornecedor/cadastrar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}

async function getFornecedor() {
    const resposta = await fetch('http://localhost/fornecedor/listar');
    const clientes = await resposta.json();
    return clientes;
}

async function getUmFornecedor(id) {
    const resultado = await fetch('http://localhost/fornecedor/listar/' + id);
    const cliente = await resultado.json();
    return cliente;
}


async function excluirFornecedor(id) {

    const opcoes = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( {"id": id})
    };

    const resposta = await fetch('http://localhost/fornecedor/excluir', opcoes);
    
    return resposta.json();

}


async function alterarFornecedor(obj) {
    const opcoes = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    };

    const resposta = await fetch('http://localhost/fornecedor/alterar', opcoes);
    const fornecedor = await resposta.json();
    console.log(fornecedor);
    return fornecedor;
}


export {novoFornecedor,  getFornecedor, excluirFornecedor, alterarFornecedor, getUmFornecedor};














