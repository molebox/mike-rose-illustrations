/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import Navbar from './navbar/navbar';
import Footer from './footer';

const Container = styled.div`
	grid-area: main;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 0.5fr 2fr 0.5fr;
	grid-template-areas:
		'.'
		'content'
		'footer';

	height: 100vh;
	overflow: auto;
	// overflow: hidden;
`;

const Content = styled.main`
	grid-area: content;
	background-color: #ffffff;
	background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);

	flex: 1 0 auto;
`;

// const Header = styled.header`
// 	grid-area: header;
// 	margin: 2em;
// `;

// export const Title = styled.h1`
// 	font-size: 5em;
// 	display: flex;
// 	justify-content: center;

// 	@media (max-width: 920px) {
// 		font-size: 3em;
// 	}

// 	@media (max-width: 1024px) {
// 		font-size: 1em;
// 	}
// `;

// const MainWrap = styled.div`
// 	// height: 100vh;
// 	// overflow: auto;
// `;
// const PageWrap = styled.div`
// 	overflow: auto;
// `;

const Main = ({ children }) => {
	return (
		<Container>
			<Navbar />
			<Content>{children}</Content>
			<Footer />
		</Container>
	);
};

export default Main;
