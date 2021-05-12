const express = require('express')
const app = express()
const port = 4242

//Sert a utiliser les variables d'environnement
require('dotenv').config();


app.get('/test', (req, res) => {
    res.send('super ')
})

app.post('/api/create_session', (req, res) => {
    console.log('super');
    console.log(req);
    console.log(req.body)
})






app.listen(port,() => {
    console.log(`Le serveur est démarré : http://localhost:${port}`);
    if (process.send) {
        process.send('online');
    }
});
