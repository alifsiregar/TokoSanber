import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {
    Link,
  } from "react-router-dom"

// Pada komponen ini, terdapat 3 isi dari menu
// Yaitu Home, About, dan Weather
// Masing-masing isinya akan membawa kita ke laman yang bersangkutan

function NavigationMenu(props){
    const[showMenu, setShowMenu] = useState(false)
    const gantiMode = useSelector( state => state)
    return(
        <nav>
            <div className={gantiMode ? " text-black font-bold py-3" : 'font-bold py-3'}>
            <span>TokoMenu</span>
            </div>
                <ul>
                    <li>
                        <Link to="/" className=" text-blue-500 p-3 border-t border-b block" onClick={props.closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className=" text-blue-500 p-3 border-b block" onClick={props.closeMenu}>About</Link>
                    </li>
                    <li>
                        <Link to="/weather" className=" text-blue-500 p-3 border-b block" onClick={props.closeMenu}>Weather</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default NavigationMenu