import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { useUserContext } from '../hooks'
import { LuMenu, LuX } from 'react-icons/lu'

const TopNav = () => {
    const { user, logoutUser } = useUserContext()
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = () => { setNavOpen(!navOpen) }
    return (
        <nav className='grid text-white'>
            <button type='button'
                onClick={toggleNav}
                aria-label='Toggle navigation menu'
                aria-controls='main-navigation'
                aria-expanded={navOpen}
            >
                {navOpen
                    ? <LuX size={24} aria-hidden='true' className='ms-auto' />
                    : <LuMenu size={24} aria-hidden='true' className='ms-auto' />
                }
            </button>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <ul
                id='main-navigation'
                onClick={toggleNav}
                className={`${navOpen ? 'block' : 'hidden'}`}
            >
                {user
                    ? (
                        <>
                            <li><NavLink to='/profile' >Profile</NavLink></li>
                            <li><NavLink to='/waiting-list' >Waiting list</NavLink></li>
                            <li><NavLink to='/history-list' >History list</NavLink></li>
                            <li><NavLink onClick={logoutUser}>Logout</NavLink></li>
                            {user.isAdmin && <li><NavLink to='/admin' >Admin</NavLink></li>}
                        </>
                    )
                    : (
                        <>
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='/signup' >Signup</NavLink></li>
                        </>
                    )}
                <hr />
                <li><NavLink to='/search'>Search movies</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default TopNav