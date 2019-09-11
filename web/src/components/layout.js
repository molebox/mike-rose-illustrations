import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';

const Container = styled.div`
	display: grid;
	grid-template-columns: 0.2fr 3fr;
	grid-template-areas: 'sidebar main';
	height: 100vh;
	overflow: hidden;
`;

const Layout = ({ children }) => (
	<Container>
		<Global
			styles={css`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}
				body {
					scroll-behavior: smooth;
					overflow-y: scroll;
					-webkit-overflow-scrolling: touch;
					overflow: hidden;
				}
			`}
		/>
		{children}
	</Container>
);

export default Layout;
