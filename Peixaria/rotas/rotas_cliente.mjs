import { Router} from "express";
import { novo, um, todos, altera, exclui} from "../controles/controle_cliente.mjs";


const rotas_cliente = Router();

rotas_cliente.post('/cadastrar', novo);
rotas_cliente.get('/listar/:id', um);
rotas_cliente.get('/listar', todos);
rotas_cliente.put('/alterar', altera);
rotas_cliente.delete('/excluir', exclui);

export{rotas_cliente};