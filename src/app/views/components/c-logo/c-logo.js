import React from 'react';
import SVG from '../../../assets/logo.jpg';
import './c-logo.css';

export default function Logo() {
	return (
		<div className='c-logo'>
			<img src={SVG} />
		</div>
	)
};
