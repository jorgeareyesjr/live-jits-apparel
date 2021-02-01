import React from 'react';
import { Link, Route, useRouteMatch } from "react-router-dom";
// import { allShopAccessories } from '../../../data/Shop.js';
// import AccessoriesScene from '../scenes/accessories/AccessoriesScene.js';

function AccessoriesRouter() {
	const { url, path } = useRouteMatch();

  return (
    <div className="o-router o-router--product">
			<Route exact path={`${url}`}>
				<ul>
					{/* {
						allShopAccessories.map(({ product_name, redirect }, i) => {
							return (
								<li key={i*i}>
									<Link to={`${url}/${redirect}`}>{product_name}</Link>
								</li>
							)
						})
					} */}
				</ul>
			</Route>
			{/* <Route exact path={`${url}/:collectionId/:productId`}>
				<ProductScene />
			</Route> */}
			AccessoriesRouter
    </div>
  );
}

export default AccessoriesRouter;