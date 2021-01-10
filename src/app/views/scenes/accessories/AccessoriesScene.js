import React from 'react';
import { Link, useParams } from "react-router-dom";

function AccessoriesScene() {
	// const { collectionId, productId } = useParams();

	// console.log("Selected: collectionId/productId: ", collectionId, productId);

	return (
		<>
			<Link to={`/shop/accessories`}>Back to "Shop all Accessories"</Link>
		</>
	);
};

export default AccessoriesScene;