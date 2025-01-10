import { getFuncionario, getUmFuncionario, novoFuncionario, excluirFuncionario, alterarFuncionario } from "../acessa_dados/acessa_dados_funcionario.mjs";

async function salvar() {
    const iptId = document.getElementById("id");
    const iptNome = document.getElementById("nome");
    const iptCargo = document.getElementById("cargo");
    const iptTelefone = document.getElementById("telefone");
    const iptCpf = document.getElementById("cpf");
    const iptRg = document.getElementById("rg");
    const iptSalario = document.getElementById("salario");
    const iptEmail = document.getElementById("email");

    const obj = {
        "id": iptId.value,
        "nome": iptNome.value,
        "cargo": iptCargo.value,
        "telefone": iptTelefone.value,
        "cpf": iptCpf.value,
        "rg": iptRg.value,
        "salario": iptSalario.value,
        "email": iptEmail.value
    };
    await novoFuncionario(obj);
    await desenhoTabela();
    iptId.value='';
    document.forms[0].reset()

}


async function editar() {
    const iptId = document.getElementById("id");
    const iptNome = document.getElementById("nome");
    const iptCargo = document.getElementById("cargo");
    const iptTelefone = document.getElementById("telefone");
    const iptCpf = document.getElementById("cpf");
    const iptRg = document.getElementById("rg");
    const iptSalario = document.getElementById("salario");
    const iptEmail = document.getElementById("email");

    const obj = {
        "id": iptId.value,
        "nome": iptNome.value,
        "cargo": iptCargo.value,
        "telefone": iptTelefone.value,
        "cpf": iptCpf.value,
        "rg": iptRg.value,
        "salario": iptSalario.value,
        "email": iptEmail.value
    };
    await alterarFuncionario(obj);
    document.forms[0].reset()
    document.getElementById('btSalvar').innerText ="Cadastrar Funcionário"
    iptId.value ='';
    await desenhoTabela();

}


async function decideSalvarEditar(event){
    const iptNome = document.getElementById("nome").value;
    const iptCargo = document.getElementById("cargo").value;
    const iptTelefone = document.getElementById("telefone").value;
    const iptCpf = document.getElementById("cpf").value;
    const iptRg = document.getElementById("rg").value;
    const iptSalario = document.getElementById("salario").value;
    const iptEmail = document.getElementById("email").value;

if( !iptNome || !iptCargo || !iptTelefone || !iptCpf || !iptRg|| !iptSalario || !iptEmail){
alert('Insira todos os dados para cadastrar o funcionário!!')
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
    document.getElementById('btSalvar').innerText ="Editar Funcionário";

    const indice = parseInt(event.target.getAttribute('data-indice'), 10);
    const lista = await getFuncionario();
    
    document.getElementById('id').value= lista[indice].id
    document.getElementById('nome').value= lista[indice].nome
    document.getElementById('cargo').value= lista[indice].cargo
    document.getElementById('telefone').value= lista[indice].telefone
    document.getElementById('cpf').value= lista[indice].cpf
    document.getElementById('rg').value= lista[indice].rg
    document.getElementById('salario').value= lista[indice].salario
    document.getElementById('email').value= lista[indice].email
}


async function excluir(event) {
    const indice = event.target.getAttribute('data-indice');
    await excluirFuncionario(indice)
    await desenhoTabela();
}

async function desenhoTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getFuncionario();
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

        td1.innerText = dados[i].id
        td2.innerText = dados[i].nome
        td3.innerText = dados[i].cargo
        td4.innerText = dados[i].telefone
        td5.innerText = dados[i].cpf
        td6.innerText = dados[i].rg
        td7.innerText = dados[i].email   
        td8.innerText = 'R$'+(parseFloat(dados[i].salario)).toFixed(2)
        td9.append(btEd, btEx)

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
        tbody.append(tr);
    }

}






//Eventos
const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', decideSalvarEditar);


window.addEventListener('load', desenhoTabela);












