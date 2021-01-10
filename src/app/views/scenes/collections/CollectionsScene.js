import React from 'react';
import { Link, useParams } from "react-router-dom";

function CollectionsScene() {
	const { collectionId } = useParams();

	console.log("Selected: collectionId: ", collectionId);

	return (
		<>
			<Link to={`/shop/collections`}>Back to "Shop Collections"</Link>
		</>
	);
};

export default CollectionsScene;