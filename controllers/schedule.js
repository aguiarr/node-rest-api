const Schedule = require('../models/schedule');

module.exports = app =>{
    app.get('/schedule', (req,res) => {
        
        Schedule.find(res);
    });

    app.get('/schedule/:id', (req,res) => {
        const id = parseInt(req.params.id);

        Schedule.findById(id, res);
    });

    app.post('/schedule', (req, res) => {
        const schedule = req.body;

        Schedule.add(schedule, res);
    });

    app.patch('/schedule/:id', (req, res) =>{

        const id = parseInt(req.params.id);
        const valores = req.body;

        Schedule.edit(id, valores, res);
    });

    app.delete('/schedule/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Schedule.delete(id, res);
    });
}