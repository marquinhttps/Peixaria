import conexao from "../database/mysql.mjs";


async function getReceita(req, res) {
    const receita = await conexao.query('SELECT * from receitaBruta');
return res.json(receita);
}

async function getPagamentos(req, res) {
    const folha = await conexao.query('SELECT * from folhaDePagamento');
return res.json(folha);
}



export {getPagamentos, getReceita};

