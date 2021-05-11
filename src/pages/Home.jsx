// Chargement des dépendances (librairie React ici)
import React from 'react';
// import {NavBar} from '../components/NavBar';
import {productDatabase} from '../lib/database'
import {ProductList} from '../components/ProductList'
import { Card } from 'react-bootstrap';

export class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataCards : []
        }
    }

    render() {
        return (
            <section>
                <div>
                    <Card.Title style={{marginLeft:'10px', marginTop:'10px'}}>Liste des Produits disponibles</Card.Title>
                    <div style={{display: 'flex',  justifyContent:'space-around', flexDirection: 'row', flexWrap: 'wrap'}}>
                        <ProductList dataProduct={productDatabase}/>
                    </div>  
                </div>
            </section>
        );
    }
}

export default Home;