import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

const MainGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 2fr 1.5fr 1fr;
	grid-template-areas: 'sidebar main';

	height: 100vh;
	overflow: hidden;

	// @media (max-width: 768px) {
	//     grid-template-columns: 1fr;
	//     grid-template-areas:
	//     'sidebar'
	//     'main';

	//     overflow: auto;
	//   }
`;

const Layout = ({ children }) => (
	<MainGrid>
		<Global
			styles={css`
				body {
					margin: 0;
					padding: 0;
					font-size: 10px;
				}
				scroll-behavior: smooth;
				overflow-y: scroll;
				-webkit-overflow-scrolling: touch;
			`}
		/>
		{children}
	</MainGrid>
);

export default Layout;
