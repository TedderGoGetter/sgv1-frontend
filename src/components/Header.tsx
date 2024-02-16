import { Link, NavLink} from 'react-router-dom'
import './header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

const Header = () => {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    
    const onUpdateActiveLink = (value:string) => {
        setActiveLink(value)
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#browse" className={ activeLink === 'browse' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('browse')}>Browse</Nav.Link>
            <Nav.Link href="#post" className={ activeLink === 'post' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('post')}>Post</Nav.Link>
            <Nav.Link href="#login"className={ activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('login')}>Login</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Separated link
                </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt=""/></a>
                    <a href="#"><img src={navIcon2} alt=""/></a>
                    <a href="#"><img src={navIcon3} alt=""/></a>
                    {/* <a href="#"><img src={''} alt="Discord"/></a>
                    <a href="#"><img src={''} alt="Instagram"/></a> */}
                </div>
                <button className="vvd"><span>Let’s Connect</span></button>
            </span>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}



    // return (  
    // <div className='header'>
    //     <div className ='header-container'>
    //         <div className='header-logo'>
    //             <nav>
    //                 <NavLink to="/" className='header'>LOGO</NavLink>
    //             </nav>

    //         </div>
    //         <div className='header-links'>
    //             <a className='header-link'>Post</a>
    //             {/* <a className='header-link'>About</a> */}
    //             <NavLink to="browse">Browse</NavLink>
    //             <NavLink to="about" className='header-link'>About</NavLink>
    //             <a className='header-link'>Sign In</a>
    //         </div>

    //     </div>
    // </div>
    // );

export default Header;