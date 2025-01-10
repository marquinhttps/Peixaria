
import express from 'express';
import { rotas_fornecedor } from "./rotas/rotas_fornecedor.mjs";
import { rotas_cliente } from "./rotas/rotas_cliente.mjs";
import { rotas_produto } from "./rotas/rotas_produto.mjs";
import { rotas_funcionario } from "./rotas/rotas_funcionario.mjs";
import { rotas_tipo } from './rotas/rotas_tipo.mjs';
import { rotas_compra } from "./rotas/rotas_compra.mjs";
import { rotas_venda } from './rotas/rotas_venda.mjs';
import { rotas_demonstracao_resultados } from './rotas/rotas_demonstracao_resultados.mjs';

const app = express();


app.use(express.json());


app.use('/fornecedor', rotas_fornecedor);
app.use('/cliente', rotas_cliente);
app.use('/produto', rotas_produto);
app.use('/funcionario', rotas_funcionario);
app.use('/tipo', rotas_tipo);
app.use('/compra', rotas_compra);
app.use('/venda', rotas_venda);
app.use('/demonstracaoResultados', rotas_demonstracao_resultados);


app.use(express.static( 'view'));

app.listen(80,function(){
    console.log('Na escuta.')
})