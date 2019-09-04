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
// import { Checkout } from 'gatsby-theme-stripe-checkout-button';

// const shop = ['S', 'H', 'O', 'P'];

// const Header = styled.header`
// 	height: 40vh;
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
// 	padding: 0 2rem;
// 	// height: 100%;
// `;

// const Card = styled.div`
// 	display: grid;
// 	grid-template-columns: repeat(2, 1fr);
// 	grid-gap: 2rem;
// 	background: #f1f1f1;
// 	margin-bottom: 2rem;
// 	padding: 2rem;

// 	& > div {
// 		padding: 1rem;
// 	}

// 	& h4 {
// 		margin-bottom: 2rem;
// 	}

// 	&:nth-child(even) img {
// 		order: 2;
// 	}

// 	& img {
// 		height: 400px;
// 	}

// 	@media (max-width: 700px) {
// 		display: block;
// 	}
// `;

// // const ImageContainer = styled.div`
// // 	height: 300px;
// // `;

// const Image = styled(Img)`
// 	width: 100%;
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

// const Description = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-around;
// 	align-items: center;
// 	-webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
// 	animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

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

// const Button = styled.button`
// 	display: inline-block;
// 	text-align: center;
// 	text-decoration: none;
// 	margin: 2px 0;
// 	border: solid 1px transparent;
// 	border-radius: 4px;
// 	padding: 0.5em 1em;
// 	cursor: pointer;
// 	box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);

// 	&:hover {
// 		opacity: 0.9;
// 	}
// `;

// const PreviewButton = styled.button`
// 	background: transparent;
// 	border: none;
// 	padding: 0;
// 	margin: 0;
// 	text-decoration: none;
// 	width: 100%;

// 	&:focus {
// 		outline: 0;
// 	}

// 	-webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
// 	animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

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

// const PriceContainer = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: space-between;

// 	-webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
// 	animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

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

// const Shop = () => {
// 	const [sanitySKU, setSanitySKU] = React.useState([]);
// 	const products = useStaticQuery(query);
// 	const stripe = products.allStripeSku.edges;
// 	const sanity = products.allSanityProduct.edges;

// 	React.useEffect(() => {
// 		// finds the matching products from both sanity and stripe and matches them on the products sku
// 		setSanitySKU(
// 			_.flattenDeep(sanity).filter((node) => _.flattenDeep(stripe).find((sku) => node.defaultProductVariant === sku.id))
// 		);
// 	}, [sanity, stripe]);

// 	return (
// 		<Layout>
// 			<Sidebar letters={shop} />
// 			<Main>
// 				<Header>
// 					<h1>Art For Purchase</h1>
// 					<p>
// 						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
// 						dolore magna aliqua.
// 					</p>
// 				</Header>
// 				<Container>
// 					{sanitySKU.map(({ node }) => (
// 						<Card>
// 							<Image
// 								className="img"
// 								fluid={node.defaultProductVariant.images.asset.fluid}
// 								alt={node.defaultProductVariant.title}
// 							/>
// 							<Description>
// 								<div>
// 									<h4
// 										sx={{
// 											color: 'text',
// 											fontFamily: 'heading',
// 											fontWeight: 'heading',
// 											fontSize: '1rem',
// 											lineHeight: 'body',
// 											letterSpacing: 'body',
// 											borderBottom: 'solid 0.1em',
// 											borderColor: 'text',
// 											padding: '1em',
// 										}}
// 									>
// 										{node.defaultProductVariant.title}
// 									</h4>
// 									<h3
// 										sx={{
// 											color: 'text',
// 											fontFamily: 'body',
// 											fontWeight: 'body',
// 											fontSize: '.9rem',
// 											lineHeight: 'body',
// 											letterSpacing: 'body',
// 										}}
// 									>
// 										{node.blurb}
// 									</h3>
// 									<h3
// 										sx={{
// 											color: 'text',
// 											fontFamily: 'body',
// 											fontWeight: 'body',
// 											fontSize: '.9rem',
// 											lineHeight: 'body',
// 											letterSpacing: 'body',
// 										}}
// 									>
// 										{node.body}
// 									</h3>
// 								</div>
// 							</Description>
// 							<PriceContainer>
// 								<h3
// 									sx={{
// 										color: 'text',
// 										fontFamily: 'body',
// 										fontWeight: 'bold',
// 										fontSize: '.9rem',
// 										lineHeight: 'body',
// 										letterSpacing: 'body',
// 									}}
// 								>
// 									Type: {node.categories[0].title}
// 								</h3>
// 								<h3
// 									sx={{
// 										color: 'text',
// 										fontFamily: 'body',
// 										fontWeight: 'bold',
// 										fontSize: '.9rem',
// 										lineHeight: 'body',
// 										letterSpacing: 'body',
// 									}}
// 								>
// 									Price: £{node.defaultProductVariant.price}
// 								</h3>
// 							</PriceContainer>
// 							<PreviewButton>
// 								<Checkout
// 									button={
// 										<Button
// 											type="submit"
// 											sx={{
// 												color: 'background',
// 												backgroundColor: 'primary',
// 												fontFamily: 'body',
// 												fontWeight: 'bold',
// 												fontSize: '1rem',
// 												lineHeight: 'body',
// 												letterSpacing: 'text',
// 												':active': {
// 													backgroundColor: 'light',
// 												},
// 												':hover': {
// 													backgroundColor: 'medium',
// 												},
// 											}}
// 										>
// 											Purchase
// 										</Button>
// 									}
// 									sku={node.defaultProductVariant.sku}
// 									quantity={1}
// 								/>
// 							</PreviewButton>
// 						</Card>
// 					))}
// 				</Container>
// 			</Main>
// 		</Layout>
// 	);
// };

// export default Shop;

// export const query = graphql`
// 	query HomePageQuery {
// 		allSanityHomePage {
// 			edges {
// 				node {
// 					description
// 					title
// 					slug {
// 						current
// 					}
// 					mainImage {
// 						asset {
// 							fluid {
// 								src
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// `;
