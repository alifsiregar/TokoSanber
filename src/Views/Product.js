import React, { useState, useEffect } from 'react'
import Loader from '../Components/Loader'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useAxiosGet } from '../Hooks/HttpRequest'

// Ini adalah page untuk setiap produknya
// Apabila user mengklik salah satu product pada product card di homepage, maka user akan dibawa ke page ini
// Yang berisi informasi tentang produk yang telah diklik oleh user

function Product(){
    const { id } = useParams()
    const url = `https://5ed90ac34378690016c6ab39.mockapi.io/api/v1/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null

    if(product.error){
        content = <p>Product Not Found</p>
    }

    if(product.loading){
        content = <Loader />
    }

    if(product.data){
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name}
                        className="mb-3"
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    }

    return (
        <div>
            {content}
        </div>
    )
}

export default Product