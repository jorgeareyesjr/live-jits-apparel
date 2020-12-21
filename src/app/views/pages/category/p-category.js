import React from 'react';
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { apparelCategories } from '../../../../data/Apparel';
import Products from '../product/p-products.js';

function Category() {
	const { categoryId } = useParams();
	const { url, path } = useRouteMatch()

	const selectedCategory = apparelCategories.find(
		(category) => category.id === categoryId
	);
	
	console.log("CATEGORY: ", url, path, categoryId, selectedCategory)

	return (
		<>
			<hr />
			<p>CATEGORY PAGE for { selectedCategory.name }</p>
			<ul>
				{
					selectedCategory.products.map((product) => {
						return (
							<li key={product.id}>
								<Link to={`${url}/${product.id}`}>{product.name}</Link>
							</li>
						)
					})
				}
			</ul>
			<Route path={`${path}/:productId`}>
        <Products />
      </Route>
		</>
	);
};

export default Category;