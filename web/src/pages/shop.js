/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Layout from './../components/layout';
import Main from './../components/main';
import Sidebar from '../components/sidebar/Sidebar';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';
import { Checkout } from 'gatsby-theme-stripe-checkout-button';

const shop = ['S', 'T', 'O', 'R', 'E'];

const Header = styled.header`
	height: 40vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 2rem;

	-webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	& > h1 {
		font-family: Nanum Pen Script;
		font-weight: 300;
		letter-spacing: 3px;
		font-size: 4rem;
		margin-bottom: 2rem;
		line-height: 1.2;

		@media (max-width: 700px) {
			font-size: 2rem;
		}
	}

	& > p {
		fonst-size: 2rem;
		font-family: Open Sans;
	}
`;

const Container = styled.main`
	max-width: 1100px;
	margin: auto;
	overflow: auto;
	padding: 0 2rem;
`;

const Card = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	background: #f1f1f1;
	margin-bottom: 2rem;
	padding: 2rem;

	& > div {
		padding: 1rem;
	}

	& h4 {
		margin-bottom: 2rem;
	}

	&:hover {
		-webkit-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
		-moz-box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
		box-shadow: 4px 7px 16px -5px rgba(0, 0, 0, 0.75);
	}

	@media (max-width: 700px) {
		display: block;
	}
`;

const Image = styled(Img)`
	width: 100%;
	border-radius: 0.4em;
	border: 1px solid black;
	-webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	-webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	& > div > h4 {
		@media (max-width: 700px) {
			font-size: 1.5rem;
		}
	}

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const Button = styled.button`
	display: inline-block;
	text-align: center;
	text-decoration: none;
	margin: 2px 0;
	border: solid 1px transparent;
	border-radius: 4px;
	padding: 0.5em 1em;
	cursor: pointer;
	box-shadow: 6px 5px 13px 3px hsla(0, 0%, 0%, 0.13)

	&:hover {
		opacity: 0.9;
	}
`;

const PreviewButton = styled.button`
	background: transparent;
	border: none;
	padding: 0;
	margin: 0;
	text-decoration: none;
	width: 100%;

	&:focus {
		outline: 0;
	}

	-webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const PriceContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	-webkit-animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;
	animation: fade-in 1.4s cubic-bezier(0.39, 0.575, 0.565, 1) 500ms both;

	& > h3 {
		@media (max-width: 700px) {
			font-size: 0.7em;
		}
	}

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const Shop = () => {
	const [sanitySKU, setSanitySKU] = React.useState([]);
	const products = useStaticQuery(query);
	const stripe = products.allStripeSku.edges;
	const sanity = products.allSanityProduct.edges;

	React.useEffect(() => {
		// finds the matching products from both sanity and stripe and matches them on the products sku
		setSanitySKU(
			_.flattenDeep(sanity).filter((node) => _.flattenDeep(stripe).find((sku) => node.defaultProductVariant === sku.id))
		);
	}, [sanity, stripe]);

	return (
		<Layout>
			<Sidebar letters={shop} />
			<Main>
				<Header>
					<h1>Art For Purchase</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua.
					</p>
				</Header>
				<Container>
					{sanitySKU.map(({ node }) => (
						<Card>
							<Image
								className="img"
								fluid={node.defaultProductVariant.images.asset.fluid}
								alt={node.defaultProductVariant.title}
							/>
							<Description>
								<div>
									<h4
										sx={{
											color: 'text',
											fontFamily: 'heading',
											fontWeight: 'heading',
											fontSize: [5],
											lineHeight: 'body',
											letterSpacing: 'body',
											borderBottom: 'solid 0.1em',
											borderColor: 'text',
											padding: '0.5em',
										}}
									>
										{node.defaultProductVariant.title}
									</h4>
									<h3
										sx={{
											color: 'text',
											fontFamily: 'body',
											fontWeight: 'body',
											fontSize: '.9rem',
											lineHeight: 'body',
											letterSpacing: 'body',
										}}
									>
										{node.blurb}
									</h3>
									<br />
									<h3
										sx={{
											color: 'text',
											fontFamily: 'body',
											fontWeight: 'body',
											fontSize: '.9rem',
											lineHeight: 'body',
											letterSpacing: 'body',
										}}
									>
										{node.body}
									</h3>
								</div>
							</Description>
							<PriceContainer>
								<h3
									sx={{
										color: 'text',
										fontFamily: 'body',
										fontWeight: 'bold',
										fontSize: '.9rem',
										lineHeight: 'body',
										letterSpacing: 'body',
									}}
								>
									Type: {node.categories[0].title}
								</h3>
								<h3
									sx={{
										color: 'text',
										fontFamily: 'body',
										fontWeight: 'bold',
										fontSize: '.9rem',
										lineHeight: 'body',
										letterSpacing: 'body',
									}}
								>
									Price: £{node.defaultProductVariant.price}
								</h3>
							</PriceContainer>
							<PreviewButton>
								<Checkout
									button={
										<Button
											type="submit"
											sx={{
												color: 'background',
												backgroundColor: 'primary',
												fontFamily: 'body',
												fontWeight: 'bold',
												fontSize: '1rem',
												lineHeight: 'body',
												letterSpacing: 'text',
												':active': {
													backgroundColor: 'light',
												},
												':hover': {
													backgroundColor: 'medium',
												},
											}}
										>
											Purchase
										</Button>
									}
									sku={node.defaultProductVariant.sku}
									quantity={1}
								/>
							</PreviewButton>
						</Card>
					))}
				</Container>
			</Main>
		</Layout>
	);
};

export default Shop;

export const query = graphql`
	query Products {
		allStripeSku {
			edges {
				node {
					price
					id
				}
			}
		}
		allSanityProduct {
			edges {
				node {
					defaultProductVariant {
						price
						sku
						title
						images {
							asset {
								fluid {
									...GatsbySanityImageFluid
								}
							}
						}
					}
					vendor {
						title
					}
					categories {
						title
					}
					blurb
					body
				}
			}
		}
	}
`;

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
// import { Dialog } from '@reach/dialog';
// import '@reach/dialog/styles.css';
// import { Checkout } from 'gatsby-theme-stripe-checkout-button';

// const shop = ['S', 'H', 'O', 'P'];

// const Container = styled.main`
// 	// display: grid;
// 	// grid-template-rows: 1fr 2fr;'
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	margin: 2.5em;
// 	// height: 100vh;
// `;

// const Row = styled.div`
// 	// display: flex;
// 	// flex-direction: row;
// 	// flex-wrap: wrap;
// 	// width: 100%;
// 	// margin: 0 2em 5em 2em;

// 	display: -ms-flexbox;
// 	-ms-flex-wrap: wrap;
// 	-ms-flex-direction: row;
// 	-webkit-flex-flow: row wrap;
// 	flex-flow: row wrap;
// 	display: -webkit-box;
// 	display: flex;
// 	margin: 1em auto;
// `;

// const Column = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	flex-basis: 100%;

// 	display: flex;
// 	justify-content: center;
// 	// align-items: center;

// 	@media (min-width: 800px) {
// 		flex: 1;
// 	}
// `;

// const PictureBox = styled.div`
// 	height: 300px;
// 	// margin: 1em;
// 	display: flex;
// 	justify-content: center;
// `;

// const ImageContainer = styled.div`
// 	max-width: 2000px;
// 	padding: 0.5vw;
// 	font-size: 0;
// 	// border: 2px solid whitesmoke;
// 	display: -ms-flexbox;
// 	-ms-flex-wrap: wrap;
// 	-ms-flex-direction: row;
// 	-webkit-flex-flow: row wrap;
// 	flex-flow: row wrap;
// 	display: -webkit-box;
// 	display: flex;
// 	margin: 0 auto;

// 	// display: flex;
// 	// justify-content: center;
// 	// align-items: center;
// 	// padding: 1em;

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

// const Image = styled(Img)`
// 	-webkit-box-flex: auto;
// 	-ms-flex: auto;
// 	flex: auto;
// 	width: 400px;
// 	margin: 0.5vw;

// 	// display: flex;

// 	// width: 50em;
// 	// height: 25em;
// 	cursor: pointer;

// 	margin: 0 4em 0 0;
// 	border-radius: 0.4em;
// 	box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);

// 	@media (max-width: 920px) {
// 		width: 10em;
// 		height: 10em;
// 		border-radius: 0.4em;
// 		box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);
// 	}

// 	@media (max-width: 1024px) {
// 		width: 17em;
// 		height: 15em;
// 		border-radius: 0.4em;
// 		box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);
// 	}
// `;

// const ProductBox = styled.div`
// 	width: 70%;
// 	display: flex;
// 	justify-content: flex-start;

// 	@media (max-width: 920px) {
// 		display: flex;
// 		justify-content: center;
// 		align-content: center;
// 		margin-left: 1em;
// 	}

// 	@media (max-width: 1024px) {
// 		display: flex;
// 		justify-content: center;
// 		align-content: center;
// 		margin-left: 1em;
// 	}
// `;

// const DescriptionContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	align-content: center;

// 	-webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 700ms both;
// 	animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) 700ms both;

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
// 	justify-content: space-around;
// `;

// const CheckoutContainer = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	margin-top: 1em;
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
// `;

// const PreviewButton = styled.button`
// 	background: transparent;
// 	border: none;
// 	padding: 0;
// 	margin: 0;
// 	text-decoration: none;

// 	&:focus {
// 		outline: 0;
// 	}
// `;

// const Shop = () => {
// 	const [sanitySKU, setSanitySKU] = React.useState([]);
// 	const [lightbox, setShowLightbox] = React.useState({ showLightbox: false, selectedImage: null });
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
// 				<Container>
// 					{sanitySKU.map(({ node }) => (
// 						<Row>
// 							<Column>
// 								<PictureBox>
// 									<ImageContainer>
// 										<PreviewButton
// 											key={node.defaultProductVariant.images.asset.fluid}
// 											type="button"
// 											onClick={() =>
// 												setShowLightbox({
// 													showLightbox: true,
// 													selectedImage: node.defaultProductVariant.images.asset.fluid,
// 												})
// 											}
// 										>
// 											<div style={{ width: '100%', height: 'auto' }}>
// 												<Image
// 													fluid={node.defaultProductVariant.images.asset.fluid}
// 													alt={node.defaultProductVariant.title}
// 												/>
// 											</div>
// 										</PreviewButton>
// 									</ImageContainer>
// 								</PictureBox>
// 							</Column>
// 							<Column>
// 								<ProductBox>
// 									<DescriptionContainer>
// 										<h4
// 											sx={{
// 												color: 'text',
// 												fontFamily: 'heading',
// 												fontWeight: 'heading',
// 												fontSize: '1rem',
// 												lineHeight: 'body',
// 												letterSpacing: 'body',
// 												borderBottom: 'solid 0.1em',
// 												borderColor: 'text',
// 												padding: '1em',
// 											}}
// 										>
// 											{node.defaultProductVariant.title}
// 										</h4>
// 										<h3
// 											sx={{
// 												color: 'text',
// 												fontFamily: 'body',
// 												fontWeight: 'body',
// 												fontSize: '.9rem',
// 												lineHeight: 'body',
// 												letterSpacing: 'body',
// 											}}
// 										>
// 											{node.blurb}
// 										</h3>
// 										<h3
// 											sx={{
// 												color: 'text',
// 												fontFamily: 'body',
// 												fontWeight: 'body',
// 												fontSize: '.9rem',
// 												lineHeight: 'body',
// 												letterSpacing: 'body',
// 											}}
// 										>
// 											{node.body}
// 										</h3>
// 										<PriceContainer>
// 											<h3
// 												sx={{
// 													color: 'text',
// 													fontFamily: 'body',
// 													fontWeight: 'bold',
// 													fontSize: '.9rem',
// 													lineHeight: 'body',
// 													letterSpacing: 'body',
// 												}}
// 											>
// 												Type: {node.categories[0].title}
// 											</h3>
// 											<h3
// 												sx={{
// 													color: 'text',
// 													fontFamily: 'body',
// 													fontWeight: 'bold',
// 													fontSize: '.9rem',
// 													lineHeight: 'body',
// 													letterSpacing: 'body',
// 												}}
// 											>
// 												Price: £{node.defaultProductVariant.price}
// 											</h3>
// 										</PriceContainer>
// 										<CheckoutContainer>
// 											<Checkout
// 												button={
// 													<Button
// 														type="submit"
// 														sx={{
// 															color: 'background',
// 															backgroundColor: 'primary',
// 															fontFamily: 'body',
// 															fontWeight: 'bold',
// 															fontSize: '1rem',
// 															lineHeight: 'body',
// 															letterSpacing: 'text',
// 															':active': {
// 																backgroundColor: 'light',
// 															},
// 															':hover': {
// 																backgroundColor: 'medium',
// 															},
// 														}}
// 													>
// 														Purchase
// 													</Button>
// 												}
// 												sku={node.defaultProductVariant.sku}
// 												quantity={1}
// 											/>
// 										</CheckoutContainer>
// 									</DescriptionContainer>
// 								</ProductBox>
// 							</Column>
// 						</Row>
// 					))}
// 				</Container>
// 			</Main>
// 			{/* {lightbox.showLightbox && (
// 				<Dialog style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
// 					<Image fluid={lightbox.selectedImage} />
// 					<Button
// 						sx={{
// 							color: 'background',
// 							backgroundColor: 'primary',
// 							fontFamily: 'body',
// 							fontWeight: 'bold',
// 							fontSize: '.7rem',
// 							lineHeight: 'body',
// 							letterSpacing: 'text',
// 							margin: '2em 0 0 0',
// 							':active': {
// 								backgroundColor: 'light',
// 							},
// 						}}
// 						onClick={() => setShowLightbox({ showLightbox: false })}
// 					>
// 						Close
// 					</Button>
// 				</Dialog>
// 			)} */}
// 		</Layout>
// 	);
// };

// export default Shop;

// export const query = graphql`
// 	query Products {
// 		allStripeSku {
// 			edges {
// 				node {
// 					price
// 					id
// 				}
// 			}
// 		}
// 		allSanityProduct {
// 			edges {
// 				node {
// 					defaultProductVariant {
// 						price
// 						sku
// 						title
// 						images {
// 							asset {
// 								fluid {
// 									...GatsbySanityImageFluid
// 								}
// 							}
// 						}
// 					}
// 					vendor {
// 						title
// 					}
// 					categories {
// 						title
// 					}
// 					blurb
// 					body
// 				}
// 			}
// 		}
// 	}
// `;
