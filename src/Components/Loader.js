import React from 'react'

// Disini saya membuat sebuah komponen untuk loading
// Animasi loading ini saya ambil dari framework react-spring

function Loader(){
    return(
        <div className="flex justify-center">
            <div className="loader"></div>
        </div>
    )
}

export default Loader