import React from 'react';
import { Link, Route, useRouteMatch } from "react-router-dom";
import { allShopCategories } from '../../../data/Shop.js';
import CategoryScene from '../scenes/category/CategoryScene.js';

function CategoryRouter() {
	const { url } = useRouteMatch();
	
  return (
    <div className="o-router o-router--category">
			<Route exact path={`${url}`}>
				<ul>
					{
						allShopCategories.map(({ product_category, redirect }, i) => {
							return (
								<li key={i*i}>
									<Link to={`${url}/${redirect}`}>{product_category}</Link>
								</li>
							)
						})
					}
				</ul>
			</Route>
			<Route exact path={`${url}/:categoryId`}>
				<CategoryScene />
			</Route>
    </div>
  );
}

export default CategoryRouter;
