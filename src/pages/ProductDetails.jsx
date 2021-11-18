import React, {useState, useEffect} from 'react';
import {useParams, useNavigate } from 'react-router-dom';
import Product from '../components/Product';
import useQuery from '../hooks/useQuery';

function ProductDetails() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product] = useQuery('https://fakestoreapi.com/products/'+id)

    //console.log(product)

    return (
        <div>
            <div onClick ={() => navigate('/')}>Back</div>
            {product ? <Product isShowLink={false} {...product}/> : <div>Loading...</div>}
        </div>
    )
}

export default ProductDetails
