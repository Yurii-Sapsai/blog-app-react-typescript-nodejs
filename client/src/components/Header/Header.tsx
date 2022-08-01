import React, { FC, useState } from 'react';
import './Header.sass';

import { FaBars, FaTimes } from 'react-icons/fa';

const Logo = require("../../images/logo.png");



const Header: FC = () => {

  const [click, setClick] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (): void => {
    setClick(!click);
  }

  const closeMenu: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setClick(false)
  }

  return (
    <header className='header'>
      <nav className='navbar'>

        <a href="/" className='logo'>
          <img src={Logo} alt="logo" />
        </a>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <button onClick={closeMenu}> Sign Up</button>
          </li>
          <li className='nav-item'>
            <button onClick={closeMenu}> Sign In</button>
          </li>
        </ul>

        <div className='humburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: 'black' }} />) : (<FaBars size={30} style={{ color: 'black' }} />)}
        </div>

      </nav>
    </header>
  )
}

export default Header;