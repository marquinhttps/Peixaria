import { getFornecedor, getUmFornecedor, novoFornecedor, excluirFornecedor, alterarFornecedor } from "../acessa_dados/acessa_dados_fornecedor.mjs";

async function salvar() {
    const iptId = document.getElementById("id");
    const iptNome = document.getElementById("nome");
    const iptCnpj = document.getElementById("cnpj");
    const iptEndereco = document.getElementById("endereco");
    const iptTelefone = document.getElementById("telefone");
    const iptEmail = document.getElementById("email");

    const obj = {
        "id": iptId.value,
        "nome": iptNome.value,
        "cnpj": iptCnpj.value,
        "endereco": iptEndereco.value,
        "telefone": iptTelefone.value,
        "email": iptEmail.value
    };
    await novoFornecedor(obj);
    await desenhoTabela();
    iptId.value='';
    document.forms[0].reset()

}


async function editar() {
    const iptId = document.getElementById("id");
    const iptNome = document.getElementById("nome");
    const iptCnpj = document.getElementById("cnpj");
    const iptEndereco = document.getElementById("endereco");
    const iptTelefone = document.getElementById("telefone");
    const iptEmail = document.getElementById("email");

    const obj = {
        "id": iptId.value,
        "nome": iptNome.value,
        "cnpj": iptCnpj.value,
        "endereco": iptEndereco.value,
        "telefone": iptTelefone.value,
        "email": iptEmail.value
    };
    await alterarFornecedor(obj);
    document.forms[0].reset()
    document.getElementById('btSalvar').innerText ="Cadastrar Fornecedor"
    iptId.value ='';
    await desenhoTabela();

}


async function decideSalvarEditar(event){
    const iptNome = document.getElementById("nome").value;
    const iptCnpj = document.getElementById("cnpj").value;
    const iptEndereco = document.getElementById("endereco").value;
    const iptTelefone = document.getElementById("telefone").value;
    const iptEmail = document.getElementById("email").value;

if( !iptNome || !iptCnpj || !iptEndereco || !iptTelefone || !iptEmail){
    alert('Insira todos os dados para cadastrar o fornecedor!!')
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
    document.getElementById('btSalvar').innerText ="Editar Fornecedor"
    const indice = event.target.getAttribute('data-indice');
    const lista = await getFornecedor();
    document.getElementById('id').value= lista[indice].id
    document.getElementById('nome').value= lista[indice].nome
    document.getElementById('cnpj').value= lista[indice].cnpj
    document.getElementById('endereco').value= lista[indice].endereco
    document.getElementById('telefone').value= lista[indice].telefone
    document.getElementById('email').value= lista[indice].email
}


async function excluir(event) {
    const indice = event.target.getAttribute('data-indice');
    console.log(indice);
    await excluirFornecedor(indice)
    await desenhoTabela();

}

async function desenhoTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getFornecedor();
    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
        const td5 = document.createElement('td')
        const td6 = document.createElement('td')
        const td7 = document.createElement('td')

        const btEd = document.createElement('button')
        const btEx = document.createElement('button')

        btEd.innerText = 'Editar'
        btEd.setAttribute('data-indice', i)
        btEd.addEventListener('click', preencheDadosParaEdicao)


        btEx.innerText = 'Excluir'
        btEx.setAttribute('data-indice', dados[i].id)
        btEx.addEventListener('click', excluir)



        td1.innerText = dados[i].id
        td2.innerText = dados[i].nome
        td3.innerText = dados[i].cnpj
        td4.innerText = dados[i].endereco
        td5.innerText = dados[i].telefone
        td6.innerText = dados[i].email
        td7.append(btEd, btEx)

        tr.append(td1, td2, td3, td4, td5, td6, td7, td7);
        tbody.append(tr);
    }

}






//Eventos
const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', decideSalvarEditar);


window.addEventListener('load', desenhoTabela);












