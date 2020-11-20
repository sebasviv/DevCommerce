import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwsomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Button } from './Button';
import logo from '../images/logodev.png';


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

      useEffect(() => {
          showButton()
      }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        DevCommerce <img className='devlogo fa-typo3' src={logo} alt="Logo"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                                Home
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
