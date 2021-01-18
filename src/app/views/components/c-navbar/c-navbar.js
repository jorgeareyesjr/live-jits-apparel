import React, { createRef } from 'react';
import { Link } from "react-router-dom";
import { Routes } from '../../../routes/Routes.js';

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
					{
						Routes.map((route, i) => {
							// @TODO: Add support for primary routes
							if (route.isPrimary) {
								return (
									<li key={i*i}>
										<Link
											to={route.path}
											className="c-nav__anchor"
										>{route.name}</Link>
									</li>
								)
							};
							// @TODO: Add support for secondary routes
							return null;
						})
					}
				</ul>
			</nav>
		</>
  );
};

export default Navbar;