import { Router} from "express";
import { novo, um, todos, altera, exclui} from "../controles/controle_produto.mjs";


const rotas_produto = Router();

rotas_produto.post('/cadastrar', novo);
rotas_produto.get('/listar/:id', um);
rotas_produto.get('/listar', todos);
rotas_produto.put('/alterar', altera);
rotas_produto.delete('/excluir', exclui);

export{rotas_produto};









