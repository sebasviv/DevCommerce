import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwsomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Button } from './Button';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        DevCommerce
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/inicio' className='nav-links' onClick={closeMobileMenu}>
                                Inicio
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/quienessomos' className='nav-links' onClick={closeMobileMenu}>
                                Quienes Somos
                                </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contacto' className='nav-links' onClick={closeMobileMenu}>
                                Contacto
                                </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Contacto</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar
