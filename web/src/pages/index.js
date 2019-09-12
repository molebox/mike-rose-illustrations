/** @jsx jsx */
import { jsx } from 'theme-ui';
import Sidebar from '../components/sidebar/Sidebar';
import Layout from '../components/layout';
import Main from '../components/main';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const home = ['H', 'O', 'M', 'E'];

const Content = styled.div`
	// display: flex;
	// flex-direction: column;
	// justify-content: center;
	// padding: 0;
	// margin-top: 2em;

	max-width: 1100px;
	margin: 2em auto;
	// overflow: auto;
	// padding: 1.5em;
	height: 100vh;
`;

// const TitleAndLogo = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	margin: 2em;
// 	justify-content: center;
// 	align-items: center;

// 	@media (max-width: 1024px) {
// 		display: flex;
// 		flex-direction: row;
// 		justify-content: center;
// 		align-items: center;
// 		margin: 2em 2em 2em 0;
// 	}

// 	@media (max-width: 768px) {
// 		display: flex;
// 		flex-direction: row;
// 		margin: 2em;
// 		justify-content: center;
// 		align-items: center;
// 	}
// `;

// const ImageContainer = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// `;

const Image = styled(Img)`
	// width: 100%;
	height: 65vh;
	border: solid 0.1em black;
	border-radius: 0.4em;

	@media (max-width: 920px) {
		height: 50vh;
		// width: 85%;
		margin: 2em;
		// margin: 2em 2em 5em 2em;
	}
`;

export const Title = styled.h1`
	font-size: 5em;
	display: flex;
	justify-content: center;

	@media (max-width: 920px) {
		font-size: 3em;
	}

	@media (max-width: 1024px) {
		font-size: 1em;
	}
`;

export const SubTitle = styled.h4`
	margin: 1em;
	padding: 0.6em;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 920px) {
		font-size: 0.4em;
		margin: 0 50px 0px 50px;
	}

	@media (max-width: 1024px) {
		font-size: 1em;
		// margin: 0 1em 1em 1em;
	}
`;

export const Index = () => {
	const sanity = useStaticQuery(query);
	const edges = sanity.allSanityHomePage.edges;

	return (
		<Layout>
			<Sidebar letters={home} />
			<Main>
				<Content>
					{edges.map(({ node }, index) => (
						<div key={index}>
							<Image fluid={node.mainImage.asset.fluid} />
							<SubTitle
								sx={{
									color: 'text',
									fontFamily: 'body',
									fontWeight: 'heading',
									lineHeight: 'body',
									letterSpacing: 'body',
									fontSize: [3],
								}}
							>
								{node.description}
							</SubTitle>
						</div>
					))}
				</Content>
			</Main>
		</Layout>
	);
};
export default Index;

// /** @jsx jsx */
// import { jsx } from 'theme-ui';
// import React from 'react';
// import Layout from './../components/layout';
// import Main from './../components/main';
// import Sidebar from '../components/sidebar/Sidebar';
// import styled from '@emotion/styled';
// import Img from 'gatsby-image';
// import { graphql, useStaticQuery } from 'gatsby';
// import _ from 'lodash';

// const shop = ['S', 'H', 'O', 'P'];

// const Header = styled.header`
// 	height: 23vh;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	text-align: center;
// 	padding: 2rem;

// 	& > h1 {
// 		font-family: Open Sans;
// 		letter-spacing: 3px;
// 		font-size: 4rem;
// 		margin-bottom: 2rem;
// 		line-height: 1.2;

// 		@media (max-width: 700px) {
// 			font-size: 2rem;
// 		}
// 	}

// 	& > p {
// 		fonst-size: 2rem;
// 		font-family: Open Sans;
// 	}
// `;

// const Container = styled.main`
// 	max-width: 1100px;
// 	margin: auto;
// 	overflow: auto;
// 	// padding: 0 2rem;
// 	// height: 100%;
// `;

// const Card = styled.div`
// 	display: grid;
// 	grid-template-rows: repeat(2, 1fr);
// 	margin-bottom: 2rem;
// 	padding: 2rem;

// 	& > div {
// 		padding: 1rem;
// 	}

// 	& h4 {
// 		margin-bottom: 2rem;
// 	}

// 	@media (max-width: 700px) {
// 		display: block;
// 	}
// `;

// const Image = styled(Img)`
// 	width: 100%;
// 	height: 600px;

// 	border-radius: 0.4em;
// 	box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);
// 	-webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
// 	animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

// 	@-webkit-keyframes fade-in {
// 		0% {
// 			opacity: 0;
// 		}
// 		100% {
// 			opacity: 1;
// 		}
// 	}
// 	@keyframes fade-in {
// 		0% {
// 			opacity: 0;
// 		}
// 		100% {
// 			opacity: 1;
// 		}
// 	}
// `;

// const Index = () => {
// 	const sanity = useStaticQuery(query);
// 	const edges = sanity.allSanityHomePage.edges;

// 	return (
// 		<Layout>
// 			<Sidebar letters={shop} />
// 			<Main>
// 				{edges.map(({ node }) => (
// 					<>
// 						<Header>
// 							<h1>{node.title}</h1>
// 							<p>{node.description}</p>
// 						</Header>
// 						{/* <Container>
// 							<Card>
// 								<Image fluid={node.mainImage.asset.fluid} />
// 							</Card>
// 						</Container> */}
// 					</>
// 				))}
// 			</Main>
// 		</Layout>
// 	);
// };

// export default Index;

export const query = graphql`
	query HomePageQuery {
		allSanityHomePage {
			edges {
				node {
					description
					title
					slug {
						current
					}
					mainImage {
						asset {
							fluid {
								src
							}
						}
					}
				}
			}
		}
	}
`;
