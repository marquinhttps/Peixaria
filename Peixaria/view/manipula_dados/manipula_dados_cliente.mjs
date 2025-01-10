import { getCliente, getUmCliente, novoCliente, excluirCliente,alterarCliente } from "../acessa_dados/acessa_dados_cliente.mjs";

async function salvar() {
    const iptId = document.getElementById("id");
    const iptNome = document.getElementById("nome");
    const iptCpf = document.getElementById("cpf");
    const iptEndereco = document.getElementById("endereco");
    const iptTelefone = document.getElementById("telefone");
    const iptEmail = document.getElementById("email");

    const obj = {
        "id": iptId.value,
        "nome": iptNome.value,
        "cpf": iptCpf.value,
        "endereco": iptEndereco.value,
        "telefone": iptTelefone.value,
        "email": iptEmail.value
    };
    await novoCliente(obj);
    await desenhoTabela();
    iptId.value='';
    document.forms[0].reset()

}


async function editar() {
    const iptId = document.getElementById("id");
    const iptNome = document.getElementById("nome");
    const iptCpf = document.getElementById("cpf");
    const iptEndereco = document.getElementById("endereco");
    const iptTelefone = document.getElementById("telefone");
    const iptEmail = document.getElementById("email");

    const obj = {
        "id": iptId.value,
        "nome": iptNome.value,
        "cpf": iptCpf.value,
        "endereco": iptEndereco.value,
        "telefone": iptTelefone.value,
        "email": iptEmail.value
    };
    await alterarCliente(obj);
    document.forms[0].reset()
    document.getElementById('btSalvar').innerText ="Cadastrar Cliente"
    iptId.value ='';
    await desenhoTabela();

}


async function decideSalvarEditar(event){
    const iptNome = document.getElementById("nome").value;
    const iptCpf = document.getElementById("cpf").value;
    const iptEndereco = document.getElementById("endereco").value;
    const iptTelefone = document.getElementById("telefone").value;
    const iptEmail = document.getElementById("email").value;

if( !iptNome || !iptCpf || !iptEndereco || !iptTelefone || !iptEmail){
alert('Insira todos os dados para cadastrar o Cliente!!')
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
    document.getElementById('btSalvar').innerText ="Editar Cliente";

    const indice = event.target.getAttribute('data-indice');


    const lista = await getCliente();
    
    document.getElementById('id').value= lista[indice].id
    document.getElementById('nome').value= lista[indice].nome
    document.getElementById('cpf').value= lista[indice].cpf_cnpj
    document.getElementById('endereco').value= lista[indice].endereco
    document.getElementById('telefone').value= lista[indice].telefone
    document.getElementById('email').value= lista[indice].email
}


async function excluir(event) {
    const indice = event.target.getAttribute('data-indice');
    console.log(indice);
    await excluirCliente(indice)
    await desenhoTabela();
}

async function desenhoTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getCliente();
    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
        const td5 = document.createElement('td')
        const td6 = document.createElement('td')
        const td8 = document.createElement('td')

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
        td3.innerText = dados[i].cpf_cnpj
        td4.innerText = dados[i].endereco
        td5.innerText = dados[i].telefone
        td6.innerText = dados[i].email
        td8.append(btEd, btEx)

        tr.append(td1, td2, td3, td4, td5, td6, td8);
        tbody.append(tr);
    }

}






//Eventos
const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', decideSalvarEditar);


window.addEventListener('load', desenhoTabela);












