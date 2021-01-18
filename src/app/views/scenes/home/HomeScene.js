import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Grid from '../../components/o-grid/o-grid.js';
import Tabs from '../../components/o-tabs/o-tabs.js';
import { debounce } from '../../../utilities/index.js';
import { testConnection } from '../../../state/ducks/connection/operations.js';

const gridItems = [ 1, 2, 3 ];

function HomeScene() {
	const connection = useSelector(state => state.connection);
	const dispatch = useDispatch();

	console.log("HomeScene connection: ", connection);

	// Effect to test out the redux connection.
	useEffect(() => {
		let useEffectAborted = false;

		if(!useEffectAborted) {
			dispatch(testConnection());
		}

    return (
			() => {
        useEffectAborted = true;
      }
		);
	}, [dispatch]);

	// Effect to tracking the window scroll - uses a custom debounce function.
	useEffect(() => {
		let useEffectAborted = false;

    function handleScroll() {
			const scrollTop = window.scrollY;
			console.log("scrollTop: ", scrollTop);
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

export default HomeScene;