// Chargement des dépendances (librairie React ici)
import React from 'react';
import {productDatabase} from '../lib/database'
import { ListBasket } from '../components/ListBasket';

export class Basket extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <section>
                <div styles={{textAlign:"center"}}>
                    <div styles={{display:"inline-block"}}>Votre Panier</div>
                    <ListBasket dataProduct={productDatabase}/>
                </div>
            </section>
        );
    }
}

export default Basket;