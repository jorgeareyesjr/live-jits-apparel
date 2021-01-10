import React from 'react';
import { Link, Route, useRouteMatch } from "react-router-dom";
// import { allShopCollections } from '../../../data/Shop.js';
// import CollectionsScene from '../scenes/collections/CollectionsScene.js';

function CollectionsRouter() {
	const { url } = useRouteMatch();
	
  return (
    <div className="o-router o-router--collection">
			<Route exact path={`${url}`}>
				{/* <ul>
					{
						allShopCollections.map(({ product_collection, redirect }, i) => {
							return (
								<li key={i*i}>
									<Link to={`${url}/${redirect}`}>{product_collection}</Link>
								</li>
							)
						})
					}
				</ul> */}
			</Route>
			{/* <Route exact path={`${url}/:collectionId`}>
				<CollectionsScene />
			</Route> */}
    </div>
  );
}

export default CollectionsRouter;
