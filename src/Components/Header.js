import React from 'react'
import Navigation from './Navigation'
import changeMode from '../Actions'
import {useDispatch, useSelector} from 'react-redux'
import {
    Link,
  } from "react-router-dom"

// Ini adalah komponen untuk header pada aplikasi.
// Pada komponen header ini, terdapat 2 fitur
// Yaitu fitur buka menu dan ganti mode light/dark
// Untuk melihat fitur buka menu, bisa melihat file Navigation

function Header(){
    const gantiMode = useSelector( state => state)
    const dispatch = useDispatch()
    return(
        <header className=" border-b p-3 flex justify-between items-center">
            <button className=" rounded-lg flex items-center justify-center border border-gray-500 p-1 w-20" onClick={() => dispatch(changeMode())}>
                <span className="text-xs">{gantiMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <Link to="/" className="font-bold mx-auto">
                <div className=" pr-16">
                    <span>TokoSanber</span>
                </div>
            </Link>
            <Navigation />
        </header>
    )
}

export default Header