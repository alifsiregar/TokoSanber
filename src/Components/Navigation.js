import React, { useState } from 'react'
import NavigationMenu from './NavigationMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'

// Pada komponen ini, saya membuat dua animasi untuk memunculkan menu
// Yaitu maskTransitions dan menuTransitions
// maskTransitions akan memunculkan masking berupa screen agak gelap dibawah menunya
// Sementara menuTransitions akan memunculkan menunya itu sendiri
// Apabila bagian dari maskingnya diklik, maka menu akan close
// Untuk kedua animasi ini, saya ambil dari framework react-spring
// Untuk melihat isi dari menunya, harap melihat file NavigationMenu

function Navigation(){
    const[showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon 
                    icon={ faBars }
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                        key={key} 
                        style={props}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                    >
                        <NavigationMenu closeMenu={() => setShowMenu(false)} />
                    </animated.div>
                )
            }
        </nav>
    )
}

export default Navigation