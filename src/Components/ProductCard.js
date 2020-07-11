import React from 'react'
import {
    Link,
  } from "react-router-dom"

// Komponen ini adalah komponen untuk tiap-tiap dari product card yang ada pada homepage
// Product card ini menampilkan informasi untuk productnya, seperti nama, harga, foto, serta deskripsi singkat
// Apabila product card ini diklik, maka akan membawa kita ke page product tersebut

function ProductCard(props){
    return(
        <div className="border mb-4 rounded overflow-hidden">
            <Link to={`/products/${props.product.id}`}>
                <div
                    style={{
                        'backgroundImage': `url('${props.product.images[0].imageUrl}')`
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                    <Link to={`/products/${props.product.id}`}>
                        { props.product.name }
                    </Link>
                </h3>
                <div className="font-bold mb-3">
                    $ { props.product.price }
                </div>
                <div className="mb-3">
                    { props.product.description }
                </div>
                <Link
                    to={`/products/${props.product.id}`}
                    className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    View
                </Link>
            </div>
        </div>
    )
}

export default ProductCard