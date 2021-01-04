import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from "react-router-dom";
/* Components */
import Header from './views/components/o-header/o-header.js';
import Footer from './views/components/o-footer/o-footer.js';
/* Routers */
import CategoryRouter from './views/routers/CategoryRouter';
import CollectionRouter from './views/routers/CollectionRouter.js';
import ProductRouter from './views/routers/ProductRouter.js';
/* Scenes */
import Home from './views/scenes/home/HomeScene.js';
/* Styles */
import './App.css';

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

	// @TODO: Add a 'Page not found' UI if a path is not recognozed by the app.
  return (
    <div className="o-app">
      <Header/>
			<hr />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				{/* @IDEA: Move routers below to a secondary navigation bar */}
				<Route path={`/shop/categories`}>
					<CategoryRouter />
				</Route>
				<Route path={`/shop/collections`}>
					<CollectionRouter />
				</Route>
				<Route path={`/shop/products`}>
					<ProductRouter />
				</Route>
			</Switch>
			<hr />
			<Footer />
    </div>
  );
}

export default App;
