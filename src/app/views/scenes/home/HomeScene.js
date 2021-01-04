import React, { useEffect } from 'react';
import Grid from '../../components/o-grid/o-grid.js';
import Tabs from '../../components/o-tabs/o-tabs.js';
import { debounce } from '../../../utilities/index.js';

const gridItems = [ 1, 2, 3 ];

function Body() {
	useEffect(() => {
		let useEffectAborted = false;

    function handleScroll() {
			const scrollTop = window.scrollY;
			console.log(scrollTop);
		}
		
		function debounceScroll() {
			return debounce(handleScroll);
		}

		if(!useEffectAborted) {
			window.addEventListener('scroll', debounceScroll());
    }

    return (
			() => {
				window.removeEventListener('scroll', debounceScroll());

        useEffectAborted = true;
      }
		);
	}, []);
	
	return (
		<>
			<main style={ { height: '1000vh' } }>
				<section>
					<h1>Tabs Section</h1>
					<Tabs />
				</section>
				<section>
					<h1>Grid Section</h1>
					<Grid
						gridItems={gridItems}
						maxItemsInRow={3}
					/>
				</section>
			</main>
		</>
	)
};

export default Body;