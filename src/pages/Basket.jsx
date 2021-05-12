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
                <div>
                    <div style={{margin:"10px 44%", fontWeight:"bold"}}>Votre Panier</div>
                </div>
                <div>
                    <ListBasket dataProduct={productDatabase}/>
                </div>
            </section>
        );
    }
}

export default Basket;