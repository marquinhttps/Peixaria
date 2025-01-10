import { getFolhaPagamento, getReceitaBruta } from "../acessa_dados/acessa_dados_demonstracao_resultados.mjs";


async function desenhoTabela() {
    const tbody = document.getElementById('tbody1');
    tbody.innerHTML = '';
    const dados = await getReceitaBruta();
    const receita_bruta = dados[0];


    for (let i = 0; i < receita_bruta.length; i++) {
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
        const td5 = document.createElement('td')
        const td6 = document.createElement('td')

let custo  = '';

        const pagamentos = await getFolhaPagamento();
        const folha_de_pagamentos = pagamentos[0];

        for (let j = 0; j < folha_de_pagamentos.length; j++) {

            if(folha_de_pagamentos[j].mes == receita_bruta[i].mes && folha_de_pagamentos[j].ano == receita_bruta[i].ano){
                custo = folha_de_pagamentos[j].valor
            }

        }

        
        let CMAT = ((Math.random() * (20 - 10) + 10) / 100) * receita_bruta[i].valor;
        
        let CMAN = ((Math.random() * (30 - 20) + 20) / 100) * receita_bruta[i].valor;

        td1.innerText = 'R$'+(parseFloat((receita_bruta[i].valor))).toFixed(2)
        td2.innerText = 'R$'+(parseFloat((parseFloat(custo)))).toFixed(2)
        td3.innerText = 'R$'+(parseFloat(CMAN)).toFixed(2)
        td4.innerText = 'R$'+(parseFloat(CMAT)).toFixed(2)
        td5.innerText = 'R$'+(parseFloat((receita_bruta[i].valor - custo - CMAT - CMAN))).toFixed(2)
        td6.innerText = (receita_bruta[i].mes + '/' + receita_bruta[i].ano)

        tr.append(td1, td2, td3, td4, td5, td6);
        tbody.append(tr);
    }

}


function getReceitaMensal(receita){
    return receita
}


window.addEventListener('load', desenhoTabela);



