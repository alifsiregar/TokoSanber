import React, { useState, useEffect } from 'react'
import HelloWorld from '../Components/HelloWorld'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequest'

// Ini adalah homepage dari aplikasi TokoSanber, dimana user akan melihat berbagai macam produk yang disediakan
// Untuk melihat product cardnya, dapat melihat di file ProductCard
// Disini juga terdapat url untuk mendapatkan informasi tentang produk-produknya dari mockAPI

function Home(){
    const url = "https://5ed90ac34378690016c6ab39.mockapi.io/api/v1/products?page=1&limit=10"
    
    let products = useAxiosGet(url)

    let content = null

    if(products.error){
        content = <p>Product Not Found</p>
    }

    if(products.loading){
        content = <Loader />
    }

    if(products.data){
        content =
            products.data.map((product) =>
                <div key={product.id}>
                    <ProductCard 
                        product={product}
                    />
                </div>
            )
    }

    return(
        <div>
            <h1 className="font-bold text-2xl -mb-1">Best Sellers</h1>
            <p className="mb-3">
                <HelloWorld name="Alif" />
            </p>
            { content }
        </div>
    )
}

export default Home