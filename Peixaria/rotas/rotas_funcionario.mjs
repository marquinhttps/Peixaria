




import { Router} from "express";
import { novo, um, todos, altera, exclui} from "../controles/controle_funcionario.mjs";


const rotas_funcionario = Router();

rotas_funcionario.post('/cadastrar', novo);
rotas_funcionario.get('/listar/:id', um);
rotas_funcionario.get('/listar', todos);
rotas_funcionario.put('/alterar', altera);
rotas_funcionario.put('/excluir', exclui);

export{rotas_funcionario};














