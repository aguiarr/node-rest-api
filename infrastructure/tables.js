class Tables{
    init(connection){
        this.connection = connection;
        this.createschedule();
    }
    createschedule(){

        const sql = 'CREATE TABLE IF NOT EXISTS schedule (id INT NOT NULL AUTO_INCREMENT, client VARCHAR(50) NOT NULL, pet VARCHAR(20), service VARCHAR(20) NOT NULL, date DATETIME NOT NULL, CreationDate DATETIME NOT NULL, status VARCHAR(20) NOT NULL, observation TEXT, PRIMARY KEY(id));';
        
        this.connection.query(sql, (erro) => {
            if(erro){
                console.log(erro);
            }else{
                console.log('Table "schedule" created successful!');
            }
        });
    }
    
}
module.exports = new Tables;