import React, { useRef, useState } from 'react';
import './c-accordion.css';

export default function Accordion({ buttonIcons, children, slideStyle }) {
	const slideRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	function AccordionButtonIcon() {
		const icon = isOpen
			? buttonIcons[1]
			: buttonIcons[0]
		;

		return <>{icon}</>;
	};

	const accordionClassName = () => {
		let className = isOpen
			? "c-accordion c-accordion--is-open"
			: "c-accordion";
		
		return className;
	};
	
	const animateSlide = () => {
		setIsOpen(!isOpen);

		const slide = slideRef.current;

		switch(slideStyle) {
			case 'dropdown':
				if (slide.style.maxHeight) {
					slide.style.maxHeight = null;
				} else {
					slide.style.maxHeight = slide.scrollHeight + "px";
				}

				break;
		}

		return null;
	};

	return (
		<div className={`${accordionClassName()}`}>
			<button
				className="c-accordion__button"
				onClick={animateSlide}
			>
				<AccordionButtonIcon />
			</button>
			<div
				className="c-accordion__slide"
				ref={slideRef}
			>{children}</div>
		</div>
	)
};
