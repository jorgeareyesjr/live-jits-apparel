import React from 'react';
import { Link, useParams } from "react-router-dom";

function ProductScene() {
	const { collectionId, productId } = useParams();

	console.log("Selected: collectionId/productId: ", collectionId, productId);

	return (
		<>
			<Link to={`/shop/products`}>Back to "Shop all Products"</Link>
		</>
	);
};

export default ProductScene;