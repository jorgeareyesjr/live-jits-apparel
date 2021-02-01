import React, { createRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Routes } from '../../../routes/Routes.js';
import './c-nav.css';

export default function Nav({
	clickHandler,
	isOpen,
}) {
	const navLinksRef = createRef();

	useEffect(() => {
		const animateSlide = () => {
			const links = navLinksRef.current;

			if (!isOpen) {
				links.style.maxHeight = null;
			} else {
				links.style.maxHeight = links.scrollHeight + "px";
			}

			return null;
		};

		animateSlide();
	}, [isOpen]);

	const navClassName = () => {
		let className = isOpen
			? "c-nav c-nav--is-open"
			: "c-nav";

		return className;
	};

	return (
		<nav className={navClassName()}>
			<ul
				className="c-nav__links"
				ref={navLinksRef}
			>
				{
					Routes.map((route, i) => {
						// @TODO: Add support for primary routes
						if (route.isPrimary) {
							return (
								<li
									key={i*i}
									className="c-nav__link"
									onClick={clickHandler}
								>
									<Link to={route.path}>{route.name}</Link>
								</li>
							)
						};
						// @TODO: Add support for secondary routes
						return null;
					})
				}
			</ul>
		</nav>
	);
};
