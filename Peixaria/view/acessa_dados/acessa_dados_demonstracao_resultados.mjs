
async function getReceitaBruta() {
    const resposta = await fetch('http://localhost/demonstracaoResultados/receitaBruta');
    const clientes = await resposta.json();
    return clientes;
}

async function getFolhaPagamento() {
    const resultado = await fetch('http://localhost/demonstracaoResultados/folhaPagamento');
    const cliente = await resultado.json();
    return cliente;
}


export {getFolhaPagamento, getReceitaBruta};














