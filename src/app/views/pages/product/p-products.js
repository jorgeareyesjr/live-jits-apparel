import React from 'react';
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { apparelCategories } from '../../../../data/Apparel';

function Products() {
	const { categoryId, productId } = useParams();
	const { url, path } = useRouteMatch()

	const selectedCategory = apparelCategories.find(
		(category) => category.id === categoryId
	);
	const selectedProduct = selectedCategory.products.find(
		(product) => product.id === productId
	);

	console.log("PRODUCT: ", url, path, productId)

	return (
		<>
			<hr />
			 <div>
				<h3>{selectedProduct.name}</h3>
				<p>{selectedProduct.description}</p>
				{/* NOTE: Replace this `href` with production-friendly URL */}
				<a href={`http://localhost:3000/products/${productId}`}
				>See Details for {selectedProduct.name}</a>
			</div>
		</>
	);
};

export default Products;