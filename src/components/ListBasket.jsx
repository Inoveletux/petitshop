import React, { useContext, useEffect, useState }  from 'react';
import {AppContext} from '../Context.js'
import {ListGroup, Button} from 'react-bootstrap';
import {findProduct} from '../lib/database'
import axios from 'axios'

export function ListBasket (props){
    const [invoiceLines, setInvoiceLines] = useState([]);
    const context = useContext(AppContext);
    let priceTotalProducts = [0];

    useEffect(() => {
        setInvoiceLines(context.basket.map((basketItem) => {
            /*
            L'objet basketItem contient deux propriétés :
            - Le code du produit à ajouter à la facture (productCode)
            - La quantité désirée (quantity)
            */
           // Recherche du produit en fonction de son code.
        const product = findProduct(basketItem.productCode);
        if(product === false) {
            throw new Error(`Il n'y a aucun produit avec le code ${basketItem.productCode} !`);
            }
            // console.log(product)
            // Création d'une ligne de facturation regroupant les informations du produit et la quantité désirée.
            return { ...product, quantity: basketItem.quantity, totalPrice: (basketItem.quantity*parseFloat(product.unitPrice)) };
        }));
        // console.log(invoiceLines);
    }, [])

    const maMethode = () => {
        // setInvoiceLines([]) // methode pour mettre à jour les invoiceLines

    }

    const methodeFetchOnClick = () => {
        axios.post('/api/create_session', {
            basket: 'TOTO CONNARD'
            
        }).then(function (response){
            console.log(response);
        })
            .catch(function (error) {
            console.log(error);
        })
    }

    const methodeReduce = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return priceTotalProducts.reduce(reducer)
    }
    
    const methodeTVA = () => {
        let TVA = parseFloat(methodeReduce())*(0.2)
        return TVA;
    }
        // Mise à jour du state complet (données de facturation puis les montants de la facture).
    // console.log(invoiceLines)
    return (
        <>
        <ListGroup horizontal>
            <ListGroup.Item action variant="" style={{fontWeight:"bold"}}>Produit</ListGroup.Item>
            <ListGroup.Item action variant="" style={{fontWeight:"bold"}}>Quantité</ListGroup.Item>
            <ListGroup.Item action variant="" style={{fontWeight:"bold"}}>Prix unitaire</ListGroup.Item>
            <ListGroup.Item action variant="" style={{fontWeight:"bold"}}>Prix total</ListGroup.Item>
        </ListGroup>
        {invoiceLines.map((e)=>{
            priceTotalProducts.push(e.totalPrice);

            return (
                <ListGroup key={e.productCode}>
                    <ListGroup horizontal>
                        <ListGroup.Item action variant="dark"> {e.description}</ListGroup.Item>
                        <ListGroup.Item action variant="dark">{e.quantity}</ListGroup.Item>
                        <ListGroup.Item action variant="dark"> {e.unitPrice} €</ListGroup.Item>
                        <ListGroup.Item action variant="dark">{e.totalPrice.toFixed(1)} €</ListGroup.Item>
                    </ListGroup>
                </ListGroup>
            )
        })}
        <div style={{display:"flex", flexDirection:"column"}}>
            <ListGroup horizontal>
                <ListGroup.Item action variant="" style={{fontWeight:"bold"}}>Total Hors Taxes</ListGroup.Item>
                <ListGroup.Item action variant="">{methodeReduce().toFixed(1)} €</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item action variant="" style={{fontWeight:"bold"}}>Total TVA</ListGroup.Item>
                <ListGroup.Item action variant="">+{methodeTVA().toFixed(1)} €</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item action variant="" style={{fontWeight:"bold"}}>Total avec TVA</ListGroup.Item>
                <ListGroup.Item action variant="">{(methodeTVA()+methodeReduce()).toFixed(1)} €</ListGroup.Item>
            </ListGroup>
            <Button onClick={methodeFetchOnClick} variant="outline-dark" style={{fontWeight:"bold", alignItem:"flex-end", margin:"10px 43%"}}>
                Payer
            </Button>
        </div>
        </>
    )
}