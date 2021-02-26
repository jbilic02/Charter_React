import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    //prikaz botuna
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
        
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        CHARTER <i className='fas fa-ship' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact-us' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    {Button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}
                </div>
            </nav>
        </>
    );
}

export default NavBar
