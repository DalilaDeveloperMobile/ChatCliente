function Mensagens(id, descricao, time) {
    this.id = id;
    this.descricao = descricao;
    this.time = time;

    return {
       id: id,
       descricao: descricao,
       time: time
    };
}

export default Mensagens;