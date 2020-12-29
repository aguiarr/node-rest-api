const moment = require('moment');
const connection = require('../infrastructure/connection');

class Schedule {

    add(schedule, res){

        const creationDate = moment().format('YYYY-MM-DD HH:MM:SS')
        const date = moment(schedule.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        const validateDate = moment(date).isSameOrAfter(creationDate);
        const validateClient = schedule.client.length >= 5;

        const validate = [
            {
                nome:'data',
                valid: validateDate,
                mesage: "Date must be greater than or equal to the current date."
            },
            {
                name:'client',
                valid: validateClient,
                mesage: "The customer's name must be longer than 5 characters."
            }
        ];

        const erros = validate.filter(field => !field.valid);
        const erroExist = erros.length;

        if(erroExist){
            res.status(400).json(erros);
        }else{
            const atendimentoDatado = {...schedule, creationDate, date}

            const sql = 'INSERT INTO schedule SET ?';
            
            connection.query(sql, atendimentoDatado, (erro, result) =>{
                if(erro){
                    res.status(400).json(erro); 
                }else{
                    res.status(201).json(schedule);
                }
            });
        }

    }

    find(res){
        const sql = 'SELECT * FROM schedule';

        connection.query(sql, (erro, result) => {

            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(result);
            }
        })
    }

    findById(id, res){
        const sql = `SELECT * FROM schedule WHERE id=${id}`;

        connection.query(sql, (erro, result) => {
            const schedule = result[0];
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json(schedule);
            }
        });
    }

    edit(id, values, res){

        if(values.data) {
            values.data = moment(values.data, 'DD/MM/YYY').format('YYY-MM-DD HH:MM:SS');
        }
        const sql = 'UPDATE schedule SET ? WHERE id=?';

        connection.query(sql,[values, id], (erro, result) =>{
            if(erro) {
                res.status(400).json(erro);
            }else{
                res.status(200).json({...values, id});
            }
        })
    }

    delete(id, res){
        const sql = 'DELETE FROM schedule WHERE id=?';

        connection.query(sql, id, (erro, result) => { 
            
            if(erro){
                res.status(400).json(erro);
            }else{
                res.status(200).json({id});
            }
        });
    }
}

module.exports = new Schedule;