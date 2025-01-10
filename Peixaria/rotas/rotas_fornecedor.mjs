import { Router} from "express";
import { novo, um, todos, altera, exclui} from "../controles/controle_fornecedor.mjs";


const rotas_fornecedor = Router();

rotas_fornecedor.post('/cadastrar', novo);
rotas_fornecedor.get('/listar/:id', um);
rotas_fornecedor.get('/listar', todos);
rotas_fornecedor.put('/alterar', altera);
rotas_fornecedor.delete('/excluir', exclui);

export{rotas_fornecedor};









