import { Router} from "express";
import { novo, um, todos, exclui} from "../controles/controle_compra.mjs";


const rotas_compra = Router();

rotas_compra.post('/cadastrar', novo);
rotas_compra.get('/listar/:id', um);
rotas_compra.get('/listar', todos);
rotas_compra.delete('/excluir', exclui);

export{rotas_compra};









