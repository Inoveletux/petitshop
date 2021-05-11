import React from 'react';
import {CardProduct} from './CardProduct'

export class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <>
                {this.props.dataProduct.map((e)=>{
                    return <CardProduct
                        key={e.productCode}
                        code={e.productCode}
                        prix={e.unitPrice}
                        info={e.description}
                    />
                })}
            </>
        )
    }
}   