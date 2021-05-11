import React, { useContext }  from 'react';
import {Card, Button} from 'react-bootstrap';
import {ShoppingCartOutlined, ZoomInOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import {AppContext} from '../Context.js'

export function CardProduct (props){
    const context = useContext(AppContext);

    const handleClick = (e) => {
        // console.log(e)
        context.addToBasket(e)
    };
    // console.log(props);
    return (  
        <Card bg='dark' variant='dark' style={{ color:'white', margin:'5px', width:'30%'}}>
            <Card.Body >
                <Card.Title>{props.info}</Card.Title>
                <Card.Text>{props.prix} €</Card.Text>
                <Card.Img src={`${props.code}.jpg`}></Card.Img>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button 
                        onClick={() =>handleClick(props.code)}
                        variant='dark' 
                        style={{
                            backgroundColor:'grey', 
                            display: 'flex', 
                            marginTop:'10px'}}
                    >
                        <ShoppingCartOutlined style={{color:'black'}}/>
                    </Button>
                    <Link to={`/product/${props.code}`}>
                        <Button 
                            variant='dark' 
                            style={{
                                backgroundColor:'orange', 
                                display: 'flex', 
                                marginTop:'10px'
                        }}>
                            <ZoomInOutlined />
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}