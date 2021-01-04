import React from 'react';
import { Link, Route, useRouteMatch } from "react-router-dom";
import { allShopCollections } from '../../../data/Shop.js';
import CollectionScene from '../scenes/collection/CollectionScene.js';

function CollectionRouter() {
	const { url } = useRouteMatch();
	
  return (
    <div className="o-router o-router--collection">
			<Route exact path={`${url}`}>
				<ul>
					{
						allShopCollections.map(({ product_collection, redirect }, i) => {
							return (
								<li key={i*i}>
									<Link to={`${url}/${redirect}`}>{product_collection}</Link>
								</li>
							)
						})
					}
				</ul>
			</Route>
			<Route exact path={`${url}/:collectionId`}>
				<CollectionScene />
			</Route>
    </div>
  );
}

export default CollectionRouter;
