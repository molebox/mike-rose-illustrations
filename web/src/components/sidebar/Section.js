import * as React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	grid-area: section;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(1fr, 2fr));

	grid-template-areas:
		'.'
		'letter'
		'.';

	position: -webkit-sticky;
	position: sticky;
	top: 0;
`;

const Section = ({ children }) => <Container>{children}</Container>;

export default Section;
