import React, { memo } from 'react';

const BlockImages = ({ images }) => (
	<div className="blockImages">
		{images}
	</div>
);

export default memo(BlockImages);
