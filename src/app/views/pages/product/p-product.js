import React from 'react';
import { Link, useParams, useRouteMatch } from "react-router-dom";
import { apparelProducts } from '../../../../data/Apparel';

function Product() {
	const { productId } = useParams();
	const { url, path } = useRouteMatch()

	const selectedProduct = apparelProducts.find(
		(product) => product.id === productId
	);

	console.log("PRODUCT: ", url, path, productId)

	return (
		<>
			 <div>
				<h3>{selectedProduct.name}</h3>
				<p>{selectedProduct.description}</p>
				<Link to={'/categories/men/rash-guards'}>Available 
				for men</Link>
				<Link to={'/categories/women/rash-guards'}>Available for women</Link>
				<Link to={'/categories/women/rash-guards'}>Available for kids</Link>
			</div>
		</>
	);
};

export default Product;