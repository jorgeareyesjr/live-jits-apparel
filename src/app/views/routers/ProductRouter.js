import React from 'react';
import { Link, Route, useRouteMatch } from "react-router-dom";
import { allShopProducts } from '../../../data/Shop.js';
import ProductScene from '../scenes/product/ProductScene.js';

function ProductRouter() {
	const { url, path } = useRouteMatch();

  return (
    <div className="o-router o-router--product">
			<Route exact path={`${url}`}>
				<ul>
					{
						allShopProducts.map(({ product_name, redirect }, i) => {
							return (
								<li key={i*i}>
									<Link to={`${url}/${redirect}`}>{product_name}</Link>
								</li>
							)
						})
					}
				</ul>
			</Route>
			<Route exact path={`${url}/:collectionId/:productId`}>
				<ProductScene />
			</Route>
    </div>
  );
}

export default ProductRouter;