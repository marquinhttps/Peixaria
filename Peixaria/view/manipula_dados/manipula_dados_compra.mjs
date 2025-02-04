import { getCompra, getUmCompra, novaCompra, excluirCompra } from "../acessa_dados/acessa_dados_compra.mjs";
import { getFornecedor, getUmFornecedor } from "../acessa_dados/acessa_dados_fornecedor.mjs";
import { getProduto, getUmProduto } from "../acessa_dados/acessa_dados_produto.mjs";

async function salvar() {
    const iptId = document.getElementById("id");
    const iptProduto = document.getElementById("produto");
    const iptQuantidade = document.getElementById("quantidade");
    const iptData = document.getElementById("data");

    const obj = {
        "id": iptId.value,
        "idProduto": iptProduto.value,
        "quantidade": iptQuantidade.value,
        "data": iptData.value
    };
    await novaCompra(obj);
    await desenhoTabela();
    iptId.value = '';
    document.forms[0].reset()

}



async function verificaDados(event) {
    
    const iptProduto = document.getElementById("produto").value;
    const iptQuantidade = document.getElementById("quantidade").value;
    const iptData = document.getElementById("data").value;

    if (!iptProduto || !iptQuantidade || !iptData) {
        alert('Insira todos os valores para registrar uma compra')
        return;
    }

    event.preventDefault();
    await salvar();

}


async function excluir(event) {
    const indice = event.target.getAttribute('data-indice');
    console.log(indice);
    await excluirCompra(indice)
    await desenhoTabela();
}


async function desenhoTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getCompra();
    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
        const td5 = document.createElement('td')
        const td6 = document.createElement('td')
        const td7 = document.createElement('td')
        const td8 = document.createElement('td')

        const produto = await getUmProduto(dados[i].idProduto);
        console.log('PRODUTO: '+produto)
            console.log('FORNECEDOR: '+produto.idFornecedor)
        const fornecedor = await getUmFornecedor(produto.idFornecedor);

        td1.innerText = dados[i].id
        td2.innerText = fornecedor[0].nome
        td3.innerText = produto.nome
        td4.innerText = dados[i].quantidade
        td5.innerText = 'R$'+(parseFloat(produto.preco)).toFixed(2); 
        td6.innerText = 'R$'+(parseFloat((produto.preco * dados[i].quantidade))).toFixed(2)
        td7.innerText = dados[i].data

        const btEx = document.createElement('button')
        btEx.innerText = 'Excluir'
        btEx.setAttribute('data-indice', dados[i].id)
        btEx.addEventListener('click', excluir)
        td8.append(btEx)

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(tr);
    }

}



async function preencheProduto() {
    const produto = document.getElementById('produto');
    produto.innerHTML = '';
    const dados = await getProduto();

    const optionSelecione = document.createElement('option')
    optionSelecione.setAttribute('value', '')
    optionSelecione.innerText = 'Selecione'
    produto.append(optionSelecione);

    for (let i = 0; i < dados.length; i++) {
        const option = document.createElement('option')
        option.setAttribute('value', dados[i].id)
        const fornecedor = await getUmFornecedor(dados[i].idFornecedor)
        option.innerText = (dados[i].nome+'  -  '+fornecedor[0].nome)
        produto.append(option);
    }
}






//Eventos
const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', verificaDados);


window.addEventListener('load', desenhoTabela);
window.addEventListener('load', preencheProduto);












