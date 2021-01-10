import React from 'react';
import { Link, Route, useRouteMatch } from "react-router-dom";
// import { allShopCategories } from '../../../data/Shop.js';
// import CategoriesScene from '../scenes/categories/CategoriesScene.js';

function WomensApparelRouter() {
	const { url } = useRouteMatch();
	
  return (
    <div className="o-router o-router--mens-apparel">
			<Route exact path={`${url}`}>
				{/* <ul>
					{
						allShopCategories.map(({ product_category, redirect }, i) => {
							return (
								<li key={i*i}>
									<Link to={`${url}/${redirect}`}>{product_category}</Link>
								</li>
							)
						})
					}
				</ul> */}
			</Route>
			{/* <Route exact path={`${url}/:categoryId`}>
				<CategoriesScene />
			</Route> */}
    </div>
  );
}

export default WomensApparelRouter;
