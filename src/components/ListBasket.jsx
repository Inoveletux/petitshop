import React, { useContext, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../Context.js'
import {ListGroup} from 'react-bootstrap';
import {findProduct} from '../lib/database'

export function ListBasket (props){
    // const [state, setState] = useState();
    const context = useContext(AppContext);
    let invoiceLines = [];

    useEffect(() => {
        invoiceLines = context.basket.map((basketItem) => {
            
            console.log(invoiceLines)
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
            // Création d'une ligne de facturation regroupant les informations du produit et la quantité désirée.
            return { ...product, quantity: basketItem.quantity };
        });
    }, [context]) 

        // Mise à jour du state complet (données de facturation puis les montants de la facture).
    return (
        <>
        <ListGroup horizontal>
            <ListGroup.Item action variant="">Produit</ListGroup.Item>
            <ListGroup.Item action variant="">Quantité</ListGroup.Item>
            <ListGroup.Item action variant="">Prix unitaire</ListGroup.Item>
            <ListGroup.Item action variant="">Prix total</ListGroup.Item>
        </ListGroup>
        {context.basket.map((e)=>{
            let myProduct = findProduct(e.productCode);
            let priceProducts = Math.round((myProduct.unitPrice*e.quantity)*10)/10;
            
            return (
                <ListGroup key={e.productCode}>
                    <ListGroup horizontal>
                        <ListGroup.Item action variant="dark"> {myProduct.description}</ListGroup.Item>
                        <ListGroup.Item action variant="dark">{e.quantity}</ListGroup.Item>
                        <ListGroup.Item action variant="dark"> {myProduct.unitPrice} €</ListGroup.Item>
                        <ListGroup.Item action variant="dark">{priceProducts} €</ListGroup.Item>
                    </ListGroup>
                </ListGroup>
            )
        })}
        </>
    )
}