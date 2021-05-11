import React from 'react';
import {CardProductZoom} from '../components/CardProductZoom'
import {useParams} from 'react-router-dom'
import {findProduct} from '../lib/database'

export default function Product(props) {
    let {code} = useParams();
    
    let myProduct = findProduct(code);

    if(!myProduct){
        <div>Ce produit n'existe pas</div>
    }
    return (
        <>
            <CardProductZoom 
                    key={myProduct.productCode}
                    prix={myProduct.unitPrice}
                    code={myProduct.productCode}
                    info={myProduct.description}
            />
        </>
    )
}