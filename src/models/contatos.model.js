function Contatos(id, name, time) {
    this.id = id;
    this.name = name;
    this.time = time;

    return {
       id: id,
       name: name,
       time: time
    };
}

export default Contatos;