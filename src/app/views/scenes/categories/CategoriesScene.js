import React from 'react';
import { Link, useParams } from "react-router-dom";

function CategoriesScene() {
	const { categoryId } = useParams();

	console.log("Selected: categoryId: ", categoryId);

	return (
		<>
			<Link to={`/shop/categories`}>Back to "Shop Categories"</Link>
		</>
	);
};

export default CategoriesScene;