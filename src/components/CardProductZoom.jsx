import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {ShoppingCartOutlined, ZoomOutOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';

export function CardProductZoom (props){
    return ( 
        <Card bg='dark' variant='dark' style={{ color:'white', margin:'5px', width:'70%'}}>
            {/* <Card.Img></Card.Img> */}
            <Card.Body >
                <Card.Title>{props.info}</Card.Title>
                <Card.Text>{props.prix} €</Card.Text>
                <Card.Img src={`../../${props.code.toLowerCase()}.jpg`}></Card.Img>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Button variant='dark' style={{backgroundColor:'grey', display: 'flex', marginTop:'10px'}}>
                        <ShoppingCartOutlined style={{color:'black'}}/>
                    </Button>
                    <Link to='/'>
                        <Button variant='dark' style={{backgroundColor:'orange', display: 'flex', marginTop:'10px'}}>
                            <ZoomOutOutlined />
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}