/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import BurgerNav from './burgernav';
import SEO from './SEO';

const Container = styled.div`
	grid-area: main;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 3fr;
	grid-template-areas: 'content';
	// 'footer';

	height: 100vh;
	overflow: hidden;
`;

const Content = styled.main`
	grid-area: content;
`;

const MainWrap = styled.div`
	height: 100vh;
	overflow: hidden;
`;
const PageWrap = styled.div`
	overflow: auto;
`;

const Main = ({ children }) => {
	return (
		<MainWrap>
			<Container>
				<BurgerNav pageWrapId={'PageWrap'} outerContainerId={'MainWrap'} />
				<PageWrap>
					<SEO/>
					<Content>{children}</Content>
					{/* <Footer /> */}
				</PageWrap>
			</Container>
		</MainWrap>
	);
};

export default Main;
