import { getTipo, getUmTipo, novoTipo, excluirTipo, alterarTipo } from "../acessa_dados/acessa_dados_tipo.mjs";

async function salvar() {
    const iptId = document.getElementById("id");
    const iptTipo = document.getElementById("tipo");

    const obj = {
        "id": iptId.value,
        "tipo": iptTipo.value
    };
    await novoTipo(obj);
    await desenhoTabela();
    iptId.value='';
    document.forms[0].reset()

}


async function editar() {
    const iptId = document.getElementById("id");
    const iptTipo = document.getElementById("tipo");

    const obj = {
        "id": iptId.value,
        "tipo": iptTipo.value
    };
    await alterarTipo(obj);
    document.forms[0].reset()
    document.getElementById('btSalvar').innerText ="Cadastrar"
    iptId.value ='';
    await desenhoTabela();

}


async function decideSalvarEditar(event){
    const iptTipo = document.getElementById("tipo").value;

if(  !iptTipo ){
alert('Insira o tipo de peixe!!')
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
    document.getElementById('btSalvar').innerText ="Editar";

    const indice = event.target.getAttribute('data-indice');
    const lista = await getTipo();
    
    document.getElementById('id').value= lista[indice].id
    document.getElementById('tipo').value= lista[indice].tipo


}


async function excluir(event) {
    const indice = event.target.getAttribute('data-indice');
    console.log(indice);
    await excluirTipo(indice)
    await desenhoTabela();
}

async function desenhoTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getTipo();
    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')

        const btEd = document.createElement('button')
        const btEx = document.createElement('button')

        btEd.innerText = 'Editar'
        btEd.setAttribute('data-indice', i)
        btEd.addEventListener('click', preencheDadosParaEdicao)


        btEx.innerText = 'Excluir'
        btEx.setAttribute('data-indice', dados[i].id)
        btEx.addEventListener('click', excluir)


        td1.innerText = dados[i].id
        td2.innerText = dados[i].tipo
        td3.append(btEd, btEx)

        tr.append(td1, td2, td3);
        tbody.append(tr);
    }

}






//Eventos
const btSalvar = document.getElementById('btSalvar');
btSalvar.addEventListener('click', decideSalvarEditar);


window.addEventListener('load', desenhoTabela);












