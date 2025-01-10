import { Router} from "express";
import { novo, um, todos, altera, exclui} from "../controles/controle_tipo.mjs";


const rotas_tipo = Router();

rotas_tipo.post('/cadastrar', novo);
rotas_tipo.get('/listar/:id', um);
rotas_tipo.get('/listar', todos);
rotas_tipo.put('/alterar', altera);
rotas_tipo.delete('/excluir', exclui);

export{rotas_tipo};









