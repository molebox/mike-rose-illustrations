/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Section from './Section';
import Letter from './Letter';

const Container = styled.div`
	grid-area: sidebar;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
	grid-template-rows: 0.2fr 1fr 1fr;
	grid-template-areas:
		'toggle'
		'section'
		'.';

	//border-right: solid 3px black;
	height: 110vh;

	position: -webkit-sticky;
	position: sticky;
	top: 0;
`;

const Sidebar = ({ letters }) => (
	<Container
		sx={{
			borderRight: 'solid 3px',
			borderColor: 'text',
		}}
	>
		<Section>
			{letters.map((letter, index) => (
				<div key={index}>
					<Letter>{letter}</Letter>
				</div>
			))}
		</Section>
	</Container>
);

export default Sidebar;
