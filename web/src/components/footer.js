/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';

const Box = styled.footer`
	grid-area: footer;
	height: 3.5em;
	box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
	background-color: #fff;

	flex-shrink: 0;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Footer = () => (
	<Box>
		<h4
			sx={{
				font: 'heading',
				fontFamily: 'body',
				fontSize: [1],
				color: 'lightText',
			}}
		>
			Created by Hungry Bear Studio
		</h4>
	</Box>
);

export default Footer;
