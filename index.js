const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/connection');
const Tables = require('./infrastructure/tables');


connection.connect( erro => {

    if(erro){
        console.log(erro);

    }else{
        console.log('connetion');

        Tables.init(connection);
        const app = customExpress();
        app.listen(3000, () => console.log('Server on port 3000'));
    }
});
