import React, { useEffect, useState } from 'react'
import axios from 'axios' 

// Komponen ini saya gunakan untuk mengambil json data dari API menggunakan axios
// Terdapat 3 elemen penting, yaitu loading, data, dan error
// Apabila data masih loading, maka loading akan true
// Setelah data muncul, maka loading akan diset false dan data akan memiliki value dari response APInya
// Apabila tidak mendapatkan response, maka akan dicatch oleh axios dan error akan diset true
// Untuk melihat url dari APInya, bisa dilihat di Home

export function useAxiosGet(url){
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false,
    })

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false,
        })
        axios.get(url)
            .then(response => {
                setRequest({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])

    return request
}