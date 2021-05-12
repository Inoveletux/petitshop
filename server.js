const express = require('express')
const stripe = require('stripe')(process.env.API_KEY_HIDDEN);
const app = express()
const port = 4242
const bodyParser = require('body-parser')
//Sert a utiliser les variables d'environnement
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/create_session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Stubborn Attachments',
                    images: ['https://i.imgur.com/EHyR2nP.png'],
                },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/success.html`,
        cancel_url: `http://localhost:3000/error.html`,
    });
    res.json({ id: session.id });
})

app.get('/test', (req, res) => {
    res.send('super ')
})

app.post('/api/create_session', (req, res) => {
    console.log('super');
    // console.log(req);
    console.log(req.body)
})






app.listen(port,() => {
    console.log(`Le serveur est démarré : http://localhost:${port}`);
    if (process.send) {
        process.send('online');
    }
});
