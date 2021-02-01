import React, { useState } from 'react';
import Button from'../c-button/c-button.js';
import Logo from '../c-logo/c-logo.js';
import Nav from '../c-nav/c-nav.js';
import './c-header.css';

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const buttonIcons = [
		<span>&#9776;</span>,
		<span>&#9747;</span>,
	];

	function Icon() {
		const icon = isNavOpen
			? buttonIcons[1]
			: buttonIcons[0]
		;

		return icon;
	};

	function toggleDropdown() {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<>
			<header className="c-header">
				<div className="c-header__logo">
					<Logo />
				</div>
				<div className="c-header__button">
					<Button
						classes={['c-button--nav-toggle']}
						clickHandler={toggleDropdown}
						text={<Icon />}
					/>
				</div>
			</header>
			<Nav
				clickHandler={toggleDropdown}
				isOpen={isNavOpen}
			/>
		</>
	)
};
