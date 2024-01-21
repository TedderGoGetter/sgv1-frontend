import './header.scss'
import { useState } from 'react'

const Header = () => {

    const [loggedIn, setLoggedIn] = useState()




    return (  
    <div className='header'>
        <div className ='header-container'>
            <div className='header-logo'>
                <a className='header'>LOGO</a>
            </div>
            <div className='header-links'>
                <a className='header-link'>Browse</a>
                <a className='header-link'>Sign In</a>
            </div>

        </div>
    </div>
    );
}
 
export default Header;