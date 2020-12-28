class Tables{
    init(connection){
        this.connection = connection;
        this.createAtendimentos();
    }
    createAtendimentos(){
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id INT NOT NULL AUTO_INCREMENT, cliente VARCHAR(50) NOT NULL, pet VARCHAR(20), servico VARCHAR(20) NOT NULL, status VARCHAR(20) NOT NULL, observacoes TEXT, PRIMARY KEY(id));';
        this.connection.query(sql, (erro) => {
            if(erro){
                console.log(erro);
            }else{
                console.log('Tabela "Atendimentos" criada com sucesso!');
            }
        });
    }
    
}
module.exports = new Tables;