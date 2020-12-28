module.exports = app =>{
    app.get('/atendimentos', (req, res) => res.send('Server on fire!!'));

    app.post('/atendimentos', (req, res) => {
        console.log(req.body);
        
        res.send('Realizando um post!')
    });
}