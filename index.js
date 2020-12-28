const customExpress = require('./config/customExpress');
const connection = require('./infraestrutura/connection');

connection.connect(erro =>{
    if(erro){
        console.log(erro);
        
    }else{
        console.log('connetion');

        const app = customExpress();
        app.listen(3000, () => console.log('Server on port 3000'));
    }
});
