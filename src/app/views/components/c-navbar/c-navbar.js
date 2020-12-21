import React, { createRef } from 'react';
import { Link } from "react-router-dom";

// @NOTE: Navbar should be sticky and have dropdown options.
function Navbar(props) {
	const dropdownMenu = createRef();

	const navState = () => {
		return props.navState();
	}
	
  return (
		<>
			<nav	
				className={navState()}
				ref={dropdownMenu}
			>
				<ul className="c-nav">
					<li>
						<Link
							to="/"
							className="c-nav__anchor"
						>Home</Link>
					</li>
					<li>
						<Link
							to="/categories"
							className="c-nav__anchor"
						>Categories</Link>
					</li>
				</ul>
			</nav>
		</>
  );
};

export default Navbar;