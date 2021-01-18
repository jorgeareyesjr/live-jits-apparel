import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
/* Routers */
import AccessoriesRouter from './views/routers/AccessoriesRouter.js';
import CategoriesRouter from './views/routers/CategoriesRouter.js';
import CollectionsRouter from './views/routers/CollectionsRouter.js';
import ProductsRouter from './views/routers/ProductsRouter.js';
import KidsApparelRouter from './views/routers/KidsApparelRouter.js';
import MensApparelRouter from './views/routers/MensApparelRouter.js';
import WomensApparelRouter from './views/routers/WomensApparel.js';
/* Components */
import Header from './views/components/o-header/o-header.js';
import Footer from './views/components/o-footer/o-footer.js';
/* Scenes */
import Home from './views/scenes/home/HomeScene.js';
import NoMatch from './views/scenes/noMatch/NoMatchScene.js';

function App() {
	const { pathname, hash } = useLocation();

	// Effect to determine navigation behavior.
	// If a hash in the URL is detected, jump to the specified element, otherwise, tell the router to switch to the top of the selected page.
	useEffect(() => {
		let useEffectAborted = false;

		function scrollToTop() {
			window.scrollTo(0, 0);
		};
		function scrollToID() {
			const id = hash.replace('#', '');
			const element = document.getElementById(id);

			if (element) {
			window.scrollTo({ top: element.offsetTop});
			}
		};

		if(!useEffectAborted) {
			(hash === '') ? scrollToTop() : scrollToID();
		}

		return (
			() => {
			useEffectAborted = true;
			}
		);
	}, [pathname, hash]);

  return (
		<div className="o-app">
			<Header/>
			<hr />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path={`/shop/accessories`}>
					<AccessoriesRouter />
				</Route>
				<Route path={`/shop/categories`}>
					<CategoriesRouter />
				</Route>
				<Route path={`/shop/collections`}>
					<CollectionsRouter />
				</Route>
				<Route path={`/shop/products`}>
					<ProductsRouter />
				</Route>
				<Route path={`/shop/kids-apparel`}>
					<KidsApparelRouter />
				</Route>
				<Route path={`/shop/mens-apparel`}>
					<MensApparelRouter />
				</Route>
				<Route path={`/shop/womens-apparel`}>
					<WomensApparelRouter />
				</Route>
				<Route>
					<NoMatch />
				</Route>
			</Switch>
			<hr />
			<Footer />
		</div>
	);
}

export default App;
