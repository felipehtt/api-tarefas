import tarefaController from './controller/tarefaController.js';

export default function adicionarRotas(servidor) {

    servidor.use(tarefaController);

}