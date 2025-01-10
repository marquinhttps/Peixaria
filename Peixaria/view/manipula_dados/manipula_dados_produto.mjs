import { getProduto, getUmProduto, novoProduto, excluirProduto,alterarProduto } from "../acessa_dados/acessa_dados_produto.mjs";
import { getUmFornecedor, getFornecedor } from "../acessa_dados/acessa_dados_fornecedor.mjs";
import { getUmTipo, getTipo } from "../acessa_dados/acessa_dados_tipo.mjs";


async function salvar() {
    const iptId = document.getElementById("id");
    const iptNome = document.getElementById("nome");
    const iptMarca = document.getElementById("marca");
    const iptCor = document.getElementById("cor");
    const iptTipo = document.getElementById("tipo");
    const iptQuantidade = document.getElementById("quantidade");
    const iptPreco = document.getElementById("preco");
    const iptFornecedor = document.getElementById("fornecedor");



    const obj = {
        "id": iptId.value,
        "nome": iptNome.value,
        "marca": iptMarca.value,
        "cor": iptCor.value,
        "idTipo": iptTipo.value,
        "quantidade": iptQuantidade.value,
        "preco": iptPreco.value,
        "idFornecedor": iptFornecedor.value
    };
    await novoProduto(obj);
    await desenhoTabela();
    iptId.value='';
    document.forms[0].reset()

}


async function editar() {
    const iptId = document.getElementById("id");
    const iptNome = document.getElementById("nome");
    const iptMarca = document.getElementById("marca");
    const iptCor = document.getElementById("cor");
    const iptTipo = document.getElementById("tipo");
    const iptQuantidade = document.getElementById("quantidade");
    const iptPreco = document.getElementById("preco");
    const iptFornecedor = document.getElementById("fornecedor");



    const obj = {
        "id": iptId.value,
        "nome": iptNome.value,
        "marca": iptMarca.value,
        "cor": iptCor.value,
        "idTipo": iptTipo.value,
        "quantidade": iptQuantidade.value,
        "preco": iptPreco.value,
        "idFornecedor": iptFornecedor.value
    };
    await alterarProduto(obj);
    document.forms[0].reset()
    document.getElementById('btSalvar').innerText ="Cadastrar Produto"
    iptId.value ='';
    await desenhoTabela();

}


async function decideSalvarEditar(event){
    const iptNome = document.getElementById("nome").value;
    const iptMarca = document.getElementById("marca").value;
    const iptCor = document.getElementById("cor").value;
    const iptTipo = document.getElementById("tipo").value;
    const iptQuantidade = document.getElementById("quantidade").value;
    const iptPreco = document.getElementById("preco").value;
    const iptFornecedor = document.getElementById("fornecedor").value;

if( !iptNome || !iptMarca || !iptCor || !iptTipo || !iptQuantidade || !iptPreco || !iptFornecedor){
alert('Insira todos os campos para cadastrar o produto!!')
return;
}

    event.preventDefault();
    if(document.getElementById('id').value){
        await editar();
    }else{
        await salvar();
    }

}


async function preencheDadosParaEdicao(event){
    document.getElementById('btSalvar').innerText ="Editar Produto";

    const indice =  event.target.getAttribute('data-indice');
;
    const lista = await getProduto();
    
    document.getElementById('id').value= lista[indice].id
    document.getElementById('nome').value= lista[indice].nome
    document.getElementById('marca').value= lista[indice].marca
    document.getElementById('cor').value= lista[indice].cor

    const tipo = document.getElementById('tipo')

    Array.from(tipo.options).forEach(option => {
    
        if (option.value.trim() === lista[indice].idTipo.toString().trim()) {
          option.selected = true;
          return;
        }
      }); 


const fornecedor = document.getElementById('fornecedor')

    Array.from(fornecedor.options).forEach(option => {
        if (option.value.trim() === lista[indice].idFornecedor.toString().trim()) {
            option.selected = true;
            return;
          }
      }); 

    document.getElementById('quantidade').value= lista[indice].quantidade
    document.getElementById('preco').value= lista[indice].preco


}


async function excluir(event) {
    const indice = event.target.getAttribute('data-indice');
    console.log(indice);
    await excluirProduto(indice)
    await desenhoTabela();
}

async function desenhoTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getProduto();
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
        const td9 = document.createElement('td')

        const btEd = document.createElement('button')
        const btEx = document.createElement('button')

        btEd.innerText = 'Editar'
        btEd.setAttribute('data-indice', i)
        btEd.addEventListener('click', preencheDadosParaEdicao)


        btEx.innerText = 'Excluir'
        btEx.setAttribute('data-indice', dados[i].id)
        btEx.addEventListener('click', excluir)

const fornecedor = await getUmFornecedor(dados[i].idFornecedor);
const tipo = await getUmTipo(dados[i].idTipo);


        td1.innerText = dados[i].id
        td2.innerText = dados[i].nome
        td3.innerText = dados[i].marca
        td4.innerText = dados[i].cor
        td5.innerText = tipo.tipo
        td6.innerText = dados[i].quantidade
        td7.innerText = 'R$'+(parseFloat(dados[i].preco)).toFixed(2)
        td8.innerText = fornecedor[0].nome
        td9.append(btEd, btEx)

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
        tbody.append(tr);
    }

}



async function preencheTipo() {
    const tipo = document.getElementById('tipo');
    tipo.innerHTML = '';
    const dados = await getTipo();

    const option = document.createElement('option')
    option.setAttribute('value', '')
    option.innerText = 'Selecione'
    tipo.append(option);

    for (let i = 0; i < dados.length; i++) {
        const option = document.createElement('option')
        option.setAttribute('value', dados[i].id)
        option.innerText = dados[i].tipo
        tipo.append(option);
    }
}



async function preencheFornecedor() {
    const fornecedor = document.getElementById('fornecedor');
    fornecedor.innerHTML = '';
    const dados = await getFornecedor();

    const option = document.createElement('option')
    option.setAttribute('value', '')
    option.innerText = 'Selecione'
    fornecedor.append(option);

    for (let i = 0; i < dados.length; i++) {
        const option = document.createElement('option')
        option.setAttribute('value', dados[i].id)
        option.innerText = dados[i].nome
        fornecedor.append(option);
    }
}



//Eventos
const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', decideSalvarEditar);


window.addEventListener('load', desenhoTabela);
window.addEventListener('load', preencheTipo);
window.addEventListener('load', preencheFornecedor);












