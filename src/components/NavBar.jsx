import React, { useContext } from 'react';
import {Navbar , Nav} from 'react-bootstrap';
import {AppContext} from '../Context'
import { Link } from 'react-router-dom';

export function NavBar (props) {  
    const context = useContext(AppContext);
    // console.log("🚀 ~ file: NavBar.jsx ~ line 7 ~ NavBar ", context)
    return (
        <>
            <Navbar bg="dark" variant="dark" >
                <Navbar.Brand style={{paddingLeft:"10px", textAlign: "center"}}href="#home">Menu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="linkNavBar" to="/" >
                        Page d'accueil
                    </Link>
                    <Link className="linkNavBar" to="/Basket">
                        Panier
                    </Link>
                    {/* <Link to="/basket">
                        Panier
                    </Link> */}
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={{marginRight:'10px'}}>Mon Panier {context.basket.length}</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}