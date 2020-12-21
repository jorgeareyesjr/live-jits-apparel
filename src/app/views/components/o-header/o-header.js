import React, { useState } from 'react';
import Navbar from '../c-navbar/c-navbar.js';

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const navState = () => {
    return isOpen ? "o-app__nav c-nav c-nav--is-open" : "o-app__nav c-nav"
	};
	
	function toggleMenu() {
    setIsOpen(!isOpen);
  };

  return (
    <header>
			Header
      <Navbar
				navState={navState}
				toggleMenu={toggleMenu}
			/>
    </header>
  )
};

export default Header;