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

const shop = ['S', 'H', 'O', 'P'];

const Container = styled.main`
	max-width: 1100px;
	margin: auto;
	overflow: auto;
	padding: 0 2rem;
	height: 100%;
`;

const Section = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2rem;
	margin-bottom: 2rem;
	padding: 2rem;

	& > div {
		padding: 1rem;
	}

	& h4 {
		margin-bottom: 2rem;
	}

	&:nth-child(even) {
		order: 2;
	}

	@media (max-width: 700px) {
		& {
			display: block;
		}
	}
`;

const ImageContainer = styled.div`
	height: 300px;
`;

const Image = styled(Img)`
	width: 100%;
	border-radius: 0.4em;
	box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);
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
	box-shadow: 8px 12px 22px 5px hsla(0, 0%, 0%, 0.21);
`;

const PreviewButton = styled.button`
	background: transparent;
	border: none;
	padding: 0;
	margin: 0;
	text-decoration: none;

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

const Shop2 = () => {
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
				<Container>
					{sanitySKU.map(({ node }) => (
						<Section>
							<ImageContainer>
								<Image
									className="img"
									fluid={node.defaultProductVariant.images.asset.fluid}
									alt={node.defaultProductVariant.title}
								/>
							</ImageContainer>
							<Description>
								<div>
									<h4
										sx={{
											color: 'text',
											fontFamily: 'heading',
											fontWeight: 'heading',
											fontSize: '1rem',
											lineHeight: 'body',
											letterSpacing: 'body',
											borderBottom: 'solid 0.1em',
											borderColor: 'text',
											padding: '1em',
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
							</Description>
						</Section>
					))}
				</Container>
			</Main>
		</Layout>
	);
};

export default Shop2;

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
