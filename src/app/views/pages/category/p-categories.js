import React from 'react';
import { Link, Route, useRouteMatch } from "react-router-dom";
import Category from './p-category.js';
import { apparelCategories } from '../../../../data/Apparel';

function Categories() {
	const { url, path } = useRouteMatch()

	console.log("CATEGORIES: ", url, path)

	return (
		<>
			<p>CATEGORIES</p>
			<ul>
        {
					apparelCategories.map(({ name, id }) => {
						return (
							<li key={id}>
								<Link to={`${url}/${id}`}>{name}</Link>
							</li>
						)
					})
				}
      </ul>
			<Route path={`${path}/:categoryId`}>
        <Category />
      </Route>
		</>
	);
};

export default Categories;