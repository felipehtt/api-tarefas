import con from './connection.js';

export async function inserirTarefa(tarefa) {

    const comando = ` 

        insert into tb_tarefa (ds_tarefa, nr_ordem, bt_finalizado, dt_cadastro) 
        values (?, ?, ?, ?);
            
    `

    let resposta = await con.query(comando, [tarefa.tarefa, tarefa.ordem, tarefa.finalizado, tarefa.cadastro])

    let info = resposta[0]

    let idTarefa = info.insertId

    return idTarefa;

}


export async function consultarTarefa() {

    const comando = `
    
        select id_tarefa          idTarefa, 
            ds_tarefa          tarefa,
            nr_ordem           ordem,
            bt_finalizado      finalizado,
            dt_cadastro        cadastro
        from tb_tarefa;

    `

    let resposta = await con.query(comando)

    let registros = resposta[0]

    return registros;

}


export async function alterarTarefa(id, tarefa) {

    const comando = `

       update tb_tarefa
        set ds_tarefa = ?,
            nr_ordem = ?,
            bt_finalizado = ?,
            dt_cadastro = ?
        where id_tarefa = ?; 

    `

    let resposta = await con.query(comando, [tarefa.tarefa, tarefa.ordem, tarefa.finalizado, tarefa.cadastro, id])

    let info = resposta[0]

    let linhasAfetadas = info.affectedRows

    return linhasAfetadas;

}


export async function deletarTarefa(id) {

    const comando = ` 
    
        delete from tb_tarefa
        where id_tarefa = ?;
            
    `

    let resposta = await con.query(comando, [id])

    let info = resposta[0]

    let linhasAfetadas = info.affectedRows

    return linhasAfetadas;

};
