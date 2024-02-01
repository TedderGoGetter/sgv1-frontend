import { Link, NavLink } from 'react-router-dom'
import './header.scss'
import { useState } from 'react'

const Header = () => {

    const [loggedIn, setLoggedIn] = useState()




    return (  
    <div className='header'>
        <div className ='header-container'>
            <div className='header-logo'>
                <nav>
                    <NavLink to="/" className='header'>LOGO</NavLink>
                </nav>

            </div>
            <div className='header-links'>
                <a className='header-link'>Post</a>
                {/* <a className='header-link'>About</a> */}
                <NavLink to="browse">Browse</NavLink>
                <NavLink to="about" className='header-link'>About</NavLink>
                <a className='header-link'>Sign In</a>
            </div>

        </div>
    </div>
    );
}
 
export default Header;