import { getCliente } from "../acessa_dados/acessa_dados_cliente.mjs";
import { getVenda } from "../acessa_dados/acessa_dados_venda.mjs";
import { getFornecedor } from "../acessa_dados/acessa_dados_fornecedor.mjs";
import { getFuncionario } from "../acessa_dados/acessa_dados_funcionario.mjs";
import { getProduto } from "../acessa_dados/acessa_dados_produto.mjs";
import { getFolhaPagamento, getReceitaBruta } from "../acessa_dados/acessa_dados_demonstracao_resultados.mjs";



async function desenhaDadosDeashBoard() {
    const fornecedor = await getFornecedor();
    const cliente = await getCliente();
    const venda = await getVenda();
    const produto = await getProduto();
    const funcionario = await getFuncionario();

    document.getElementById('fornecedor').innerText = fornecedor.length;
    document.getElementById('cliente').innerText = cliente.length;
    document.getElementById('venda').innerText = venda.length;
    document.getElementById('produto').innerText = produto.length;
    document.getElementById('funcionario').innerText = funcionario.length;
}

async function desenhaRendaMensal() {
    const dados = await getReceitaBruta();
    const receita_bruta = dados[0];
let custo  = '';
        const pagamentos = await getFolhaPagamento();
        const folha_de_pagamentos = pagamentos[0];

        for (let j = 0; j < folha_de_pagamentos.length; j++) {
            if(folha_de_pagamentos[j].mes == receita_bruta[0].mes && folha_de_pagamentos[j].ano == receita_bruta[0].ano){
                custo = folha_de_pagamentos[j].valor
            }
        }

        let CMAT = ((Math.random() * (20 - 10) + 10) / 100) * receita_bruta[0].valor;
        let CMAN = ((Math.random() * (30 - 20) + 20) / 100) * receita_bruta[0].valor;
     const receita_liquida = (receita_bruta[0].valor - custo - CMAT - CMAN).toFixed(2);

document.getElementById('receita').innerText= 'R$'+receita_liquida;    
    }

window.addEventListener('load', desenhaRendaMensal);
window.addEventListener('load', desenhaDadosDeashBoard);












