import React, { useEffect } from 'react';
import { Switch, Route, useLocation, useRouteMatch } from "react-router-dom";
import Header from './views/components/o-header/o-header.js';
import Footer from './views/components/o-footer/o-footer.js'
import Home from './views/pages/home/p-home.js';
import Categories from './views/pages/category/p-categories.js';
import './App.css';
import Product from './views/pages/product/p-product.js';

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
				<Route
					exact
					path="/"
					component={Home}
				/>
				<Route
					path='/categories'
					component={Categories}
				/>
				<Route
					path='/products/:productId'
					component={Product}
				/>
			</Switch>
			<hr />
			<Footer />
    </div>
  );
}

export default App;
