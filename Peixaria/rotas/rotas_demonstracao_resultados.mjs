import { Router} from "express";
import { getPagamentos, getReceita } from "../controles/controle_demonstracao_resultados.mjs";

const rotas_demonstracao_resultados = Router();

rotas_demonstracao_resultados.get('/receitaBruta', getReceita);
rotas_demonstracao_resultados.get('/folhaPagamento', getPagamentos);

export{rotas_demonstracao_resultados};









