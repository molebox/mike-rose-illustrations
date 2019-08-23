import React from 'react';

const Main = ({ children }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				border: '1px solid black',
			}}
		>
			{children}
		</div>
	);
};

export default Main;
