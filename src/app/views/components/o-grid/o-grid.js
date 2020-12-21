import React from 'react';
import './o-grid.css';

// @NOTES: On small screens (1 grid item per row).
// @NOTES: On medium screens, (2 grid items per row).
// @NOTES: On large screens, (3 grid items per row).
function Grid({ gridItems }) {
	return (
		<>
			<h4>Grid</h4>
			<div className={'o-grid'}>
				{
					gridItems.map((item, i) => {
						return (
							<div key={`${i*i}`}>
								{ item }
							</div>
						)
					})
				}
			</div>
		</>
	)
};

export default Grid;