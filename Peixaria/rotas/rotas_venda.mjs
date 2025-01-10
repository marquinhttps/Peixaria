import { Router} from "express";
import { novo, um, todos, exclui} from "../controles/controle_venda.mjs";


const rotas_venda = Router();

rotas_venda.post('/cadastrar', novo);
rotas_venda.get('/listar/:id', um);
rotas_venda.get('/listar', todos);
rotas_venda.delete('/excluir', exclui);

export{rotas_venda};









