const express = require('express')
require('dotenv').config();
const stripe = require('stripe')(process.env.API_KEY_HIDDEN);
const app = express()
const port = 4242
const bodyParser = require('body-parser')
//Sert a utiliser les variables d'environnement

const productDatabase = [

    { productCode: 'DBZ', description: 'Dragonball Z Kai - Saga de Boo',   unitPrice: 29.90 },
    { productCode: 'FMA', description: 'Full Metal Alchemist Brotherhood', unitPrice: 19.50 },
    { productCode: 'SKY', description: 'Skyfall',                          unitPrice: 22.50 },
    { productCode: 'OPM', description: 'One Punch Man',                    unitPrice: 25.70 },
    { productCode: 'SWT', description: 'Star Wars épisode V',              unitPrice: 29.90 }
];

function findProduct(productCode) {
    //Map ou filter pour trouver le bon
    let product = productDatabase.find((e) => e.productCode === productCode )?? false
        return product
    
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/api/create_session', async (req, res) => {
    let basket = req.body.basket;
    let lineItems = [];

    basket.map(function (unTruc){
        // console.log(unTruc)
        // console.log(findProduct(unTruc.productCode))
        let myProduct = findProduct(unTruc.productCode);
        lineItems.push({
                price_data: {
                currency: 'eur',
                product_data: {
                    name: myProduct.productCode,
                },
                    unit_amount: parseFloat(myProduct.unitPrice)*100
                },
                quantity: parseInt(unTruc.quantity)
            })
    })
    console.log(lineItems);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/error`,
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
