import * as db from '../repository/tarefaRepository.js';

import { Router } from 'express';
const endpoints = Router()


endpoints.post('/tarefa', async (req, resp) => {

    try {

        let tarefa = req.body

        let id = await db.inserirTarefa(tarefa)

        resp.send({

            idTarefa: id

        })

    }
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})


endpoints.get('/tarefa', async (req, resp) => {

    try {

        let registros = await db.consultarTarefa();

        resp.send(registros);


    }
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})


endpoints.put('/tarefa/:id', async (req, resp) => {

    try {

        let id = req.params.id;

        let tarefa = req.body;

        let linhasAfetadas = await db.alterarTarefa(id, tarefa)

        if (linhasAfetadas >= 1) {

            resp.send();

        }
        else {

            resp.status(404).send({ erro: `Nenhum registro alterado.` })

        }

    }
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})


endpoints.delete('/tarefa/:id', async (req, resp) => {

    try {

        let id = req.params.id

        let linhasAfetadas = await db.deletarTarefa(id)

        if (linhasAfetadas >= 1) {

            resp.send();

        }
        else {

            resp.status(404).send({ erro: 'Nenhum registro removido.' });

        }

    }
    catch (err) {

        resp.status(400).send({

            erro: err.message

        })

    }

})


export default endpoints;