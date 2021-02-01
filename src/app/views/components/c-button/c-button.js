import React from 'react';
import './c-button.css';

export default function Button({
	classes,
	clickHandler,
	text,
	type
}) {
	switch(type) {
		default:
			return (
				<button
					className={[
						`c-button`,
						[...classes]
						].join(' ')
					}
					onClick={clickHandler}
				>{text}</button>
			);
	}
}