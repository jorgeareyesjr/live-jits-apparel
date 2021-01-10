import React from 'react';

function NoMatchScene ({ location }) {
	return (
		<>
			<h3>No match for <code>{location.pathname}</code></h3>
		</>
	);
};

export default NoMatchScene;