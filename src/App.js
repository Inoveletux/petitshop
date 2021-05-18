//Css & Bootstrap
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//React
import React from 'react';
//React Router dom
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Basket from './pages/Basket';
import Product from './pages/Product';
//Barre de Nav
import {NavBar} from './components/NavBar.jsx';
// Contexte de l'application
import {AppContext} from './Context.js';
import {ErrorStripe} from './components/ErrorStripe'


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            basket          : [],
            voucherRate     : null,
            addToBasket     : (productCode) => {
                let basket = this.state.basket;
                // basket.push(productCode); On fait pareil mais avec la quantité pour gérer les doublons
                let basketItem = basket.find((item)=> item.productCode === productCode);

                if (basketItem === undefined){
                    basket.push({ productCode: productCode, quantity: 1});
                } else{
                    basketItem.quantity++
                }
                this.setState({...this.state, basket: basket})
            },
            clearBasket     : () => {},
            setVoucherRate  : (voucherRate) => {}
        }
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <BrowserRouter>
                    <header>
                        <NavBar/>
                    </header>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/basket">
                            <Basket/>
                        </Route>
                        <Route exact path="/product/:code">
                            <Product/>
                        </Route>
                        <Route exact path="/success">
                            <Home/>
                        </Route>
                        <Route exact path="/error">
                            <ErrorStripe/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AppContext.Provider>
        );
    }
}