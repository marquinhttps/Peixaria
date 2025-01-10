import { getVenda, getUmVenda, novaVenda, excluirVenda } from "../acessa_dados/acessa_dados_venda.mjs";
import { getCliente, getUmCliente } from "../acessa_dados/acessa_dados_cliente.mjs";
import { getProduto, getUmProduto } from "../acessa_dados/acessa_dados_produto.mjs";
import {getUmFornecedor } from "../acessa_dados/acessa_dados_fornecedor.mjs";

async function salvar() {
    const iptId = document.getElementById("id");
    const iptProduto = document.getElementById("produto");
    const iptCliente = document.getElementById("cliente");
    const iptQuantidade = document.getElementById("quantidade");
    const iptData = document.getElementById("data");

    const obj = {
        "id": iptId.value,
        "idProduto": iptProduto.value,
        "idCliente": iptCliente.value,
        "quantidade": iptQuantidade.value,
        "data": iptData.value
    };
    await novaVenda(obj);
    await desenhoTabela();
    iptId.value = '';
    document.forms[0].reset()

}



async function verificaDados(event) {
    
    const iptProduto = document.getElementById("produto").value;
    const iptCliente = document.getElementById("cliente").value;
    const iptQuantidade = document.getElementById("quantidade").value;
    const iptData = document.getElementById("data").value;

    if (!iptProduto || !iptQuantidade || !iptData || !iptCliente) {
        alert('Insira todos os valores para registrar uma compra')
        return;
    }

    event.preventDefault();
    await salvar();

}


async function excluir(event) {
    const indice = event.target.getAttribute('data-indice');
    console.log(indice);
    await excluirVenda(indice)
    await desenhoTabela();
}


async function desenhoTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getVenda();
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
        
        const cliente = await getUmCliente(dados[i].idCliente);

        td1.innerText = dados[i].id
        td2.innerText = cliente.nome
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



async function preencheCliente() {
    const cliente = document.getElementById('cliente');
    cliente.innerHTML = '';
    const dados = await getCliente();

    const optionSelecione = document.createElement('option')
    optionSelecione.setAttribute('value', '')
    optionSelecione.innerText = 'Selecione'
    cliente.append(optionSelecione);

    for (let i = 0; i < dados.length; i++) {
        const option = document.createElement('option')
        option.setAttribute('value', dados[i].id)
        option.innerText = (dados[i].nome)
        cliente.append(option);
    }
}






//Eventos
const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', verificaDados);


window.addEventListener('load', desenhoTabela);
window.addEventListener('load', preencheProduto);
window.addEventListener('load', preencheCliente);












